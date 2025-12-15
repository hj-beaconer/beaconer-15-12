import { trackCalendlyBooking } from "../Utils/googleAnalytics";

export const handleOpenCalendly = () => {
  if (typeof window !== "undefined" && window.Calendly) {
    // Track the Calendly booking initiation
    trackCalendlyBooking();
    
    window.Calendly.initPopupWidget({
      // url: "https://calendly.com/bhavdeepbtridhyatech/30min",
      url: "https://calendly.com/nagarajkuppuswamy/beaconer-solution-demo",
      
    });
  } else {
    console.error("Calendly widget is not loaded or window is not defined.");
  }
};

if (typeof window !== "undefined") {
  window.handleOpenCalendly = handleOpenCalendly;
}