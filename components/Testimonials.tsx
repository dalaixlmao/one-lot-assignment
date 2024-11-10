"use client";

import { useEffect, useState } from "react";
import { GraySection } from "./ui/section-card";
import { LargestText } from "./ui/texts";
import { testimonials } from "@/lib/data";
import Testimonial from "./Testimonial";
import Left from "./icons/left";
import Right from "./icons/right";

export default function Testimonials() {
  const [index, setIndex] = useState<number>(0);
  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % testimonials.length);
    }, 1000);
  }, [index, setIndex]);
  return (
    <GraySection className="flex flex-col items-center w-full">
      <div>
        <LargestText align="center">Testimonials</LargestText>
      </div>
      <div className="flex flex-col items-center">
        <Testimonial
          icon={testimonials[index].icon}
          description={testimonials[index].description}
          author={testimonials[index].author}
          designation={testimonials[index].designation}
        />
      </div>
      <div className="flex flex-row">
        <div
          onClick={() => {
            setIndex((index + 1) % testimonials.length);
          }}
          className="mr-2 cursor-pointer"
        >
          <Left />
        </div>
        <div
          onClick={() => {
            setIndex((index - 1 + testimonials.length) % testimonials.length);
          }}
          className="ml-2 cursor-pointer"
        >
          <Right />
        </div>
      </div>
    </GraySection>
  );
}
