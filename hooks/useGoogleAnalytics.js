import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { pageview, event } from '../Utils/googleAnalytics';

// Custom hook for Google Analytics
export const useGoogleAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // Return tracking functions for easy use in components
  return {
    trackEvent: event,
    trackPageView: pageview,
  };
};

// Hook for tracking component interactions
export const useTrackInteraction = (componentName) => {
  const trackClick = (elementName, additionalData = {}) => {
    event({
      action: 'click',
      category: 'interaction',
      label: `${componentName} - ${elementName}`,
      ...additionalData
    });
  };

  const trackView = (elementName) => {
    event({
      action: 'view',
      category: 'engagement',
      label: `${componentName} - ${elementName}`
    });
  };

  const trackSubmission = (formName) => {
    event({
      action: 'form_submit',
      category: 'conversion',
      label: `${componentName} - ${formName}`
    });
  };

  return {
    trackClick,
    trackView,
    trackSubmission
  };
};