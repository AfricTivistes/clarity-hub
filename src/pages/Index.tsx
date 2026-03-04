import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import TrendingSidebar from "@/components/TrendingSidebar";
import LatestPosts from "@/components/LatestPosts";
import ElectionsSection from "@/components/ElectionsSection";
import FactChecksExplainers from "@/components/FactChecksExplainers";
import ExplainersSection from "@/components/ExplainersSection";
import CTASection from "@/components/CTASection";
import AppDownloadSection from "@/components/AppDownloadSection";
import NewsletterSection from "@/components/NewsletterSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import PartnersSection from "@/components/PartnersSection";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <SiteHeader />

      {/* Hero + Trending */}
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <HeroSection />
          </div>
          <div className="lg:col-span-1">
            <TrendingSidebar />
          </div>
        </div>
      </div>

      <LatestPosts />
      <ElectionsSection />
      <FactChecksExplainers />
      <ExplainersSection />
      <CTASection />
      <AppDownloadSection />
      <NewsletterSection />
      <DisclaimerSection />
      <PartnersSection />
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
