import { motion } from "framer-motion";

const trendingArticles = [
  {
    image: "https://claritydesk.dangotechconcepts.com/wp-content/uploads/2026/02/1_SBBXAQMIvu2r-QdX60iv8Q-160x160.webp",
    title: "Bobi Wine was not declared Uganda's President-elect",
  },
  {
    image: "https://claritydesk.dangotechconcepts.com/wp-content/uploads/2026/01/1_RcAlNeFOA6gkH-25m-qRzA-160x160.webp",
    title: "President Salva Kiir hasn't dismissed his five vice presidents",
  },
  {
    image: "https://claritydesk.dangotechconcepts.com/wp-content/uploads/2026/02/1_4iHEeE_Ch5mO_chwrho_jA-160x160.webp",
    title: "Jeffrey Sachs did not warn that Israel is targeting South Sudan",
  },
  {
    image: "https://claritydesk.dangotechconcepts.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-18-at-16.19.19-160x160.jpeg",
    title: "This photo of an Air Wing Sukhoi Su-30MK2 fighter jet is not from South Sudan",
  },
  {
    image: "https://claritydesk.dangotechconcepts.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-18-at-15.57.21-160x160.jpeg",
    title: "Why there is no single device that can \"track hate speech\" online in South Sudan",
  },
];

const TrendingSidebar = () => {
  return (
    <motion.aside
      className="bg-card rounded-lg border border-border/50 p-5"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
        Trending
      </h3>
      <div className="flex flex-col gap-4">
        {trendingArticles.map((article, i) => (
          <a
            key={i}
            href="#"
            className="flex items-start gap-3 group"
          >
            <span className="font-heading text-2xl font-bold text-muted-foreground/40 w-6 flex-shrink-0 leading-none mt-0.5">
              {i + 1}
            </span>
            <div className="flex items-start gap-3 flex-1 min-w-0">
              <img
                src={article.image}
                alt={article.title}
                className="w-12 h-12 rounded object-cover flex-shrink-0"
              />
              <h4 className="text-sm font-medium text-foreground group-hover:text-secondary transition-colors leading-snug line-clamp-2">
                {article.title}
              </h4>
            </div>
          </a>
        ))}
      </div>
    </motion.aside>
  );
};

export default TrendingSidebar;
