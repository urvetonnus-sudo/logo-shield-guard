import { Quote } from "lucide-react";
import raunoImage from "@/assets/rauno-raag.jpg";

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-accent/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tagasiside
          </h2>
          <p className="text-xl text-muted-foreground">
            Kaubamärgi loomine ja registreerimine
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-card rounded-xl shadow-lg p-8 md:p-12">
          <Quote className="w-12 h-12 text-primary mb-6" />
          
          <div className="space-y-4 mb-8">
            <p className="text-lg leading-relaxed">
              „Koostöö Urvega sujus laitmatult — jõudsime logo ideest kaubamärgi registreerimiseni nädalaga. 
              Ta tabas minu mõtte hetkega ja realiseeris selle mängleva kergusega. Tulemus oli täpselt see, 
              mida vaimusilmas nägin."
            </p>
            
            <p className="text-lg leading-relaxed">
              Urve on detailidele ja tulemustele orienteeritud ning väga teadlik kõigist nüanssidest, 
              mis kaasnevad kaubamärgi registreerimisega. Suhtlus oli vahetu, töö kiire ja kvaliteetne — 
              hinna ja kvaliteedi suhe on suurepärane ning kompromisse ei tehtud.
            </p>
            
            <p className="text-lg leading-relaxed">
              Soovitan teda kindlasti ka teistele. Sellist abi on turul vähe ja kui on, siis sageli palju 
              suuremate kuludega.
            </p>
          </div>

          <div className="flex items-center gap-4 pt-6 border-t border-border">
            <img 
              src={raunoImage} 
              alt="Rauno Raag portree" 
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-lg">Rauno Raag</p>
              <p className="text-muted-foreground">Raag Consulting OÜ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
