import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, PenLine } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-primary py-14 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 mb-4">
              <Send className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-primary-foreground">
              Submit a Claim
            </h3>
            <p className="mt-2 text-primary-foreground/70 font-body leading-relaxed max-w-md">
              Spotted misinformation? Flag it for our editorial team to investigate and fact-check.
            </p>
            <Button variant="cta" size="lg" className="mt-5">
              Submit now →
            </Button>
          </motion.div>

          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-4">
              <PenLine className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-primary-foreground">
              Pitch a Story
            </h3>
            <p className="mt-2 text-primary-foreground/70 font-body leading-relaxed max-w-md">
              Freelance contributor? Pitch your investigation idea to our editorial team.
            </p>
            <Button variant="cta-outline" size="lg" className="mt-5 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              Pitch now →
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
