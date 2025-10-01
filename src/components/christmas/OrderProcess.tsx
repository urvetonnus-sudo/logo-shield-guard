import { Calendar, MessageSquare, Palette, Send } from "lucide-react";

const OrderProcess = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "1. Konsultatsioon",
      description: "Räägime läbi teie vajadused, sihtgrupp ja brändistiil. Vajadusel küsime täpsustavaid küsimusi teie visuaalse identiteedi kohta."
    },
    {
      icon: Palette,
      title: "2. Kujundus",
      description: "Loome kaardi kavandid, mis järgivad teie brändi juhiseid. Esitame 2-3 erinevat versiooni teie tagasiside saamiseks."
    },
    {
      icon: Calendar,
      title: "3. Kinnitamine ja tootmine",
      description: "Pärast teie heakskiitu valmistame lõpliku versiooni. Paberkaartide puhul suuname trükki, digitaalsete puhul saate valmis failid."
    },
    {
      icon: Send,
      title: "4. Saatmine",
      description: "Saate kaardid kasutamiseks või soovi korral aitame korraldada postituse teie nimel."
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tellimisprotsess ja tähtajad
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lihtne ja selge protsess kvaliteetse tulemuse saavutamiseks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex p-4 bg-primary rounded-full">
                <step.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-background p-8 rounded-lg border-2 border-primary/20">
          <h3 className="text-2xl font-semibold mb-6 text-center">Tähtajad</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-2 text-primary">Digitaalsed kaardid</h4>
              <p className="text-muted-foreground">
                Kujundusprotsess: <span className="font-semibold text-foreground">5-7 tööpäeva</span><br />
                Kiirjärjekorras (lisatasu): <span className="font-semibold text-foreground">2-3 tööpäeva</span>
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-primary">Paberkaardid</h4>
              <p className="text-muted-foreground">
                Kujundus + trükk: <span className="font-semibold text-foreground">10-14 tööpäeva</span><br />
                Soovitatav tellida hiljemalt: <span className="font-semibold text-foreground">1. detsembriks</span>
              </p>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground italic">
            * Tähtajad võivad varieeruda sõltuvalt tellimuse keerukusest ja aasta kõrgperioodist
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrderProcess;
