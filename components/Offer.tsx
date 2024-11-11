import { DescriptiveText, LargeText } from "./ui/texts"; // Importing UI components for text rendering
import React from "react";
import { OfferType } from "@/lib/types";

// The Offer component to render an individual offer card
export default function Offer({
  title,
  motive,
  description,
  icon,
  color,
}: OfferType) {
  return (
    <div className="md:mt-0 mt-5 flex flex-row items-start md:pr-48">
      {/* Icon container with dynamic background color */}
      <div className="mt-1">
        {/* Dynamically set background color based on the 'color' prop */}
        <div 
          className={`h-6 w-6 flex flex-col items-center rounded-full justify-center 
                      bg-${color === 'blue' ? "[#D6F2F5]" : "[#F5EBF9]"}`}
        >
          {icon} {/* Render the icon passed as a prop */}
        </div>
      </div>
      {/* Offer details container */}
      <div className="ml-2">
        <div className="flex flex-row items-center">
          {/* Title of the offer */}
          <div>
            <LargeText align="center">{title}</LargeText>
          </div>
        </div>
        {/* Motive with dynamic color based on 'color' prop */}
        <div className={`text-${color === 'blue' ? "[#51CAD7]" : "[#57009C]"} text-sm font-semibold`}>
          {motive}
        </div>
        {/* Description of the offer */}
        <div className="text-sm">
          <DescriptiveText align="left">{description}</DescriptiveText>
        </div>
      </div>
    </div>
  );
}
