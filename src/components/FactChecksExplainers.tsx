import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const factCheckArticles = [
  {
    title: "FACT-CHECK: These images aren't of rebels smuggling weapons in a coffin in South Sudan",
    categories: ["Fact-Checks", "Politics", "Top Stories"],
    author: "Emmanuel Bida",
    date: "February 23, 2026",
  },
  {
    title: "Bobi Wine was not declared Uganda's President-elect",
    date: "February 2, 2026",
  },
  {
    title: "President Salva Kiir hasn't dismissed his five vice presidents",
    date: "January 31, 2026",
  },
  {
    title: "SPLA-IO military spokesperson Lam Paul Gabriel not arrested in Uganda",
    date: "January 14, 2026",
  },
  {
    title: "Juba city mayor Christopher Sarafino Wani Swaka not arrested",
    date: "December 3, 2025",
  },
];

const explainerArticle = {
  title: "Why there is no single device that can \"track hate speech\" online in South Sudan",
  author: "The ClarityDesk",
  date: "February 18, 2026",
  readTime: "28 min",
};

const FactChecksExplainers = () => {
  return (
    <section id="fact-checks" className="bg-background py-10 md:py-14">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Politics / Fact-Checks column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground">Politics</h2>
              <div className="section-divider" />
            </div>

            {/* Featured */}
            <a href="#" className="group block mb-5">
              <div className="flex flex-wrap gap-1.5 mb-2">
                {factCheckArticles[0].categories?.map((cat) => (
                  <span key={cat} className="category-pill-politics">{cat}</span>
                ))}
              </div>
              <h3 className="font-heading text-base font-bold text-foreground group-hover:text-secondary transition-colors leading-snug">
                {factCheckArticles[0].title}
              </h3>
              <span className="text-xs text-muted-foreground mt-1 block">
                {factCheckArticles[0].author} · {factCheckArticles[0].date}
              </span>
            </a>

            <div className="border-t border-border pt-4 flex flex-col gap-3">
              {factCheckArticles.slice(1).map((article, i) => (
                <a key={i} href="#" className="group flex items-baseline gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-1.5" />
                  <div>
                    <h4 className="text-sm font-medium text-foreground group-hover:text-secondary transition-colors leading-snug">
                      {article.title}
                    </h4>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Explainers column */}
          <motion.div
            id="explainers"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground">Explainers</h2>
              <div className="section-divider" />
            </div>

            <a href="#" className="group block">
              <div className="relative overflow-hidden rounded-lg bg-muted aspect-[16/9] flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-muted-foreground/20" />
                <span className="absolute top-2 right-2 badge-explainer shadow-md">Explainer</span>
              </div>
              <div className="mt-3">
                <h3 className="font-heading text-base font-bold text-foreground group-hover:text-secondary transition-colors leading-snug">
                  {explainerArticle.title}
                </h3>
                <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{explainerArticle.author}</span>
                  <span>·</span>
                  <span>{explainerArticle.date}</span>
                  <span>·</span>
                  <span>{explainerArticle.readTime}</span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FactChecksExplainers;
