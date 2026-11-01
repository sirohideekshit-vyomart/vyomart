# VYOMART (Phase 1)
Multi-vendor marketplace. SWAAD ROOTS is a first-party brand (`Merchant.isFirstParty = true`).

## Setup
1. `npm install`
2. `cp .env.example .env` and set `DATABASE_URL` (PostgreSQL)
3. `npx prisma migrate dev --name init`
4. `npm run dev` → http://localhost:3000

## Status
Done: structure, brand (public/logo.svg, favicon.svg), Prisma schema, homepage with demo data.
Not yet built: auth, merchant/admin dashboards, cart, checkout, Razorpay (needs your keys), Cloudinary (needs URL).
Links on the homepage (cart, login, category pages) point to routes created in later phases.

## Added since Phase 1
- `preview/index.html`: standalone homepage preview (open in any browser; needs internet for fonts and Tailwind).
- `public/brand/swaad-roots/`: your 10 Swaad Roots brand images. The Next.js homepage still uses colour placeholders; wiring these in comes with the Swaad Roots store phase.
- Other sellers' product images in the preview are drawn illustrations, to be replaced by seller uploads.
