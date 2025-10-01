import portfolioImage from "@/assets/portfolio-logos.jpg";

const Portfolio = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Näidised tehtud töödest
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Olen loonud logosid erinevatele ettevõtetele ja organisatsioonidele – 
            alates väikefirmadest kuni riiklike institutsioonideni
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <img 
            src={portfolioImage} 
            alt="Logo portfoolio - DATEL, The Perfect Design, Hyaranni, Rosenthal Energy Advisors, Paide mek, Dalton Wilt Investments, Eesti Instituut, Greete Motell, rapeks, EESTI KAUBANDUS, Lillo & Partnerid, Brilliant Therapist, SPELO, ENAS, Matec Entertainment" 
            className="w-full rounded-lg shadow-xl"
          />
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            Igal projektil on oma lugu ja strateegiline lähenemisviis. 
            Logod on loodud registreerimiseks ja pikaajaliseks kasutamiseks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
