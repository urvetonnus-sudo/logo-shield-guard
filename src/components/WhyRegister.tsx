import protectionIcon from "@/assets/icon-protection.jpg";

const WhyRegister = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Miks logo registreerimine on oluline?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Logo registreerimine Patendiametis annab teile ainuõiguse oma visuaalse identiteedi kasutamiseks ja kaitseb seda koopiate eest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={protectionIcon} 
              alt="Õiguslik kaitse" 
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">Õiguslik kaitse</h3>
              <p className="text-muted-foreground">
                Registreeritud logo annab teile ainuõiguse selle kasutamiseks. Saate takistada teistel ettevõtetel kasutamast sarnast või identset visuaalset identiteeti.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">Brändi väärtus</h3>
              <p className="text-muted-foreground">
                Registreeritud kaubamärk on vara, mis suurendab ettevõtte väärtust. See on osa teie intellektuaalsest omandist ja võib olla oluline tegur investeeringute meelitamisel.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">Usaldus ja usaldusväärsus</h3>
              <p className="text-muted-foreground">
                Ametlikult registreeritud logo loob klientide seas professionaalse ja usaldusväärsе mulje. See näitab, et võtate oma äritegevust tõsiselt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRegister;
