import { motion } from "framer-motion";

const trendingArticles = [
  { title: "Bobi Wine was not declared Uganda's President-elect" },
  { title: "President Salva Kiir hasn't dismissed his five vice presidents" },
  { title: "Jeffrey Sachs did not warn that Israel is targeting South Sudan" },
  { title: "This photo of an Air Wing Sukhoi Su-30MK2 fighter jet is not from South Sudan" },
  { title: "Why there is no single device that can \"track hate speech\" online in South Sudan" },
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
          <a key={i} href="#" className="flex items-start gap-3 group">
            <span className="font-heading text-2xl font-bold text-muted-foreground/40 w-6 flex-shrink-0 leading-none mt-0.5">
              {i + 1}
            </span>
            <div className="flex items-start gap-3 flex-1 min-w-0">
              <div className="w-12 h-12 rounded bg-muted flex-shrink-0 flex items-center justify-center">
                <span className="text-muted-foreground/30 text-xs font-bold">{i + 1}</span>
              </div>
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
