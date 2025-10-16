import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import WhyRegister from "@/components/WhyRegister";
import AILogoConsultation from "@/components/AILogoConsultation";
import Requirements from "@/components/Requirements";
import Risks from "@/components/Risks";
import Investment from "@/components/Investment";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Logo kujundus, AI-logo viimistlus ja registreerimine",
    "description": "Professionaalne logo kujundus, AI-logode analüüs ja viimistlus ning kaubamärgi registreerimine Eesti Patendiametis. Täielik teenus logode loomisest, AI-logode vektoriseerimisest ja parandamisest kuni õiguskaitseni.",
    "provider": {
      "@type": "Person",
      "name": "Urve Tõnnus",
      "email": "urvetonnus@gmail.com"
    },
    "areaServed": "EE",
    "availableLanguage": "et",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "itemOffered": [
        {
          "@type": "Service",
          "name": "AI-logo viimistlus ja vektoriseerimine",
          "description": "AI-ga loodud logode professionaalne viimistlus, vektoriseerimine ja registreerimiskõlblikuks muutmine"
        },
        {
          "@type": "Service",
          "name": "Logo kujundus ja registreerimine",
          "description": "Professionaalne logo loomine ja kaubamärgi registreerimine Patendiametis"
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title="Logo kujundus ja registreerimine - AI-logo viimistlus ja analüüs"
        description="Professionaalne logo kujundus, AI-logo viimistlus ja vektoriseerimine ning kaubamärgi registreerimine Patendiametis. Täielik teenus logode loomisest ja AI-logode parandamisest kuni õiguskaitseni."
        keywords="logo kujundus, kaubamärgi registreerimine, AI logo viimistlus, logo vektoriseerimine, logo analüüs, patendiamet, bränding, visuaalne identiteet, Midjourney logo, Canva logo"
        structuredData={structuredData}
      />
      <main className="min-h-screen">
        <Hero />
        <WhyRegister />
        <AILogoConsultation />
        <Requirements />
        <Risks />
        <Investment />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
    </>
  );
};

export default Index;
