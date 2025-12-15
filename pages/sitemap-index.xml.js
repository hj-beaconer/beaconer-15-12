import { getSitemapUrl } from '../Utils/sitemapUtils';

// Sitemap index generator
export default function SitemapIndex() {
  return null;
}

export async function getServerSideProps({ res }) {
  try {
    const currentDate = new Date().toISOString();
    
    // Define all sitemap files
    const sitemaps = [
      {
        loc: getSitemapUrl('/sitemap.xml'),
        lastmod: currentDate
      },
      {
        loc: getSitemapUrl('/sitemap-blog.xml'),
        lastmod: currentDate
      }
    ];

    // Generate sitemap index XML
    const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (sitemap) => `  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`
  )
  .join('\n')}
</sitemapindex>`;

    // Set response headers
    res.setHeader('Content-Type', 'text/xml');
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
    
    res.write(sitemapIndex);
    res.end();

    return { props: {} };
  } catch (error) {
    console.error('Error generating sitemap index:', error);
    res.statusCode = 500;
    res.end('Error generating sitemap index');
    
    return { props: {} };
  }
}