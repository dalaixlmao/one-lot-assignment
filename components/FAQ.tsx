"use client";
import React, { useState } from "react";
import { GraySection } from "./ui/section-card";
import { LargestText } from "./ui/texts";
import FAQList from "./FAQList";
import LongRightArrow from "./icons/long-right-arrow";
import { HyperButton } from "./ui/buttons";
import { faqs } from "@/lib/data";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <GraySection className="">
      <div className="max-w-3xl mx-auto p-6">
        <LargestText align="center">Frequently asked questions</LargestText>
        <div className="space-y-4 mt-10">
          {faqs.map((faq, index) => (
            <FAQList
              faq={faq}
              toggleFAQ={toggleFAQ}
              index={index}
              openIndex={openIndex}
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <HyperButton>
            <div className="flex flex-row items-center text-lg">
              See all
              <div className="ml-2">
                <LongRightArrow color="white" />
              </div>
            </div>
          </HyperButton>
        </div>
      </div>
    </GraySection>
  );
};

export default FAQ;