import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Award, Palette, Heart } from "lucide-react";
import logo from "@/assets/logo-enas.png";

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
            <div className="flex justify-center mb-6">
              <img src={logo} alt="ENAS" className="h-20 w-auto brightness-0" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Tere, mina olen <span className="text-primary">Urve Tõnnus</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Graafiline disainer, kes aitab ettevõtetel ja loomeinimestel luua visuaalset identiteeti, 
              mis on nii professionaalne kui ka südamega tehtud.
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
                  <h2 className="text-2xl font-semibold mb-3">Minu taust</h2>
                  <div className="prose text-muted-foreground space-y-3">
                    <p>
                      Olen töötanud graafilise disainerina alates 1990. aastatest, olles näinud 
                      disainimaailma arengut käsitööst digitaalsesse ajastusse. See pikk tee on 
                      andnud mulle sügava arusaama nii klassikalisest kujundusest kui ka 
                      kaasaegsetest digitaalsetest vajadustest.
                    </p>
                    <p>
                      Olen Eesti Naisarvutigraafikute Seltsi (ENAS) liige, mis tähendab pidevat 
                      õppimist, kollegiaalset tuge ja kõrget professionaalset standardit.
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
                <h3 className="text-xl font-semibold">Mida teen?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Logo kujundus ja visuaalne identiteet</li>
                  <li>• Kaubamärkide registreerimine Patendiametis</li>
                  <li>• Jõulukaardid ja bränditud tervitused</li>
                  <li>• Kodulehed ja digitaalsed lahendused</li>
                  <li>• Konsultatsioonid visuaalse kommunikatsiooni alal</li>
                </ul>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Minu väärtused</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Empaatia:</strong> saan aru, et disain võib tunduda keeruline</li>
                  <li>• <strong>Professionaalsus:</strong> kvaliteet ja täpsus on prioriteedid</li>
                  <li>• <strong>Koostöö:</strong> teie ettevõte, minu oskused</li>
                  <li>• <strong>Pikaajaline mõtlemine:</strong> loome lahendusi, mis kestavad</li>
                  <li>• <strong>Esteetika:</strong> ilu pole luksus, vaid vajadus</li>
                </ul>
              </Card>
            </div>

            <Card className="p-8 bg-accent/5 border-l-4 border-accent">
              <p className="text-lg italic text-center">
                "Hea disain ei ole ainult ilus – see jutustab lugu, loob usaldust ja jääb meelde. 
                Minu eesmärk on, et teie bränd oleks koheselt äratuntav ja professionaalne."
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
