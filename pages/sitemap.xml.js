import {
  generateSitemapXML,
  getStaticPages,
  getIndustryPages,
  getServicePages,
  getOtherPages
} from '../Utils/sitemapUtils';

// Dynamic sitemap generator for Beaconer
export default function Sitemap() {
  // This component doesn't render anything
  return null;
}

export async function getServerSideProps({ res }) {
  try {
    // Collect all page URLs
    const allPages = [
      ...getStaticPages(),
      ...getIndustryPages(),
      ...getServicePages(),
      ...getOtherPages()
    ];

    // Generate the XML sitemap
    const sitemap = generateSitemapXML(allPages);

    // Set the response headers
    res.setHeader('Content-Type', 'text/xml');
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
    
    // Send the XML sitemap
    res.write(sitemap);
    res.end();

    return {
      props: {},
    };
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.statusCode = 500;
    res.end('Error generating sitemap');
    
    return {
      props: {},
    };
  }
}