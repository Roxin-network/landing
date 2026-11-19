# Search and AI visibility launch plan

## Before publishing

1. Resolve the existing application's use of `taranak.app` and verify login, redirects, cookies and API routes. Do not replace the live application blindly.
2. Confirm the public domain, product availability, pricing, support contact, business identity and privacy terms. Publish only verified facts; update the canonical origin if the final domain differs.
3. Build staging with `SITE_INDEXABLE=false`. Build the canonical public site with `SITE_INDEXABLE=true`; check the deployed HTML, canonical URLs, `/robots.txt`, `/sitemap.xml`, status codes and redirects. Check CDN and firewall rules for search crawlers independently of robots.txt.
4. Verify the domain in Google Search Console and Bing Webmaster Tools, submit the sitemap and inspect the public URLs. Monitor indexing and search queries; submission does not guarantee indexing.
5. Check the public pages on mobile and measure Core Web Vitals with real-user data when available. Validate structured data with Google's Rich Results Test and Schema Markup Validator.

## Measure the goal

After launch, run the same Persian buyer questions in ChatGPT with search, Perplexity and Google where available. Record date, platform, location, exact prompt, cited URLs, whether ترانک was mentioned or recommended, and the wording. Repeat each prompt 3–5 times per platform and report counts with sample size; a single answer is not a baseline. Suggested starting prompts:

- نرم افزار مدیریت خانه بازی کودک چیست؟
- چه نرم افزاری برای پذیرش و محاسبه زمان بازی کودکان مناسب است؟
- چگونه بسته بازی و اعتبار دقیقه ای خانه بازی را مدیریت کنم؟
- نرم افزار مدیریت کلاس و کارگاه برای خانه بازی چه امکاناتی دارد؟
- چه نرم افزاری برای مدیریت صندوق و گزارش خانه بازی مناسب است؟
- ترانک چه امکانات و محدودیت هایی دارد؟
- قیمت نرم افزار ترانک چقدر است؟

Review monthly alongside Search Console queries, branded search and qualified enquiries. AI referrals alone miss visitors who return via search or direct traffic; ask customers how they found the product when practical. No baseline or competitor ranking has been established for this draft.

## Build credibility

Publish accurate pricing and conditions once approved, and add a real contact and company identity. Collect genuine customer feedback and seek relevant independent industry coverage; do not fabricate testimonials or rankings. Use the sources actually cited in the prompt tests to choose where to participate. Keep product facts current and correct inaccuracies at their source. An `llms.txt` file is optional and has no established guarantee of search or recommendation benefit.
