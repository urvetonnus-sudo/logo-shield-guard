import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";

const ChristmasCTA = () => {
  return (
    <section id="order-section" className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Telli jõulukaart, mis jääb meelde
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Alustame teie brändi lugu rääkiva jõulukaardi loomist juba täna
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Kiire päring</CardTitle>
              <CardDescription>Täitke vorm ja võtame teiega 24 tunni jooksul ühendust</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Input placeholder="Teie nimi" className="bg-background" />
              </div>
              <div>
                <Input type="email" placeholder="E-posti aadress" className="bg-background" />
              </div>
              <div>
                <Input placeholder="Ettevõtte nimi" className="bg-background" />
              </div>
              <div>
                <Textarea 
                  placeholder="Kirjeldage oma soove (kaarditüüp, kogus, tähtaeg...)" 
                  className="bg-background min-h-[100px]"
                />
              </div>
              <Button variant="cta" className="w-full" size="lg">
                Saada päring
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Võta ühendust</CardTitle>
              <CardDescription>Eelistada otsesuhtlust? Helistage või kirjutage</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">E-post</p>
                    <a href="mailto:urvetonnus@gmail.com" className="font-medium hover:text-primary transition-colors">
                      urvetonnus@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefon</p>
                    <a href="tel:+3725168045" className="font-medium hover:text-primary transition-colors">
                      +372 5168045
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t">
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  "Tellisime jõulukaardid juba teist aastat järjest. Kliendid on tänulikud ja kaardid on kogu aasta töölaual!" 
                  <span className="block mt-2 font-semibold text-foreground">— OÜ Kvaliteet</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-lg font-semibold mb-2">Professionaalne kujundus</h3>
            <p className="opacity-90 text-sm">
              Teie brändi identiteediga täiuslikult kooskõlas
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Personaalne lähenemine</h3>
            <p className="opacity-90 text-sm">
              Igale kliendile unikaalne ja läbimõeldud lahendus
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Püsiv mõju</h3>
            <p className="opacity-90 text-sm">
              Jõulukaart, mis tugevdab suhteid ja jääb meelde
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChristmasCTA;
