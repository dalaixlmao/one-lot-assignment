import Image from "next/image";
import React from "react";
import { HyperButton } from "./ui/buttons";
import { LargerText, LargestText, DescriptiveText } from "./ui/texts";
import ListItem from "./ui/list-item";

interface FeatureType {
  title: string;
  subTitle: string;
  headerDescription: string;
  advantages: {
    title: string;
    description: string;
  }[];
  footerDescription: string;
  buttonText: string;
  imagePath: string;
  index: number;
}

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
        index % 2
          ? `my-10  w-full flex md:flex-row-reverse flex-col-reverse md:pl-10 items-center`
          : `my-10 w-full flex md:flex-row flex-col-reverse md:pr-10 items-center`
      }
    >
      <div className="md:w-[52%] w-[90%] md:mt-0 mt-6">
        <Image src={imagePath} height={1000} width={1000} alt={imagePath} />
      </div>
      <div
        className={
          index % 2
            ? "md:w-[48%] w-[90%] md:pl-10 pl-3 md:pr-24 pr-3"
            : "md:w-[48%] w-[90%] md:pl-24 pl-3 md:pr-10 pr-3"
        }
      >
        <div>
          <LargestText align="left">{title}</LargestText>
        </div>
        <div className="my-6">
          <LargerText align="left">{subTitle}</LargerText>
        </div>
        <div className="my-6 text-xl">
          <DescriptiveText align="left">{headerDescription}</DescriptiveText>
        </div>
        <div className="my-5 border-t border-b">
          {advantages.map((e, index) => {
            return (
              <ListItem key={index}>
                <div key={index} className="text-lg">
                  {e.title != "" && <a className="font-bold">{e.title}: </a>}
                  <a className="font-semibold">{e.description}</a>
                </div>
              </ListItem>
            );
          })}
        </div>
        <div className="my-6 text-xl">
          <DescriptiveText align="left">{footerDescription}</DescriptiveText>
        </div>
        <HyperButton>{buttonText}</HyperButton>
      </div>
    </div>
  );
}
