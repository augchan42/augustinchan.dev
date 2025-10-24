# Analytics & Conversion Tracking Setup

## Overview

Both augustinchan.dev and app.8bitoracle.ai have comprehensive analytics tracking configured to measure the effectiveness of the tech noir SEO strategy and validate long-tail keyword performance.

## Current Analytics Stack

### augustinchan.dev (Blog)

**Google Analytics 4:**
- Tracking ID: `G-077BT1Q7PJ`
- Component: `components/GoogleAnalytics.tsx`
- Tracks: Page views, time on page, bounce rate, referral sources

**Vercel Analytics:**
- Package: `@vercel/analytics@1.5.0`
- Tracks: Page views, web vitals, custom events (client-side)

### app.8bitoracle.ai (I Ching App)

**Google Analytics 4:**
- Tracking ID: `G-CBQ4R412LP`
- Component: `src/components/GoogleAnalytics.tsx`
- Tracks: All standard metrics + custom hexagram events

**Vercel Analytics:**
- Package: `@vercel/analytics@1.5.0`
- Tracks: Page views, web vitals, custom events

**Custom Analytics (Supabase):**
- Web Vitals tracking (Supabase `web_vitals` table)
- User segmentation (authenticated vs anonymous)
- Rich metadata (locale, device type, connection type)

## Cross-Domain Tracking (Blog → App)

### UTM Parameter Structure

All hexagram links from blog posts use this UTM structure:

```
https://app.8bitoracle.ai/[locale]/hexagram/[number]?utm_source=augustinchan&utm_medium=blog&utm_campaign=[campaign]&utm_content=[content-id]
```

**Parameters:**
- `utm_source=augustinchan` - Identifies traffic from blog
- `utm_medium=blog` - Medium is blog post
- `utm_campaign` - Campaign identifier (e.g., "tech-noir-seo-post")
- `utm_content` - Specific link variant (e.g., "hexagram-51-en")

### Custom GA4 Events

**Event: `hexagram_view`**

Triggered on every hexagram page load with parameters:
- `hexagram_number` - The hexagram number (1-64)
- `hexagram_name` - Pinyin name (e.g., "Zhen")
- `language` - Locale code (en, zh, zh-CN, th)
- `digital_artifact` - Cultural anchor name (e.g., "Unknown Pleasures")
- `utm_source` - Referral source
- `utm_medium` - Traffic medium
- `utm_campaign` - Campaign identifier
- `utm_content` - Content variant

**Event: `blog_to_hexagram`**

Specifically tracks when blog referrals view hexagrams:
- `hexagram_number` - The hexagram viewed
- `utm_campaign` - Which blog post sent them
- `utm_content` - Which specific link they clicked

## What You Can Track

### Blog Post Performance

In GA4, you can measure:

1. **Which posts drive traffic to hexagrams**
   - Filter events where `utm_source=augustinchan`
   - Group by `utm_campaign` to see post performance

2. **Click-through rates on hexagram links**
   - Compare blog post page views to `blog_to_hexagram` events
   - Calculate CTR for each post

3. **Which hexagrams get viewed from blog**
   - Filter `blog_to_hexagram` events
   - Group by `hexagram_number`

### Cultural Anchor Performance

Track which cultural anchors drive engagement:

1. **Most viewed cultural anchors**
   - Group `hexagram_view` events by `digital_artifact`
   - See if "Joy Division" performs better than others

2. **Language preferences**
   - Group by `language` parameter
   - Compare EN vs ZH traffic patterns

3. **Bounce rates by anchor**
   - Cross-reference page views with time on page
   - Identify which cultural references resonate

### Long-Tail Keyword Validation

Use GA4 Search Console integration to validate SEO strategy:

1. **Search queries bringing users to blog**
   - Look for "Joy Division I Ching" and similar
   - Track if long-tail predictions materialize

2. **Entry pages from organic search**
   - See which blog posts rank for unexpected queries
   - Identify successful cultural keyword combinations

3. **Query → Hexagram journey**
   - Track search query → blog post → hexagram view
   - Measure full conversion funnel

## GA4 Custom Reports to Create

### 1. Blog to App Conversion Funnel

**Steps:**
1. Blog post page view
2. Hexagram link click
3. Hexagram page view (`blog_to_hexagram` event)
4. (Optional) Reading completed

**Dimensions:**
- `utm_campaign` - Which blog post
- `hexagram_number` - Which hexagram
- `digital_artifact` - Which cultural anchor

### 2. Cultural Anchor Performance

**Metrics:**
- Total `hexagram_view` events by `digital_artifact`
- Average time on page by anchor
- Bounce rate by anchor
- Language distribution by anchor

### 3. Long-Tail Keyword Performance

**Sources:**
- GA4 Search Console integration
- Organic search traffic data
- Entry pages for blog posts

**Track:**
- Which long-tail keywords actually drive traffic
- Conversion rate from keyword → blog → app
- Cultural keyword combinations that work

## Example GA4 Queries

### Find blog-driven hexagram views

```
Event: blog_to_hexagram
Filters:
- utm_source = "augustinchan"
Group by: hexagram_number
Order by: event count descending
```

### Track Joy Division hexagram performance

```
Event: hexagram_view
Filters:
- digital_artifact = "Unknown Pleasures"
Group by: language, utm_source
```

### Measure tech noir SEO post effectiveness

```
Event: blog_to_hexagram
Filters:
- utm_campaign = "tech-noir-seo-post"
Dimensions: hexagram_number, utm_content
```

## Monitoring the Strategy

### Weekly Checks

1. **Blog post traffic**
   - Page views on new posts
   - Time on page
   - Scroll depth

2. **Hexagram click-throughs**
   - `blog_to_hexagram` event count
   - Which hexagrams get most clicks

3. **Search Console queries**
   - New long-tail keywords appearing
   - Position improvements for cultural terms

### Monthly Analysis

1. **Cultural anchor effectiveness**
   - Which references drive most engagement
   - EN vs ZH performance differences

2. **Conversion funnel health**
   - Drop-off rates at each stage
   - Optimization opportunities

3. **SEO hypothesis validation**
   - Did predicted long-tail keywords materialize?
   - Are cultural keywords gaining traction?
   - Is authenticity beating keyword stuffing?

## Success Metrics

### Short-term (1-3 months)

- ✅ Blog → hexagram CTR > 5%
- ✅ Average time on hexagram page > 2 minutes (from blog traffic)
- ✅ At least 1 new long-tail keyword ranking in top 20

### Medium-term (3-6 months)

- ✅ "Joy Division I Ching" in top 10 for relevant queries
- ✅ Tech noir SEO post in top 5 for "tech noir I Ching"
- ✅ Blog-driven hexagram views account for 10%+ of total hexagram traffic

### Long-term (6-12 months)

- ✅ Multiple cultural anchor keywords ranking
- ✅ Consistent organic traffic from unique long-tail queries
- ✅ Blog → app conversion funnel optimized
- ✅ Validation that cultural specificity beats generic content

## Technical Implementation

### Blog (augustinchan.dev)

**File:** `content/posts/2025-10-24-tech-noir-seo-anxiety-2025.mdx`

UTM parameters added to all hexagram links:
```markdown
[Hexagram 51](https://app.8bitoracle.ai/en/hexagram/51?utm_source=augustinchan&utm_medium=blog&utm_campaign=tech-noir-seo-post&utm_content=hexagram-51-en)
```

### App (app.8bitoracle.ai)

**Component:** `src/components/HexagramViewTracker.tsx`

Client component that:
1. Reads UTM parameters from URL
2. Sends `hexagram_view` event to GA4
3. Sends `blog_to_hexagram` event for blog referrals
4. Tracks cultural anchor performance

**Integration:** `src/app/[locale]/hexagram/[number]/page.tsx`

Tracker component rendered on all hexagram pages with:
- Hexagram number and name
- Locale
- Digital artifact (cultural anchor)

## Notes

- All tracking is privacy-compliant (no PII collected)
- UTM parameters don't affect page functionality
- Tracking events don't impact page performance
- Both sites can track independently while measuring cross-domain journeys
- Custom events supplement (not replace) standard GA4 metrics

## Future Enhancements

Consider adding:
1. **Reading completion tracking** - Track when users complete divinations
2. **Cultural anchor engagement** - Hover/click tracking on artifact references
3. **Share tracking** - Monitor social shares from hexagram pages
4. **Return visitor patterns** - Track if blog readers become app users
