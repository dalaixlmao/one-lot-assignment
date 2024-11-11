// Importing the necessary components
import { WhiteSection } from "./ui/section-card"; // WhiteSection component for wrapping content with a styled section
import FooterNav from "./FooterNav"; // Footer navigation component
import FooterCopyright from "./FooterCopyright"; // Footer copyright component

// Footer component definition
export default function Footer() {
  return (
    // WhiteSection is a wrapper with specific styles for the footer
    <WhiteSection className="w-screen flex flex-col items-center w-screen">
      {/* Footer navigation section */}
      <div className="w-full flex flex-col items-center">
        <FooterNav /> {/* Renders the footer navigation */}
      </div>
      
      {/* Footer copyright section */}
      <div className="w-full flex flex-col items-center">
        <FooterCopyright /> {/* Renders the copyright information */}
      </div>
    </WhiteSection>
  );
}
