import { motion } from "framer-motion";

const heroArticle = {
  image: "https://claritydesk.dangotechconcepts.com/wp-content/uploads/2026/02/No-Evidence-of-South-Sudanese-Rebels-Using-Coffins-640x334.png",
  badge: "FALSE",
  categories: ["Fact-Checks", "Politics", "Top Stories"],
  title: "FACT-CHECK: These images aren't of rebels smuggling weapons in a coffin in South Sudan",
  excerpt: "A widely shared claim posted on Facebook alleging that South Sudanese intelligence confiscated coffins used by opposition rebel groups to smuggle weapons is false.",
  author: "Emmanuel Bida",
  date: "February 23, 2026",
  readTime: "8 min read",
};

const sideArticles = [
  {
    image: "https://claritydesk.dangotechconcepts.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-18-at-16.19.19-640x335.jpeg",
    badge: "FALSE",
    title: "This photo of an Air Wing Sukhoi Su-30MK2 fighter jet is not from South Sudan",
    categories: ["Fact-Checks"],
    date: "February 18, 2026",
  },
  {
    image: "https://claritydesk.dangotechconcepts.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-18-at-15.57.21-640x330.jpeg",
    badge: "EXPLAINER",
    title: "Why there is no single device that can \"track hate speech\" online in South Sudan",
    categories: ["Explainers", "Top Stories"],
    date: "February 18, 2026",
  },
];

const HeroSection = () => {
  return (
    <section className="bg-background">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Top Stories</h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main featured article */}
          <motion.article
            className="lg:col-span-2 group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={heroArticle.image}
                alt={heroArticle.title}
                className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-3 right-3 badge-false text-sm px-4 py-1.5 shadow-lg">
                {heroArticle.badge}
              </span>
            </div>
            <div className="mt-4">
              <div className="flex flex-wrap gap-2 mb-3">
                {heroArticle.categories.map((cat) => (
                  <span key={cat} className="category-pill-factcheck">{cat}</span>
                ))}
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground leading-tight group-hover:text-secondary transition-colors">
                {heroArticle.title}
              </h3>
              <p className="mt-2 text-muted-foreground font-body leading-relaxed line-clamp-2">
                {heroArticle.excerpt}
              </p>
              <div className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
                <span className="font-medium">{heroArticle.author}</span>
                <span>·</span>
                <span>{heroArticle.date}</span>
                <span>·</span>
                <span>{heroArticle.readTime}</span>
              </div>
            </div>
          </motion.article>

          {/* Side articles */}
          <div className="flex flex-col gap-6">
            {sideArticles.map((article, i) => (
              <motion.article
                key={i}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className={`absolute top-2 right-2 ${article.badge === "FALSE" ? "badge-false" : "badge-explainer"} shadow-md`}>
                    {article.badge}
                  </span>
                </div>
                <div className="mt-3">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {article.categories.map((cat) => (
                      <span key={cat} className="category-pill-factcheck text-[11px]">{cat}</span>
                    ))}
                  </div>
                  <h4 className="font-heading text-sm md:text-base font-bold text-foreground leading-snug group-hover:text-secondary transition-colors">
                    {article.title}
                  </h4>
                  <span className="mt-1.5 block text-xs text-muted-foreground">{article.date}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
