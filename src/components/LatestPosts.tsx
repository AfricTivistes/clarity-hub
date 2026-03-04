import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const articles = [
  {
    title: "South Sudanese in the United States Keep Temporary Protected Status",
    categories: ["Latest News"],
    author: "The ClarityDesk",
    date: "February 13, 2026",
    excerpt: "A U.S. federal judge has ruled in favor of South Sudanese nationals by blocking plans to end their Temporary Protected Status (TPS).",
  },
  {
    title: "Renewed violence, political deadlock pushing South Sudan toward crisis",
    categories: ["Latest News", "Top Stories"],
    author: "The ClarityDesk",
    date: "February 10, 2026",
    excerpt: "South Sudan finds itself in a precarious political and security situation, with renewed fighting between government forces and opposition groups.",
  },
  {
    title: "South Sudan validates emergency UNESCO World Heritage Site nomination",
    categories: ["Latest News"],
    author: "The ClarityDesk",
    date: "February 8, 2026",
    excerpt: "South Sudan has taken a significant step toward global recognition of its natural and cultural heritage.",
  },
];

const LatestPosts = () => {
  return (
    <section className="bg-muted/50 py-10 md:py-14">
      <div className="container">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Latest Posts</h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={i}
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer border border-border/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="relative overflow-hidden bg-muted aspect-[16/10] flex items-center justify-center">
                <FileText className="w-16 h-16 text-muted-foreground/20" />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {article.categories.map((cat) => (
                    <span key={cat} className="category-pill-news">{cat}</span>
                  ))}
                </div>
                <h3 className="font-heading text-base font-bold text-foreground leading-snug group-hover:text-secondary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-medium">{article.author}</span>
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

export default LatestPosts;
