# Freelance Scope Creep Kit

Finished digital product (€24) for solo freelancers & micro-businesses: change orders, scope clauses, scripts and CSV tracker — **FR/EN**. Part of **Glint / Money Maker**.

**Complements:** [Freelancer Overdue Invoice Kit](https://freelance-invoice-chase-kit.vercel.app)

## Features

- Bilingual landing **FR** (`/`) and **EN** (`/en`) with locale toggle
- Rich pack in `content/pack/` — **not** served statically under `/public`
- `/succes` and `/en/success` verify Stripe Checkout `session_id` via `STRIPE_SECRET_KEY`
- Downloads gated behind `/api/download` after verified payment
- Terms + Privacy (FR + EN) with disclaimer (not legal advice)
- FAQ, mobile sticky CTA, Stripe Payment Link via env

## Environment variables (Vercel)

| Variable | Required | Description |
|---|---|---|
| `STRIPE_SECRET_KEY` | **Yes** (to unlock downloads) | `sk_test_…` or `sk_live_…` |
| `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` | **Recommended** | Your Stripe Payment Link URL |

Without `STRIPE_SECRET_KEY`, success pages show a clear “downloads temporarily unavailable” message and **do not** expose pack files.

### Payment Link setup (Stripe Dashboard)

1. **Product:** Freelance Scope Creep Kit — **€24** one-time
2. **Payment Link** → set success URLs:
   - FR: `https://YOUR_DOMAIN/succes?session_id={CHECKOUT_SESSION_ID}`
   - EN: `https://YOUR_DOMAIN/en/success?session_id={CHECKOUT_SESSION_ID}`
3. Copy the Payment Link URL → set as `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` on Vercel

Fallback in code (if env not set):

- **Production:** placeholder live URL — you must set the env var before selling
- **Preview/dev:** placeholder test URL — replace after creating your test Payment Link

## Local development

```bash
npm install
# .env.local (optional for download testing):
# STRIPE_SECRET_KEY=sk_test_…
# NEXT_PUBLIC_STRIPE_PAYMENT_LINK=https://buy.stripe.com/test_…
npm run dev
```

## Testing the payment flow

1. Create a **test** Payment Link in Stripe (€24, success URL pointing to `http://localhost:3000/succes?session_id={CHECKOUT_SESSION_ID}`)
2. Set `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` in `.env.local`
3. Complete checkout via the Payment Link
4. After redirect → `/succes?session_id=cs_test_…` → downloads unlock

Use Stripe test mode only — never expose test card numbers on the public site.

## Pack contents (`content/pack/`)

| File | Description |
|---|---|
| `change-order-email-templates.md` | 4 email templates FR + EN |
| `change-order-one-pager.md` | Formal change order form FR + EN |
| `scope-boundary-clause.md` | Scope clause for proposals/contracts FR + EN |
| `scripts-say-no-pricing.md` | Conversation scripts (3 levels) FR + EN |
| `change-order-log.csv` | Change order tracker with sample rows |
| `playbook.md` | One-page usage guide FR + EN |

## Stack

- Next.js 14 (App Router)
- Stripe Node SDK (session verification only)
- Vercel

## Security

- Never commit secrets (`.env*` is gitignored)
- Pack files live outside `public/`
- Download API validates paid Checkout Session on every request

## Deploy (Vercel)

1. Import repo: `Benjamin-de-Pourquery/freelance-scope-creep-kit`
2. Framework preset: **Next.js**
3. Add env vars above
4. Deploy → suggested domain: `freelance-scope-creep-kit.vercel.app`

## License

Proprietary digital product. Pack content is for purchasers only.
