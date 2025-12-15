// SEO and sitemap utility functions

/**
 * Ping search engines to notify them of sitemap updates
 * Call this function after adding new content or updating pages
 */
export const notifySearchEngines = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL || 'https://beaconer.io';
  const sitemapUrl = `${baseUrl}/sitemap.xml`;
  
  const searchEngines = [
    `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
    `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
  ];

  try {
    const promises = searchEngines.map(url => 
      fetch(url).catch(err => console.log(`Failed to notify search engine: ${url}`, err))
    );
    
    await Promise.all(promises);
    console.log('Search engines notified of sitemap update');
  } catch (error) {
    console.error('Error notifying search engines:', error);
  }
};

/**
 * Validate URL format for sitemap
 */
export const validateUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Generate lastmod date in ISO format
 */
export const getLastModified = (date) => {
  if (date instanceof Date) {
    return date.toISOString();
  }
  if (typeof date === 'string') {
    return new Date(date).toISOString();
  }
  return new Date().toISOString();
};

/**
 * Priority values for different page types
 */
export const SITEMAP_PRIORITIES = {
  HOME: '1.0',
  MAIN_SERVICES: '0.9',
  INDUSTRY_PAGES: '0.9',
  BLOG_MAIN: '0.9',
  SERVICES: '0.8',
  ABOUT_CONTACT: '0.8',
  BLOG_POSTS: '0.7',
  SUPPORT: '0.6',
  LEGAL: '0.3'
};

/**
 * Change frequency values
 */
export const CHANGE_FREQUENCIES = {
  ALWAYS: 'always',
  HOURLY: 'hourly',
  DAILY: 'daily',
  WEEKLY: 'weekly',
  MONTHLY: 'monthly',
  YEARLY: 'yearly',
  NEVER: 'never'
};

/**
 * Check if we're in development mode
 */
export const isDevelopment = () => {
  return process.env.NODE_ENV === 'development';
};

/**
 * Get the correct base URL based on environment
 */
export const getBaseUrl = () => {
  if (isDevelopment()) {
    return 'http://localhost:3000';
  }
  
  return process.env.NEXT_PUBLIC_FRONTEND_URL || 'https://beaconer.io';
};