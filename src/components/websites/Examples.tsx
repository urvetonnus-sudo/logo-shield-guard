import { Card } from "@/components/ui/card";

const Examples = () => {
  const examples = [
    {
      type: "Portfoolio kunstnikule",
      features: [
        "Visuaalselt tugev avalehekülg",
        "Projektide galerii piltidega",
        "Töö kirjeldused ja tehnikad",
        "Kontaktvorm päringu esitamiseks",
      ],
    },
    {
      type: "Teenuste leht disainerile",
      features: [
        "Selge teenuste nimekiri ja hinnad",
        "Protsessi kirjeldus (kuidas koostöö käib)",
        "Kliendi hinnangud / soovitused",
        "Broneerimisvorm või konsultatsiooni taotlus",
      ],
    },
    {
      type: "Konsultandi veebileht",
      features: [
        "Ülevaade teenustest ja lähenemisest",
        "Blogiosa või artiklikogu",
        "Koolituste ja ürituste kalender",
        "Kontaktandmed ja broneerimissüsteem",
      ],
    },
    {
      type: "Väikefirma koduleht",
      features: [
        "Ettevõtte tutvustus ja väärtused",
        "Tooted/teenused visuaalselt",
        "Kliendisoovitused ja viited",
        "Kontaktvorm ja sotsiaalmeedia lingid",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Millised veebilehed ma loon?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Näited struktuuri ja sisust – kõik kohandatav vastavalt sinu vajadustele
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {examples.map((example, index) => (
            <Card key={index} className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-primary">
                {example.type}
              </h3>
              <ul className="space-y-2">
                {example.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-8 bg-background rounded-lg border-l-4 border-primary">
          <p className="text-lg text-center">
            <strong>Oluline:</strong> Need on vaid näited. Iga koduleht luuakse <em>sinu vajaduste</em> järgi – 
            alates strukturist kuni visuaalse kujunduseni. Koostöö on paindlik ja kohandatav.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Examples;
