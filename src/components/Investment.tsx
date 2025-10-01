import investmentIcon from "@/assets/icon-investment.jpg";
import { TrendingUp, Shield, Award } from "lucide-react";

const Investment = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Logo kui investeering ja osa brändi väärtusest
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Registreeritud logo on pikaajaline investeering, mis kaitseb teie ettevõtte identiteeti ja suurendab selle väärtust.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card p-8 rounded-lg border border-border text-center hover:shadow-lg transition-shadow duration-300">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Pikaajaline väärtus</h3>
            <p className="text-muted-foreground">
              Registreeritud kaubamärk kehtib 10 aastat ja seda saab lõputult pikendada. Teie investeering kaitseb brändi aastakümneid.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border text-center hover:shadow-lg transition-shadow duration-300">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Õiguslik turvatunne</h3>
            <p className="text-muted-foreground">
              Registreerimine annab teile ainuõiguse ja võimaluse tegutseda koopia või väärnamega kauba vastu kohtlikult.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border text-center hover:shadow-lg transition-shadow duration-300">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Konkurentsieelis</h3>
            <p className="text-muted-foreground">
              Professionaalne, registreeritud logo eristab teid konkurentidest ja loob tugevama brändi identiteedi.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={investmentIcon} 
              alt="Strateegiline investeering" 
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Strateegiline lähenemisviis</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Logo registreerimine ei ole lihtsalt administratiivne toiming – see on strateegiline otsus, mis mõjutab teie ettevõtte tulevikku.
              </p>
              <p className="text-muted-foreground">
                Professionaalselt loodud ja registreeritud logo:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-accent font-bold text-xl">•</span>
                  <span>Tõstab ettevõtte usaldusväärsust ja professionaalset kuvandit</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-accent font-bold text-xl">•</span>
                  <span>Suurendab brändi väärtust investorite ja partnerite silmis</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-accent font-bold text-xl">•</span>
                  <span>Võimaldab tulevikus litsentse müüa või franchise'i pakkuda</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-accent font-bold text-xl">•</span>
                  <span>Kaitseb teie äriideed ja visuaalset identiteeti koopiate eest</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
