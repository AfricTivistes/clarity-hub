const partners = [
  {
    name: "EFSS",
    logo: "https://claritydesk.dangotechconcepts.com/wp-content/uploads/2026/02/EFSS-LOGO-1.png",
  },
  {
    name: "AfricTivistes",
    logo: "https://claritydesk.dangotechconcepts.com/wp-content/uploads/2026/02/africtivistes.png",
  },
  {
    name: "Election Civic Tech Fund",
    logo: "https://claritydesk.dangotechconcepts.com/wp-content/uploads/2026/02/election-civic-1.png",
  },
  {
    name: "AHEAD Africa",
    logo: "https://claritydesk.dangotechconcepts.com/wp-content/uploads/2026/02/Ahead-Africa.png",
  },
  {
    name: "Digitalise Youth",
    logo: "https://claritydesk.dangotechconcepts.com/wp-content/uploads/2026/02/Digitalise_Youth_Brown-1.png",
  },
  {
    name: "Digital Democracy Initiative",
    logo: "https://claritydesk.dangotechconcepts.com/wp-content/uploads/2026/02/Digital-Democracy-Initiative-Logo-OE-Horisontal-OE-RGB.png",
  },
];

const PartnersSection = () => {
  return (
    <section className="bg-muted/50 py-10 md:py-14 border-t border-border/50">
      <div className="container">
        <h3 className="font-heading text-center text-lg font-bold text-muted-foreground mb-8 uppercase tracking-wider">
          Our Partners
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <img
              key={partner.name}
              src={partner.logo}
              alt={partner.name}
              className="h-10 md:h-12 object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
