"use client";

import { WhiteSection } from "./ui/section-card"; // Import WhiteSection component for layout styling
import { LargestText } from "./ui/texts"; // Import the LargestText component to display a large heading
import { SocialButton, SocialButtonContent } from "./ui/buttons"; // Import SocialButton and SocialButtonContent for social media buttons
import FacebookLogo from "./icons/facebook-logo"; // Import Facebook logo icon component
import { useState } from "react"; // Import useState hook for managing component state
import InstagramLogo from "./icons/instagram-logo"; // Import Instagram logo icon component
import { posts } from "@/lib/data"; // Import posts data (assumed to be a list of posts for horizontal scroll)
import HorizontalScrollBar from "./ui/horizontal-scroll-bar"; // Import HorizontalScrollBar component to display posts in a scrollable bar

export default function StayConnected() {
  // State management for hover effects on social media buttons
  const [hoveredF, setHoveredF] = useState(false);
  const [hoveredI, setHoveredI] = useState(false);

  // Function to toggle the hover state for social media buttons
  const setState = (setHover: (a: boolean) => void, hover: boolean) => {
    setHover(!hover); // Toggle the hover state
  };

  return (
    <WhiteSection className="w-screen flex flex-col items-center">
      {/* Heading for the section */}
      <LargestText align="center">Stay Connected</LargestText>

      <div className="w-full flex flex-col items-center mt-10">
        {/* Description text about staying connected */}
        <div className="text-gray-500 text-center text-xl md:w-1/4 w-[90%]">
          Follow OneLot on Facebook and Instagram to stay up to date with our
          latest offers, updates, and new product features.
        </div>
      </div>

      <div className="mt-10 flex md:flex-row flex-col">
        {/* Social Media Button for Facebook */}
        <SocialButton 
          className="md:mr-2" 
          onChange={() => { setState(setHoveredF, hoveredF); }}
        >
          <SocialButtonContent 
            icon={<FacebookLogo color={hoveredF ? "#57009C" : "black"} />} 
            hover={hoveredF} 
            social="Facebook" 
          />
        </SocialButton>

        {/* Social Media Button for Instagram */}
        <SocialButton 
          className="md:ml-2 md:mt-0 mt-2" 
          onChange={() => { setState(setHoveredI, hoveredI); }}
        >
          <SocialButtonContent 
            icon={<InstagramLogo color={hoveredI ? "#57009C" : "black"} />} 
            hover={hoveredI} 
            social="Instagram" 
          />
        </SocialButton>
      </div>

      {/* Horizontal scroll bar for posts */}
      <div className="flex flex-col items-start w-full mt-10">
        <HorizontalScrollBar posts={posts} />
      </div>
    </WhiteSection>
  );
}
