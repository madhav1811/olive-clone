import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import HealthBenefits from "./components/sections/HealthBenefits";
import Testimonials from "./components/sections/Testimonials";
import ComparisonTable from "./components/sections/ComparisonTable";
import PricingPlans from "./components/sections/PricingPlans";
import PromoAndFAQ from "./components/sections/PromoAndFAQ";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <HealthBenefits />
      <Testimonials />
      <ComparisonTable />
      <PricingPlans />
      <PromoAndFAQ />
      <Footer />
    </div>
  );
}

export default App;
