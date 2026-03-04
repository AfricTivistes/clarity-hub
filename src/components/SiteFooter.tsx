import { Mail, Phone } from "lucide-react";
import logoHorizontal from "@/assets/logo-horizontal.png";

const SiteFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={logoHorizontal} alt="The ClarityDesk" className="h-8 brightness-0 invert mb-4" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-md">
              This website was developed with the financial support of the Election Civic Tech Fund of AfricTivistes. Its contents are the sole responsibility of the Excellence Foundation for South Sudan and do not necessarily reflect the views of AfricTivistes.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-4 text-primary-foreground/80">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              {["Fact-Checks", "Explainers", "Data | Sojo", "Elections", "Repository", "About Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-secondary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-4 text-primary-foreground/80">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary" />
                <a href="mailto:hi@claritydesk.org" className="hover:text-secondary transition-colors">
                  hi@claritydesk.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                <a href="tel:+211923500332" className="hover:text-secondary transition-colors">
                  +211 923 500 332
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                <a href="tel:+211985987007" className="hover:text-secondary transition-colors">
                  +211 985 987 007
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="text-xs font-bold uppercase tracking-wider mb-2 text-primary-foreground/50">
                Parent Organization
              </h5>
              <img
                src="https://claritydesk.dangotechconcepts.com/wp-content/uploads/2026/02/EFSS-LOGO-bg-removed.png"
                alt="Excellence Foundation for South Sudan"
                className="h-10 brightness-0 invert opacity-60"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container py-4 text-center text-xs text-primary-foreground/40">
          Copyright © 2026. The ClarityDesk is a project of the Excellence Foundation for South Sudan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
