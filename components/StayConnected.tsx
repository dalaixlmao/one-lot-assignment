"use client";
import { WhiteSection } from "./ui/section-card";
import { LargestText } from "./ui/texts";
import { SocialButton, SocialButtonContent } from "./ui/buttons";
import FacebookLogo from "./icons/facebook-logo";
import { useState } from "react";
import InstagramLogo from "./icons/instagram-logo";
import { posts } from "@/lib/data";
import HorizontalScrollBar from "./ui/horizontal-scroll-bar";

export default function StayConnected() {
  const [hoveredF, setHoveredF] = useState(false);
  const [hoveredI, setHoveredI] = useState(false);
  const setState = (setHover: (a: boolean) => void, hover:boolean) => { setHover(!hover) }
  return (
    <WhiteSection className="w-screen flex flex-col items-center">
      <LargestText align="center">Stay Connected</LargestText>
      <div className="w-full flex flex-col items-center mt-10">
        <div className="text-gray-500 text-center text-xl md:w-1/4 w-[90%]">
          Follow OneLot on Facebook and Instagram to stay up to date with our
          latest offers, updates, and new product features.
        </div>
      </div>
      <div className="mt-10 flex md:flex-row flex-col">
        <SocialButton className="md:mr-2" onChange={() => {setState(setHoveredF, hoveredF)}}>
          <SocialButtonContent icon={<FacebookLogo color={hoveredF ? "#57009C" : "black"} />}  hover = {hoveredF} social="Facebook"/>
        </SocialButton>
        <SocialButton className="md:ml-2 md:mt-0 mt-2" onChange={() => {setState(setHoveredI, hoveredI)}}>
          <SocialButtonContent icon={<InstagramLogo color={hoveredI ? "#57009C" : "black"} />}  hover = {hoveredI} social="Instagram"/>
        </SocialButton>
      </div>
      <div className="flex flex-col items-start w-full mt-10">
        <HorizontalScrollBar posts={posts} />
      </div>
    </WhiteSection>
  );
}
