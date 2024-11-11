import { DescriptiveText, LargeText } from "./ui/texts";
import IconBubble from "./icons/icon-bubble";
import React from "react";

interface OfferType {
  title: string;
  motive: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}
export default function Offer({
  title,
  motive,
  description,
  icon,
  color,
}: OfferType) {
  return (
    <div className="md:mt-0 mt-5 flex flex-row items-start md:pr-48">
      <div className="mt-1">
        <div className={`h-6 w-6 flex flex-col items-center rounded-full justify-center bg-${(color=='blue'?"[#D6F2F5]":"[#F5EBF9]")}`}>{icon}</div>
      </div>
      <div className="ml-2">
        <div className="flex flex-row items-center">
          <div className="">
            <LargeText align="center">{title}</LargeText>
          </div>
        </div>
        <div className={`text-${(color=='blue'?"[#51CAD7]":"[#57009C]")} text-sm font-semibold`}>{motive}</div>
        <div className="text-sm">
          <DescriptiveText align="left">{description}</DescriptiveText>
        </div>
      </div>
    </div>
  );
}
