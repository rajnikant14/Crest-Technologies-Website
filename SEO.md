# SEO Operations — Crest Technologies Website

How the sitemap works, how the four domain variations are handled, and how to
set up and use Google Search Console for www.crest-technologies.com.

---

## 1. Sitemap

The sitemap is **generated automatically** from [`app/sitemap.ts`](app/sitemap.ts)
and served at:

```
https://www.crest-technologies.com/sitemap.xml
```

It currently lists **26 URLs**: the 10 static pages (home, services, products,
DPP, industries, private equity, delivery model, about, team, careers, contact),
all 8 service pages and all 7 industry pages.

**You never edit the XML by hand.** The sitemap reads the same data files that
drive the pages:

- Add a service in `content/services.ts` → its URL appears in the sitemap.
- Add an industry in `content/industries.ts` → same.
- Add a new static page → add its path to the `staticPaths` array in
  `app/sitemap.ts`.

`robots.txt` (generated from [`app/robots.ts`](app/robots.ts)) is served at
`/robots.txt` and already points crawlers at the sitemap:

```
User-Agent: *
Allow: /
Sitemap: https://www.crest-technologies.com/sitemap.xml
```

To inspect locally: run `npm run dev` and open
`http://localhost:3000/sitemap.xml`.

---

## 2. Site variations (domain canonicalisation)

The same site is reachable at four URL variations. Search engines treat these
as **four different websites** unless you tell them otherwise:

| Variation | Role |
|---|---|
| `https://www.crest-technologies.com` | ✅ **Canonical** — the one true address |
| `https://crest-technologies.com` (apex) | 301-redirect to canonical |
| `http://www.crest-technologies.com` | 301-redirect to HTTPS canonical |
| `http://crest-technologies.com` | 301-redirect to HTTPS canonical |

Three mechanisms enforce this, and all are in place or one setting away:

1. **Canonical tags (done, in code).** Every page now emits
   `<link rel="canonical" href="https://www.crest-technologies.com/...">`
   via the root layout (`alternates: { canonical: "./" }`). Whichever variation
   a crawler lands on, the tag names the www + HTTPS URL as the original.

2. **301 redirects (configure at the host).** On Vercel:
   *Project → Settings → Domains* → add both `crest-technologies.com` and
   `www.crest-technologies.com`, and mark **www as the primary domain**.
   Vercel then 301-redirects apex → www and http → https automatically.
   (On other hosts, configure the equivalent redirect rules.)

3. **Consistent internal URLs (done, in code).** The sitemap, OpenGraph URLs
   and all metadata use `site.url` from `lib/site.ts`, which is set to the
   www + HTTPS canonical.

After deploying, sanity-check with:

```powershell
curl.exe -sI http://crest-technologies.com  | findstr /i "location HTTP"
curl.exe -sI https://crest-technologies.com | findstr /i "location HTTP"
# Both should answer 301/308 with Location: https://www.crest-technologies.com/
```

---

## 3. Google Search Console usage

### 3.1 Create the property (once)

Go to [search.google.com/search-console](https://search.google.com/search-console)
and add a property. **Use a Domain property** — it covers all four variations
(http/https, apex/www) in one place:

1. Choose **Domain**, enter `crest-technologies.com`.
2. Google gives you a TXT record like
   `google-site-verification=xxxxxxxx`.
3. Add that TXT record in your DNS (wherever the domain is registered).
4. Click **Verify** (DNS can take up to a few hours to propagate).

**Alternative** (no DNS access): add a **URL-prefix** property for
`https://www.crest-technologies.com` and verify with the HTML meta tag — the
site already supports this. Set the environment variable in Vercel
(*Settings → Environment Variables*):

```
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION = <content value from Google>
```

Redeploy, and the tag `<meta name="google-site-verification" ...>` is emitted
on every page.

### 3.2 Submit the sitemap (once)

In Search Console: **Sitemaps** (left menu) → enter `sitemap.xml` → **Submit**.
Status should turn to "Success" with ~26 discovered URLs within a day or two.

### 3.3 Request indexing for key pages (launch week)

Google will crawl everything from the sitemap eventually, but for a new domain
you can accelerate the pages that matter commercially. Use **URL Inspection**
(top search bar), paste each URL, then click **Request Indexing**:

- `/` (home)
- `/services/cybersecurity-iec-62443` — targets "IEC 62443 consultancy UK"
- `/services/embedded-systems` — targets "embedded systems engineering rail"
- `/services/mechanical-engineering`
- `/private-equity`
- `/services/gcc-bot`

There's a daily quota (~10 requests), so spread the rest over a few days.

### 3.4 Ongoing routine (monthly, ~15 minutes)

| Report | What to look for |
|---|---|
| **Performance → Search results** | Which queries impress/click. Filter by page to see which service pages rank; queries with high impressions + low CTR are title/description rewrite candidates. |
| **Indexing → Pages** | "Not indexed" reasons. "Crawled – currently not indexed" is normal early on; "Duplicate without user-selected canonical" would indicate a variation/redirect problem — check §2. |
| **Sitemaps** | Still "Success", URL count matches expectations after content changes. |
| **Experience → Core Web Vitals** | Should be green — the site is static; investigate if anything turns amber. |
| **Security & Manual actions** | Should always be empty. Check anyway. |

### 3.5 After adding content

Nothing to do for the sitemap — it updates itself on the next deploy. For an
important new page (e.g. a new service), use URL Inspection → Request Indexing
to shortcut the queue.

### 3.6 Bing (optional, 5 minutes)

[Bing Webmaster Tools](https://www.bing.com/webmasters) → **Import from Google
Search Console** — it copies the verified property and sitemap in one click.
Worth doing: B2B procurement searches in the UK/DE run on Bing via corporate
Edge installs more often than consumer stats suggest.

---

## 4. Quick reference

| Thing | Where |
|---|---|
| Sitemap (live) | `https://www.crest-technologies.com/sitemap.xml` |
| Sitemap (source) | `app/sitemap.ts` |
| Robots.txt | `app/robots.ts` → `/robots.txt` |
| Canonical domain | `site.url` in `lib/site.ts` |
| Canonical tags | `alternates` in `app/layout.tsx` |
| GSC meta verification | `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` env var |
| Redirect config | Vercel → Settings → Domains (www = primary) |
