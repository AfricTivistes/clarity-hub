import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import TrendingSidebar from "@/components/TrendingSidebar";
import LatestPosts from "@/components/LatestPosts";
import ElectionsSection from "@/components/ElectionsSection";
import FactChecksExplainers from "@/components/FactChecksExplainers";
import CTASection from "@/components/CTASection";
import PartnersSection from "@/components/PartnersSection";
import SiteFooter from "@/components/SiteFooter";

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
      <CTASection />
      <PartnersSection />
      <SiteFooter />
    </div>
  );
};

export default Index;
