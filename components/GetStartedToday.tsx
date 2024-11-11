// Importing necessary UI components
import { HyperButton } from "./ui/buttons"; // Button component
import { WhiteSection } from "./ui/section-card"; // Section card component with white background
import { LargestText } from "./ui/texts"; // Text component for large-sized text

// The main functional component that renders the "Get Started Today" section
export default function GetStartedToday() {
  return (
    // WhiteSection wraps the content in a white background with centered alignment
    <WhiteSection className="w-screen flex flex-col items-center">
      
       {/* Displaying the large "Get Started Today" text, aligned at the center */}
      <LargestText align="center">Get Started Today</LargestText>
      
      {/* 
        This is a paragraph with a margin at the top (mt-10), centered text, and styled 
        with responsive width (90% on smaller screens and 1/4 on medium devices), 
        text color set to gray-500 and font size set to xl.
      */}
      <div className="mt-10 text-center md:w-1/4 w-[90%] text-gray-500 text-xl">
        We look forward to serving the needs of used car dealers across the
        Philippines and helping them thrive in this dynamic market.
      </div>
      
      {/* 
        The "Inquire Now" button is styled with margin at the top and a bold font.
      */}
      <div className="mt-10 font-semibold">
        <HyperButton>Inquire Now</HyperButton>
      </div>
    </WhiteSection>
  );
}
