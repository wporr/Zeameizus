# Zeamezius

Static blog powered by Eleventy and Decap CMS (admin at `/admin`).

## Features
- Minimal list layout like the example site
- Markdown posts in `content/posts`
- Decap CMS admin for non-technical editing

## Prerequisites
- Node.js LTS (includes npm)

## Local development
```bash
npm install
npm run dev
# open http://localhost:8080
```

## Build
```bash
npm run build
```

## Deploy to Netlify
1. Push this folder to a new Git repository (GitHub/GitLab/Bitbucket).
2. In Netlify, "Add new site" → "Import from Git" and select the repo.
3. Build command: `npm run build`; Publish directory: `_site`.
4. Enable Identity: Site settings → Identity → Enable Identity.
5. Enable Git Gateway: Identity → Services → Enable Git Gateway.
6. Invite editors' emails in Identity → Invite users.
7. Visit `/admin` to log in and manage posts.

## CMS configuration
Set your production site URL in `public/admin/config.yml` under `site_url` once deployed.

