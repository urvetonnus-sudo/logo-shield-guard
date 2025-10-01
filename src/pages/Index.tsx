import Hero from "@/components/Hero";
import WhyRegister from "@/components/WhyRegister";
import Requirements from "@/components/Requirements";
import Risks from "@/components/Risks";
import Investment from "@/components/Investment";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyRegister />
      <Requirements />
      <Risks />
      <Investment />
      <CTA />
    </main>
  );
};

export default Index;
