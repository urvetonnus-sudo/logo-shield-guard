import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEO = ({ title, description, keywords, ogImage, structuredData }: SEOProps) => {
  const location = useLocation();
  const fullTitle = `${title} | Urve Tõnnuse disain`;
  const siteUrl = window.location.origin;
  const currentUrl = `${siteUrl}${location.pathname}`;
  const defaultImage = `${siteUrl}/og-image.jpg`;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Meta tags
    updateMetaTag("description", description);
    if (keywords) updateMetaTag("keywords", keywords);

    // Open Graph
    updateMetaTag("og:title", fullTitle, "property");
    updateMetaTag("og:description", description, "property");
    updateMetaTag("og:url", currentUrl, "property");
    updateMetaTag("og:image", ogImage || defaultImage, "property");
    updateMetaTag("og:type", "website", "property");
    updateMetaTag("og:locale", "et_EE", "property");

    // Twitter Card
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage || defaultImage);

    // Canonical URL
    updateLinkTag("canonical", currentUrl);

    // Structured Data
    if (structuredData) {
      updateStructuredData(structuredData);
    }

    // Google Analytics
    initializeAnalytics();
  }, [title, description, keywords, ogImage, currentUrl, structuredData]);

  return null;
};

const updateMetaTag = (name: string, content: string, attribute: string = "name") => {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const updateLinkTag = (rel: string, href: string) => {
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
};

const updateStructuredData = (data: object) => {
  let script = document.querySelector('script[type="application/ld+json"]');
  if (!script) {
    script = document.createElement("script");
    script.setAttribute("type", "application/ld+json");
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
};

const initializeAnalytics = () => {
  // Google Analytics 4 - Add your GA4 ID here
  const GA4_ID = "G-XXXXXXXXXX"; // Replace with actual ID
  
  if (!window.gtag && GA4_ID !== "G-XXXXXXXXXX") {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA4_ID);
  }
};

// TypeScript declarations
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default SEO;
