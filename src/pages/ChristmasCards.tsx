import SEO from "@/components/SEO";
import ChristmasHero from "@/components/christmas/ChristmasHero";
import ChristmasIntro from "@/components/christmas/ChristmasIntro";
import CardTypes from "@/components/christmas/CardTypes";
import BrandIdentity from "@/components/christmas/BrandIdentity";
import OrderProcess from "@/components/christmas/OrderProcess";
import ChristmasCTA from "@/components/christmas/ChristmasCTA";

const ChristmasCards = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Firma jõulukaardid",
    "description": "Professionaalsed jõulukaardid firmadele - elektrooniline, animeeritud või paberkaart, mis peegeldab teie brändi ja loob emotsionaalse sideme klientidega.",
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
        title="Firma jõulukaardid - Professionaalne bränding ja kujundus"
        description="Telli firmale jõulukaart, mis peegeldab sinu brändi. Elektrooniline, animeeritud või paberkaart - kujundus, mis jääb meelde ja loob emotsionaalse sideme klientidega."
        keywords="firma jõulukaardid, ettevõtte jõulukaart, bränditud jõulukaart, jõulutervitus, ärikingitus"
        structuredData={structuredData}
      />
      <main className="min-h-screen">
        <ChristmasHero />
        <ChristmasIntro />
        <CardTypes />
        <BrandIdentity />
        <OrderProcess />
        <ChristmasCTA />
      </main>
    </>
  );
};

export default ChristmasCards;
