import Banner from "@/components/Banner";
import DashboardSection from "@/components/DashboardSection";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import BuildMarketplace from "@/components/IntegrateTools";
import LogosSec from "@/components/LogosSec";
import ManageTask from "@/components/ManageTask";
import OurClients from "@/components/Testimonials";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <DashboardSection />
      <LogosSec />
      <Features />
      <ManageTask />
      <BuildMarketplace />
      <Pricing />
      <OurClients />
      <Banner />
    </main>
  );
}
