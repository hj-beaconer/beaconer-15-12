import { generateSitemapXML, getSitemapUrl } from '../Utils/sitemapUtils';

// Blog sitemap generator
export default function BlogSitemap() {
  return null;
}

export async function getServerSideProps({ res }) {
  try {
    // This would fetch your blog posts from your API
    // For now, we'll create a placeholder structure
    const blogPosts = [
      // You can uncomment and modify this when you have dynamic blog posts
      // {
      //   slug: 'third-party-risk-management-best-practices',
      //   lastModified: '2024-01-15T00:00:00.000Z'
      // },
      // {
      //   slug: 'cybersecurity-compliance-checklist',
      //   lastModified: '2024-01-10T00:00:00.000Z'
      // },
      // Add more blog posts as needed
    ];

    // Generate blog URLs for sitemap
    const blogUrls = blogPosts.map(post => ({
      loc: getSitemapUrl(`/resources/blog/${post.slug}`),
      lastmod: post.lastModified,
      changefreq: 'monthly',
      priority: '0.7'
    }));

    // Add the main blog page
    const mainBlogUrl = {
      loc: getSitemapUrl('/resources/blog'),
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '0.9'
    };

    const allBlogUrls = [mainBlogUrl, ...blogUrls];

    // Generate the XML sitemap
    const sitemap = generateSitemapXML(allBlogUrls);

    // Set response headers
    res.setHeader('Content-Type', 'text/xml');
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate');
    
    res.write(sitemap);
    res.end();

    return { props: {} };
  } catch (error) {
    console.error('Error generating blog sitemap:', error);
    res.statusCode = 500;
    res.end('Error generating blog sitemap');
    
    return { props: {} };
  }
}