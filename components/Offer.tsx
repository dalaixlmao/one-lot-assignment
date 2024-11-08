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
    <div className="flex flex-row items-start pr-48">
      <div className="mt-1">
        <IconBubble color={color}>{icon}</IconBubble>
      </div>
      <div className="ml-2">
        <div className="flex flex-row items-center">
          <div className="">
            <LargeText>{title}</LargeText>
          </div>
        </div>
        <div className={`text-${color} font-medium`}>{motive}</div>
        <div>
          <DescriptiveText align="left">{description}</DescriptiveText>
        </div>
      </div>
    </div>
  );
}