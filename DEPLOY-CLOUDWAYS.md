# Deploying the SF Market site to Cloudways

The site is 100% static (HTML + CSS + fonts + SVG — no PHP, no database),
so any Cloudways application type will serve it. The **PHP** app type is the
simplest choice.

The whole deployable site is this folder (or `sfmarket-cloudways.zip`, same
content):

```
index.html
design-system.html
privacy-policy.html
assets/css/styles.css
assets/fonts/  (fonts.css + 5 woff2 files)
assets/img/    (sf-mark.svg + favicon-32.png)
```

## Option A — SFTP upload (simplest)

1. Log in at https://platform.cloudways.com
2. If you don't have one yet: **Servers → Add Server** (smallest DO/Vultr
   instance is plenty for a static site).
3. **Applications → Add Application → PHP** (name it `sfmarket`).
4. Open the application → **Access Details** → note the SFTP host, username
   and password (or add your public SSH key under Server → Master Credentials
   → SSH Public Key — key-based access lets you skip passwords entirely).
5. Connect with FileZilla/Cyberduck (or `sftp`) and upload the contents of
   this folder into `applications/<app>/public_html/`, replacing the default
   `index.php`.
6. Done — the app URL Cloudways gives you serves the site immediately.

## Option B — Git deployment (pulls from the GitHub repo)

The site is already pushed to: **https://github.com/simobens/sfmarket-site**

1. In the Cloudways application: **Deployment via Git**.
2. Generate the SSH key Cloudways shows and add it to the GitHub repo
   (repo → Settings → Deploy keys), or just use the repo's HTTPS URL since
   it is public: `https://github.com/simobens/sfmarket-site.git`
3. Branch: `main` · Deploy path: `public_html`
4. Click **Start Deployment**. Re-click it any time the repo is updated.

## Custom domain (sfmarket.hk)

Application → **Domain Management** → set `sfmarket.hk` as primary, then
point the domain's DNS A record at the server IP shown in the platform, and
issue the free Let's Encrypt certificate under **SSL Certificate**.

## Current live copies (until Cloudways is set up)

- Website: https://simobens.github.io/sfmarket-site/
- Design system: https://simobens.github.io/sfmarket-site/design-system.html
