import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WebsitesCTA = () => {
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
        title: "Päring saadetud!",
        description: "Võtan teiega peagi ühendust.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);

    console.log("Website inquiry:", data);
  };

  return (
    <section id="contact-form" className="py-20 px-4 bg-primary/5">
      <div className="container max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Valmis oma kodulehe loomiseks?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kirjelda oma projekti või küsi nõu – vastan tavaliselt samal või järgmisel tööpäeval
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6">Kiire päring</h3>
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
                <Label htmlFor="company">Ettevõte / Ala</Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Nt. graafiline disainer, kunstnik, konsultant"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Kirjeldage oma projekti *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Mida vajate? Portfoolio, teenuste leht, äriinfo? Milliseid funktsioone soovite?"
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

          <div className="space-y-6">
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-4">Võta otse ühendust</h3>
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
              </div>

              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-muted-foreground italic">
                  "Iga koduleht algab vestlusest. Ära muretse tehniliste detailide pärast – 
                  räägi lihtsalt sellest, mida sa vajad ja mis sulle meeldib."
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-accent/10">
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Empaatiline lähenemine</h4>
                  <p className="text-sm text-muted-foreground">
                    Saan aru, et veebilehtede tegemine võib tunduda keeruline. Minu eesmärk 
                    on teha protsess võimalikult lihtsaks – sina räägid oma vajadusest, 
                    mina teen ülejäänu.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 pt-8">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">24/7</div>
            <p className="text-sm text-muted-foreground">
              Sinu koduleht töötab ööpäev läbi – digitaalne visiitkaart alati valmis
            </p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">0 IT-stressi</div>
            <p className="text-sm text-muted-foreground">
              Sa ei pea midagi ise seadistama – kõik tehniline pool on minu mure
            </p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">Koos loodud</div>
            <p className="text-sm text-muted-foreground">
              Koostööpõhine protsess – sinu ideed ja minu tehniline teostus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsitesCTA;
