# Hosting `hhungxun.my` on GitHub Pages

The source remains in `hhungxun/portfolio`. GitHub Actions builds the Astro
site on every push to `main`, and GitHub Pages serves the result at
`https://hhungxun.my`.

## Repository configuration

The required files are already committed:

- `.github/workflows/deploy-pages.yml` builds and deploys the site.
- `public/CNAME` contains `hhungxun.my`.
- `astro.config.mjs` sets `site` to `https://hhungxun.my` and does not set a
  repository-name `base` path.

In **GitHub -> hhungxun/portfolio -> Settings -> Pages**, the publishing source
must be **GitHub Actions** and the custom domain must be `hhungxun.my`.

## Hostinger DNS records

In hPanel, open **Domains -> Domain portfolio -> hhungxun.my -> DNS / Nameservers**.
Remove only conflicting `A`, `AAAA`, `ALIAS`, or `CNAME` web records for `@`
and `www`. Preserve MX and TXT records used by email. Do not create a wildcard
record.

Create the four GitHub Pages IPv4 records:

| Type | Name | Target | TTL |
|---|---|---|---|
| A | `@` | `185.199.108.153` | default |
| A | `@` | `185.199.109.153` | default |
| A | `@` | `185.199.110.153` | default |
| A | `@` | `185.199.111.153` | default |

Then create the `www` alias:

| Type | Name | Target | TTL |
|---|---|---|---|
| CNAME | `www` | `hhungxun.github.io` | default |

GitHub also supports its four published IPv6 `AAAA` records, but they are
optional. Do not leave an unrelated or stale `AAAA` record on the apex.

## Verify propagation

```bash
dig +short A hhungxun.my
dig +short CNAME www.hhungxun.my
```

The first command should return all four `185.199.*.153` addresses. The second
should return `hhungxun.github.io.`. DNS propagation may take up to 24 hours.

After GitHub reports that the DNS check is successful, enable **Enforce HTTPS**
under **Settings -> Pages**. Certificate provisioning can take additional time.

Final checks:

```bash
curl -I https://hhungxun.my
curl -I https://www.hhungxun.my
curl -I https://hhungxun.my/physics
```

`www` should redirect to the apex domain, and `/sitemap-index.xml` should
contain `https://hhungxun.my` URLs.

## Normal publishing workflow

Future pushes to `main` deploy automatically:

```bash
git add .
git commit -m "Update site"
git push origin main
```

The older `scripts/deploy.sh` remains available only as a VPS fallback; it is
not used by GitHub Pages.
