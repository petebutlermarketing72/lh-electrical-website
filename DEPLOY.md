# Deploy guide — GitHub + Netlify

There are two paths here: a fast one to see the site live in the next 2 minutes with zero Terminal or GitHub, and the permanent one that makes future updates automatic. Do the fast one first, then set up the permanent one whenever you've got a spare 10 minutes.

## Option A — Quick preview now (no GitHub, no Terminal)
Netlify has a "drag and drop" deploy mode that doesn't need Git at all — good for previewing this initial build.

1. Log in at https://app.netlify.com
2. Go to https://app.netlify.com/drop
3. In Finder, open this `site` folder and find the **`dist`** folder inside it (that's the finished, built website — already generated).
4. Drag the `dist` folder onto the Netlify Drop page in your browser.
5. Netlify publishes it instantly and gives you a URL like `random-name-123.netlify.app`.

Caveat: this snapshot won't update itself when files change — you'd have to re-drag the `dist` folder each time. That's fine for reviewing the initial build, but not how you'll want to work day-to-day. For that, set up Option B below (you can do this later — it doesn't undo or conflict with the preview above).

## Option B — Permanent setup via GitHub (auto-deploys on every future change)
Do this when you're ready for the real workflow. Every future update after that is just a `git push`.

## 1. Create a GitHub account (skip if you already have one)
1. Go to https://github.com/join
2. Sign up with petebutlermarketing@gmail.com (or your SummitUp Digital email if you prefer to keep client work separate)
3. Verify your email

## 2. Create a new repository
1. Click the **+** in the top right → **New repository**
2. Name it `lh-electrical-website`
3. Leave it **Private** (client work) or Public, your call
4. Don't initialise with a README — we already have files
5. Click **Create repository**
6. Copy the repo URL it gives you, e.g. `https://github.com/YOUR-USERNAME/lh-electrical-website.git`

## 3. Push this project to GitHub
From a terminal (on your Mac, not inside Cowork's sandbox — this matters, see note below), inside this `site/` folder:

```bash
git add -A
git commit -m "Ready for deploy"
git remote add origin https://github.com/YOUR-USERNAME/lh-electrical-website.git
git branch -M main
git push -u origin main
```

A local git repo with an initial commit already exists in this folder. Run the commands above from your own Terminal app (not through Claude/Cowork) — the folder is synced to your Mac via iCloud/Documents, and git can be flaky when run through the sandbox bridge against a synced folder. Running it natively on your machine avoids that entirely.

## 4. Create a Netlify account
1. Go to https://app.netlify.com/signup
2. Sign up with GitHub (easiest — one click, no separate password) or your email
3. Verify your email if you signed up with email

## 5. Connect the site
1. In Netlify, click **Add new site → Import an existing project**
2. Choose **GitHub**, authorise Netlify to access your repos
3. Select `lh-electrical-website`
4. Build settings should auto-detect from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site**

Netlify will give you a preview URL like `random-name-123.netlify.app` — that's your live preview. Every time you `git push`, Netlify rebuilds and redeploys automatically, usually within a minute.

## 6. When you're ready to go live on lhelectrical.co.uk
Don't do this until the site is fully reviewed and signed off — the domain currently points at the WordPress site, which stays live until you switch it.

1. In Netlify: **Domain settings → Add a domain** → enter `lhelectrical.co.uk`
2. Netlify will give you DNS records to add (either point nameservers at Netlify, or add an A/CNAME record — Netlify's instructions will say which)
3. Update those records wherever the domain is currently managed (registrar or DNS host — check where lhelectrical.co.uk's DNS is set up)
4. DNS changes can take a few hours to propagate. Once it's switched, the WordPress hosting/site can be cancelled.

## Day-to-day: making a content change after this is set up
```bash
cd site
# edit a file, e.g. src/services/domestic.md
npm run build          # optional — just to preview locally
git add -A
git commit -m "Update domestic page pricing line"
git push
```
Netlify picks it up automatically. No FTP, no plugin updates, no Elementor.
