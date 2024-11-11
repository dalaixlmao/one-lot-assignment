"use client";

import { useEffect, useState } from "react";
import { GraySection } from "./ui/section-card";
import { LargestText } from "./ui/texts";
import { testimonials } from "@/lib/data";
import Testimonial from "./Testimonial";
import Left from "./icons/left";
import Right from "./icons/right";

export default function Testimonials() {
  // State to track the current index of the displayed testimonial
  const [index, setIndex] = useState<number>(0);

  // useEffect hook to automatically change testimonial every 1000ms (1 second)
  useEffect(() => {
    const timer = setTimeout(() => {
      // Set the next testimonial index, ensuring it wraps around using modulo
      setIndex((index + 1) % testimonials.length);
    }, 1000);

    // Cleanup the timeout when the component is unmounted or when the index changes
    return () => clearTimeout(timer);
  }, [index]); // Dependency array includes index to re-trigger when it changes

  return (
    <GraySection className="flex flex-col items-center w-full">
      <div>
        {/* Header for the testimonials section */}
        <LargestText align="center">Testimonials</LargestText>
      </div>
      <div className="flex flex-col items-center">
        {/* Display the testimonial based on the current index */}
        <Testimonial
          icon={testimonials[index].icon}
          description={testimonials[index].description}
          author={testimonials[index].author}
          designation={testimonials[index].designation}
        />
      </div>
      <div className="flex flex-row">
        {/* Button to move to the next testimonial */}
        <div
          onClick={() => {
            setIndex((index + 1) % testimonials.length); // Increment index with wraparound
          }}
          className="mr-2 cursor-pointer"
        >
          <Left /> {/* Left arrow icon */}
        </div>
        {/* Button to move to the previous testimonial */}
        <div
          onClick={() => {
            setIndex((index - 1 + testimonials.length) % testimonials.length); // Decrement index with wraparound
          }}
          className="ml-2 cursor-pointer"
        >
          <Right /> {/* Right arrow icon */}
        </div>
      </div>
    </GraySection>
  );
}
