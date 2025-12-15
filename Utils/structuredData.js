export const generateBeaconerStructuredData = (pageType, pageTitle, pageDescription, pageUrl) => {
  // Base organization data
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Beaconer",
    "url": "https://beaconer.io",
    "logo": "https://beaconer.io/Beaconerlogo.png",
    "description": "AI-powered third-party risk assessment and vendor risk management solutions",
    "foundingDate": "2023",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-XXX-XXX-XXXX", // Update with actual phone
      "contactType": "customer service",
      "email": "contact@beaconer.io" // Update with actual email
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://linkedin.com/company/beaconer", // Update with actual social links
      "https://twitter.com/beaconer"
    ]
  };

  // Base WebPage data
  const webPageData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": pageUrl,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Beaconer",
      "url": "https://beaconer.io"
    },
    "about": {
      "@type": "Thing",
      "name": "Third-Party Risk Management",
      "description": "AI-powered solutions for vendor risk assessment and management"
    }
  };

  // Service data for service-related pages
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Third-Party Risk Assessment",
    "provider": {
      "@type": "Organization",
      "name": "Beaconer",
      "url": "https://beaconer.io"
    },
    "description": "Automated third-party risk assessments with real-time scanning to help organizations identify, measure, and mitigate risks across all vendors and partners",
    "serviceType": "Risk Management Software",
    "category": "Cybersecurity Services",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "Contact for pricing",
      "priceCurrency": "USD"
    }
  };

  // Software Application data
  const softwareData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Beaconer Risk Assessment Platform",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based",
    "offers": {
      "@type": "Offer",
      "price": "Contact for pricing",
      "priceCurrency": "USD"
    },
    "description": "AI-powered third-party risk assessment platform with real-time scanning and automated reporting",
    "featureList": [
      "Real-time vendor scanning",
      "Automated risk assessments",
      "Compliance reporting",
      "Dark web monitoring",
      "Continuous attack surface scanning"
    ]
  };

  // Return appropriate structured data based on page type
  switch (pageType) {
    case 'home':
      return [organizationData, webPageData, serviceData, softwareData];
    
    case 'about':
      return [organizationData, webPageData];
    
    case 'contact':
      return [
        organizationData,
        {
          ...webPageData,
          "@type": "ContactPage"
        }
      ];
    
    case 'blog':
      return [
        organizationData,
        {
          ...webPageData,
          "@type": "CollectionPage"
        }
      ];
    
    case 'healthcare':
    case 'financial':
    case 'it':
    case 'legal':
    case 'manufacturing':
      return [
        organizationData,
        webPageData,
        {
          ...serviceData,
          "name": `${pageType.charAt(0).toUpperCase() + pageType.slice(1)} Risk Management`,
          "description": `Specialized third-party risk management solutions for the ${pageType} industry`
        }
      ];
    
    case 'templates':
      return [
        organizationData,
        webPageData,
        {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": "Risk Assessment Templates",
          "description": "Free downloadable templates for third-party risk management and vendor assessments",
          "author": organizationData,
          "license": "https://creativecommons.org/licenses/by/4.0/"
        }
      ];
    
    default:
      return [organizationData, webPageData];
  }
};