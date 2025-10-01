import mojoImage from "@/assets/website-mojo.jpg";
import nahakunstnikudImage from "@/assets/website-nahakunstnikud.jpg";
import piirtoImage from "@/assets/website-piirto.jpg";

const WebsitesPortfolio = () => {
  const projects = [
    {
      image: mojoImage,
      title: "MOJO Interior Design",
      description: "Sisekujundaja koduleht portfoolio ja teenuste tutvustusega. Elegantne galerii ja selge struktuur.",
      tags: ["Portfoolio", "Galerii", "Mitmekeelne"],
    },
    {
      image: nahakunstnikudImage,
      title: "Eesti Nahakunstnike Liit",
      description: "Organisatsiooni veebileht ürituste, galerii ja liikmete tutvustusega. Professionaalne ja informatiivne.",
      tags: ["Organisatsioon", "Galerii", "Üritused"],
    },
    {
      image: piirtoImage,
      title: "Taidesalonki Piirto",
      description: "Kunstniku ja taidesalongi koduleht maalide ja teenuste esitlusega. Soojad toonid ja isiklik lähenemine.",
      tags: ["Kunstnik", "Teenused", "Galerii"],
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Valminud kodulehed
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Olen loonud kodulehti kunstnikele, disaineritele ja organisatsioonidele – 
            igaüks lihtsasti hallatav ja visuaalselt kaunis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="space-y-4 group">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            Igal projektil on oma lugu ja eripära. Kõik kodulehed on loodud kliendi vajadusi arvestades.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebsitesPortfolio;
