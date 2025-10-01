import ipaImage from "@/assets/christmas-ipa2015.jpg";
import ewartImage from "@/assets/christmas-ewart.jpg";
import ipa2Image from "@/assets/christmas-ipa2.jpg";
import tallinnImage from "@/assets/christmas-tallinn.jpg";
import lilloImage from "@/assets/christmas-lillo.jpg";
import viruImage from "@/assets/christmas-viru.jpg";
import pilotImage from "@/assets/christmas-pilot.jpg";

const ChristmasPortfolio = () => {
  const cards = [
    {
      image: ipaImage,
      title: "IPA Interconnect Product Assembly",
      description: "Sinine jõulukaart põhjapõtradega ja tähistaevaga. Klassikaline ja professionaalne.",
      year: "2015",
    },
    {
      image: ipa2Image,
      title: "IPA",
      description: "Jõulupuu ja jõuluvana reenidega öises taevas. Traditsiooniline jõulumotiv.",
      year: "2016",
    },
    {
      image: ewartImage,
      title: "Estonian Women's Associations Roundtable",
      description: "Jõulumaja lumetuisus - soe ja hubane jõulukaart.",
      year: "2021",
    },
    {
      image: tallinnImage,
      title: "Tallinna Munitsipaalpolitsei",
      description: "Tallinna jõuluturg raekoja platsil. Linnaline jõulutunne.",
      year: "2017",
    },
    {
      image: lilloImage,
      title: "Lillo & Partnerid",
      description: "Abstraktne punane disain firmalogosse. Modernne ja unikaalne lähenemine.",
      year: "2021",
    },
    {
      image: viruImage,
      title: "Viru värav",
      description: "Tallinna Viru värav kuuvalgel - ikooniline Eesti jõulumotiiv.",
      year: "2017",
    },
    {
      image: pilotImage,
      title: "PILOT PROJEKT",
      description: "Talvine maastik ja lumised puud. Minimalistlik ja rahulik.",
      year: "2022",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Varasemad jõulukaardid
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Olen kujundanud jõulukaarte erinevatele ettevõtetele ja organisatsioonidele – 
            igaüks unikaalne ja brändi identiteediga kooskõlas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="space-y-3 group">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{card.title}</h3>
                  <span className="text-xs text-muted-foreground">{card.year}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            Iga jõulukaart on loodud kliendi brändi ja soovide järgi. 
            Elektrooniline, animeeritud või trükitud variant – igaüks ainulaadne.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChristmasPortfolio;
