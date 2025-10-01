import { Palette, Eye, Heart } from "lucide-react";

const BrandIdentity = () => {
  const brandElements = [
    {
      icon: Palette,
      title: "Värvipalett ja logo",
      description: "Kaardi kujundus järgib täpselt teie brändi värvigammat ja logo kasutamise reegleid. Tulemuseks on kaart, mis on koheselt äratuntav teie ettevõttena."
    },
    {
      icon: Eye,
      title: "Visuaalne stiil",
      description: "Kas teie bränd on minimalistlik ja modernne või soojalt traditsiooniline? Kaardi kujundus peegeldab teie visuaalset identiteeti – fondid, kujunduselemendid ja üldine esteetika."
    },
    {
      icon: Heart,
      title: "Sõnumi tonaalsus",
      description: "Jõulutervitus kirjutatakse teie brändi häälega – olgu see siis professionaalselt ametlik, soojalt sõbralik või loominguliselt inspireeriv. Tekst ja kujundus töötavad üheskoos."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kujundus, mis austab teie visuaalset identiteeti
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Iga jõulukaart on loodud teie brändi DNA'd arvestades
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {brandElements.map((element, index) => (
            <div key={index} className="text-center space-y-4 p-6 rounded-lg hover:bg-muted/30 transition-colors">
              <div className="inline-flex p-4 bg-primary/10 rounded-full">
                <element.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{element.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {element.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-accent/10 rounded-lg border-l-4 border-accent">
          <p className="text-lg text-center italic">
            "Jõulukaart ei ole eraldiseisev disainiprojekt – see on laiendus teie brändist, mis peab tunduma sama loomulik kui teie logo või veebileht."
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandIdentity;
