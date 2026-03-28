# Chaben Technology Solution Ltd — Website

**A Chaben Holdings Company**  
Built to the Chaben Brand Identity Guide v2.0

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom Chaben design tokens
- **Animations**: CSS-based reveal animations + Framer Motion ready
- **Fonts**: Cormorant Garamond (display) · Georgia (body) · Montserrat (UI)
- **Deployment**: Netlify (primary)

---

## Critical File Names

Ensure these config files use the correct **dot** names (not underscores):

| Correct Name | Wrong Name |
|---|---|
| `next.config.js` | `next_config.js` ❌ |
| `postcss.config.js` | `postcss_config.js` ❌ |
| `tailwind.config.ts` | `tailwind_config.ts` ❌ |

---

## Deployment — Netlify

### GitHub Repository Structure Required

Your repo root must contain:
```
/
├── public/
│   ├── netlify-forms.html     ← CRITICAL: Do not delete
│   ├── logo-dark.png
│   ├── logo-light.png
│   └── logo-transparent.png
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── page.tsx           (Home)
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── insights/page.tsx
│   │   └── contact/page.tsx
│   └── components/
│       ├── Nav.tsx
│       └── Footer.tsx
├── next.config.js             ← dot, not underscore
├── postcss.config.js          ← dot, not underscore
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── netlify.toml               ← use the fixed version
```

### Step-by-Step Netlify Deployment

1. **Push to GitHub** — make sure all files above are committed
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**
3. Select your GitHub repo
4. Netlify auto-reads `netlify.toml` — do not change any build settings
5. Click **Deploy site**

### Enable Email Notifications for Contact Form

After first successful deploy:

1. In Netlify dashboard → **Forms** tab → you should see `contact` form listed
2. Go to **Site settings** → **Forms** → **Form notifications**
3. Click **Add notification** → **Email notification**
4. Enter your email address (e.g. `enquiries@chabentech.com`)
5. Select form: `contact`
6. Save — you will now receive an email for every submission

> **If the form does not appear in the Forms tab**, the `public/netlify-forms.html` file is missing. Add it and redeploy.

---

## Quick Start (Local)

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## Brand Tokens

| Token | Value | Role |
|-------|-------|------|
| `--navy` | `#0D1E3A` | Primary background |
| `--gold` | `#B8892A` | Accent & mark colour |
| `--techblue` | `#1A6B9E` | Technology accent |
| `--cloud` | `#E8EDF2` | Text on dark |
| `--slate` | `#3E4E5E` | Supporting text |

---

## Customisation Checklist

- [ ] Replace `enquiries@chabentech.com` with your real email
- [ ] Set Netlify form email notification (see above)
- [ ] Connect Google Analytics via `NEXT_PUBLIC_GA_ID` in `.env.local`
- [ ] Replace Unsplash images with proprietary photography
- [ ] Set custom domain in Netlify dashboard
- [ ] Commission final vector SVG logo

---

*Chaben Technology Solution Ltd — A Chaben Holdings Company*  
*Integrated Value Creation · Brand Identity Guide v2.0 · 2026*
