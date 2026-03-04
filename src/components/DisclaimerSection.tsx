import { AlertTriangle } from "lucide-react";

const DisclaimerSection = () => {
  return (
    <section className="bg-muted/50 py-8 md:py-10 border-t border-border/50">
      <div className="container">
        <div className="flex items-start gap-4 max-w-4xl mx-auto">
          <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-heading text-sm font-bold text-foreground uppercase tracking-wider mb-2">
              Disclaimer
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This website was developed with the financial support of the Election Civic Tech Fund of AfricTivistes. 
              Its contents are the sole responsibility of the Excellence Foundation for South Sudan (EFSS) and do not 
              necessarily reflect the views of AfricTivistes. The ClarityDesk is committed to independent, non-partisan 
              fact-checking and media literacy. All fact-check articles follow the International Fact-Checking Network (IFCN) 
              code of principles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
