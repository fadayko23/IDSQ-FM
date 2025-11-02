# Update Webflow CDN URL to Latest Version (IDSQ-FM Repository)

The jsDelivr CDN is caching the old `@main` version. You need to update your Webflow Embed code to use the latest commit hash to force a fresh cache.

## Current Webflow Embed Code (Uses Cached `@main`):
```html
<script src="https://cdn.jsdelivr.net/gh/fadayko23/IDSQ-FM@main/src/idsq-quiz.min.js"></script>
<script>
window.IDSQ.buildQuiz({
  webhook: {
    url: 'https://hook.us1.make.com/mcd4xny5t7i089ep8slgzy8him3amay3',
    headers: { 'x-make-apikey': 'b23f5a9d1e7a40a5c9d817d89e8d47f2' },
    enable: true
  },
  introVariant: 'guide-panel'
});
</script>
```

## Updated Webflow Embed Code (Latest Commit `1f92c9d` - Materials Selection Feature):
```html
<script src="https://cdn.jsdelivr.net/gh/fadayko23/IDSQ-FM@1f92c9d/src/idsq-quiz.min.js"></script>
<script>
window.IDSQ.buildQuiz({
  webhook: {
    url: 'https://hook.us1.make.com/mcd4xny5t7i089ep8slgzy8him3amay3',
    headers: { 'x-make-apikey': 'b23f5a9d1e7a40a5c9d817d89e8d47f2' },
    enable: true
  },
  introVariant: 'guide-panel'
});
</script>
```

## What Changed:
- Repository: `IDSQ` → `IDSQ-FM` (new repository for material selections feature)
- Commit: `@main` → `@1f92c9d`
- Feature: Added "Select Materials" continuation with 3-round selection process for bathroom and kitchen spaces

## Instructions:
1. Open your Webflow project
2. Find the Embed element with the quiz code
3. Replace the repository name and commit hash
4. Publish the site
5. Test the quiz - complete the style quiz and try the new "Select Materials" button!

## Features in This Update:
- ✨ New "Select Materials" button on quiz results screen
- 🛁 Bathroom material categories: flooring, backsplash, countertops, faucet, cabinet styles, tub, toilet, showerhead, paint
- 🍳 Kitchen material categories: flooring, backsplash, countertops, faucet, cabinet styles, appliances, paint
- 🎯 3-round selection process per category with Clara guidance
- 📸 Demo Unsplash images (ready to replace with Airtable)

## Future Updates:
Each time we make changes, you'll need to update the commit hash in Webflow OR wait 24 hours for jsDelivr's `@main` cache to expire.

