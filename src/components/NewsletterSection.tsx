import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewsletterSection = () => {
  return (
    <section className="bg-primary py-12 md:py-16">
      <div className="container">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 mb-4">
            <Mail className="w-5 h-5 text-secondary" />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground">
            Stay Informed
          </h2>
          <p className="mt-3 text-primary-foreground/70 font-body leading-relaxed">
            Subscribe to our newsletter to receive the latest fact-checks, explainers, and media literacy resources directly in your inbox.
          </p>
          <form
            className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <Button variant="cta" size="lg" type="submit">
              Subscribe
            </Button>
          </form>
          <p className="mt-3 text-xs text-primary-foreground/40">
            No spam. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
