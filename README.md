Official YOURALGO website for login integrations (Facebook Login, Twilio), legal pages, and contact.

## Local development

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

This repo is configured for static export with base path `/youralgowebsite`.

1. Build and export to `out/` and copy into `docs/`:

```bash
npm run build
mkdir -p docs && rm -rf docs/* && cp -R out/* docs/
cp -f .nojekyll docs/.nojekyll
```

2. Push to main; set GitHub Pages to serve from `main` → `docs/`.

Site URL: https://techkingishere.github.io/youralgowebsite/

## Facebook/Twilio setup

- Facebook domain verification: set `NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION_TOKEN` in the build environment. The site will render the `<meta name="facebook-domain-verification" ...>` tag automatically.
- Twilio: this static site is sufficient for SMS/OTP policy review; ensure Privacy, Terms, Contact, and Data Deletion pages are up-to-date with your contact details.
