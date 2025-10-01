import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-registration.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(135deg, rgba(27, 60, 106, 0.92), rgba(34, 76, 133, 0.88)), url(${heroImage})` 
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Logo ei ole lihtsalt kujund – see on teie brändi õiguslik kaitse
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Registreeritud logo on investeering, mis kaitseb teie ettevõtte identiteeti ja loob usaldust turul.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="cta" size="lg" className="text-lg">
            Telli registreeritav logo
          </Button>
          <Button variant="outline" size="lg" className="text-lg bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white">
            Tutvu nõuetega
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
