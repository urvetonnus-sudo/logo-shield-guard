const WebsitesPortfolio = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Valminud kodulehed
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Olen loonud kodulehti kunstnikele, konsultantidele ja väikefirmadele – 
            igaüks lihtsasti hallatav ja visuaalselt kaunis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="space-y-4">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground italic">Kodulehe näidis {item}</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Projekti nimi</h3>
                <p className="text-sm text-muted-foreground">
                  Lühike kirjeldus projektist ja lahendusest
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            Igal projektil on oma lugu ja eripära. Portfoolio uuendatakse pidevalt.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebsitesPortfolio;
