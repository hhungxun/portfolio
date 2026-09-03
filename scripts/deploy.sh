#!/usr/bin/env bash
# Build the site and push it to the VPS over SSH.
#
# Reads connection details from .env.deploy (git-ignored). See .env.deploy.example.
# Deploys are atomic: each build goes into releases/<timestamp>, then the
# `current` symlink is swapped. The web server should serve <DEPLOY_PATH>/current.
#
# Usage:  pnpm deploy            (build + upload)
#         pnpm deploy --no-build (upload the existing dist/)
set -euo pipefail

cd "$(dirname "$0")/.."

if [[ ! -f .env.deploy ]]; then
  echo "Missing .env.deploy — copy .env.deploy.example and fill it in." >&2
  exit 1
fi
# shellcheck disable=SC1091
set -a; source .env.deploy; set +a

: "${DEPLOY_HOST:?set DEPLOY_HOST in .env.deploy}"
: "${DEPLOY_USER:?set DEPLOY_USER in .env.deploy}"
: "${DEPLOY_PATH:?set DEPLOY_PATH in .env.deploy}"
DEPLOY_PORT="${DEPLOY_PORT:-22}"
KEEP="${DEPLOY_KEEP_RELEASES:-5}"

SSH_OPTS=(-p "$DEPLOY_PORT" -o StrictHostKeyChecking=accept-new)
if [[ -n "${DEPLOY_KEY:-}" ]]; then SSH_OPTS+=(-i "$DEPLOY_KEY"); fi
TARGET="$DEPLOY_USER@$DEPLOY_HOST"

if [[ "${1:-}" != "--no-build" ]]; then
  echo "▸ building"
  SITE_URL="${SITE_URL:-}" pnpm build
fi

[[ -d dist ]] || { echo "dist/ not found; run a build first." >&2; exit 1; }

STAMP="$(date -u +%Y%m%d-%H%M%S)"
RELEASE="$DEPLOY_PATH/releases/$STAMP"

echo "▸ uploading to $TARGET:$RELEASE"
ssh "${SSH_OPTS[@]}" "$TARGET" "mkdir -p '$RELEASE'"
tar -C dist -czf - . | ssh "${SSH_OPTS[@]}" "$TARGET" "tar -xzf - -C '$RELEASE'"

echo "▸ switching current → $STAMP"
ssh "${SSH_OPTS[@]}" "$TARGET" "
  set -e
  ln -sfn '$RELEASE' '$DEPLOY_PATH/current.tmp' && mv -Tf '$DEPLOY_PATH/current.tmp' '$DEPLOY_PATH/current'
  cd '$DEPLOY_PATH/releases' && ls -1dt */ | tail -n +$((KEEP + 1)) | xargs -r rm -rf
"

echo "✓ deployed $STAMP"
