import { useEffect } from "react";
import ChristmasHero from "@/components/christmas/ChristmasHero";
import ChristmasIntro from "@/components/christmas/ChristmasIntro";
import CardTypes from "@/components/christmas/CardTypes";
import BrandIdentity from "@/components/christmas/BrandIdentity";
import OrderProcess from "@/components/christmas/OrderProcess";
import ChristmasCTA from "@/components/christmas/ChristmasCTA";

const ChristmasCards = () => {
  useEffect(() => {
    document.title = "Firma jõulukaardid | Professionaalne bränding ja kujundus";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Telli firmale jõulukaart, mis peegeldab sinu brändi. Elektrooniline, animeeritud või paberkaart - kujundus, mis jääb meelde ja loob emotsionaalse sideme klientidega."
      );
    }
  }, []);

  return (
    <main className="min-h-screen">
      <ChristmasHero />
      <ChristmasIntro />
      <CardTypes />
      <BrandIdentity />
      <OrderProcess />
      <ChristmasCTA />
    </main>
  );
};

export default ChristmasCards;
