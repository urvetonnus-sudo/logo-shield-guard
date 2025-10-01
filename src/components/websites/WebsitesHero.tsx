import { Button } from "@/components/ui/button";

const WebsitesHero = () => {
  const scrollToOrder = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 py-20">
      <div className="container max-w-6xl text-center space-y-8 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Koduleht, mis töötab
          <span className="block text-primary mt-2">ilma IT-stressita</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Loomeinimesele ja väikefirmale sobiv veebileht – esteetiline, professionaalne ja 
          lihtsasti hallatav. Sa ei pea olema tehniliselt orienteeritud, et omada 
          kaunist portfooliot või teenuste lehte.
        </p>

        <div className="pt-6">
          <Button 
            size="lg" 
            variant="cta" 
            onClick={scrollToOrder}
            className="text-lg px-8 py-6"
          >
            Telli oma koduleht
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WebsitesHero;
