import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoHorizontal from "@/assets/logo-horizontal.png";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Fact-Checks", href: "#fact-checks" },
  { label: "Explainers", href: "#explainers" },
  { label: "Data | Sojo", href: "#data" },
  { label: "Elections", href: "#elections" },
  { label: "Repository", href: "#" },
  { label: "About Us", href: "#" },
];

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="bg-primary">
        <div className="container flex items-center justify-between h-9 text-sm text-primary-foreground">
          <span className="font-body opacity-80">
            {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
          </span>
          <div className="hidden sm:flex gap-2">
            <Button variant="cta" size="sm" className="h-7 text-xs rounded-sm">
              Submit Claim
            </Button>
            <Button variant="cta-outline" size="sm" className="h-7 text-xs rounded-sm border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              Pitch a Story
            </Button>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex-shrink-0">
          <img src={logoHorizontal} alt="The ClarityDesk" className="h-8 md:h-10" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-secondary transition-colors rounded-md hover:bg-muted"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="p-2 text-foreground/60 hover:text-secondary transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            className="lg:hidden p-2 text-foreground/60"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2.5 text-sm font-medium text-foreground/80 hover:text-secondary hover:bg-muted rounded-md"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 mt-3 pt-3 border-t border-border">
              <Button variant="cta" size="sm" className="flex-1">Submit Claim</Button>
              <Button variant="cta-outline" size="sm" className="flex-1">Pitch a Story</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
