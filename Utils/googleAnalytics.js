// Google Analytics utility functions
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-SZK9SJ9DZD'; // Replace with your actual GA4 tracking ID

// Track page views
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  event({
    action: 'form_submit',
    category: 'engagement',
    label: formName,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName, location) => {
  event({
    action: 'click',
    category: 'engagement',
    label: `${buttonName} - ${location}`,
  });
};

// Track file downloads
export const trackDownload = (fileName, fileType) => {
  event({
    action: 'download',
    category: 'engagement',
    label: `${fileName} - ${fileType}`,
  });
};

// Track external link clicks
export const trackExternalLink = (url) => {
  event({
    action: 'external_link_click',
    category: 'engagement',
    label: url,
  });
};

// Track calendar bookings
export const trackCalendlyBooking = () => {
  event({
    action: 'calendly_booking_initiated',
    category: 'conversion',
    label: 'Demo Booking',
  });
};