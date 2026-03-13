# Source: How to Use Alternative Data to Find Mispriced Polymarket Contracts
**URL:** https://www.paradoxintelligence.com/blog/how-to-use-alternative-data-predict-polymarket-outcomes-2026

```markdown
<!DOCTYPE html>
<!-- Define authenticated pages that require login and show sidebar -->




<html data-build="prod-0749372c57dc2f5a1c6aa5f4f9802a682aebf139" dir="ltr" class="h-full" lang="en" itemscope itemtype="https://schema.org/WebSite" style="background:#000;">
<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-R9C9PEHB9E"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-R9C9PEHB9E');
    </script>
    <meta charSet="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
    <meta name="theme-color" content="rgb(33, 33, 33)"/>
    <!-- Preconnect to critical domains first -->
    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://www.googletagmanager.com" crossorigin>
    
    <!-- Inline Critical CSS for immediate rendering -->
    <style>
    /* Critical CSS - minimal styles for initial paint */
    html {
        background-color: #000 !important;
        background: #000 !important;
    }
    
    html, body {
        margin: 0;
        padding: 0;
        font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background-color: #000;
        background: #000;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #fff;
    }
    
    * {
        box-sizing: border-box;
    }
    
    /* Prevent layout shift and FOUC */
    body {
        opacity: 0;
        transition: opacity 0.2s ease-in;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    img {
        max-width: 100%;
        height: auto;
    }
    
    /* Critical sidebar styles to prevent flash */
    #sidebar {
        background: #000;
        color: #fff;
    }
    
    /* Prevent oversized navigation icons during load - be specific */
    #sidebar nav svg {
        width: 20px;
        height: 20px;
        max-width: 20px;
        max-height: 20px;
    }
    
    .public-navbar-links {
        position: fixed;
        top: max(1rem, calc(env(safe-area-inset-top) + 0.5rem));
        left: 50%;
        transform: translateX(-50%);
        z-index: 1001;
    }
    
    .public-navbar-center {
        position: fixed;
        top: max(1rem, calc(env(safe-area-inset-top) + 0.5rem));
        left: 50%;
        transform: translateX(-50%);
        z-index: 1001;
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }
    
    .public-navbar-solutions {
        position: relative;
    }
    
    .public-navbar-use-cases {
        position: relative;
    }
    
    .public-navbar-login {
        position: fixed;
        top: max(1rem, calc(env(safe-area-inset-top) + 0.5rem));
        right: 1.5rem;
        z-index: 1001;
    }

    .global-signup-btn {
        position: fixed;
        top: calc(max(1rem, calc(env(safe-area-inset-top) + 0.5rem)) + 0.5rem);
        right: 1.5rem;
        z-index: 10001;
        display: inline-flex;
        align-items: center;
        padding: 0.5rem 1.125rem;
        background: #000000;
        color: #ffffff;
        font-size: 0.875rem;
        font-weight: 500;
        letter-spacing: -0.01em;
        font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        border: 1px solid #ffffff;
        border-radius: 12px;
        text-decoration: none;
        white-space: nowrap;
        transition: opacity 0.2s ease;
    }

    .global-signup-btn:hover {
        opacity: 0.85;
        color: #ffffff;
        text-decoration: none;
    }

    @media (max-width: 768px) {
        .global-signup-btn {
            display: none;
        }
    }
    
    /* Blog: space below fixed navbar so content never overlaps (navbar ~60–100px from top) */
    .main-content-area.blog-content-area {
        padding-top: max(120px, calc(env(safe-area-inset-top) + 100px)) !important;
    }

    /* Hero section critical styles for LCP */
    .fiscal-hero-section, .elite-homepage {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 80px;
        background: #000;
    }
    
    .fiscal-hero-content, .elite-content {
        text-align: center;
        color: white;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0;
    }
    
    @media (max-width: 768px) {
        .fiscal-hero-section, .elite-homepage {
            min-height: 100svh;
        }
    }
    
    /* Page header styles are defined in shared/styles/base.css */
    </style>
    
    <!-- Non-critical external CSS loaded as regular stylesheets -->
    <link rel="stylesheet" href="https://cdn.oaistatic.com/assets/root-bh5spu2n.css">
    <link rel="stylesheet" href="https://cdn.oaistatic.com/assets/conversation-small-iybhw0ps.css">
    
    <!-- Favicon and App Icons -->
    <link rel="apple-touch-icon" sizes="180x180" href="/static/assets/images/PARADOX-gradient.png">
    <link rel="icon" type="image/svg+xml" href="/static/assets/images/PARADOX-gradient_transparant.svg">

    <!-- DNS prefetch for external domains -->
    <link rel="dns-prefetch" href="//cdn.oaistatic.com">
    <link rel="dns-prefetch" href="//calendly.com">
    <link rel="dns-prefetch" href="//www.googletagmanager.com">
    
    
    <!-- Preload homepage LCP image only -->
    
    
    <!-- Other menu and logo images are loaded on demand -->
    
    
    

    
    <meta name="robots" content="index, follow"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="indexnow-verification" content="47505ed66707435b8f222e83621751b1"/>
    
    <!-- Enhanced Meta Tags for AI & Social (trimmed to relevant signals) -->
    <meta name="author" content="Paradox Intelligence">
    <meta name="publisher" content="Paradox Intelligence">
    <meta name="copyright" content="© 2026 Paradox Intelligence">
    <meta name="language" content="en">
    
    <!-- Additional OpenGraph Tags -->
    <meta property="og:locale" content="en">
    <meta property="og:site_name" content="Paradox Intelligence">
    <meta property="business:contact_data:street_address" content="United States">
    <meta property="business:contact_data:locality" content="United States">
    <meta property="business:contact_data:region" content="US">
    <meta property="business:contact_data:country_name" content="United States">
    
    <meta property="business:contact_data:website" content="https://www.paradoxintelligence.com">
    
    <!-- Twitter Card Enhanced -->
    <meta name="twitter:site" content="@ParadoxIntel">
    <meta name="twitter:creator" content="@ParadoxIntel">
    <meta name="twitter:domain" content="paradoxintelligence.com">
    
    <!-- Additional SEO Meta Tags -->
    <meta name="format-detection" content="telephone=no">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="application-name" content="Paradox Intelligence">
    <meta name="apple-mobile-web-app-title" content="Paradox Intelligence">
    <meta name="msapplication-TileColor" content="#000000">
    <meta name="msapplication-config" content="none">
    
    <!-- Canonical URL: use canonical domain so Bing/indexing is consistent with sitemap (override in blog/home as needed) -->
    
<link rel="canonical" href="https://www.paradoxintelligence.com/blog/how-to-use-alternative-data-predict-polymarket-outcomes-2026">

    <!-- <link rel="alternate" href="https://www.paradoxintelligence.com/blog/how-to-use-alternative-data-predict-polymarket-outcomes-2026" hreflang="en-us" /> -->
    
    <!-- Advanced SEO and Performance Meta Tags -->
    <meta name="generator" content="Paradox Intelligence Platform">
    <meta name="web_author" content="Paradox Intelligence">
    <title>How to Use Alternative Data to Find Mispriced Polymarket Contracts | Paradox Intelligence Blog</title>
    
<meta name="description" content="Prediction markets like Polymarket price event probabilities based on what participants believe. Alternative data reveals what is actually happening behaviorally. Here is how to use search, sentiment, social, and web data to identify mispriced contracts before the market catches up." />

    
    <!-- Social Media Meta Tags Block -->
    
<meta property="og:title" content="How to Use Alternative Data to Find Mispriced Polymarket Contracts | Paradox Intelligence">
<meta property="og:description" content="Prediction markets like Polymarket price event probabilities based on what participants believe. Alternative data reveals what is actually happening behaviorally. Here is how to use search, sentiment, social, and web data to identify mispriced contracts before the market catches up.">
<meta name="twitter:title" content="How to Use Alternative Data to Find Mispriced Polymarket Contracts | Paradox Intelligence">
<meta name="twitter:description" content="Prediction markets like Polymarket price event probabilities based on what participants believe. Alternative data reveals what is actually happening behaviorally. Here is how to use search, sentiment, social, and web data to identify mispriced contracts before the market catches up.">

    
    <!-- Static Social Media Tags (override in blog post for article type and post URL) -->
    
<meta property="og:url" content="https://www.paradoxintelligence.com/blog/how-to-use-alternative-data-predict-polymarket-outcomes-2026" />
<meta property="og:image" content="https://www.paradoxintelligence.com/static/assets/images/1_1_1PC.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:type" content="article" />
<meta property="og:site_name" content="Paradox Intelligence" />
<meta property="article:published_time" content="2026-03-06" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://www.paradoxintelligence.com/static/assets/images/1_1_1PC.png" />

    
    <!-- Load Google Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap">
    <!-- Content block for additional head elements -->
    
<link rel="stylesheet" href="/static/shared/styles/footer.css">
<link rel="stylesheet" href="/static/shared/styles/login-button.css">
<link rel="stylesheet" href="/static/pages/blog/styles/blog.css">
<meta name="robots" content="index, follow">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How to Use Alternative Data to Find Mispriced Polymarket Contracts",
  "description": "Prediction markets like Polymarket price event probabilities based on what participants believe. Alternative data reveals what is actually happening behaviorally. Here is how to use search, sentiment, social, and web data to identify mispriced contracts before the market catches up.",
  "image": {
    "@type": "ImageObject",
    "url": "https://www.paradoxintelligence.com/static/assets/images/1_1_1PC.png",
    "width": 1200,
    "height": 630
  },
  "datePublished": "2026-03-06T00:00:00+00:00",
  "dateModified": "2026-03-06T00:00:00+00:00",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.paradoxintelligence.com/blog/how-to-use-alternative-data-predict-polymarket-outcomes-2026"
  },
  "url": "https://www.paradoxintelligence.com/blog/how-to-use-alternative-data-predict-polymarket-outcomes-2026",
  "author": {
    "@type": "Organization",
    "name": "Paradox Intelligence",
    "url": "https://www.paradoxintelligence.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Paradox Intelligence",
    "url": "https://www.paradoxintelligence.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.paradoxintelligence.com/static/assets/images/Logo%20new.png"
    }
  }
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.paradoxintelligence.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Insights",
      "item": "https://www.paradoxintelligence.com/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "How to Use Alternative Data to Find Mispriced Polymarket Contracts",
      "item": "https://www.paradoxintelligence.com/blog/how-to-use-alternative-data-predict-polymarket-outcomes-2026"
    }
  ]
}
</script>

    
    <!-- Preload critical React bundles for logged-in pages (faster initial load) -->
    
    
    <!-- Load critical CSS synchronously for index page, async for others -->
    
    
    <!-- Non-home pages: keep base.css synchronous, defer secondary CSS -->
    <link rel="stylesheet" href="/static/shared/styles/base.css">
    
    <!-- Public navigation bar styles -->
    <link rel="preload" href="/static/shared/styles/public-navbar.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="/static/shared/styles/public-navbar.css"></noscript>
    
    <!-- Tier restriction styles -->
    <link rel="preload" href="/static/shared/styles/tier-restrictions.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="/static/shared/styles/tier-restrictions.css"></noscript>
    
    <!-- Tier gate component styles -->
    <link rel="preload" href="/static/shared/styles/tier-gate.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="/static/shared/styles/tier-gate.css"></noscript>
    
    <!-- CTA button styles -->
    <link rel="preload" href="/static/shared/styles/cta-buttons.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="/static/shared/styles/cta-buttons.css"></noscript>
    
    <!-- Footer styles -->
    <link rel="preload" href="/static/shared/styles/footer.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="/static/shared/styles/footer.css"></noscript>

    <!-- Subscription popup styles -->
    <link rel="preload" href="/static/shared/styles/subscription-popup.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="/static/shared/styles/subscription-popup.css"></noscript>
    
    
    <!-- Organization Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Paradox Intelligence",
      "alternateName": "Paradox Intelligence Inc.",
      "description": "AI-driven alternative data platform providing institutional investors with market intelligence from search trends, social media, and web traffic analytics.",
      "url": "https://www.paradoxintelligence.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.paradoxintelligence.com/static/assets/images/PARADOX-transparant-white.svg",
        "width": 300,
        "height": 100
      },
      "foundingDate": "2024",
      "founder": {
        "@type": "Person",
        "jobTitle": "Founder & CEO",
        "description": "Former Vice President at Goldman Sachs, CFA",
        "url": "https://www.linkedin.com/in/jurriendegroot/"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US",
        "addressRegion": "United States"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "availableLanguage": ["English"]
        },
        {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": ["English"]
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/paradox-intelligence",
        "https://twitter.com/ParadoxIntel"
      ],
      "knowsAbout": [
        "Alternative Data",
        "Artificial Intelligence",
        "Generative AI",
        "A.I. Technology",
        "Machine Learning",
        "Deep Learning",
        "Neural Networks",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "AI-Powered Analytics",
        "Intelligent Automation",
        "Cognitive Computing",
        "Advanced Analytics",
        "AI-Driven Insights",
        "Automated Intelligence",
        "Smart Analytics",
        "Change Detection",
        "Information Arbitrage",
        "Market Intelligence", 
        "Investment Research",
        "Financial Technology",
        "Data Analytics",
        "Hedge Fund Technology",
        "Institutional Investing",
        "Quantitative Trading",
        "Asset Management",
        "Social Media Sentiment Analysis",
        "Web Traffic Analytics",
        "Consumer Behavior Data",
        "Real-time Market Data",
        "Google Search Trends Analysis",
        "Reddit Analytics",
        "TikTok Trends Analysis",
        "YouTube Analytics",
        "Amazon Search Trends",
        "Mobile App Data",
        "Financial Data Providers",
        "Investment Intelligence",
        "Market Research Data",
        "Digital Intelligence",
        "Alternative Investment Data",
        "Systematic Trading",
        "Alpha Generation",
        "Portfolio Management",
        "Risk Management",
        "Long Short Equity",
        "Discretionary Trading",
        "Fundamental Analysis",
        "Technical Analysis"
      ],
      
      "audience": [
        {
          "@type": "Audience",
          "audienceType": "Hedge Funds"
        },
        {
          "@type": "Audience", 
          "audienceType": "Asset Managers"
        },
        {
          "@type": "Audience",
          "audienceType": "Institutional Investors"
        },
        {
          "@type": "Audience",
          "audienceType": "Quantitative Trading Firms"
        },
        {
          "@type": "Audience",
          "audienceType": "Investment Research Teams"
        },
        {
          "@type": "Audience",
          "audienceType": "Venture Capital Firms"
        },
        {
          "@type": "Audience",
          "audienceType": "Private Equity Firms"
        },
        {
          "@type": "Audience",
          "audienceType": "Pension Funds"
        },
        {
          "@type": "Audience",
          "audienceType": "Sovereign Wealth Funds"
        },
        {
          "@type": "Audience",
          "audienceType": "Family Offices"
        },
        {
          "@type": "Audience",
          "audienceType": "Single Family Offices"
        },
        {
          "@type": "Audience",
          "audienceType": "Multi-Family Offices"
        },
        {
          "@type": "Audience",
          "audienceType": "Ultra High Net Worth Individuals"
        },
        {
          "@type": "Audience",
          "audienceType": "Investment Banks"
        },
        {
          "@type": "Audience",
          "audienceType": "Wealth Management Firms"
        },
        {
          "@type": "Audience",
          "audienceType": "Corporate Treasury Teams"
        },
        {
          "@type": "Audience",
          "audienceType": "Government Investment Agencies"
        },
        {
          "@type": "Audience",
          "audienceType": "Central Banks"
        },
        {
          "@type": "Audience",
          "audienceType": "Treasury Departments"
        },
        {
          "@type": "Audience",
          "audienceType": "Financial Regulators"
        },
        {
          "@type": "Audience",
          "audienceType": "Government Research Institutes"
        },
        {
          "@type": "Audience",
          "audienceType": "Public Pension Funds"
        },
        {
          "@type": "Audience",
          "audienceType": "National Security Agencies"
        },
        {
          "@type": "Audience",
          "audienceType": "Quantitative Researchers"
        },
        {
          "@type": "Audience",
          "audienceType": "Financial Data Scientists"
        }
      ]
    }
    </script>

    <!-- WebSite Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Paradox Intelligence",
      "alternateName": "Paradox Intelligence Alternative Data",
      "description": "Alternative data platform for institutional investors. Real-time market intelligence from Google Trends, TikTok, Reddit, YouTube, Amazon, and 15+ digital sources.",
      "url": "https://www.paradoxintelligence.com",
      "publisher": {
        "@type": "Organization",
        "name": "Paradox Intelligence",
        "@id": "https://www.paradoxintelligence.com/#organization"
      },
      "copyrightYear": "2026",
      "copyrightHolder": {
        "@type": "Organization",
        "name": "Paradox Intelligence"
      },
      "license": "https://www.paradoxintelligence.com/terms",
      "inLanguage": "en-US"
    }
    </script>

    <!-- SiteNavigationElement Schema - Helps Google understand main navigation for sitelinks -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "SiteNavigationElement",
          "position": 1,
          "name": "Earnings Calendar",
          "description": "Track upcoming earnings dates and historical earnings data for public companies",
          "url": "https://www.paradoxintelligence.com/earnings"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 2,
          "name": "API Access",
          "description": "Programmatic access to alternative data via REST API for quantitative research",
          "url": "https://www.paradoxintelligence.com/apis"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": "About Us",
          "description": "Learn about Paradox Intelligence's mission and team",
          "url": "https://www.paradoxintelligence.com/about"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": "Pricing & Plans",
          "description": "Find the right plan for your investment research needs",
          "url": "https://www.paradoxintelligence.com/find-your-plan"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 5,
          "name": "Contact Sales",
          "description": "Get in touch with our sales team for enterprise solutions",
          "url": "https://www.paradoxintelligence.com/contact-sales"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 6,
          "name": "Book a Demo",
          "description": "Schedule a personalized demo of the Paradox Intelligence platform",
          "url": "https://www.paradoxintelligence.com/book-call"
        }
      ]
    }
    </script>

    <!-- Page-specific FAQ schema should be placed only on pages that render matching FAQ content. Removed from base. -->

    

    <!-- Removed duplicated/overlapping graph schema to reduce noise. Keep Organization + WebSite above. -->

    <!-- Removed non-standard KnowledgeGraph schema. -->

    <!-- Enhanced E-E-A-T Schema for Authority -->
    
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "mainEntity": {
        "@type": "Organization",
        "@id": "https://www.paradoxintelligence.com/#organization"
      },
      "about": {
        "@type": "Thing",
        "name": "Alternative Data for Institutional Investors",
        "description": "Comprehensive platform providing real-time market intelligence and consumer behavior analytics for investment research"
      },
      "license": "https://www.paradoxintelligence.com/terms",
      "copyrightHolder": {
        "@type": "Organization",
        "name": "Paradox Intelligence"
      },
      "copyrightYear": "2026",
      "mentions": [
        {
          "@type": "DefinedTerm", 
          "name": "Alternative Data",
          "description": "Non-traditional data sources used in investment research including social media, search trends, and consumer behavior patterns"
        },
        {
          "@type": "DefinedTerm",
          "name": "Hedge Fund Technology",
          "description": "Specialized technology solutions and data platforms designed for hedge fund investment strategies"
        },
        {
          "@type": "DefinedTerm",
          "name": "Institutional Investment Research",
          "description": "Data analytics and intelligence services designed for institutional investors and asset managers"
        }
      ],
      "lastReviewed": "2025-01-06",
      "reviewedBy": {
        "@type": "Organization",
        "name": "Paradox Intelligence",
        "expertise": "Alternative Data Analytics"
      }
    }
    </script>
    

    <!-- Breadcrumbs Schema -->
    
</head>



    


<body class="h-full blog-post-page sidebar-collapsed " data-user-tier="free" data-is-logged-in="false" style="background:#000;">

      <!-- Public Navigation Bar: Show on all pages EXCEPT authenticated pages -->
      
      
      <div class="public-navbar-container">
          <!-- Logo and Brand Text on the left -->
          <div class="public-navbar-logo">
              <a href="/" class="navbar-brand-link" aria-label="Paradox Intelligence Home">
                  <img src="/static/assets/images/G%20PI%20B.png"
                       alt="Paradox Intelligence"
                       class="navbar-logo-img"
                       loading="eager"
                       decoding="async">
              </a>
          </div>
        
        <!-- Centered Navigation Container -->
        <div class="public-navbar-center">
            <!-- Datasets Button -->
            <div class="public-navbar-datasets">
                <a href="/datasets" class="nav-button liquid" data-menu="datasets" aria-expanded="false" aria-haspopup="true" aria-label="Datasets menu">
                    <span>Datasets</span>
                    <svg class="nav-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line class="nav-minus" x1="2" y1="6" x2="10" y2="6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <line class="nav-plus" x1="6" y1="2" x2="6" y2="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>

            <!-- Use Cases Button -->
            <div class="public-navbar-use-cases">
                <a href="/find-your-plan" class="nav-button liquid" data-menu="use-cases" aria-expanded="false" aria-haspopup="true" aria-label="Use Cases menu">
                    <span>Use Cases</span>
                    <svg class="nav-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line class="nav-minus" x1="2" y1="6" x2="10" y2="6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <line class="nav-plus" x1="6" y1="2" x2="6" y2="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
            
            <!-- Research Button -->
            <div class="public-navbar-research">
                <a href="https://research.paradoxintelligence.com" class="nav-button liquid" data-menu="research" aria-expanded="false" aria-haspopup="true" aria-label="Research menu">
                    <span>Research</span>
                    <svg class="nav-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line class="nav-minus" x1="2" y1="6" x2="10" y2="6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <line class="nav-plus" x1="6" y1="2" x2="6" y2="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>
        
        <!-- Single Shared Dropdown Menu -->
        <div id="shared-navbar-dropdown" class="shared-navbar-dropdown liquid" role="menu">
            <!-- Content will be dynamically populated based on hover -->
        </div>
        
        <!-- Hidden Templates for Dropdown Content -->
        <template id="solutions-menu-template">
            <div class="solutions-cards-container">
                <a href="/find-your-plan" class="solution-card liquid" role="menuitem">
                    <img src="/static/assets/images/1_1_1PC.png" alt="Fundamental Investors" class="solution-image" loading="eager" decoding="async">
                    <div class="solution-content">
                        <h3 class="solution-title">FUNDAMENTAL INVESTORS</h3>
                    </div>
                </a>
                <a href="/find-your-plan?tab=data" class="solution-card liquid" role="menuitem">
                    <img src="/static/assets/images/2_2_2data.png" alt="Quantitative Investors" class="solution-image" loading="eager" decoding="async">
                    <div class="solution-content">
                        <h3 class="solution-title">QUANTITATIVE INVESTORS</h3>
                    </div>
                </a>
                <a href="/data-monetization" class="solution-card liquid" role="menuitem">
                    <img src="/static/assets/images/3_3_3ai.png" alt="Data Partners" class="solution-image" loading="eager" decoding="async">
                    <div class="solution-content">
                        <h3 class="solution-title">DATA PARTNERS</h3>
                    </div>
                </a>
            </div>
            
            <!-- Footer Text with Links -->
            <div class="datasets-footer">
                <p class="datasets-footer-text">
                    Alternative datasets available through 
                    <a href="/find-your-plan" class="datasets-footer-link">Platform</a>, 
                    <a href="/find-your-plan?tab=data" class="datasets-footer-link">API</a> 
                    and 
                    <a href="/find-your-plan?tab=data" class="datasets-footer-link">MCP</a>.
                </p>
            </div>
        </template>
        
        <template id="use-cases-menu-template">
            <div class="datasets-columns-container">
                <!-- Left Column -->
                <div class="use-cases-column">
                    <a href="/hedge-funds" class="use-case-card liquid" role="menuitem">
                        <div class="use-case-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="4" y1="20" x2="4" y2="12"></line>
                                <line x1="8" y1="20" x2="8" y2="8"></line>
                                <line x1="12" y1="20" x2="12" y2="4"></line>
                            </svg>
                        </div>
                        <div class="use-case-content">
                            <h3 class="use-case-title">Hedge Funds</h3>
                            <p class="use-case-description">Spot opportunities before earnings</p>
                        </div>
                    </a>
                    <a href="/venture-capital" class="use-case-card liquid" role="menuitem">
                        <div class="use-case-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                                <path d="M2 17l10 5 10-5"></path>
                                <path d="M2 12l10 5 10-5"></path>
                            </svg>
                        </div>
                        <div class="use-case-content">
                            <h3 class="use-case-title">Venture Capital</h3>
                            <p class="use-case-description">Find emerging unicorns before consensus</p>
                        </div>
                    </a>
                    <a href="/private-equity" class="use-case-card liquid" role="menuitem">
                        <div class="use-case-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                                <line x1="9" y1="3" x2="9" y2="21"></line>
                                <line x1="3" y1="9" x2="21" y2="9"></line>
                            </svg>
                        </div>
                        <div class="use-case-content">
                            <h3 class="use-case-title">Private Equity</h3>
                            <p class="use-case-description">Find undervalued targets first</p>
                        </div>
                    </a>
                    <a href="/asset-managers" class="use-case-card liquid" role="menuitem">
                        <div class="use-case-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <div class="use-case-content">
                            <h3 class="use-case-title">Asset Managers</h3>
                            <p class="use-case-description">Generate systematic alpha at scale</p>
                        </div>
                    </a>
                </div>
                
                <!-- Right Column -->
                <div class="use-cases-column">
                    <a href="/quant-researchers" class="use-case-card liquid" role="menuitem">
                        <div class="use-case-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="20" x2="18" y2="10"></line>
                                <line x1="12" y1="20" x2="12" y2="4"></line>
                                <line x1="6" y1="20" x2="6" y2="14"></line>
                            </svg>
                        </div>
                        <div class="use-case-content">
                            <h3 class="use-case-title">Quants</h3>
                            <p class="use-case-description">Build factors from 15+ data sources</p>
                        </div>
                    </a>
                    <a href="/corporates" class="use-case-card liquid" role="menuitem">
                        <div class="use-case-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                        </div>
                        <div class="use-case-content">
                            <h3 class="use-case-title">Corporates</h3>
                            <p class="use-case-description">Benchmark competitors in real-time</p>
                        </div>
                    </a>
                    <a href="/governments" class="use-case-card liquid" role="menuitem">
                        <div class="use-case-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <line x1="9" y1="22" x2="9" y2="12"></line>
                                <line x1="15" y1="22" x2="15" y2="12"></line>
                            </svg>
                        </div>
                        <div class="use-case-content">
                            <h3 class="use-case-title">Governments</h3>
                            <p class="use-case-description">Detect crises before they happen</p>
                        </div>
                    </a>
                    <a href="/investor-relations" class="use-case-card liquid" role="menuitem">
                        <div class="use-case-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="3" width="7" height="7"></rect>
                                <rect x="14" y="3" width="7" height="7"></rect>
                                <rect x="14" y="14" width="7" height="7"></rect>
                                <rect x="3" y="14" width="7" height="7"></rect>
                            </svg>
                        </div>
                        <div class="use-case-content">
                            <h3 class="use-case-title">Investor Relations</h3>
                            <p class="use-case-description">Control your narrative</p>
                        </div>
                    </a>
                </div>
            </div>
            
            <!-- Footer Text with Links -->
            <div class="datasets-footer">
                <p class="datasets-footer-text">
                    Alternative datasets available through 
                    <a href="/find-your-plan" class="datasets-footer-link">Platform</a>, 
                    <a href="/find-your-plan?tab=data" class="datasets-footer-link">API</a> 
                    and 
                    <a href="/find-your-plan?tab=data" class="datasets-footer-link">MCP</a>.
                </p>
            </div>
        </template>
        
        <template id="datasets-menu-template">
            <div class="datasets-columns-container">
                <!-- Column 1 - 4 items -->
                <div class="use-cases-column">
                    <a href="/datasets/google-search-trends" class="use-case-card liquid" role="menuitem">
                        <div class="use-case-icon">
                            <img src="/static/assets/icons/google.svg" alt="Google Search">
                        </div>
                        <div class="use-case-content">
                            <h3 class="use-case-title">Google Search</h3>
                            <p class="use-case-description">Search volume trends</p>
                        </div>
                    </a>
                    <a href="/datasets/google-images" class="use-case-card liquid" role="menuitem">
                        <div class="use-case-icon">
                            <img src="/static/assets/icons/image.svg" alt="Google Images">
                        </div>
                        <div class="use-case-content">
                            <h3 class="use-case-title">Google Images</h3>
                            <p class="use-case-description">Image search trends</p>
                        </div>
                    </a>
                    <a href="/datasets/google-news" class="use-case-card liquid" role="menuitem">
                        <div class="use-case-icon">
                            <img src="/static/assets/icons/news.svg" alt="Google News">
                        </div>
                        <div class="use-case-content">
                            <h3 class="use-case-title">Google News</h3>
                            <p class="use-case-description">News search volume</p>
                        </div>
                    </a>
                    <a href="/datasets/google-shopping" class="use-case-card liquid" role="menuitem">
                        <div class="use-case-icon">
                            <img src="/static/assets/icons/shopping.svg" alt="Google Shopping">
                        </div>
                        <div class="use-case-content">
                            <h3 class="use-case-title">Google Shopping</h3>
                            <p class="use-case-description">Shopping search trends</p>
                        </div>
                    </a>
                </div>

                <!-- Column 2 - 4 items -->
                <div class="use-cases-column">
                    <a href="/datasets/youtube-search" class="use-case-card liquid" role="menuitem">
                        <div class="use-case-icon">
                            <img src="/static/assets/icons/youtube.svg" alt="YouTube">
                        </div>
                        <div class="use-case-content">
                            <h3 class="use-case-title">YouTube</h3>
                            <p class="use-case-description">Video search trends</p>
                        </div>
                    </a>
                    <a href="/datasets/wikipedia-analytics" class="use-case-card liquid" role="menuitem">
                        <div class="use-case-icon">
                            <img src="/static/assets/icons/wikipedia.svg" alt="Wikipedia">
                        </div>
                        <div class="use-case-content">
                            <h3 class="use-case-title">Wikipedia</h3>
                            <p class="use-case-description">Page view analytics</p>
                        </div>
                    </a>
                    <a href="/datasets/tiktok-trends" class="use-case-card liquid" role="menuitem">
                        <div class="use-case-icon">
                            <img src="/static/assets/icons/tiktok.svg" alt="TikTok">
                        </div>
                        <div class="use-case-content">
                            <h3 class="use-case-title">TikTok</h3>
                            <p class="use-case-description">Hashtag trends</p>
                        </div>
                    </a>
                    <a href="/datasets/reddit-analytics" class="use-case-card liquid" role="menuitem">
                        <div class="use-case-icon">
                            <img src="/static/assets/icons/reddit.svg" alt="Reddit">
                        </div>
                        <div class="use-case-content">
                            <h3 class="use-case-title">Reddit</h3>
                            <p class="use-case-description">Community analytics</p>
                        </div>
                    </a>
                </div>

                <!-- Column 3 - 4 items (3 datasets + Explore More) -->
                <div class="use-cases-column">
                    <a href="/datasets/news-sentiment-analysis" class="use-case-card liquid" role="menuitem">
                        <div class="use-case-icon">
                            <img src="/static/assets/icons/telescope.svg" alt="News Sentiment">
                        </div>
                        <div class="use-case-content">
                            <h3 class="use-case-title">News Sentiment</h3>
                            <p class="use-case-description">Sentiment analysis</p>
                        </div>
                    </a>
                    <a href="/datasets/news-volume" class="use-case-card liquid" role="menuitem">
                        <div class="use-case-icon">
                            <img src="/static/assets/icons/news.svg" alt="News Volume">
                        </div>
                        <div class="use-case-content">
                            <h3 class="use-case-title">News Volume</h3>
                            <p class="use-case-description">Article volume trends</p>
                        </div>
                    </a>
                    <a href="/datasets/amazon-search" class="use-case-card liquid" role="menuitem">
                        <div class="use-case-icon">
                            <img src="/static/assets/icons/amazon.svg" alt="Amazon">
                        </div>
                        <div class="use-case-content">
                            <h3 class="use-case-title">Amazon</h3>
                            <p class="use-case-description">E-commerce search</p>
                        </div>
                    </a>
                    <a href="/datasets" class="use-case-card liquid" role="menuitem">
                        <div class="use-case-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="16"></line>
                                <line x1="8" y1="12" x2="16" y2="12"></line>
                            </svg>
                        </div>
                        <div class="use-case-content">
                            <h3 class="use-case-title">Explore More Datasets</h3>
                            <p class="use-case-description">View all 15+ data sources</p>
                        </div>
                    </a>
                </div>
            </div>

            <!-- Footer Text with Links -->
            <div class="datasets-footer">
                <p class="datasets-footer-text">
                    Alternative datasets available through 
                    <a href="/find-your-plan" class="datasets-footer-link">Platform</a>, 
                    <a href="/find-your-plan?tab=data" class="datasets-footer-link">API</a> 
                    and 
                    <a href="/find-your-plan?tab=data" class="datasets-footer-link">MCP</a>.
                </p>
            </div>
        </template>

        <template id="research-menu-template">
            <div class="research-articles-container">
                <div class="research-articles-grid" id="navResearchArticles">
                    <!-- Articles will be dynamically loaded here -->
                    <div class="research-loading">Loading articles...</div>
                </div>
            </div>
            
            <!-- Footer Text with Links -->
            <div class="datasets-footer">
                <p class="datasets-footer-text">
                    Subscribe to 
                    <a href="https://research.paradoxintelligence.com" target="_blank" rel="noopener" class="datasets-footer-link"><em>Arbitrage</em></a>, 
                    our weekly research publication.
                </p>
            </div>
        </template>
        
        <!-- Login Button -->
        <div class="public-navbar-login">
            <button class="login-button liquid" aria-label="Log in" onclick="handleLoginClick(event)">
                <span>Log In</span>
            </button>
        </div>

        <!-- Signup Button (Mobile navbar, always visible) -->
        <a href="/signup" class="navbar-signup-mobile" aria-label="Sign up">Sign Up</a>
        
        <!-- Hamburger Menu Button (Mobile only) -->
        <button 
            class="public-navbar-hamburger" 
            id="public-mobile-menu-btn"
            type="button"
            aria-label="Open menu" 
            aria-expanded="false"
            aria-controls="public-mobile-menu">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
        </button>
        
        <!-- Mobile Menu -->
        <div class="public-navbar-mobile-menu" id="public-mobile-menu">
            <a href="/datasets" class="mobile-menu-item">Datasets</a>
            <a href="/find-your-plan" class="mobile-menu-item">Use Cases</a>
            <a href="https://research.paradoxintelligence.com" class="mobile-menu-item" target="_blank" rel="noopener">Research</a>
        </div>
        
        <script>
            function handleLoginClick(e) {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = '/signin';
            }
            
            // Mobile menu toggle
            (function() {
                const menuBtn = document.getElementById('public-mobile-menu-btn');
                const mobileMenu = document.getElementById('public-mobile-menu');
                
                if (menuBtn && mobileMenu) {
                    menuBtn.addEventListener('click', function() {
                        const isOpen = mobileMenu.classList.contains('active');
                        
                        if (isOpen) {
                            mobileMenu.classList.remove('active');
                            menuBtn.setAttribute('aria-expanded', 'false');
                            menuBtn.setAttribute('aria-label', 'Open menu');
                            document.body.style.overflow = '';
                        } else {
                            mobileMenu.classList.add('active');
                            menuBtn.setAttribute('aria-expanded', 'true');
                            menuBtn.setAttribute('aria-label', 'Close menu');
                            document.body.style.overflow = 'hidden';
                        }
                    });
                    
                    // Close menu when clicking a link
                    const menuItems = mobileMenu.querySelectorAll('.mobile-menu-item');
                    menuItems.forEach(item => {
                        item.addEventListener('click', function() {
                            mobileMenu.classList.remove('active');
                            menuBtn.setAttribute('aria-expanded', 'false');
                            menuBtn.setAttribute('aria-label', 'Open menu');
                            document.body.style.overflow = '';
                        });
                    });
                    
                    // Close menu on escape key
                    document.addEventListener('keydown', function(e) {
                        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                            mobileMenu.classList.remove('active');
                            menuBtn.setAttribute('aria-expanded', 'false');
                            menuBtn.setAttribute('aria-label', 'Open menu');
                            document.body.style.overflow = '';
                        }
                    });
                }
            })();
        </script>
    </div>
    

    <!-- Signup Button: Fixed top-right, outside navbar, shown on public pages only -->
    
    <a href="/signup" class="global-signup-btn" aria-label="Sign up">Sign Up</a>
    
    
    <!-- Sidebar & Mobile Menu Button: Show on authenticated pages when user is logged in -->
    

    <div id="loadingOverlay" class="loading-overlay" style="display: none;">
        <img src="/static/assets/images/PARADOX-transparant-white.svg" 
             alt="Loading" 
             title="Paradox Intelligence White Logo"
             class="loading-image"
             width="120"
             height="40"
             decoding="async">
    </div>
    
    <script>
    !function() {
        try {
            var d = document.documentElement;
            d.style.colorScheme = 'dark';
            
            // Fade in body once critical resources are ready
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function() {
                    document.body.classList.add('loaded');
                });
            } else {
                document.body.classList.add('loaded');
            }
        } catch (e) {}
    }()
    </script>
    
    <div class="relative flex flex-col h-full w-full transition-colors main-wrapper main-container min-h-screen" style="overflow-x: hidden; max-width: 100vw;">
        <div class="relative flex h-full max-w-full flex-1 flex-col content-wrapper" style="overflow-x: hidden; max-width: 100vw;">
            <!-- Main Content -->
            <div class="flex-1 main-content-area blog-content-area  pt-0 pl-0">
                
<section class="fiscal-hero-section blog-hero">
<article class="blog-container blog-post">
    <nav class="blog-post-sticky-bar" aria-label="Breadcrumb">
        <a href="/blog" class="blog-back">← Insights</a>
        <time class="blog-post-date" datetime="2026-03-06">March 06, 2026</time>
    </nav>
    <div class="blog-post-header">
        <h1 class="blog-post-title">How to Use Alternative Data to Find Mispriced Polymarket Contracts</h1>
    </div>
    <div class="blog-post-body">
        <p>Prediction markets are efficient -- but not perfectly efficient. Their prices reflect the aggregated beliefs of financially motivated participants, which is a meaningful signal. But those participants are working with incomplete information. Most of them are reading the same news, watching the same price action, and forming views from the same public sources.</p>
<p>Alternative data gives you a different layer of information: what consumers are actually searching for, what social platforms are amplifying, how brand sentiment is moving, what web traffic patterns are doing. When that behavioral evidence diverges from what a prediction market is pricing, there is often a mispricing worth investigating.</p>
<p>This is not about finding an exploit. It is about having a more complete information set than the average participant in the market. That is what alternative data does for equity investing -- and the same logic applies to prediction markets.</p>
<hr />
<h2 id="the-core-idea-behavior-leads-belief">The core idea: behavior leads belief</h2>
<p>Prediction market prices reflect what participants believe will happen. Alternative data reflects what is already happening at a behavioral level. The gap between those two -- belief and behavior -- is where the signal lives.</p>
<p>A few examples of how this plays out:</p>
<ul>
<li>
<p>A Polymarket contract on whether a consumer brand will beat quarterly revenue estimates is pricing a 55% probability of a beat. Your search and app data shows branded search accelerating and app engagement rising sharply in the last six weeks. Behavioral evidence is pointing to a stronger quarter than the market is pricing.</p>
</li>
<li>
<p>A contract on whether a political candidate will win a primary is at 40%. Social data shows their content going viral on TikTok and Reddit engagement spiking well above baseline across key demographics. The crowd has not yet updated.</p>
</li>
<li>
<p>A macro contract on whether a specific economic indicator will come in above consensus is at 50%. News sentiment around the underlying topic has been consistently positive for three weeks, while the contract price has barely moved.</p>
</li>
</ul>
<p>In each case, alternative data provides evidence that the behavioral reality is ahead of what the prediction market is pricing.</p>
<hr />
<h2 id="which-alternative-data-signals-map-to-which-contract-types">Which alternative data signals map to which contract types</h2>
<p>Not all alternative data is relevant to every prediction market. The key is matching the right signal to the right outcome.</p>
<p><strong>Consumer and retail contracts</strong></p>
<p>Polymarket runs markets on retail sales data, consumer confidence, and company-specific revenue outcomes. The most relevant alternative data signals for these are:</p>
<ul>
<li><strong>Amazon and Google search volume</strong> for specific brands or product categories. Rising branded search in the weeks before a quarter closes is one of the strongest leading indicators of consumer demand that is available publicly.</li>
<li><strong>Web and app traffic</strong> for digitally-native brands. Traffic trends in the final weeks of a quarter closely track the revenue that will be reported.</li>
<li><strong>Social engagement on TikTok and Reddit</strong> for consumer brands. A product going viral on TikTok in Q1 is likely to show in consumer demand data for Q1.</li>
</ul>
<p><strong>Macro and policy contracts</strong></p>
<p>Markets on Fed decisions, inflation prints, employment data, and policy outcomes. Relevant signals:</p>
<ul>
<li><strong>News sentiment volume and tone</strong> around the underlying topic. A sustained increase in negative sentiment around inflation, for example, tracked over weeks, often precedes a hawkish data print.</li>
<li><strong>Google Search trends</strong> for economically sensitive terms: mortgage rates, layoffs, job search, specific policy keywords. Search behavior is one of the earliest publicly visible indicators of shifting consumer economic experience.</li>
<li><strong>Wikipedia page views</strong> for policy-relevant topics. Spikes in Wikipedia traffic for topics like "Federal Reserve" or "interest rates" often precede market-moving events by days.</li>
</ul>
<p><strong>Company-specific outcome contracts</strong></p>
<p>Markets on earnings beats, executive departures, regulatory decisions, or product launches. Relevant signals:</p>
<ul>
<li><strong>Multi-source search data</strong> (Google, Amazon, YouTube) to track demand or awareness for the company's core products in the relevant period.</li>
<li><strong>App intelligence data</strong> for companies with significant mobile presence -- download trends and DAU changes in the weeks before an earnings event.</li>
<li><strong>News and text sentiment</strong> to detect narrative shifts that are not yet priced into either the equity or the prediction market.</li>
</ul>
<p><strong>Political and event contracts</strong></p>
<p>Markets on election outcomes, geopolitical events, regulatory decisions. The most relevant signals:</p>
<ul>
<li><strong>Google Search trends</strong> for candidate names, party names, or policy keywords by region. Search volume is a leading indicator of voter engagement and enthusiasm that polls often miss.</li>
<li><strong>Social volume and sentiment on Reddit and TikTok</strong> for political topics and candidate content. Organic social amplification, particularly when it is growing faster than news coverage, is often an early signal of shifting momentum.</li>
<li><strong>News sentiment divergence</strong> -- when news coverage is uniformly negative about a candidate but prediction market odds are holding steady, one of the two is wrong. Alternative data can help identify which.</li>
</ul>
<hr />
<h2 id="a-practical-framework-for-using-alt-data-on-prediction-markets">A practical framework for using alt data on prediction markets</h2>
<p><strong>Step 1: Identify the behavioral driver of the outcome</strong></p>
<p>For any prediction market contract, ask: what is the underlying behavioral or economic variable that will determine this outcome? A retail sales contract is ultimately driven by consumer demand. A company earnings contract is driven by product demand and execution. A political contract is driven by voter behavior and engagement. That variable is what you want to measure with alternative data.</p>
<p><strong>Step 2: Find the right signal and time window</strong></p>
<p>Match the contract to the relevant data source and look at the right time window. For a quarterly earnings contract, the relevant window is the quarter being reported, particularly the final four to six weeks when demand is most concentrated. For a macro data release, look at the four weeks preceding the reference period end date.</p>
<p><strong>Step 3: Compare the behavioral evidence to the contract price</strong></p>
<p>If your alternative data is pointing consistently in one direction and the contract price has not moved to reflect it, you have a candidate mispricing. The strength of the signal increases when multiple data sources agree: search, social, and web traffic all pointing the same direction is stronger than any single source alone.</p>
<p><strong>Step 4: Check for information that would explain the gap</strong></p>
<p>Before concluding you have found a mispricing, check whether there is obvious news or market information that would explain why the contract price diverges from your behavioral data. Sometimes the market knows something that behavioral data does not capture: a private guidance update, a regulatory development, a known methodology change in the underlying data series. Rule out known explanations before acting on the divergence.</p>
<p><strong>Step 5: Size the position relative to your confidence and the market's liquidity</strong></p>
<p>Prediction market positions are only as reliable as the market's liquidity. Liquid markets on high-interest events -- Fed decisions, major earnings, well-followed elections -- are more responsive and more reliable than thin markets on niche topics. Weight your position accordingly.</p>
<hr />
<h2 id="where-polymarket-specific-alternative-data-fits-in">Where Polymarket-specific alternative data fits in</h2>
<p>The ICE-Polymarket Signals and Sentiment product, launched in February 2026, packages Polymarket's on-chain data and maps it to securities and sectors via ICE's entity databases. This is useful for understanding what prediction markets are pricing across a broad set of contracts at scale.</p>
<p>But the edge in using prediction markets effectively is not in having access to the prediction market data itself -- it is in having better behavioral intelligence than the other participants in the market. That means search trends, app data, social signals, and news sentiment that the average Polymarket participant is not systematically tracking.</p>
<p><a href="https://www.paradoxintelligence.com">Paradox Intelligence</a> provides the behavioral alternative data layer that complements prediction market analysis: Google search, Amazon search, YouTube, TikTok, Reddit, web traffic, Wikipedia, and news sentiment, all normalised and mapped to companies, sectors, and investable themes. For the full dataset catalog, see <a href="https://www.paradoxintelligence.com/datasets">Datasets</a>.</p>
<hr />
<h2 id="related-resources">Related resources</h2>
<ul>
<li><a href="https://www.paradoxintelligence.com/blog/prediction-markets-alternative-data-ice-polymarket-2026">Prediction Markets for Investors: How to Use Polymarket Data and Alternative Data Together</a></li>
<li><a href="https://www.paradoxintelligence.com/blog/alternative-data-sources-hedge-funds-2026">5 Alternative Data Sources Hedge Funds Use Most</a></li>
<li><a href="https://www.paradoxintelligence.com/blog/amazon-search-intelligence-investors-2026">Amazon Search Intelligence for Investors</a></li>
<li><a href="https://www.paradoxintelligence.com/blog/app-intelligence-data-investment-research-2026">App Intelligence Data for Investors</a></li>
<li><a href="https://www.paradoxintelligence.com/blog/hedge-fund-intelligence-alternative-data-2026">Hedge Fund Intelligence: How Leading Funds Use Alternative Data</a></li>
</ul>
<hr />
<h2 id="-find-your-plan">- <a href="https://www.paradoxintelligence.com/find-your-plan">Find Your Plan</a></h2>
<p><em>This post is for institutional investors and research professionals. It is not investment advice.</em></p>
    </div>
    <footer class="blog-post-footer">
        <a href="/blog">← All insights</a>
        &nbsp;·&nbsp;
        <a href="https://research.paradoxintelligence.com">Research</a>
    </footer>

</article>
<div class="blog-post-subscribe-wrapper">
    <a href="/" aria-label="Paradox Intelligence" class="blog-post-subscribe-logo-link">
        <img src="/static/assets/images/Logo%20new.png"
             alt="Paradox Intelligence"
             class="blog-post-subscribe-logo"
             loading="lazy">
    </a>
    <div class="blog-post-subscribe-box">
        <form
            class="footer-signup-form"
            action="https://research.paradoxintelligence.com/api/v1/free"
            method="post"
            target="_blank"
        >
            <input
                type="email"
                name="email"
                class="footer-signup-input"
                placeholder="name@firm.com"
                autoComplete="email"
                required
            />
            <button type="submit" class="footer-signup-button">Get updates</button>
        </form>
    </div>
</div>
</section>

<!-- Final CTA Section -->
<section class="fiscal-final-cta">
    <div class="fiscal-section-content">
        <div class="fiscal-cta-content">
            <h3 class="fiscal-cta-subheader">BUILT BY INVESTORS, FOR INVESTORS</h3>
            <div class="fiscal-cta-buttons">
                <a href="/contact-sales" class="btn-white">
                    Get Access
                </a>
                <a href="/book-call" class="btn-black">
                    Schedule Demo
                </a>
            </div>
        </div>
    </div>
</section>



<!-- Footer Section -->
<footer class="fiscal-footer">
    <div class="fiscal-section-content">
        <div class="fiscal-footer-content">
            <!-- Brand + Mission standalone section under the research disclaimer -->
            
            <!-- Footer Links Grid: four equal columns (Products, Data Sets, Solutions, Resources) -->
            <div class="fiscal-footer-grid">
                <div class="fiscal-footer-column fiscal-footer-brand-column">
                    <ul>
                        <div class="brand-mission-row">
                            <a href="/" class="navbar-brand-link" aria-label="Paradox Intelligence Home">
                                <img src="/static/assets/images/Logo%20new2.png"
                                     alt="Paradox Intelligence"
                                     class="navbar-logo-img"
                                     loading="lazy"
                                     decoding="async">
                            </a>
                        </div>
                        <p class="fiscal-footer-brand-tagline">Alternative data products serving investors worldwide</p>
                    </ul>
                </div>

                <div class="fiscal-footer-column">
                    <h4>Solutions</h4>
                    <ul>
                        <li><a href="/hedge-funds">Hedge Funds</a></li>
                        <li><a href="/venture-capital">Venture Capital</a></li>
                        <li><a href="/private-equity">Private Equity</a></li>
                        <li><a href="/asset-managers">Asset Managers</a></li>
                        <li><a href="/quant-researchers">Quant Researchers</a></li>
                        <li><a href="/corporates">Corporates</a></li>
                        <li><a href="/governments">Government</a></li>
                        <li><a href="/investor-relations">Investor Relations</a></li>
                    </ul>
                </div>
                
                <div class="fiscal-footer-column">
                    <h4><a href="/datasets">Data Sets</a></h4>
                    <ul>
                        <li><a href="/datasets/google-search-trends">Google Search</a></li>
                        <li><a href="/datasets/google-images">Google Images</a></li>
                        <li><a href="/datasets/google-news">Google News</a></li>
                        <li><a href="/datasets/google-shopping">Google Shopping</a></li>
                        <li><a href="/datasets/youtube-search">YouTube Search</a></li>
                        <li><a href="/datasets/wikipedia-analytics">Wikipedia Page Visits</a></li>
                        <li><a href="/datasets/tiktok-trends">TikTok Trends</a></li>
                        <li><a href="/datasets/reddit-analytics">Reddit Analytics</a></li>
                        <li><a href="/datasets/amazon-search">Amazon Search Trends</a></li>
                        <li><a href="/datasets/news-sentiment-analysis">News Sentiment</a></li>
                        <li><a href="/datasets/news-volume">News Volume</a></li>
                    </ul>
                    <p class="fiscal-footer-datasets-note"><a href="/datasets">Explore all of the datasets.</a></p>
                </div>

                <!-- Solutions column placed to the right of Data Sets -->
                <div class="fiscal-footer-column">
                    <h4>Products</h4>
                    <ul>
                        <li><a href="/find-your-plan">Platform Access</a></li>
                        <li><a href="/alpha-agent">Alpha Agent</a></li>
                        <li><a href="/data-science">Data Science</a></li>
                        <li><a href="/data-analytics">Data Analytics</a></li>
                        <li><a href="/ai-analytics">AI Analytics</a></li>
                        <li><a href="/predictive-analytics">Predictive Analytics</a></li>
                        <li><a href="/data-monetization">Data Monetization</a></li>
                    </ul>
                </div>
                <div class="fiscal-footer-column footer-resources">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="https://research.paradoxintelligence.com" target="_blank" rel="noopener">Research</a></li>
                        <li><a href="/apis">API Docs</a></li>
                        <li><a href="/book-call">Schedule Demo</a></li>
                        <li><a href="/contact-sales">Contact Sales</a></li>
                    </ul>
                    <div class="footer-signup">
                        <form
                            class="footer-signup-form"
                            action="https://research.paradoxintelligence.com/api/v1/free"
                            method="post"
                            target="_blank"
                        >
                            <input
                                type="email"
                                name="email"
                                class="footer-signup-input"
                                placeholder="name@firm.com"
                                autoComplete="email"
                                required
                            />
                            <button type="submit" class="footer-signup-button">Get updates</button>
                        </form>
                    </div>
                </div>
                </div>
        </div>



        <!-- Footer Bottom -->
        <div class="fiscal-footer-bottom">
            <div class="fiscal-footer-legal">
                <p>&copy; 2026 Paradox Intelligence. New York. All rights reserved.</p>
                
                <!-- Social Links -->
                
                <div class="fiscal-footer-legal-links">
                    <a href="/cdn-cgi/l/email-protection#6e0d01001a0f0d1a2e1e0f1c0f0a011607001a0b020207090b000d0b400d0103">Contact Us</a>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/terms">Terms of Service</a>
                </div>

                <div class="fiscal-footer-social">
                    <a href="https://x.com/theparadoxintel?s=21" target="_blank" rel="noopener" class="social-link" aria-label="Follow us on X/Twitter">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/paradoxintelligence/" target="_blank" rel="noopener" class="social-link" aria-label="Follow us on LinkedIn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>
 

            </div>
        </div>
        
    </div>
    
    <!-- Content outside the main flow, like modals -->
    
    

    
    <!-- Public navigation scripts for public pages -->
    
    <!-- Public pages: login button behavior -->
    <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script src="/static/shared/js/loginButton.js"></script>
    
    
    <!-- Content block for additional scripts -->
    
    
    <!-- Minimal critical JavaScript inline -->
    <script>
        // CSRF Token for AJAX requests
        window.csrfToken = "ImZkOWU3ODNjYzdhMTg3NGQ2YzQ4MWZiZWJkZjUyNjhlODI2Y2Q5Mjgi.abNnaQ._VzapqJ0Hp9XCrORwBV807yZ98I";
        
        // User tier information for client-side access control
        // Initialize from server-rendered data attributes
        // Note: Homepage clears session server-side, so this will always be 'free' and 'false' on homepage
        window.userTier = document.body?.dataset?.userTier || 'free';
        window.isLoggedIn = document.body?.dataset?.isLoggedIn === 'true';
        
        // When session expires, any 401 from our app should redirect to login instead of leaving the page broken.
        // Only add next= for protected paths; public pages (/, /find-your-plan, /contact-sales, etc.) must not
        // redirect back after login or guests get locked.
        (function installFetchRedirectOn401() {
            var path = window.location.pathname;
            if (path === '/login' || path === '/signin' || path === '/' || path === '') return;
            var publicPaths = ['/', '/find-your-plan', '/contact-sales', '/book-call', '/datasets', '/signin', '/access-request', '/about', '/terms', '/privacy', '/apis', '/earnings'];
            var isPublicPath = function(fullPath) {
                var pathOnly = (fullPath || '').split('?')[0] || '/';
                if (pathOnly === '/' || pathOnly === '') return true;
                return publicPaths.some(function(prefix) { return pathOnly === prefix || (prefix !== '/' && pathOnly.indexOf(prefix + '/') === 0); });
            };
            var origFetch = window.fetch;
            window.fetch = function() {
                return origFetch.apply(this, arguments).then(function(response) {
                    if (response.status === 401) {
                        var currentPath = (window.location.pathname || '') + (window.location.search || '');
                        if (currentPath !== '/login' && currentPath !== '/signin' && currentPath.indexOf('/login') !== 0 && currentPath.indexOf('/signin') !== 0) {
                            var target = isPublicPath(currentPath) ? '/signin' : ('/signin?next=' + encodeURIComponent(currentPath));
                            window.location.href = target;
                        }
                    }
                    return response;
                });
            };
        })();
        
        // Validate session state on page load to prevent stale sessions
        // This ensures client-side state matches server-side session state
        // SKIP validation on homepage (/) to prevent reload loops - homepage is public and doesn't need strict validation
        (function validateSessionOnLoad() {
            // Skip validation on homepage - it's a public page (session is cleared server-side)
            if (window.location.pathname === '/' || window.location.pathname === '') {
                // Still dispatch event for React components but don't validate
                const event = new CustomEvent('authStateValidated', {
                    detail: {
                        isLoggedIn: window.isLoggedIn,
                        userTier: window.userTier
                    }
                });
                window.dispatchEvent(event);
                return;
            }
            
            const currentClientState = {
                isLoggedIn: window.isLoggedIn,
                userTier: window.userTier || 'free'
            };
            
            fetch('/auth/check', {
                method: 'GET',
                credentials: 'same-origin',
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                // Session expired or invalid - redirect to login so the page doesn't just stop working
                if (currentClientState.isLoggedIn) {
                    const path = (window.location.pathname || '') + (window.location.search || '');
                    if (path !== '/login' && path !== '/signin' && !path.startsWith('/login') && !path.startsWith('/signin')) {
                        sessionStorage.removeItem('reloadCount');
                        window.location.href = '/login?next=' + encodeURIComponent(path || '/');
                        return new Promise(function() {}); // never resolve so rest of chain does not run
                    }
                }
                return { authenticated: false, user_tier: 'free' };
            })
            .then(data => {
                if (!data || data.authenticated === undefined) return; // redirect happened
                const serverIsLoggedIn = data && data.authenticated === true;
                const serverUserTier = (data && data.user_tier) || (data && data.tier) || 'free';
                
                // Update client state to match server
                window.isLoggedIn = serverIsLoggedIn;
                window.userTier = serverUserTier;
                
                if (document.body) {
                    document.body.setAttribute('data-is-logged-in', serverIsLoggedIn ? 'true' : 'false');
                    document.body.setAttribute('data-user-tier', serverUserTier);
                }
                
                // If there's a mismatch between client and server state, reload to ensure consistency
                // This handles cases like Stripe redirects where session was cleared but client state is stale
                // CRITICAL: Only reload on LOGIN STATE mismatch (logged in vs logged out), not tier changes
                const loginStateMismatch = currentClientState.isLoggedIn !== serverIsLoggedIn;
                const reloadCount = parseInt(sessionStorage.getItem('reloadCount') || '0');
                
                // Prevent infinite reload loops - max 2 reloads
                if (loginStateMismatch && reloadCount < 2) {
                    sessionStorage.setItem('reloadCount', (reloadCount + 1).toString());
                    console.log('Session login state mismatch detected. Client:', currentClientState, 'Server:', { isLoggedIn: serverIsLoggedIn, userTier: serverUserTier });
                    console.log('Reloading page to ensure consistent authentication state...');
                    setTimeout(() => {
                        window.location.reload();
                    }, 100);
                } else {
                    if (!loginStateMismatch) {
                        sessionStorage.removeItem('reloadCount');
                    }
                    const event = new CustomEvent('authStateValidated', {
                        detail: {
                            isLoggedIn: serverIsLoggedIn,
                            userTier: serverUserTier
                        }
                    });
                    window.dispatchEvent(event);
                }
            })
            .catch(error => {
                console.error('Session validation error:', error);
                // On error, default to logged out for security
                window.isLoggedIn = false;
                window.userTier = 'free';
                if (document.body) {
                    document.body.setAttribute('data-is-logged-in', 'false');
                    document.body.setAttribute('data-user-tier', 'free');
                }
                // If client thought it was logged in but validation failed, redirect to login so page doesn't stop working
                if (currentClientState.isLoggedIn) {
                    const path = (window.location.pathname || '') + (window.location.search || '');
                    if (path !== '/login' && path !== '/signin' && !path.startsWith('/login') && !path.startsWith('/signin')) {
                        sessionStorage.removeItem('reloadCount');
                        window.location.href = '/login?next=' + encodeURIComponent(path || '/');
                    }
                }
            });
        })();
        
        // Handle return from Stripe Customer Portal
        (function handlePortalReturn() {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('subscription_updated') === '1') {
                // Remove the query parameter
                const cleanUrl = window.location.pathname;
                window.history.replaceState({}, document.title, cleanUrl);
                
                console.log('Returned from Stripe portal - refreshing subscription status...');
                
                // Force refresh page to get updated session data from server
                // This ensures userTier and all UI elements reflect the latest subscription status
                setTimeout(() => {
                    window.location.reload(true);
                }, 100);
            }
        })();
        
        // Stripe Price IDs for React components
        window.stripePriceIds = {
            professionalMonthly: 'price_1SdxHZBsNYLOVuLMOgc81pFF',
            professionalYearly: 'price_1SdxHZBsNYLOVuLMQKMEzAtC'
        };
        
        // Global function to start free trial / upgrade to Professional
        window.startFreeTrial = async function(source = 'sidebar') {
            try {
                // Track trial initiation from sidebar/nav
                if (window.gtag) {
                    window.gtag('event', 'begin_checkout', {
                        currency: 'USD',
                        value: 99.00,
                        items: [{
                            item_id: 'professional_monthly',
                            item_name: 'Professional Monthly',
                            price: 99.00,
                            quantity: 1
                        }],
                        source: source || 'sidebar',
                        coupon: '14_day_trial'
                    });
                }

                const response = await fetch('/stripe/create-checkout-session', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': window.csrfToken || '',
                    },
                    credentials: 'same-origin',
                    body: JSON.stringify({
                        price_id: window.stripePriceIds?.professionalMonthly || 'price_1SdxHZBsNYLOVuLMOgc81pFF',
                        success_url: window.location.href,
                        cancel_url: window.location.href
                    })
                });

                let data;
                try {
                    data = await response.json();
                    console.log('Checkout response:', data);
                } catch (jsonError) {
                    console.error('Error parsing JSON response:', jsonError);
                    const text = await response.text();
                    console.error('Response text:', text);
                    console.error('Response status:', response.status);
                    alert('Failed to start checkout. Please try again.');
                    return;
                }

                if (data.success && data.checkout_url) {
                    // Track successful checkout session creation
                    if (window.gtag) {
                        window.gtag('event', 'checkout_session_created', {
                            method: 'stripe',
                            source: source || 'sidebar'
                        });
                    }
                    window.location.href = data.checkout_url;
                } else if (data.redirect_to_portal && data.portal_url) {
                    // User already has an active subscription, redirect to customer portal
                    console.log('Redirecting to customer portal:', data.portal_url);
                    window.location.href = data.portal_url;
                } else if (data.portal_url) {
                    // Show error message and redirect to portal if available
                    console.log('Redirecting to portal (fallback):', data.portal_url);
                    alert(data.error || 'You already have an active subscription. Redirecting to account management...');
                    window.location.href = data.portal_url;
                } else {
                    console.error('Checkout failed:', data);
                    alert(data.error || 'Failed to start checkout. Please try again.');
                }
            } catch (error) {
                console.error('Error starting checkout:', error);
                alert('Failed to start checkout. Please try again.');
            }
        };
        
        // Define global loading functions
        window.showLoading = function() {
            const overlay = document.getElementById('loadingOverlay');
            if (overlay) {
                // Ensure overlay is directly in body for proper fixed positioning
                if (overlay.parentElement !== document.body) {
                    document.body.appendChild(overlay);
                }
                overlay.style.display = 'flex';
                overlay.classList.remove('hidden');
            }
        };
        
        window.hideLoading = function() {
            const overlay = document.getElementById('loadingOverlay');
            if (overlay) {
                overlay.style.display = 'none';
                overlay.classList.add('hidden');
            }
        };

        window.appLoaded = function() {
            window.hideLoading();
        };
        
        // Ensure loading overlay is hidden on page load and properly positioned
        function ensureLoadingOverlayHidden() {
            const overlay = document.getElementById('loadingOverlay');
            if (overlay) {
                // Ensure overlay is directly in body for proper fixed positioning
                if (overlay.parentElement !== document.body) {
                    document.body.appendChild(overlay);
                }
                overlay.style.display = 'none';
                overlay.classList.add('hidden');
            }
        }
        
        window.addEventListener('DOMContentLoaded', ensureLoadingOverlayHidden);
        
        // Also hide it immediately if page is already loaded
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            ensureLoadingOverlayHidden();
        }


        // Enhanced navigation dropdown functionality with ARIA support
        function toggleNavSection(headerElement) {
            // Only work when sidebar is expanded (not collapsed)
            if (document.body.classList.contains('sidebar-collapsed')) {
                return;
            }
            
            const navSection = headerElement.closest('.nav-section');
            const isExpanded = navSection.classList.contains('expanded');
            const newExpandedState = !isExpanded;
            
            // Update class
            if (newExpandedState) {
                navSection.classList.add('expanded');
            } else {
                navSection.classList.remove('expanded');
            }
            
            // Update ARIA attributes
            headerElement.setAttribute('aria-expanded', newExpandedState);
            
            // Announce state change to screen readers
            const title = headerElement.querySelector('.nav-section-title');
            if (title) {
                const announcement = `${title.textContent} menu ${newExpandedState ? 'expanded' : 'collapsed'}`;
                // Create a live region for screen reader announcement
                const liveRegion = document.createElement('div');
                liveRegion.setAttribute('role', 'status');
                liveRegion.setAttribute('aria-live', 'polite');
                liveRegion.className = 'sr-only';
                liveRegion.textContent = announcement;
                document.body.appendChild(liveRegion);
                setTimeout(() => liveRegion.remove(), 1000);
            }
        }
        
        // Defer non-critical JavaScript loading
        if ('requestIdleCallback' in window) {
            requestIdleCallback(function() {
                loadDeferredScripts();
            });
        } else {
            window.addEventListener('load', loadDeferredScripts);
        }
        
        function loadScript(src) {
            return new Promise(function(resolve) {
                const script = document.createElement('script');
                script.src = src;
                script.defer = true;
                script.onload = resolve;
                script.onerror = function() {
                    console.warn('Deferred script failed to load:', src);
                    resolve();
                };
                document.body.appendChild(script);
            });
        }

        function loadDeferredScripts() {
            // Load runtime first to avoid chunk/runtime race on page bundles
            const pageBundle = document.querySelector('[data-page-bundle]');
            const runtimeBundle = '/static/dist/runtime.bundle.js';
            const sharedBundles = [
                '/static/dist/vendor.bundle.js',
                '/static/dist/common.bundle.js',
                '/static/dist/react.bundle.js'
            ];

            let chain = loadScript(runtimeBundle);
            if (pageBundle && pageBundle.dataset.pageBundle) {
                chain = chain.then(function() {
                    return loadScript(pageBundle.dataset.pageBundle);
                });
            }

            sharedBundles.forEach(function(src) {
                chain = chain.then(function() {
                    return loadScript(src);
                });
            });
            
            // Initialize access portal globally after React bundles load
            // This ensures openAccessPopup is available on all pages when "Open App" is clicked
            // The access portal code is in common.bundle.js (shared across pages)
            // We wait for the bundles to load, then check if initialization is needed
            setTimeout(function() {
                let checkCount = 0;
                const maxChecks = 25; // Check for up to 5 seconds (25 * 200ms)
                
                const checkAndInit = setInterval(function() {
                    checkCount++;
                    
                    // If access portal is already available, we're done
                    if (window.openAccessPopup) {
                        clearInterval(checkAndInit);
                        return;
                    }
                    
                    // Try to initialize if the function is available
                    // This will be available after common.bundle.js loads
                    if (window.initializeAccessPortalGlobally) {
                        try {
                            window.initializeAccessPortalGlobally();
                            clearInterval(checkAndInit);
                        } catch (e) {
                            console.log('Access portal initialization error:', e);
                        }
                    }
                    
                    // Stop checking after max attempts
                    if (checkCount >= maxChecks) {
                        clearInterval(checkAndInit);
                    }
                }, 200);
            }, 500);
        }

        // Sidebar functionality - defined globally so it can be called independently
        const initSidebar = () => {
            const sidebar = document.getElementById('sidebar');
            const body = document.body;
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const overlay = document.getElementById('sidebar-overlay');

            if (!sidebar) {
                return;
            }

            // Desktop hover behavior
            const expandSidebar = () => {
                if (window.innerWidth >= 1024) {
                    body.classList.remove('sidebar-collapsed');
                    body.classList.add('sidebar-expanded');
                }
            };

            const collapseSidebar = () => {
                if (window.innerWidth >= 1024) {
                    body.classList.remove('sidebar-expanded');
                    body.classList.add('sidebar-collapsed');
                }
            };

            // Mobile menu toggle with ARIA support
            const toggleMobileSidebar = () => {
                if (window.innerWidth < 1024) {
                    const isOpen = sidebar.classList.contains('mobile-open');
                    const willBeOpen = !isOpen;
                    
                    if (willBeOpen) {
                        sidebar.classList.add('mobile-open');
                        overlay.classList.add('active');
                        body.classList.add('mobile-sidebar-open');
                        
                        // Update ARIA attributes
                        mobileMenuBtn.setAttribute('aria-expanded', 'true');
                        mobileMenuBtn.setAttribute('aria-label', 'Close navigation menu');
                        
                        // Focus first focusable element in sidebar
                        const firstLink = sidebar.querySelector('a, button');
                        if (firstLink) {
                            setTimeout(() => firstLink.focus(), 100);
                        }
                    } else {
                        sidebar.classList.remove('mobile-open');
                        overlay.classList.remove('active');
                        body.classList.remove('mobile-sidebar-open');
                        
                        // Update ARIA attributes
                        mobileMenuBtn.setAttribute('aria-expanded', 'false');
                        mobileMenuBtn.setAttribute('aria-label', 'Open navigation menu');
                        
                        // Return focus to menu button
                        mobileMenuBtn.focus();
                    }
                }
            };

            // Close mobile sidebar when clicking overlay
            const closeMobileSidebar = () => {
                sidebar.classList.remove('mobile-open');
                overlay.classList.remove('active');
                body.classList.remove('mobile-sidebar-open');
                
                // Update ARIA attributes
                if (mobileMenuBtn) {
                    mobileMenuBtn.setAttribute('aria-expanded', 'false');
                    mobileMenuBtn.setAttribute('aria-label', 'Open navigation menu');
                    mobileMenuBtn.focus();
                }
            };

            // Event listeners
            sidebar.addEventListener('mouseenter', expandSidebar);
            sidebar.addEventListener('mouseleave', collapseSidebar);
            
            if (mobileMenuBtn) {
                mobileMenuBtn.addEventListener('click', toggleMobileSidebar);
            }
            
            if (overlay) {
                overlay.addEventListener('click', closeMobileSidebar);
            }
            
            // Close mobile sidebar when clicking logo or brand text
            const logoLinks = sidebar.querySelectorAll('.sidebar-logo-link, .sidebar-brand-link');
            logoLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    // Only close on mobile when sidebar is open
                    if (window.innerWidth < 1024 && sidebar.classList.contains('mobile-open')) {
                        closeMobileSidebar();
                        // Allow navigation to proceed normally
                    }
                });
            });

            // Close mobile menu on window resize to desktop
            window.addEventListener('resize', () => {
                if (window.innerWidth >= 1024) {
                    sidebar.classList.remove('mobile-open');
                    overlay.classList.remove('active');
                    body.classList.remove('mobile-sidebar-open');
                    if (mobileMenuBtn) {
                        mobileMenuBtn.setAttribute('aria-expanded', 'false');
                        mobileMenuBtn.setAttribute('aria-label', 'Open navigation menu');
                    }
                }
            });
            
            // Keyboard navigation support
            document.addEventListener('keydown', (e) => {
                // Close sidebar with Escape key
                if (e.key === 'Escape' && sidebar.classList.contains('mobile-open')) {
                    e.preventDefault();
                    closeMobileSidebar();
                }
                
                // Trap focus within sidebar when open on mobile
                if (window.innerWidth < 1024 && sidebar.classList.contains('mobile-open')) {
                    if (e.key === 'Tab') {
                        const focusableElements = sidebar.querySelectorAll(
                            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
                        );
                        const firstElement = focusableElements[0];
                        const lastElement = focusableElements[focusableElements.length - 1];
                        
                        // Shift + Tab on first element: focus last element
                        if (e.shiftKey && document.activeElement === firstElement) {
                            e.preventDefault();
                            lastElement.focus();
                        }
                        // Tab on last element: focus first element
                        else if (!e.shiftKey && document.activeElement === lastElement) {
                            e.preventDefault();
                            firstElement.focus();
                        }
                    }
                }
            });
        };

        document.addEventListener("DOMContentLoaded", function() {
            // Shared dropdown menu functionality
            const sharedDropdown = document.getElementById('shared-navbar-dropdown');
            const navButtons = document.querySelectorAll('.nav-button[data-menu]');
            const solutionsTemplate = document.getElementById('solutions-menu-template');
            const useCasesTemplate = document.getElementById('use-cases-menu-template');
            const datasetsTemplate = document.getElementById('datasets-menu-template');
            const researchTemplate = document.getElementById('research-menu-template');
            
            if (!sharedDropdown || !navButtons || navButtons.length === 0 || !solutionsTemplate || !useCasesTemplate || !datasetsTemplate || !researchTemplate) {
                return;
            }
            
            let hoverTimeout;
            let showTimeout;
            let currentMenuType = null;
            
            // Cache cloned template content to avoid re-cloning on every hover
            const templateCache = {
                solutions: null,
                'use-cases': null,
                datasets: null,
                research: null
            };
            
            function getCachedContent(menuType) {
                if (!templateCache[menuType]) {
                    let template;
                    if (menuType === 'solutions') {
                        template = solutionsTemplate;
                    } else if (menuType === 'use-cases') {
                        template = useCasesTemplate;
                    } else if (menuType === 'datasets') {
                        template = datasetsTemplate;
                    } else if (menuType === 'research') {
                        template = researchTemplate;
                    }
                    
                    if (template) {
                        templateCache[menuType] = template.content.cloneNode(true);
                    }
                }
                return templateCache[menuType];
            }
            
            function showDropdown(menuType) {
                // Clear any pending hide/show timeouts
                clearTimeout(hoverTimeout);
                clearTimeout(showTimeout);
                
                // If already showing this menu, do nothing
                if (currentMenuType === menuType && sharedDropdown.classList.contains('active')) {
                    return;
                }
                
                // Use requestAnimationFrame for smoother transitions
                showTimeout = requestAnimationFrame(function() {
                    // Get cached template content
                    const cachedContent = getCachedContent(menuType);
                    if (!cachedContent) {
                        return;
                    }
                    
                    // Populate dropdown with cached content
                    sharedDropdown.innerHTML = '';
                    sharedDropdown.appendChild(cachedContent.cloneNode(true));
                    
                    // Remove any inline display style that might override CSS
                    sharedDropdown.style.display = '';
                    
                    // Update current menu type
                    currentMenuType = menuType;
                    
                    // Show dropdown (CSS handles display: flex via .active class)
                    sharedDropdown.classList.add('active');
                    
                    // Update ARIA attributes for all buttons
                    navButtons.forEach(btn => {
                        const isActive = btn.getAttribute('data-menu') === menuType;
                        btn.setAttribute('aria-expanded', isActive.toString());
                    });
                    
                    // Load articles if Research menu
                    if (menuType === 'research') {
                        loadResearchArticles();
                    }
                });
            }
            
            function loadResearchArticles() {
                const articlesContainer = document.getElementById('navResearchArticles');
                if (!articlesContainer) {
                    return;
                }
                
                // Show loading state
                articlesContainer.innerHTML = '<div class="research-loading">Loading articles...</div>';
                
                // Fetch articles
                fetch('/api/research-articles')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        const articles = data.articles || [];
                        
                        if (articles.length === 0) {
                            articlesContainer.innerHTML = '<div class="research-loading">No articles available</div>';
                            return;
                        }
                        
                        // Show first 3 articles
                        // #endregion
                        articlesContainer.innerHTML = articles.slice(0, 3).map(article => {
                            const imageUrl = article.image || '/static/assets/images/article1.webp';
                            
                            // Clean title - remove CDATA markers if present
                            let cleanTitle = article.title || '';
                            cleanTitle = cleanTitle.replace(/^<!\[CDATA\[/, '').replace(/\]\]>$/, '').trim();
                            
                            // Format date
                            let formattedDate = '';
                            if (article.pubDate) {
                                try {
                                    const date = new Date(article.pubDate);
                                    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                                                   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                                    const day = date.getDate();
                                    const month = months[date.getMonth()];
                                    const year = date.getFullYear();
                                    formattedDate = `${month} ${day}, ${year}`;
                                } catch (e) {
                                    formattedDate = '';
                                }
                            }
                            
                            return `
                                <a href="${article.link}?r=5fmw09" target="_blank" rel="noopener" class="research-article-card liquid" role="menuitem">
                                    <div class="research-article-image">
                                        <img src="${imageUrl}" alt="${cleanTitle}" loading="lazy" decoding="async">
                                    </div>
                                    <div class="research-article-content">
                                        <h3 class="research-article-title">${cleanTitle}</h3>
                                        ${formattedDate ? `<div class="research-article-date">${formattedDate}</div>` : ''}
                                    </div>
                                </a>
                            `;
                        }).join('');
                    })
                    .catch(error => {
                        console.error('Error loading articles:', error);
                        articlesContainer.innerHTML = '<div class="research-loading">Unable to load articles</div>';
                    });
            }
            
            function hideDropdown() {
                clearTimeout(showTimeout);
                hoverTimeout = setTimeout(function() {
                    sharedDropdown.style.display = '';
                    sharedDropdown.classList.remove('active');
                    currentMenuType = null;
                    navButtons.forEach(btn => {
                        btn.setAttribute('aria-expanded', 'false');
                    });
                }, 150); // Slightly increased for better UX
            }
            
            // Attach hover events to navigation buttons
            navButtons.forEach((button) => {
                const menuType = button.getAttribute('data-menu');
                
                if (!menuType) {
                    return;
                }
                
                button.addEventListener('mouseenter', function(e) {
                    clearTimeout(hoverTimeout);
                    showDropdown(menuType);
                });
                
                button.addEventListener('mouseleave', function() {
                    hideDropdown();
                });
            });
            
            // Keep dropdown open when hovering over it
            sharedDropdown.addEventListener('mouseenter', function() {
                clearTimeout(hoverTimeout);
            });
            
            sharedDropdown.addEventListener('mouseleave', function() {
                hideDropdown();
                });
                
                // Close dropdown when clicking outside (with same delay as hover for consistency)
                document.addEventListener('click', function(e) {
                const isNavButton = e.target.closest('.nav-button');
                const isDropdown = e.target.closest('#shared-navbar-dropdown');
                
                if (!isNavButton && !isDropdown) {
                    clearTimeout(hoverTimeout);
                    hoverTimeout = setTimeout(function() {
                        sharedDropdown.style.display = 'none';
                        sharedDropdown.classList.remove('active');
                        currentMenuType = null;
                        navButtons.forEach(btn => {
                            btn.setAttribute('aria-expanded', 'false');
                        });
                    }, 50); // Small delay for consistency
                    }
                });
                
                // Close dropdown on Escape key
                document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && sharedDropdown.classList.contains('active')) {
                    sharedDropdown.style.display = '';
                    sharedDropdown.classList.remove('active');
                    currentMenuType = null;
                    navButtons.forEach(btn => {
                        btn.setAttribute('aria-expanded', 'false');
                    });
                    // Return focus to the active button
                    const activeButton = Array.from(navButtons).find(btn => btn.getAttribute('aria-expanded') === 'true');
                    if (activeButton) {
                        activeButton.focus();
                    }
                    }
                });
                
                // Keyboard navigation: Arrow keys to switch between menus
                document.addEventListener('keydown', function(e) {
                    if (!sharedDropdown.classList.contains('active')) return;
                    
                    const buttons = Array.from(navButtons);
                    const currentIndex = buttons.findIndex(btn => btn.getAttribute('aria-expanded') === 'true');
                    
                    if (e.key === 'ArrowRight' && currentIndex < buttons.length - 1) {
                        e.preventDefault();
                        const nextButton = buttons[currentIndex + 1];
                        const nextMenuType = nextButton.getAttribute('data-menu');
                        if (nextMenuType) {
                            nextButton.focus();
                            showDropdown(nextMenuType);
                        }
                    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
                        e.preventDefault();
                        const prevButton = buttons[currentIndex - 1];
                        const prevMenuType = prevButton.getAttribute('data-menu');
                        if (prevMenuType) {
                            prevButton.focus();
                            showDropdown(prevMenuType);
                        }
                    }
                });
            
            // Copyright year
            const copyrightYearElement = document.getElementById('current-year');
            if (copyrightYearElement) {
                copyrightYearElement.textContent = new Date().getFullYear();
            }


            // Auto-refresh subscription data when sidebar is used
            async function refreshSubscriptionData() {
                try {
                    const response = await fetch('/stripe/refresh-subscription', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-CSRFToken': window.csrfToken || '',
                        },
                        credentials: 'include'
                    });
                    
                    if (response.ok) {
                        const data = await response.json();
                        if (data.success) {
                            // Check if tier changed and reload if needed
                            const currentTierElement = document.querySelector('.tier-badge, [data-tier]');
                            if (currentTierElement) {
                                const currentTier = currentTierElement.textContent?.toLowerCase() || '';
                                if (data.tier && !currentTier.includes(data.tier.toLowerCase())) {
                                    // Tier changed, reload page to update UI
                                    window.location.reload();
                                }
                            }
                        }
                    }
                } catch (error) {
                    console.log('Subscription refresh failed:', error);
                }
            }

            // Refresh subscription data when sidebar is opened/used
            const sidebarToggle = document.getElementById('sidebar-toggle');
            const sidebar = document.getElementById('sidebar');
            
            if (sidebarToggle && sidebar) {
                sidebarToggle.addEventListener('click', function() {
                    // Refresh subscription data when sidebar is opened
                    setTimeout(refreshSubscriptionData, 100);
                });
            }

            // Also refresh on page load if user is authenticated
            if (document.querySelector('.tier-badge, [data-tier]')) {
                refreshSubscriptionData();
            }
        });

        // Initialize sidebar independently - must not be blocked by navbar dropdown checks
        document.addEventListener("DOMContentLoaded", function() {
            initSidebar();
        });

        // Initialize Particles JS only for hero section on index page
        document.addEventListener('DOMContentLoaded', function() {
            const heroParticles = document.getElementById('hero-particles');
            if (heroParticles) {
                particlesJS('hero-particles', {
                    "particles": {
                        "number": {
                            "value": 80,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": ["#FFFFFF", "#F8F8F8", "#E5E5E5"]
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#000000"
                            }
                        },
                        "opacity": {
                            "value": 0.6,
                            "random": true,
                            "anim": {
                                "enable": true,
                                "speed": 1.5,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "enable": true,
                                "speed": 3,
                                "size_min": 0.5,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#FFFFFF",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 1.5,
                            "direction": "none",
                            "random": true,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "grab"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "resize": false
                        },
                        "modes": {
                            "grab": {
                                "distance": 140,
                                "line_linked": {
                                    "opacity": 0.8
                                }
                            },
                            "push": {
                                "particles_nb": 4
                            }
                        }
                    },
                    "retina_detect": true
                });
            }
        });

        // Image Lazy Loading with Intersection Observer
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.01
            });

            // Observe all lazy images
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }

        // Preload critical resources for next page navigation
        const criticalResources = [
            '/static/dist/react.bundle.js',
            '/static/dist/common.bundle.js',
            '/static/dist/vendor.bundle.js'
        ];
        
        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = resource;
            document.head.appendChild(link);
        });

        // Resource hints for external domains
        const externalDomains = ['https://cdn.jsdelivr.net', 'https://fonts.googleapis.com'];
        externalDomains.forEach(domain => {
            const link = document.createElement('link');
            link.rel = 'dns-prefetch';
            link.href = domain;
            document.head.appendChild(link);
        });
    </script>
    
    <!-- LinkedIn Insight Tag -->
    <script type="text/javascript">
    _linkedin_partner_id = "8163994";
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    </script>
    <script type="text/javascript">
    (function(l) {
    if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
    window.lintrk.q=[]}
    var s = document.getElementsByTagName("script")[0];
    var b = document.createElement("script");
    b.type = "text/javascript";b.async = true;
    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    s.parentNode.insertBefore(b, s);})(window.lintrk);
    </script>
    <noscript>
    <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=8163994&fmt=gif" />
    </noscript>
    
    <!--Start of Tawk.to Script-->
    <script type="text/javascript">
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/698fda24f5c6c71c34af2945/1jhcuo853';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
    </script>

    <!-- GitHub Gist Method: Advanced Tawk.to Branding Removal (2026) -->
    <script>
    (function() {
      const processedIframes = new WeakSet();
      const retryTimeouts = new Map();

      const hideTawkElements = (doc) => {
        try {
          if (!doc) return;

          // Avoid duplicate style injection
          if (doc.getElementById("hide-tawk-global")) return;

          const style = doc.createElement("style");
          style.id = "hide-tawk-global";
          style.textContent = `
            a[href*='tawk.to'] { display: none !important; }
            a[href*='utm_source=tawk-messenger'] { display: none !important; }
            a[href*='Add Chat to your website'] { display: none !important; }
            .tawk-dropdown-menu a:last-child { display: none !important; }
            button[role="button"] + div a[href*='tawk.to'] { display: none !important; }
            div[data-v-2fc2d95d] a:last-child { display: none !important; }
            .tawk-icon-popout { display: none !important; }
          `;

          if (doc.head) {
            doc.head.appendChild(style);
          } else if (doc.documentElement) {
            doc.documentElement.appendChild(style);
          }

          // Hide any existing links and pop-out buttons directly
          const links = doc.querySelectorAll('a[href*="tawk.to"], a[href*="utm_source=tawk-messenger"]');
          links.forEach(link => {
            link.style.display = 'none';
            if (link.parentElement) link.parentElement.style.display = 'none';
          });

          const popoutButtons = doc.querySelectorAll('.tawk-icon-popout');
          popoutButtons.forEach(button => {
            button.style.display = 'none';
            if (button.parentElement) button.parentElement.style.display = 'none';
          });
        } catch (e) {
          // Cross-origin iframe – expected
        }
      };

      const processDocument = (doc) => {
        hideTawkElements(doc);

        // Recursively process iframes inside the current document
        try {
          const iframes = doc.querySelectorAll('iframe');
          iframes.forEach(iframe => {
            if (!processedIframes.has(iframe)) {
              processedIframes.add(iframe);
              try {
                if (iframe.contentDocument) {
                  processDocument(iframe.contentDocument);
                }
                iframe.addEventListener('load', () => {
                  try {
                    if (iframe.contentDocument) {
                      processDocument(iframe.contentDocument);
                    }
                  } catch (e) {}
                }, { once: true });
              } catch (e) {}
            }
          });
        } catch (e) {}
      };

      // Start with the main page document
      processDocument(document);

      // Observe the DOM for newly added iframes or elements
      const observer = new MutationObserver((mutations) => {
        hideTawkElements(document);

        for (const mutation of mutations) {
          for (const node of mutation.addedNodes) {
            if (node.nodeName === "IFRAME") {
              if (!processedIframes.has(node)) {
                processedIframes.add(node);
                try {
                  if (node.contentDocument) {
                    processDocument(node.contentDocument);
                  }
                  node.addEventListener('load', () => {
                    try {
                      if (node.contentDocument) {
                        processDocument(node.contentDocument);
                      }
                    } catch (e) {}
                  }, { once: true });
                } catch (e) {}
              }
            }

            // Hide pop-out buttons that appear later
            if (node.nodeType === 1) {
              if (node.matches && node.matches('.tawk-icon-popout')) {
                node.style.display = 'none';
              }
              const popoutButtons = node.querySelectorAll('.tawk-icon-popout');
              popoutButtons.forEach(button => button.style.display = 'none');
            }
          }
        }
      });

      // Wait for DOM to be ready before observing
      const initObserver = () => {
        if (document.body) {
          observer.observe(document.body, {
            childList: true,
            subtree: true
          });
        } else {
          // Retry if body not ready
          setTimeout(initObserver, 100);
        }
      };

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initObserver);
      } else {
        initObserver();
      }

      // Cleanup on page unload
      window.addEventListener("beforeunload", () => {
        observer.disconnect();
        retryTimeouts.forEach(clearTimeout);
        retryTimeouts.clear();
      });
    })();
    </script>
    <!--End of Tawk.to Script-->
    
<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9db73de98e495224',t:'MTc3MzM2NTA5NQ=='};var a=document.createElement('script');a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html> 

```
