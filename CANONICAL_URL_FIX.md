# Canonical URL Fix Instructions

## Issue
The canonical URLs were not absolute, showing as `staging.beaconer.io/home` instead of `https://staging.beaconer.io/home`.

## Solution Implemented

### 1. Updated SEO Component (`Utils/SEO.js`)
- ✅ Added `getCanonicalUrl()` function to ensure all canonical URLs are absolute
- ✅ Handles protocol detection automatically
- ✅ Falls back to production domain if environment variables not set
- ✅ Added debug logging for development

### 2. Updated Server-Side Props (`Utils/getServerSideData.js`)
- ✅ Fixed `fullUrl` generation to include proper protocol
- ✅ Detects protocol from `x-forwarded-proto` header or defaults to `https`
- ✅ Ensures consistent URL formatting

### 3. Environment Configuration
- ✅ Created `.env.example` with proper environment variables
- ✅ Uses `NEXT_PUBLIC_FRONTEND_URL` for canonical URLs

## Required Setup

### 1. Set Environment Variables
Create a `.env.local` file (or update your deployment environment variables):

```bash
# Required for proper canonical URLs
NEXT_PUBLIC_FRONTEND_URL=https://beaconer.io

# For staging
NEXT_PUBLIC_FRONTEND_URL=https://staging.beaconer.io

# Other existing variables
NEXT_PUBLIC_BACKEND_URL=your_backend_url
NEXT_PUBLIC_GA_ID=your_ga_id
```

### 2. Verify Implementation
1. Check your browser's developer tools → Elements tab
2. Look for `<link rel="canonical" href="...">` in the `<head>` section
3. Canonical URL should now be: `https://yourdomain.com/page-path`

### 3. Test Pages
All these pages should now have proper absolute canonical URLs:
- ✅ Home page (`/home`)
- ✅ About page (`/about`) 
- ✅ Contact page (`/contact`)
- ✅ Blog page (`/resources/blog`)
- ✅ Templates page (`/resources/template`)
- ✅ All industry risk management pages

### 4. Debug (Development Only)
If you're in development mode, check the browser console for canonical URL debug information.

## Validation

### Google Search Console
- Canonical URLs should now pass validation
- No more "Document does not have a valid rel=canonical" errors
- URLs should show as "Is an absolute URL"

### SEO Tools Testing
- Use tools like Screaming Frog or SEMrush Site Audit
- All canonical URLs should be properly formatted
- No canonical URL errors should appear

## Files Modified
- `Utils/SEO.js` - Enhanced canonical URL handling
- `Utils/getServerSideData.js` - Fixed protocol detection
- `.env.example` - Added environment variable template

## Deployment Notes
Make sure to set `NEXT_PUBLIC_FRONTEND_URL` in your deployment environment:
- **Production**: `https://beaconer.io`
- **Staging**: `https://staging.beaconer.io`
- **Development**: `http://localhost:3000`