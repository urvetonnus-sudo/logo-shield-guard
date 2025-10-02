import { useState } from "react";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/enas_logo.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
    };

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Sõnum saadetud!",
        description: "Võtan teiega peagi ühendust.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);

    console.log("Form data:", data);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Person",
      "name": "Urve Tõnnus",
      "email": "urvetonnus@gmail.com",
      "telephone": "+372 5168045"
    }
  };

  return (
    <>
      <SEO
        title="Kontakt - Võta ühendust"
        description="Võtke ühendust Urve Tõnnusega graafilise disaini, logo kujunduse või kodulehe loomise küsimustes. Email: urvetonnus@gmail.com, tel: +372 5168045"
        keywords="kontakt, graafiline disainer kontakt, logo disain pakkumine, koduleht pakkumine"
        structuredData={structuredData}
      />
      <main className="min-h-screen py-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="flex justify-center mb-6">
              <img src={logo} alt="ENAS - Eesti Naisarvutigraafikute Selts" className="h-16 w-auto" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Võtame <span className="text-primary">ühendust</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Iga projekt algab vestlusest. Kirjutage, helistage või täitke vorm – 
              vastan tavaliselt samal või järgmisel tööpäeval.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Kiire päring</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nimi *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Teie nimi"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-post *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="teie@email.ee"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Ettevõte / Organisatsioon</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Teie ettevõtte nimi"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Sõnum *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Kirjeldage lühidalt oma projekti või vajadust..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Saadan..." : "Saada päring"}
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Kontaktandmed</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">E-post</p>
                      <a
                        href="mailto:urvetonnus@gmail.com"
                        className="font-medium hover:text-primary transition-colors"
                      >
                        urvetonnus@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">Telefon</p>
                      <a
                        href="tel:+3725168045"
                        className="font-medium hover:text-primary transition-colors"
                      >
                        +372 5168045
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">Arved väljastab</p>
                      <p className="font-medium">Eesti Naisarvutigraafikute Selts</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-muted/30">
                <h3 className="text-lg font-semibold mb-3">Töökorraldus</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <strong>Vastamise aeg:</strong> Tavaliselt 1 tööpäeva jooksul
                  </p>
                  <p>
                    <strong>Esimene kohtumine:</strong> Veebis (Zoom/Teams) või vajaduse korral silmast-silma
                  </p>
                  <p>
                    <strong>Konsultatsioon:</strong> Esimene vestlus on alati tasuta
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-primary/5 border-l-4 border-primary">
                <p className="text-sm italic">
                  "Iga edukas projekt algab heast suhtlusest. Ärge kartke küsida – 
                  ka kõige lihtsamad küsimused võivad olla alguseks suurepärasele koostööle."
                </p>
                <p className="text-sm font-medium mt-3">— Urve Tõnnus</p>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
