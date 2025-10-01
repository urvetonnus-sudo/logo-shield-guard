const ChristmasPortfolio = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Varasemad jõulukaardid
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Olen kujundanud jõulukaarte erinevatele ettevõtetele – igaüks unikaalne ja brändi identiteediga kooskõlas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground italic">Jõulukaardi näidis {item}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            Iga jõulukaart on loodud kliendi brändi ja soovide järgi. 
            Galerii uuendatakse pidevalt uute projektidega.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChristmasPortfolio;
