import { motion } from "framer-motion";

const articles = [
  {
    image: "https://claritydesk.dangotechconcepts.com/wp-content/uploads/2026/02/1_SBBXAQMIvu2r-QdX60iv8Q-640x334.webp",
    badge: "FALSE",
    title: "Bobi Wine was not declared Uganda's President-elect",
    author: "The ClarityDesk",
    date: "February 2, 2026",
  },
  {
    image: "https://claritydesk.dangotechconcepts.com/wp-content/uploads/2026/01/1_RcAlNeFOA6gkH-25m-qRzA.webp",
    badge: "FALSE",
    title: "President Salva Kiir hasn't dismissed his five vice presidents",
    author: "The ClarityDesk",
    date: "January 31, 2026",
  },
  {
    image: "https://claritydesk.dangotechconcepts.com/wp-content/uploads/2026/02/1_SkeLkr2IJg7GEs60hdb-CA.webp",
    badge: "FALSE",
    title: "Stephen Par Kuol not endorsed by Troika as new SPLM/A-IO interim chair",
    author: "The ClarityDesk",
    date: "February 7, 2026",
  },
];

const ElectionsSection = () => {
  return (
    <section id="elections" className="bg-background py-10 md:py-14">
      <div className="container">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Elections</h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={i}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-2 right-2 badge-false shadow-md">
                  {article.badge}
                </span>
              </div>
              <div className="mt-3">
                <span className="category-pill-election">{`Elections`}</span>
                <h4 className="mt-2 font-heading text-sm md:text-base font-bold text-foreground leading-snug group-hover:text-secondary transition-colors line-clamp-2">
                  {article.title}
                </h4>
                <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{article.author}</span>
                  <span>·</span>
                  <span>{article.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElectionsSection;
