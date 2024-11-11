// Importing necessary components for the homepage layout
import Landing from "@/components/Landing"; // Hero section or introduction
import Offering from "@/components/Offering"; // The main offerings or product details
import Features from "@/components/Features"; // Key features of the product or service
import WhyOneLot from "@/components/WhyOneLot"; // Reasons to choose the platform or service
import Testimonials from "@/components/Testimonials"; // Customer reviews or testimonials
import StayConnected from "@/components/StayConnected"; // Section for staying in touch (newsletter, social media)
import FAQ from "@/components/FAQ"; // Frequently asked questions section
import GetStartedToday from "@/components/GetStartedToday"; // Call to action for users to get started
import Footer from "@/components/Footer"; // Footer of the page with additional info and links

// Main functional component for the homepage
export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center"> {/* Wrapper for the page, centered content */}
      <Landing /> {/* Hero section */}
      <Offering /> {/* Product or service offerings */}
      <Features /> {/* List of features */}
      <WhyOneLot /> {/* Reasons to choose the platform */}
      <Testimonials /> {/* User feedback */}
      <StayConnected /> {/* Call to action to stay connected */}
      <FAQ /> {/* Answering common questions */}
      <GetStartedToday /> {/* Clear call to action to start using the service */}
      <Footer /> {/* Footer with contact and additional links */}
    </div>
  );
}
