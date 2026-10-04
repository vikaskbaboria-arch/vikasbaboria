# Vikas Baboria — Portfolio

A Netflix-inspired portfolio built with Next.js (JavaScript, no TypeScript).

## Stack

- Next.js 14 (Pages Router)
- Plain CSS (no Tailwind) — see `styles/globals.css`
- No external UI libraries — hover/scroll/reveal animations are hand-rolled with
  `IntersectionObserver` and scroll listeners

## Structure

```
pages/
  index.js          -> home page (hero, tech stack grid, projects, contact)
  project/nac.js     -> NAC project detail page with screenshot gallery + lightbox
  _app.js            -> loads global CSS
  _document.js        -> loads Google Fonts (Bebas Neue + Inter)
components/
  Nav.js              -> shared nav bar
lib/
  useReveal.js        -> scroll-reveal hook used on both pages
public/
  screenshots/        -> NAC project screenshots used on the detail page
styles/
  globals.css         -> all styling for both pages
```

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Contact inbox and admin access

Contact form submissions are saved in MongoDB in the `contact_messages` collection. Copy the keys from `.env.example` into `.env.local`, set `MONGODB_URI`, and choose a database with `MONGODB_DB` (defaults to `portfolio`). Configure `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and a long random `ADMIN_SESSION_SECRET` before the first admin sign-in. On first login, the app creates an admin record in the `admins` collection with a salted scrypt password hash. Later logins authenticate against that database record; changing the bootstrap environment credentials does not change an existing admin. Never expose these values with a `NEXT_PUBLIC_` prefix or commit `.env.local`.

Open `/admin` to sign in and read the latest 200 contact messages. The inbox API requires a signed, HTTP-only, 12-hour admin session cookie. Contact submissions are validated and include a honeypot field for basic bot filtering.

API routes:

- `POST /api/contact` saves a contact form submission.
- `POST /api/admin/login` starts an admin session.
- `POST /api/admin/logout` clears the session.
- `GET /api/admin/messages` returns the protected inbox.

## Notes

- The hero on the home page currently has **no profile photo** by design (removed on request).
  If you want to add one back, drop an image in `public/` (e.g. `public/me.jpg`) and add an
  `<img>` inside the `.hero-content` block in `pages/index.js`, alongside a `.hero-photo-wrap`
  style similar to the one in `styles/globals.css` history.
- Update the project list in `pages/index.js` (`project-grid` section) as you ship more projects —
  duplicate the `project-card` block and add a new page under `pages/project/` for its details.
- Deploy for free on [Vercel](https://vercel.com/new) — it auto-detects Next.js, no config needed.
