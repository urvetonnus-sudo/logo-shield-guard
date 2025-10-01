import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import WhyRegister from "@/components/WhyRegister";
import Requirements from "@/components/Requirements";
import Risks from "@/components/Risks";
import Investment from "@/components/Investment";
import CTA from "@/components/CTA";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Logo kujundus ja registreerimine",
    "description": "Professionaalne logo kujundus ja kaubamärgi registreerimine Eesti Patendiametis. Täielik teenus logode loomisest kuni õiguskaitseni.",
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
        title="Logo kujundus ja registreerimine - Professionaalne bränding"
        description="Loon teie ettevõttele professionaalse logo ja aitan registreerida kaubamärgi Eesti Patendiametis. Täielik teenus brändi loomisest kuni õiguskaitseni."
        keywords="logo kujundus, kaubamärgi registreerimine, logo disain, patendiamet, bränding, visuaalne identiteet"
        structuredData={structuredData}
      />
      <main className="min-h-screen">
        <Hero />
        <WhyRegister />
        <Requirements />
        <Risks />
        <Investment />
        <CTA />
      </main>
    </>
  );
};

export default Index;
