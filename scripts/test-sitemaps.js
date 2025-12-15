// Sitemap verification and testing utility
// Run this in development to test your sitemaps

const testSitemaps = async () => {
  const baseUrl = 'http://localhost:3000'; // Change to your domain for production testing
  
  const sitemapUrls = [
    `${baseUrl}/sitemap.xml`,
    `${baseUrl}/sitemap-blog.xml`,
    `${baseUrl}/sitemap-index.xml`,
    `${baseUrl}/robots.txt`
  ];

  console.log('🔍 Testing Beaconer Sitemaps and Robots.txt...\n');

  for (const url of sitemapUrls) {
    try {
      const response = await fetch(url);
      const content = await response.text();
      
      console.log(`✅ ${url}`);
      console.log(`   Status: ${response.status}`);
      console.log(`   Content-Type: ${response.headers.get('content-type')}`);
      console.log(`   Size: ${content.length} characters`);
      
      if (url.includes('.xml')) {
        const urlCount = (content.match(/<url>/g) || []).length;
        const sitemapCount = (content.match(/<sitemap>/g) || []).length;
        
        if (urlCount > 0) {
          console.log(`   URLs found: ${urlCount}`);
        }
        if (sitemapCount > 0) {
          console.log(`   Sitemaps referenced: ${sitemapCount}`);
        }
      }
      
      console.log('');
    } catch (error) {
      console.log(`❌ ${url}`);
      console.log(`   Error: ${error.message}\n`);
    }
  }

  console.log('🎉 Sitemap testing complete!');
  console.log('\n📋 Next Steps:');
  console.log('1. Submit sitemap.xml to Google Search Console');
  console.log('2. Submit sitemap.xml to Bing Webmaster Tools');
  console.log('3. Monitor indexing status in search console');
  console.log('4. Test robots.txt with Google Search Console robots.txt tester');
};

// Export for use in development
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { testSitemaps };
}

// Run if called directly
if (typeof window === 'undefined' && require.main === module) {
  testSitemaps().catch(console.error);
}