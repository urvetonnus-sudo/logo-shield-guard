import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, Phone, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-6 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Telli logo, mis on registreeritav ja strateegiliselt tugev
        </h2>
        <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90">
          Professionaalne logo, mis vastab Patendiameti nõuetele ja tugevdab teie brändi positsiooni.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-white/10 backdrop-blur border-white/20">
            <h3 className="text-2xl font-semibold mb-4 text-white">Kiire päring</h3>
            <p className="mb-6 text-white/80">Täitke vorm ja võtame teiega ühendust 24 tunni jooksul</p>
            <div className="space-y-4">
              <Input 
                placeholder="Teie nimi" 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
              />
              <Input 
                type="email" 
                placeholder="E-posti aadress" 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
              />
              <Input 
                placeholder="Ettevõtte nimi" 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
              />
              <Button variant="cta" size="lg" className="w-full">
                Saada päring
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </Card>

          <Card className="p-8 bg-white/10 backdrop-blur border-white/20">
            <h3 className="text-2xl font-semibold mb-4 text-white">Võtke otse ühendust</h3>
            <p className="mb-6 text-white/80">Meie spetsialistid on valmis teid nõustama</p>
            <div className="space-y-6 text-left">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">E-post</p>
                  <a href="mailto:info@logoregistreerimine.ee" className="text-white/90 hover:text-white underline">
                    info@logoregistreerimine.ee
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Telefon</p>
                  <a href="tel:+3725551234" className="text-white/90 hover:text-white">
                    +372 555 1234
                  </a>
                </div>
              </div>

              <div className="bg-white/20 p-4 rounded-lg mt-6">
                <p className="text-sm text-white/80 italic">
                  "Töötame koos teiega, et luua logo, mis ei ole ainult ilus, vaid ka strateegiliselt mõtestatud ja registreerimiseks valmis."
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="bg-white/10 backdrop-blur p-8 rounded-lg border border-white/20">
          <h3 className="text-2xl font-semibold mb-4 text-white">Mida saate meilt?</h3>
          <div className="grid sm:grid-cols-3 gap-6 text-white/90">
            <div>
              <p className="font-semibold mb-2">Professionaalne disain</p>
              <p className="text-sm text-white/70">Originaalne, unikaalne logo, mis vastab kõigile nõuetele</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Registreerimise tugi</p>
              <p className="text-sm text-white/70">Aitame läbi Patendiameti taotluse protsessi</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Pikaajaline kaitse</p>
              <p className="text-sm text-white/70">Teie bränd on kaitstud ja turvaline tulevikuks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
