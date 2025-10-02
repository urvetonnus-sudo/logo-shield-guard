import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Award, Palette, Heart } from "lucide-react";
import portrait from "@/assets/urve-portrait.png";

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Urve Tõnnus",
    "jobTitle": "Graafiline disainer",
    "email": "urvetonnus@gmail.com",
    "telephone": "+372 5168045",
    "memberOf": {
      "@type": "Organization",
      "name": "Eesti Naisarvutigraafikute Selts"
    },
    "knowsAbout": ["Graafiline disain", "Logo kujundus", "Veebidisain", "Kaubamärgiõigus"]
  };

  return (
    <>
      <SEO
        title="Minust - Urve Tõnnus, graafiline disainer"
        description="Urve Tõnnus - graafiline disainer Eesti Naisarvutigraafikute Seltsi liikmena. Spetsialiseerun logode kujundusele, kaubamärkide registreerimisele ja kodulehtede loomisele."
        keywords="Urve Tõnnus, graafiline disainer, ENAS, logo disainer, veebidisainer Eesti"
        structuredData={structuredData}
      />
      <main className="min-h-screen py-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container max-w-4xl mx-auto space-y-16">
          {/* Hero Section */}
          <section className="text-center space-y-6 animate-fade-in">
            <div className="flex justify-center mb-8">
              <img 
                src={portrait} 
                alt="Urve Tõnnus" 
                className="w-48 h-48 rounded-full object-cover shadow-2xl ring-4 ring-primary/20" 
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-primary">Urve Tõnnus</span> – disainer, kellel on silma, südant ja süsteemi
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Olen disainer olnud üle 40 aasta – ja ei, ma ei plaani lõpetada, 
              sest head ideed ei vanane. Minu töö on olnud osa Eesti visuaalsest 
              kultuurist: firmastiilidest ja logodest kuni rahvusvaheliste kunstinäitusteni. 
              Kui oled kunstnik, kultuurikorraldaja või alustav ettevõtja, kes otsib selget 
              visuaalset keelt, oled õiges kohas.
            </p>
          </section>

          {/* About Content */}
          <section className="space-y-8">
            <Card className="p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4">Üle nelja aastakümne visuaalses kultuuris</h2>
                  <div className="prose text-muted-foreground space-y-4 leading-relaxed">
                    <p>
                      Minu loodud on firmastiilid <strong>Kaubandusministeeriumile, Gloriale ja Paide MEKile</strong> – 
                      viimane kasutab minu logo siiani. Olen kujundanud Rahvarinde juubeli ja muuseumi, 
                      Dateli, Eesti Instituudi, The Perfect Design.com-i ning Eesti Naistoimetajate logod. 
                      Reklaamikampaaniaid olen teinud sellistele brändidele nagu Siemens Nixdorf, Casio ja Martela. 
                      Dateli logo tunnistati Talis Bachmanni uuringu põhjal Eesti IT-sektori kõige assotsiatiivsemaks – 
                      see jäi inimestele meelde ja tähendas neile midagi. (Praegu kasutab firma küll teist logo, 
                      aga see on juba teine lugu.)
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 space-y-4">
                <div className="p-3 bg-accent/10 rounded-lg w-fit">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Kunstnik rahvusvahelisel tasandil</h3>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    Kunstnikuna olen osalenud näitustel <strong>New Yorgist Vietnamini</strong>, 
                    võitnud rahvusvahelisi auhindu ja loonud kollaaže, mis räägivad naistest, 
                    linnadest ja sisemisest maailmast. Maale saab vaadata{" "}
                    <a 
                      href="https://www.urvetonnusart.eu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      www.urvetonnusart.eu
                    </a>
                    {" "}– seal on ka natuke mu hinge.
                  </p>
                </div>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Minu tööstiil</h3>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    Minu tööstiil on lihtne: <strong>ma kuulan.</strong> Kui sa ei tea, kuidas 
                    kodulehte tellida, kardad trükivigu või tunned, et su looming vajab nähtavust, 
                    siis ma aitan. Mitte ainult tehniliselt, vaid ka emotsionaalselt – sest loovus 
                    vajab turvalist ruumi. Ja kui sa arvad, et su fail ei lähe trükki, siis ära 
                    muretse – ma olen neid päästnud rohkem kui mõni kiirabi.
                  </p>
                </div>
              </Card>
            </div>

            <Card className="p-8 bg-accent/5 border-l-4 border-accent">
              <p className="text-lg italic text-center leading-relaxed">
                "Head ideed ei vanane. Minu töö on aidata sul leida visuaalne keel, 
                mis jutustab sinu lugu – selgelt, ilusalt ja meeldejäävalt."
              </p>
            </Card>
          </section>

          {/* CTA Section */}
          <section className="text-center space-y-6 pt-8">
            <h2 className="text-2xl font-semibold">Alustame koostööd?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kui vajate abi logo kujundamisel, kaubamärgi registreerimisel või kodulehe loomisel, 
              võtke julgelt ühendust. Iga projekt algab vestlusest.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="cta" asChild>
                <Link to="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Võta ühendust
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:urvetonnus@gmail.com">
                  Kirjuta otse
                </a>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
