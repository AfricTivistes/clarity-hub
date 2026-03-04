import { motion } from "framer-motion";
import appBanner from "@/assets/app-banner.png";

const AppDownloadSection = () => {
  return (
    <section className="bg-secondary py-14 md:py-20 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary-foreground">
              Download The ClarityDesk App
            </h2>
            <p className="mt-4 text-secondary-foreground/80 font-body leading-relaxed max-w-lg">
              See the facts. Find the fix. Get verified information and fact-checks delivered straight to your phone. Stay informed with real-time alerts on misinformation.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-primary px-6 py-3 rounded-lg text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 2.139a1.122 1.122 0 0 0-1.2.082L3.497 11.14a1.122 1.122 0 0 0 0 1.72l12.826 8.919a1.122 1.122 0 0 0 1.748-.933V3.072a1.122 1.122 0 0 0-.548-.933z"/>
                </svg>
                Google Play
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-primary px-6 py-3 rounded-lg text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <img
              src={appBanner}
              alt="The ClarityDesk App on mobile devices"
              className="max-h-[350px] w-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
