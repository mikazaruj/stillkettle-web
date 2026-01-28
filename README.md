# PropertyFlow Landing Page

Static marketing site for PropertyFlow Chrome Extension.

## Local Development

```bash
cd landing
python3 -m http.server 8080
# Open http://localhost:8080
```

## Deployment

This is a static site. Deploy to any static hosting:

- **Cloudflare Pages**: Connect GitHub repo, set root to `landing/`
- **Vercel**: Connect GitHub repo, set root to `landing/`
- **Netlify**: Connect GitHub repo, set publish directory to `landing/`

## Files

- `index.html` - Main landing page
- `success.html` - Post-checkout success page
- `privacy.html` - Privacy policy
- `terms.html` - Terms of service
- `js/main.js` - JavaScript (mobile menu, FAQ accordion, Paddle)
- `images/` - Image assets

## Sections

1. **Navigation** - Fixed header with mobile menu
2. **Hero** - Headline, value prop, CTAs
3. **How It Works** - 3-step visual explanation
4. **Features** - 6 feature cards (2 marked Pro)
5. **Pricing** - Free vs Pro comparison
6. **FAQ** - 5 questions with accordion
7. **Footer** - Links and legal

## TODO Before Launch

- [ ] Replace hero screenshot placeholder with actual screenshot
- [ ] Add real Chrome Web Store link to all "Install" buttons
- [ ] Configure Paddle with production keys
- [ ] Replace placeholder legal pages with real policies
- [ ] Add OG image (`images/og-image.png`)
- [ ] Set up custom domain
- [ ] Update email/Twitter links in footer

## Paddle Integration

The Pro checkout button is configured in `js/main.js`. To enable:

1. Get your Paddle client token
2. Add Paddle.js script to `index.html`
3. Update the checkout button handler with your price ID

```javascript
// Example (uncomment and configure in main.js)
Paddle.Checkout.open({
  items: [{ priceId: 'pri_xxxxx', quantity: 1 }],
  settings: {
    successUrl: window.location.origin + '/success.html',
    displayMode: 'overlay'
  }
});
```
