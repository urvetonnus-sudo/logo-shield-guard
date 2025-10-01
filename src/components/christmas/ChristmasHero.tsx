import { Button } from "@/components/ui/button";

const ChristmasHero = () => {
  const scrollToOrder = () => {
    document.getElementById('order-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 py-20">
      <div className="container max-w-6xl text-center space-y-8 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Jõulukaart, mis räägib
          <span className="block text-primary mt-2">teie brändi lugu</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Rohkem kui tervitus – professionaalne jõulukaart, mis tugevdab teie ettevõtte visuaalset identiteeti ja loob püsiva emotsionaalse sideme klientidega.
        </p>

        <div className="pt-6">
          <Button 
            size="lg" 
            variant="cta" 
            onClick={scrollToOrder}
            className="text-lg px-8 py-6"
          >
            Telli oma firma jõulukaart
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChristmasHero;
