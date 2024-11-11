import Image from "next/image";
import React from "react";
import { HyperButton } from "./ui/buttons";
import { LargerText, LargestText, DescriptiveText } from "./ui/texts";
import ListItem from "./ui/list-item";
import { FeatureType } from "@/lib/types";


// Feature component to display a feature section
export default function Feature({
  title,
  subTitle,
  headerDescription,
  advantages,
  footerDescription,
  buttonText,
  imagePath,
  index,
}: FeatureType) {
  return (
    <div
      className={
        // Dynamically adjust layout based on the index (even or odd)
        index % 2
          ? `my-10  w-full flex md:flex-row-reverse flex-col-reverse md:pl-10 items-center`
          : `my-10 w-full flex md:flex-row flex-col-reverse md:pr-10 items-center`
      }
    >
      {/* Image section with dynamic layout based on index */}
      <div className="md:w-[52%] w-[90%] md:mt-0 mt-6">
        <Image src={imagePath} height={1000} width={1000} alt={imagePath} />
      </div>

      {/* Text and button section with dynamic padding and layout */}
      <div
        className={
          // Adjust padding depending on index (for alternating layouts)
          index % 2
            ? "md:w-[48%] w-[90%] md:pl-10 pl-3 md:pr-24 pr-3"
            : "md:w-[48%] w-[90%] md:pl-24 pl-3 md:pr-10 pr-3"
        }
      >
        {/* Title */}
        <div>
          <LargestText align="left">{title}</LargestText>
        </div>

        {/* Subtitle */}
        <div className="my-6">
          <LargerText align="left">{subTitle}</LargerText>
        </div>

        {/* Header description */}
        <div className="my-6 text-xl">
          <DescriptiveText align="left">{headerDescription}</DescriptiveText>
        </div>

        {/* Advantages list */}
        <div className="my-5 border-t border-b">
          {advantages.map((e, index) => {
            return (
              <ListItem key={index}>
                {/* Display each advantage's title and description */}
                <div key={index} className="text-lg">
                  {e.title != "" && <a className="font-bold">{e.title}: </a>}
                  <a className="font-semibold">{e.description}</a>
                </div>
              </ListItem>
            );
          })}
        </div>

        {/* Footer description */}
        <div className="my-6 text-xl">
          <DescriptiveText align="left">{footerDescription}</DescriptiveText>
        </div>

        {/* Button */}
        <HyperButton>{buttonText}</HyperButton>
      </div>
    </div>
  );
}
