import { Sparkles, CheckCircle2, FileText, Mail } from "lucide-react";
import { Button } from "./ui/button";

const AILogoConsultation = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-accent/20 to-primary/5">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Kas oled loonud logo AI abil?
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            AI võib olla suurepärane tööriist ideede genereerimiseks, kuid registreeritav ja strateegiliselt 
            tugev logo vajab professionaalset viimistlust. Kui oled loonud logo AI-ga, aitan sul selle muuta:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card p-6 rounded-lg border border-primary/20 shadow-sm">
            <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
            <h3 className="text-xl font-semibold mb-2">Registreerimiskõlblikuks</h3>
            <p className="text-muted-foreground">
              Vastavus Patendiameti nõuetele
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-primary/20 shadow-sm">
            <FileText className="w-8 h-8 text-primary mb-3" />
            <h3 className="text-xl font-semibold mb-2">Tehniliselt korrektseks</h3>
            <p className="text-muted-foreground">
              Sobivad formaadid, resolutsioon, vektorjoonis
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-primary/20 shadow-sm">
            <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
            <h3 className="text-xl font-semibold mb-2">Õiguslikult turvaliseks</h3>
            <p className="text-muted-foreground">
              Autoriõigused, litsentsid, unikaalsus
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-primary/20 shadow-sm">
            <Sparkles className="w-8 h-8 text-primary mb-3" />
            <h3 className="text-xl font-semibold mb-2">Brändi väärtust toetavaks</h3>
            <p className="text-muted-foreground">
              Visuaalne järjepidevus, strateegiline sobivus
            </p>
          </div>
        </div>

        <div className="bg-card rounded-xl shadow-lg p-8 md:p-10 mb-12 border-2 border-primary/30">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-4xl">🎯</div>
            <div>
              <h3 className="text-2xl font-bold mb-3">
                Konsultatsioon AI-logo hindamiseks ja viimistlemiseks
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Saada mulle oma AI-ga loodud logo ja annan ausa tagasiside selle sobivuse kohta 
                registreerimiseks. Vajadusel teen ettepanekud parandusteks või loon sellest professionaalse 
                versiooni.
              </p>
            </div>
          </div>
          
          <Button size="lg" className="w-full md:w-auto" asChild>
            <a href="mailto:urvetonnus@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Saada oma AI-logo hindamiseks
            </a>
          </Button>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">
              Mida saan disainerina pakkuda, kui sul on juba AI-logo?
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Logo analüüs ja sobivuse hindamine registreerimiseks",
                "Vektoriseerimine ja tehniline viimistlus",
                "Autoriõiguste ja litsentside kontroll",
                "Visuaalse identiteedi terviklahendus (värvid, fondid, kasutusreeglid)",
                "Brändiraamatu loomine",
                "Konsultatsioon kaubamärgi klasside ja taotluse osas",
                "Alternatiivsed versioonid (nt mustvalge, horisontaalne, ikoonina)"
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-3 bg-card/50 p-4 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{service}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-accent/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              JPG vs vektor – mida Patendiamet nõuab ja mida teie ettevõte vajab?
            </h3>
            
            <div className="space-y-4">
              <div className="bg-card p-6 rounded-lg">
                <p className="font-semibold mb-2">Patendiamet nõuab registreerimiseks:</p>
                <p className="text-muted-foreground">JPG-formaati (min. 8×8 cm, 300 DPI)</p>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <p className="font-semibold mb-3">Vektorfail (nt SVG, AI, PDF) on vajalik:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Trükiste ja pakendite jaoks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Kilelõikuse ja graveerimise jaoks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Suureformaadiliste reklaamide jaoks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Digitaalseks skaleerimiseks (nt veeb, äpp, sotsiaalmeedia)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg border border-primary/30">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🎨</div>
                  <p className="text-foreground leading-relaxed">
                    <strong>Kui sul on AI-ga loodud logo</strong>, saan selle vektoriseerida ja valmistada 
                    ette nii registreerimiseks kui ka praktiliseks kasutamiseks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AILogoConsultation;
