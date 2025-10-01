import { Palette, Briefcase, Users, BookOpen } from "lucide-react";

const ForWhom = () => {
  const audiences = [
    {
      icon: Palette,
      title: "Kunstnikud ja disainerid",
      description: "Portfoolio, mis näitab sinu tööd kõige paremas valguses. Galeriid, projektide kirjeldused, kontaktivorm – kõik visuaalselt elegantne ja lihtsasti hallatav.",
    },
    {
      icon: Briefcase,
      title: "Väikeettevõtjad ja freelancerid",
      description: "Teenuste tutvustus, hinnad, klienditeekond. Veebileht, mis näitab, et sa oled usaldusväärne ja professionaalne, isegi kui su ettevõte on väike.",
    },
    {
      icon: Users,
      title: "Strateegid ja konsultandid",
      description: "Sa ei müü tooteid, vaid oskusteavet. Koduleht peab kajastama sinu mõtlemist, kogemust ja lähenemist – see on digitaalne CV, mis töötab 24/7.",
    },
    {
      icon: BookOpen,
      title: "Koolitajad ja esinemisjad",
      description: "Koolituste kalender, teemade tutvustus, tagasiside. Veebileht, kus inimesed saavad tutvuda su tööga ja registreerida sündmustele.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kellele see teenus on mõeldud?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Inimestele, kes teavad, mida nad teevad, aga ei taha IT-ga tegelda
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="p-6 bg-background rounded-lg hover:shadow-lg transition-all duration-300 space-y-4"
            >
              <div className="inline-flex p-3 bg-primary/10 rounded-lg">
                <audience.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{audience.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-accent/10 rounded-lg border-l-4 border-accent text-center">
          <p className="text-lg italic">
            "Ma ei ole tehniline inimene" – see pole takistus, vaid täpselt põhjus, miks ma olen siin. 
            <strong> Sa tegeleksid oma tööga, mina teen kodulehe.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
