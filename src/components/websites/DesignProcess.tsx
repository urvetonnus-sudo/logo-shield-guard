import { MessageSquare, Palette, CheckCircle, Rocket } from "lucide-react";

const DesignProcess = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "1. Vestlus ja planeerimine",
      description: "Räägime läbi, mida sa vajad – portfoolio, teenuste leht, galerii? Millised värvid, stiil, struktuur? Kogu protsess algab sellest, et ma kuulan sind.",
    },
    {
      icon: Palette,
      title: "2. Kujundus ja visuaalne stiil",
      description: "Loon visuaalse kavandi, mis peegeldab sinu esteetikat ja professionaalsust. Sa näed ette, kuidas koduleht hakkab välja nägema, ja saad kaasa rääkida.",
    },
    {
      icon: CheckCircle,
      title: "3. Heakskiit ja tehniline teostus",
      description: "Kui disain on kinnitatud, ehitan kodulehe valmis – responsive, kiire ja kasutatav. Sa ei pea ise midagi installeerima ega seadistama.",
    },
    {
      icon: Rocket,
      title: "4. Avaldamine ja tugi",
      description: "Koduleht läheb veebi, ja ma näitan sulle, kuidas sisu uuendada. Kui tekib küsimusi, olen olemas.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kuidas protsess toimib?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Koostööpõhine, selge ja stressivaba
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="space-y-4 p-6 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors"
            >
              <div className="inline-flex p-3 bg-primary/10 rounded-full">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center space-y-4">
          <h3 className="text-2xl font-semibold">Tähtajad ja hind</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="p-6 bg-card rounded-lg border">
              <p className="text-sm text-muted-foreground mb-2">Kestus</p>
              <p className="text-2xl font-bold text-primary">2-4 nädalat</p>
              <p className="text-sm text-muted-foreground mt-2">
                Olenevalt projekti mahust ja keerukusest
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border">
              <p className="text-sm text-muted-foreground mb-2">Hind</p>
              <p className="text-2xl font-bold text-primary">Kokkuleppel</p>
              <p className="text-sm text-muted-foreground mt-2">
                Sõltub lehtede arvust ja funktsionaalsusest
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
