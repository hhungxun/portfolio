# Connecting `hhungxun.my`

This project builds a static site into `dist/` and includes an atomic SSH
deployment script for a VPS. The production canonical URL is
`https://hhungxun.my`.

## 1. Point the domain at the Hostinger VPS

In hPanel, open **Domains → Domain portfolio → hhungxun.my → DNS / Nameservers**.
Find the public IPv4 address on the VPS overview page. Remove only conflicting
web records for `@` and `www`; preserve MX and TXT records used by email.

Create these records:

| Type | Name | Target | TTL |
|---|---|---|---|
| A | `@` | the VPS IPv4 address | default |
| CNAME | `www` | `hhungxun.my` | default |

If the VPS has a configured static IPv6 address, an `AAAA` record for `@` may
also be added. Do not leave a stale `AAAA` record pointing elsewhere.

Check propagation with:

```bash
dig +short A hhungxun.my
dig +short CNAME www.hhungxun.my
```

## 2. Configure NGINX on the VPS

Create `/etc/nginx/sites-available/hhungxun.my`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name hhungxun.my www.hhungxun.my;

    root /var/www/hhungxun.my/current;
    index index.html;

    location / {
        try_files $uri $uri.html $uri/ =404;
    }
}
```

Enable and test it:

```bash
sudo mkdir -p /var/www/hhungxun.my/releases
sudo chown -R "$USER":"$USER" /var/www/hhungxun.my
sudo ln -s /etc/nginx/sites-available/hhungxun.my /etc/nginx/sites-enabled/hhungxun.my
sudo nginx -t
sudo systemctl reload nginx
```

The `try_files` rule matters because Astro generates routes such as
`physics.html` while public URLs use `/physics`.

## 3. Configure and deploy from the development machine

```bash
cp .env.deploy.example .env.deploy
```

Edit `.env.deploy` with the real VPS IP, SSH user, deployment path, and optional
SSH key. This file is ignored by Git. Then run:

```bash
pnpm deploy
```

The script uploads a timestamped release and atomically switches the `current`
symlink, so visitors do not see a half-uploaded build.

## 4. Enable HTTPS after DNS resolves

On a Debian or Ubuntu VPS with NGINX and Certbot installed:

```bash
sudo certbot --nginx -d hhungxun.my -d www.hhungxun.my
sudo certbot renew --dry-run
```

Choose the HTTPS redirect when prompted. Do this only after both names resolve
to the VPS and ports 80 and 443 are allowed by the VPS firewall.

## 5. Final checks

```bash
curl -I https://hhungxun.my
curl -I https://www.hhungxun.my
curl -I https://hhungxun.my/physics
```

Confirm that `www` redirects to the preferred root domain, the certificate
covers both names, and `/sitemap-index.xml` uses `https://hhungxun.my` URLs.

If this is a Hostinger Web Hosting plan rather than a VPS, do not use the NGINX
and SSH steps above. Build locally with `pnpm build`, add `hhungxun.my` to the
hosting plan in hPanel, and upload the contents of `dist/` to that site's
`public_html` directory instead.
