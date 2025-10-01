const WhyYouNeed = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Miks koduleht on vajalik ka loomeinimesele?
          </h2>
          
          <div className="prose prose-lg max-w-3xl mx-auto text-muted-foreground leading-relaxed space-y-4">
            <p>
              Sotsiaalmeedias võid olla aktiivne, aga kas see on piisav? Instagram kaob scrollimisel, 
              Facebook post unustatakse. Oma koduleht on püsiv, professionaalne ja <strong>täielikult sinu kontrolli all</strong>.
            </p>
            
            <p>
              Koduleht on digitaalne visiitkaart – koht, kus kliendid, koostööpartnerid ja tööandjad saavad 
              sind tõsiselt võtta. See näitab, et sa ei ole lihtsalt hobimees, vaid <strong>professionaal</strong>, 
              kes võtab oma tööd tõsiselt.
            </p>
            
            <p className="font-semibold text-foreground">
              Koduleht ei ole IT-projekt – see on investeering iseendasse ja oma töö väärtustamisse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyYouNeed;
