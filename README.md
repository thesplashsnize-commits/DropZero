# DROP ZERO — SITE STRUCTURE

## Files
```
index.html        → Entry / Checkpoint
collection.html   → Manifest (all designations)
product.html      → Single designation (takes ?id= param)
confirm.html      → Sequence complete
css/base.css      → Design system, variables, header
css/entry.css     → Entry page styles
css/collection.css → Collection page styles
css/product.css   → Product page styles
css/confirm.css   → Confirmation page styles
js/entry.js       → Live timestamp
js/product.js     → Size selection + Razorpay hook
js/confirm.js     → Order data display
assets/           → Put your design images here
```

## Adding Your Designs

Replace the `.placeholder` divs with actual images:

In `collection.html`, replace:
```html
<div class="designation-img placeholder" data-label="DZ01-001"></div>
```
With:
```html
<img src="assets/dz01-001.jpg" alt="PURSUIT" class="designation-img">
```

Same pattern in `product.html`.

Image format: JPG or PNG, minimum 1200px wide, 3:4 ratio recommended.

## Activating Razorpay

1. Create account at razorpay.com
2. Get your Key ID from Dashboard → Settings → API Keys
3. In `js/product.js`, replace `YOUR_RAZORPAY_KEY_ID` with your actual key
4. Uncomment the Razorpay block
5. Remove the TEMP redirect below it
6. Add this script to `product.html` before closing `</body>`:
   ```html
   <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
   ```

## Deploying (Free)

### Option A — Netlify (recommended)
1. Go to netlify.com → Add new site → Deploy manually
2. Drag the entire dropzero folder into the deploy zone
3. Done. You get a URL instantly.
4. Set a custom domain from Netlify settings when ready.

### Option B — GitHub Pages
1. Push this folder to a GitHub repo
2. Settings → Pages → Deploy from main branch
3. Done.

## Taking the Site Down After Drop Window

On Netlify: Sites → your site → Site settings → Danger zone → Delete site
Or: Replace index.html content with a single "CYCLE 01 — CLOSED" page before deleting.

## Updating Unit Counts

Manual for now: edit the `.units-count` spans in `collection.html` as units sell.
Automated later: connect to Razorpay webhook → update a JSON file → JS reads it.

## Product IDs
- DZ01-001 → PURSUIT (Dead Aura series)
- DZ01-002 → ADVICE (Jesus × Mistake series)  
- DZ01-003 → MIRROR (Perception series)

Links to product pages:
- product.html?id=DZ01-001
- product.html?id=DZ01-002
- product.html?id=DZ01-003
