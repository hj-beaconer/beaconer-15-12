// Sitemap utilities for generating dynamic sitemaps
export const getSitemapUrl = (path) => {
  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL || 'https://beaconer.io';
  return `${baseUrl}${path}`;
};

export const generateSitemapXML = (urls) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;
};

export const getStaticPages = () => {
  const currentDate = new Date().toISOString();
  
  return [
    {
      loc: getSitemapUrl('/home'),
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      loc: getSitemapUrl('/about'),
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      loc: getSitemapUrl('/contact'),
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      loc: getSitemapUrl('/resources/blog'),
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9'
    },
    {
      loc: getSitemapUrl('/resources/template'),
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9'
    }
  ];
};

export const getIndustryPages = () => {
  const currentDate = new Date().toISOString();
  
  const industries = [
    'healthcare-risk-management',
    'financial-services-risk-management', 
    'information-technology-risk-management',
    'law-firm-risk-management',
    'manufacturing-risk-management',
    'retail-risk-management'
  ];
  
  return industries.map(industry => ({
    loc: getSitemapUrl(`/${industry}`),
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.9'
  }));
};

export const getServicePages = () => {
  const currentDate = new Date().toISOString();
  
  const services = [
    'comprehensive-automated-assessments',
    'continuous-attack-surface-scanning',
    'cutting-edge-dark-web-monitoring',
    'cybersecurityaudit',
    'third-party-vendor-risk-management',
    'remediation-process',
    'solution',
    'empowerbusiness'
  ];
  
  return services.map(service => ({
    loc: getSitemapUrl(`/${service}`),
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.8'
  }));
};

export const getOtherPages = () => {
  const currentDate = new Date().toISOString();
  
  return [
    {
      loc: getSitemapUrl('/customer-support'),
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.6'
    },
    {
      loc: getSitemapUrl('/privacy-policy'),
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: '0.3'
    }
  ];
};