# Deploy Guide

This site auto-deploys to SiteGround via FTP on every push to `main`.
GitHub Actions builds the Vite production bundle and uploads `dist/` to your
hosting account using encrypted credentials.

---

## One-time setup

### 1. Create the GitHub repo

In the project folder, run:

```bash
git init
git add .
git commit -m "Initial commit: State Surplus Recovery site"
git branch -M main
```

Then create an empty repo on GitHub (don't initialize it with a README) and
connect it:

```bash
git remote add origin https://github.com/<your-username>/state-surplus-recovery.git
git push -u origin main
```

### 2. Get your SiteGround FTP credentials

1. Log into **SiteGround Site Tools**.
2. Go to **Site → FTP Accounts**.
3. Create a new FTP account (or use an existing one). Note down:
   - **Server / Hostname** — usually something like `ftp.statesurplusrecovery.com` or an IP.
   - **Username** — typically `username@yourdomain.com`.
   - **Password** — the one you set when creating the account.
   - **Port** — usually `21` for FTP or `21` for FTPS (explicit). Use FTPS.

### 3. Add secrets and variables to GitHub

In your GitHub repo, go to **Settings → Secrets and variables → Actions**.

Under **Secrets**, add three:

| Name           | Value                                       |
| -------------- | ------------------------------------------- |
| `FTP_SERVER`   | Your FTP hostname (no `ftp://` prefix)      |
| `FTP_USERNAME` | Full FTP username                           |
| `FTP_PASSWORD` | FTP password                                |

Under **Variables**, add (optional, defaults are sensible):

| Name              | Default        | Notes                                                       |
| ----------------- | -------------- | ----------------------------------------------------------- |
| `FTP_SERVER_DIR`  | `/public_html/` | Where files land. Trailing slash required.                  |
| `FTP_PROTOCOL`    | `ftps`         | Keep `ftps` for SiteGround. Use `ftp` only if FTPS is off.  |
| `FTP_PORT`        | `21`           | Standard FTP port. SiteGround uses 21 for FTPS as well.     |

### 4. Trigger the first deploy

Push any change to `main`:

```bash
git commit --allow-empty -m "Trigger deploy"
git push
```

Watch the deploy run in **Actions** tab on GitHub. First run uploads
everything (a minute or two). Subsequent runs only upload changed files
(typically a few seconds).

### 5. Verify

After the workflow finishes successfully, visit your domain. Check:

- [ ] Home page loads
- [ ] Direct URL like `/about` or `/services` doesn't 404 (handled by `.htaccess`)
- [ ] HTTPS works and HTTP redirects to HTTPS
- [ ] Logo, fonts, and animations load
- [ ] Mobile hamburger works
- [ ] Contact form submission shows success state

---

## Day-to-day

After the one-time setup, deploying is just:

```bash
git add .
git commit -m "Whatever you changed"
git push
```

Push to `main` → GitHub builds → uploads `dist/` to SiteGround → live.

You can also trigger a deploy manually from **Actions → Build and Deploy to SiteGround → Run workflow** without pushing any changes.

---

## What gets deployed

The workflow uploads everything inside `dist/` after a fresh `npm run build`:

- `index.html` (with embedded SEO meta + JSON-LD)
- `logo.png`
- `assets/index-*.css` (hashed)
- `assets/index-*.js` (hashed)
- `.htaccess` (from `public/.htaccess`, copied automatically by Vite)

The `.htaccess` handles:

- **HTTPS redirect** (forces secure connection)
- **SPA routing** (so `/about`, `/services`, etc. don't 404 on direct visits)
- **Cache headers** (1-year cache on hashed assets, no cache on `index.html`)
- **Gzip compression**
- **Security headers** (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`)
- **Default error fallback**

---

## Rotating credentials

If you ever need to rotate the FTP password (recommended every 90 days):

1. Update password in **SiteGround Site Tools → FTP Accounts**.
2. Update `FTP_PASSWORD` secret in **GitHub → Settings → Secrets**.
3. Next push works immediately. No code changes needed.

---

## Troubleshooting

**"Can't connect to FTP server"**
- Double-check `FTP_SERVER`. Usually `ftp.yourdomain.com`. No `ftp://` prefix.
- If FTPS isn't enabled in SiteGround, set `FTP_PROTOCOL` variable to `ftp`.

**"Login failed"**
- The username on SiteGround is usually full `user@domain.com`, not just `user`.
- Test the credentials manually in FileZilla first to confirm they work.

**"Files uploaded but site shows old version"**
- Browser cache. Hard refresh (Ctrl+Shift+R / Cmd+Shift+R).
- The `.htaccess` sets `index.html` to no-cache, so updates should appear immediately on next page load.

**"`/about` works on the homepage link but 404s on direct URL"**
- `.htaccess` didn't upload or isn't being respected. Check that the file landed in your web root (`/public_html/.htaccess`). Some FTP clients hide dotfiles by default — make sure they're showing.
- Confirm `mod_rewrite` is enabled on the SiteGround plan (it is on every modern SiteGround plan by default).

**Deploy succeeds but build fails**
- Look at the failed step in the Actions log. Most common issue: a TypeScript error introduced in a recent commit. Run `npm run build` locally first to catch these before pushing.

---

## Local dev

Nothing changes for local development:

```bash
npm install
npm run dev    # Starts Vite dev server on http://127.0.0.1:5173
npm run build  # Production build to dist/
```
