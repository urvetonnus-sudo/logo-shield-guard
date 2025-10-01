import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Risks = () => {
  const risks = [
    {
      title: "Registreerimise tagasilükkamine",
      description: "Odavad või kopeeritud logod ei vasta sageli Patendiameti originaalsuse ja eristusvõime nõuetele. Taotlus lükatakse tagasi ja raha läheb kaotsi."
    },
    {
      title: "Autoriõiguste rikkumine",
      description: "Pildi- või fontide kasutamine ilma litsentsita võib kaasa tuua õiguslikud probleemid ja kahjunõuded algsete autorite poolt."
    },
    {
      title: "Nõrk brändi kaitse",
      description: "Liiga üldine või kirjeldav logo ei saa tugevat õiguslikku kaitset. Konkurendid võivad kasutada sarnaseid elemente ilma tagajärgedeta."
    },
    {
      title: "Professionaalsuse kaotus",
      description: "Madala kvaliteediga logo mõjutab ettevõtte mainet ja usaldust. Esimene mulje klientidele ja partneritele on määrav."
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <AlertTriangle className="w-16 h-16 text-destructive mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Riskid odava või kopeeritud logo puhul
          </h2>
          <p className="text-lg text-muted-foreground">
            Säästmine vale otsuse juures võib maksma minna palju rohkem kui professionaalse logo tellimine.
          </p>
        </div>

        <div className="space-y-6">
          {risks.map((risk, index) => (
            <Alert key={index} variant="destructive" className="border-destructive/50">
              <AlertTriangle className="h-5 w-5" />
              <AlertTitle className="text-lg font-semibold">{risk.title}</AlertTitle>
              <AlertDescription className="text-base mt-2">
                {risk.description}
              </AlertDescription>
            </Alert>
          ))}
        </div>

        <div className="mt-12 bg-card p-8 rounded-lg border border-border shadow-sm">
          <h3 className="text-2xl font-bold text-foreground mb-4">Kuidas vältida neid riske?</h3>
          <p className="text-muted-foreground mb-6">
            Professionaalne logo disain arvestab kõigi õiguslike, tehniliste ja strateegiliste aspektidega. Meie teenus tagab:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Originaalne, ainulaadne disain, mis vastab Patendiameti nõuetele</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Kõik vajalikud litsentsid ja autoriõigused</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Tehniliselt korrektne formaat registreerimiseks</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Strateegiline lähenemisviis, mis tugevdab teie brändi positsiooni</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Risks;
