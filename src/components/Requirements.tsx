import originalityIcon from "@/assets/icon-originality.jpg";
import { CheckCircle } from "lucide-react";

const Requirements = () => {
  const requirements = [
    {
      title: "Originaalsus",
      description: "Logo peab olema unikaalne ja eristuv. See ei tohi olla liiga sarnane juba registreeritud kaubamärkidega ega kirjeldav."
    },
    {
      title: "Eristusvõime",
      description: "Hea logo on visuaalselt tugev ja meeldejääv. Liiga lihtsad või üldised kujundused ei pruugi vastata nõuetele."
    },
    {
      title: "Tehnilised nõuded",
      description: "Failiformaat peab olema kvaliteetne (JPG, PNG). Minimaalne suurus 8x8 cm, resolutsioon vähemalt 300 DPI."
    },
    {
      title: "Klassifikatsioon",
      description: "Logo tuleb registreerida vastavates kaubamärgi klassides (Nice klassifikatsioon), mis vastavad teie ärivaldkonnale."
    },
    {
      title: "Õigusnõuded",
      description: "Logo ei tohi rikkuda kolmandate isikute õigusi ega sisaldada keelatud sümboleid (nt riiklikud vapid ilma loata)."
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Patendiameti nõuded logo registreerimisele
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Et logo saaks edukalt registreerida, peab see vastama rangetele kriteeriumidele. Professionaalne logo disain arvestab neid nõudeid juba loomisfaasis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            {requirements.map((req, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{req.title}</h3>
                    <p className="text-muted-foreground">{req.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-8">
            <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
              <img 
                src={originalityIcon} 
                alt="Originaalsus" 
                className="w-32 h-32 mx-auto mb-6 rounded-lg"
              />
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                Professionaalne lähenemine
              </h3>
              <p className="text-muted-foreground text-center mb-6">
                Meie teenus tagab, et teie logo vastab kõigile Patendiameti nõuetele juba esimesest päevast. Vältida saab kulukaid tagasilükkamisi ja täiendavaid muudatusi.
              </p>
              <div className="bg-card p-6 rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  "Registreerimiseks sobiv logo on professionaalselt kavandatud, unikaalne ja tehniliselt korrektne. See on investeering, mis tagab teie brändi pikaajalise kaitse."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Requirements;
