const ChristmasIntro = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Miks jõulukaart on osa teie brändist?
          </h2>
          
          <div className="prose prose-lg max-w-3xl mx-auto text-muted-foreground leading-relaxed space-y-4">
            <p>
              Digitaalsel ajastul, kus päevad on täis e-kirju ja sõnumeid, on füüsiline või hoolikalt kujundatud digitaalne jõulukaart haruldane tähelepanu märk. See on võimalus näidata, et teie ettevõte väärtustab suhteid, mitte ainult tehinguid.
            </p>
            
            <p>
              Hästi kujundatud jõulukaart kajastab teie brändi väärtusi, visuaalset stiili ja professionaalsust. See on investeering, mis maksab end tagasi läbi tugevdatud kliendisuhete ja positiivse brändimulje.
            </p>
            
            <p className="font-semibold text-foreground">
              Jõulukaart ei ole kulutus – see on strateegiline brändingtööriist, mis jääb kliendi mällu ja töölaua serva kogu aastaks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChristmasIntro;
