import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const explainers = [
  {
    title: "Why there is no single device that can \"track hate speech\" online in South Sudan",
    author: "The ClarityDesk",
    date: "February 18, 2026",
    readTime: "28 min",
  },
  {
    title: "Understanding the Revitalized Peace Agreement: Key milestones and challenges ahead",
    author: "The ClarityDesk",
    date: "February 10, 2026",
    readTime: "15 min",
  },
  {
    title: "How South Sudan's electoral commission plans to register voters in remote areas",
    author: "The ClarityDesk",
    date: "January 28, 2026",
    readTime: "12 min",
  },
];

const ExplainersSection = () => {
  return (
    <section id="explainers-section" className="bg-muted/30 py-10 md:py-14">
      <div className="container">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Explainers</h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {explainers.map((article, i) => (
            <motion.article
              key={i}
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer border border-border/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="relative bg-secondary/10 aspect-[16/10] flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-secondary/30" />
                <span className="absolute top-2 right-2 badge-explainer shadow-md">Explainer</span>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="category-pill-explainer">Explainers</span>
                </div>
                <h3 className="font-heading text-base font-bold text-foreground leading-snug group-hover:text-secondary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-medium">{article.author}</span>
                  <span>·</span>
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExplainersSection;
