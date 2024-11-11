import Landing from "@/components/Landing";
import Offering from "@/components/Offering";
import Features from "@/components/Features";
import WhyOneLot from "@/components/WhyOneLot";
import Testimonials from "@/components/Testimonials";
import StayConnected from "@/components/StayConnected";
import FAQ from "@/components/FAQ";
import GetStartedToday from "@/components/GetStartedToday";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center">
      <Landing />
      <Offering />
      <Features />
      <WhyOneLot />
      <Testimonials />
      <StayConnected />
      <FAQ />
      <GetStartedToday />
      <Footer />
    </div>
  );
}
