import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { SpecialOfferSection } from "@/components/SpecialOfferSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { LeadFormSection } from "@/components/LeadFormSection";
import { DemoSection } from "@/components/DemoSection";
import { UrgencySection } from "@/components/UrgencySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo');
    demoSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <HeroSection onCTAClick={scrollToForm} onDemoClick={scrollToDemo} />
      <BenefitsSection />
      <SpecialOfferSection onCTAClick={scrollToForm} />
      <TestimonialsSection />
      <DemoSection />
      <UrgencySection onCTAClick={scrollToForm} />
      <LeadFormSection />
      <Footer />
    </div>
  );
};

export default Index;
