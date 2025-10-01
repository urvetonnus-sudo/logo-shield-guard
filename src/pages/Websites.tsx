import SEO from "@/components/SEO";
import WebsitesHero from "@/components/websites/WebsitesHero";
import WhyYouNeed from "@/components/websites/WhyYouNeed";
import ForWhom from "@/components/websites/ForWhom";
import DesignProcess from "@/components/websites/DesignProcess";
import Examples from "@/components/websites/Examples";
import WebsitesCTA from "@/components/websites/WebsitesCTA";

const Websites = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Kodulehed IT võhikutele",
    "description": "Professionaalsed kodulehed kunstnikele ja loomeinimestele, kes ei ole tehniliselt orienteeritud. Portfoolio ja teenuste tutvustamine ilma IT-stressita.",
    "provider": {
      "@type": "Person",
      "name": "Urve Tõnnus",
      "email": "urvetonnus@gmail.com"
    },
    "areaServed": "EE",
    "availableLanguage": "et"
  };

  return (
    <>
      <SEO
        title="Kodulehed IT võhikutele - Portfoolio ja teenuste lehed kunstnikele"
        description="Professionaalsed kodulehed loomeinimestele ja väikefirmadele. Esteetiline, lihtsasti hallatav veebileht portfoolio tutvustamiseks - ilma IT-oskusteta."
        keywords="kodulehed kunstnikele, portfoolio veebileht, koduleht disainerile, koduleht loomeinimesele, koduleht ilma IT-oskusteta"
        structuredData={structuredData}
      />
      <main className="min-h-screen">
        <WebsitesHero />
        <WhyYouNeed />
        <ForWhom />
        <DesignProcess />
        <Examples />
        <WebsitesCTA />
      </main>
    </>
  );
};

export default Websites;
