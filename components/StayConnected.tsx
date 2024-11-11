"use client";
import { WhiteSection } from "./ui/section-card";
import { DescriptiveText, LargestText } from "./ui/texts";
import { SocialButton } from "./ui/buttons";
import FacebookLogo from "./icons/facebook-logo";
import { useState } from "react";
import InstagramLogo from "./icons/instagram-logo";
import { posts } from "@/lib/data";
import Image from "next/image";

export default function StayConnected() {
  const [hoveredF, setHoveredF] = useState(false);
  const [hoveredI, setHoveredI] = useState(false);

  return (
    <WhiteSection className="w-screen flex flex-col items-center">
      <div>
        <LargestText align="center">Stay Connected</LargestText>
      </div>
      <div className="w-full flex flex-col items-center mt-10">
        <div className="text-gray-500 text-center text-xl md:w-1/4 w-[90%]">
          Follow OneLot on Facebook and Instagram to stay up to date with our
          latest offers, updates, and new product features.
        </div>
      </div>
      <div className="mt-10">
        <SocialButton
          className="mr-2"
          onMouseEnter={() => {
            setHoveredF(true);
          }}
          onMouseLeave={() => {
            setHoveredF(false);
          }}
        >
          <div className="flex flex-row">
            <FacebookLogo color={hoveredF ? "#57009C" : "black"} />
            <div
              className={(hoveredF ? `text-[#57009C]` : `text-black`) + ` ml-3`}
            >
              Follow on Facebook
            </div>
          </div>
        </SocialButton>
        <SocialButton
          className="ml-2"
          onMouseEnter={() => {
            setHoveredI(true);
          }}
          onMouseLeave={() => {
            setHoveredI(false);
          }}
        >
          <div className="flex flex-row">
            <InstagramLogo color={hoveredI ? "#57009C" : "black"} />
            <div
              className={(hoveredI ? `text-[#57009C]` : `text-black`) + ` ml-3`}
            >
              Follow on Instagram
            </div>
          </div>
        </SocialButton>
      </div>
      <div className="flex flex-col items-start w-full mt-10">
        <div className="flex flex-row my-5 justify-start flex-nowrap overflow-x-auto w-full">
          {posts?.map((p, index) => (
            <div key={index} className="w-96 mx-3 h-96 flex-shrink-0">
              <Image 
                src={p} 
                height={400} 
                width={500} 
                alt={`Social post ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </WhiteSection>
  );
}
