import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Layout from "./layout";
import { usePathname, useRouter } from "next/navigation";
import { HeaderProvider } from "../Utils/HeaderContext";
import Head from "next/head";
import GoogleAnalytics from "../Components/GoogleAnalytics";
import { pageview } from "../Utils/googleAnalytics";
import "../styles/globals.css";
export const metadata = {
  title: "Risk Management In Healthcare | Beaconer",
  description:
    "Beaconer delivers automated third-party risk assessments with real-time scanning. We help organizations identify, measure, and mitigate risks across all vendors and partners.",
  keywords: [
    "Risk Management In Healthcare",
    "Vendor Insurance",
    "Third Party Vendor",
    "Risk Identification",
    "Security Compliance",
    "Remediation Services",
    "Residual Risk",
    "Cybersecurity Assessment",
    "Security Posture",
    "Vendor Risk Management",
    "Financial Risk Management",
    "Inherent Risk",
    "Security Risk Assessment"
  ],
  alternates: {
    canonical: "https://beaconer.io",
  },
};

export default function MyApp({ Component, pageProps }) {
  // const [showFooter, setShowFooter] = useState(false);
  const router = useRouter();
  const pathName = usePathname();
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    if (pathName.startsWith("/resources")) {
      document.getElementById("__next").style.backgroundColor = "white";
      document.getElementById("__next").style.color = "black";
    } else {
      document.getElementById("__next").style.backgroundColor = "";
      document.getElementById("__next").style.color = "";
    }
  }, [pathName]);

  // Track page views for Google Analytics
  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };

    router.events?.on('routeChangeComplete', handleRouteChange);
    
    // Track initial page load
    if (pathName) {
      pageview(pathName);
    }

    return () => {
      router.events?.off('routeChangeComplete', handleRouteChange);
    };
  }, [pathName, router.events]);

  useEffect(() => {
    const allowedRoutes = [
      "/home",
      "/about",
      "/privacy-policy",
      "/comprehensive-automated-assessments",
      "/blog",
      "/contact",
      "/customer-support",
      "/cutting-edge-dark-web-monitoring",
      "/cybersecurityaudit",
      "/empowerbusiness",
      "/financial-services-risk-management",
      "/healthcare-risk-management",
      "/continuous-attack-surface-scanning",
      "/third-party-vendor-risk-management",
      "/remediation-process",
      "/remediation-process",
      "/solution",
      "/information-technology-risk-management",
      "/resources",
      "/retail-risk-management ",
      "/law-firm-risk-management",
      "/manufacturing-risk-management",
      "/training",
      "/third-party-risk",
      "/compliance",
      "/soc",
      "/cloud-security",
      "/register",
    ];

    const isAllowed = allowedRoutes.some((route) => pathName.startsWith(route));

    if (!isAllowed) {
      router.push("/home");
    }
    if (pathName === "/resources") {
      router.push("/resources/blog");
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // const footerTimeout = setTimeout(() => {
    //   setShowFooter(true);
    // }, 4000);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
      // clearTimeout(footerTimeout);
      setIsPageLoaded(false);
    };
  }, [pathName]);
  return (
    <>
      <GoogleAnalytics />
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Poppins"
        rel="stylesheet"
      />
      <div className="row"> </div>
      <HeaderProvider>
        <Layout>
          <Header />
          <Head>
            <link rel="icon" href="/Vector.png" />
            <meta name="google-site-verification" content="6mL-oaR8Idd5_iF-g85oTB9oYrJX-3VvB35hoZEoCVI" />
          <title>Risk Management In Healthcare | Beaconer</title>
      <meta name="description" content="Beaconer delivers automated third-party risk assessments with real-time scanning. We help organizations identify, measure, and mitigate risks across all vendors and partners." />
      
            {/* <link
              rel="canonical"
              href={`https://staging.beaconer.io${pathName}`}
            /> */}
          </Head>
          <div className={`${!isPageLoaded ? "" : "children_div"}`}>
            <Component {...pageProps} setIsPageLoaded={setIsPageLoaded} />
          </div>
          {!isPageLoaded ? <></> : <Footer />}
        </Layout>
      </HeaderProvider>
    </>
  );
}
