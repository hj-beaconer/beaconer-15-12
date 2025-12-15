import Head from "next/head";

const SEO = ({ title, description, keywords, imageUrl, fullUrl, canonicalUrl, structuredData }) => {
  // Ensure canonical URL is absolute
  const getCanonicalUrl = () => {
    if (canonicalUrl?.startsWith('http')) {
      return canonicalUrl; // Already absolute
    }
    
    // Use environment variable or fallback to production domain
    let baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL || 
                  process.env.NEXT_PUBLIC_FRONT_URL || 
                  'https://beaconer.io';
    
    // Ensure baseUrl has protocol
    if (!baseUrl.startsWith('http')) {
      baseUrl = `https://${baseUrl}`;
    }
    
    // Remove trailing slash from baseUrl
    baseUrl = baseUrl.replace(/\/$/, '');
    
    const finalCanonicalUrl = `${baseUrl}${canonicalUrl || ''}`;
    
    // Debug logging in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Canonical URL Debug:', {
        baseUrl,
        canonicalUrl,
        finalCanonicalUrl,
        envFrontendUrl: process.env.NEXT_PUBLIC_FRONTEND_URL,
        envFrontUrl: process.env.NEXT_PUBLIC_FRONT_URL
      });
    }
    
    return finalCanonicalUrl;
  };
 const defaultTitle = "Risk Management In Healthcare | Beaconer";
  const defaultDescription =
    "Beaconer delivers automated third-party risk assessments with real-time scanning. We help organizations identify, measure, and mitigate risks across all vendors and partners.";
  const defaultImage = "https://beaconer.io/og-image.jpg"; // Replace with your actual OG image
  const canonicalUrl12 = fullUrl || "https://beaconer.io";
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title ? `${title}` : defaultTitle}</title>
      <link
        rel="canonical"
        href={getCanonicalUrl()}
      />
      <meta property="og:title" content={title || defaultTitle} />
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonicalUrl12} />
      <meta property="og:image:width" content="740" />
      <meta property="og:image:height" content="493" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl12} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
    </Head>
  );
};

export default SEO;
