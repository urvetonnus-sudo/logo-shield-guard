import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Sparkles, FileText } from "lucide-react";

const CardTypes = () => {
  const cardTypes = [
    {
      icon: Mail,
      title: "Elektrooniline kaart",
      description: "E-postiga saadetav",
      features: [
        "Kiire saatmine suurele sihtgrupile",
        "Personaliseeritav igale saajale",
        "Brändikujundusega HTML-mall",
        "Mobiilsõbralik vaade",
        "Keskkonnasõbralik lahendus"
      ],
      ideal: "Ideaalne rahvusvahelistele partneritele ja suurele kliendibaasile"
    },
    {
      icon: Sparkles,
      title: "Animeeritud kaart",
      description: "Interaktiivne HTML5 kogemus",
      features: [
        "Liikuvad elemendid ja animatsioonid",
        "Muusika või helide lisamine",
        "Interaktiivsed nupud ja lingid",
        "Jagamine sotsiaalmeedia kaudu",
        "Unikaalne ja meeldejääv"
      ],
      ideal: "Sobib ettevõtetele, kes soovivad eristuda ja jätta tugevat muljet"
    },
    {
      icon: FileText,
      title: "Paberkaart",
      description: "Käega katsutav elegants",
      features: [
        "Kvaliteetsed materjalid ja trükk",
        "Stantsitud (erikujuline) või klassikaline volditud",
        "Reljeeftrükk, fooliumtrükk, UV-lakk",
        "Ümbriku kujundus brändiga kooskõlas",
        "Käsitsi allkirjastatud isiklik puudutus"
      ],
      ideal: "Parim valik VIP-klientidele ja pikaaegsetele äripartneritele"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vali sobiv kaarditüüp
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kolm viisi, kuidas teie bränd saab jõulutervitustega silma paista
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cardTypes.map((type, index) => (
            <Card key={index} className="hover-scale border-2">
              <CardHeader>
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <type.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{type.title}</CardTitle>
                <CardDescription className="text-base">{type.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t">
                  <p className="text-sm font-medium text-muted-foreground italic">
                    {type.ideal}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardTypes;
