"use client"; // Marks this file as a client component in a React Server Component setup.

import React, { useState } from "react"; // Import React and useState hook for managing state.
import { GraySection } from "./ui/section-card"; // Import styled component for section layout.
import { LargestText } from "./ui/texts"; // Import a styled text component for the main heading.
import FAQList from "./FAQList"; // Import the FAQList component that renders individual FAQ items.
import LongRightArrow from "./icons/long-right-arrow"; // Import a custom icon for the button.
import { HyperButton } from "./ui/buttons"; // Import a styled button component.
import { faqs } from "@/lib/data";

const FAQ = () => {
  // State to track which FAQ item is currently expanded.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  /**
   * Toggles the FAQ item's open/close state.
   * If the clicked item is already open, it closes it.
   * Otherwise, it sets the clicked item as the open one.
   * @param {number} index - The index of the clicked FAQ item.
   */
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <GraySection className=""> {/* Outer container for the FAQ section with a styled background. */}
      <div className="max-w-3xl mx-auto p-6"> {/* Inner container with padding and centered content. */}
        <LargestText align="center">Frequently asked questions</LargestText> {/* Main heading */}
        <div className="space-y-4 mt-10"> {/* Container for FAQ items with spacing between them. */}
          {faqs.map((faq, index) => ( // Iterate over the FAQ data array.
            <FAQList
              key={index} // Unique key for each FAQ item.
              faq={faq} // Pass the FAQ data as a prop.
              toggleFAQ={toggleFAQ} // Pass the toggle function as a prop.
              index={index} // Pass the current index of the FAQ item.
              openIndex={openIndex} // Pass the current open FAQ index to manage state.
            />
          ))}
        </div>
        <div className="mt-8 text-center"> {/* Container for the "See all" button. */}
          <HyperButton>
            <div className="flex flex-row items-center text-lg"> {/* Button content styled with text and icon. */}
              See all
              <div className="ml-2">
                <LongRightArrow color="white" /> {/* Right arrow icon with custom color. */}
              </div>
            </div>
          </HyperButton>
        </div>
      </div>
    </GraySection>
  );
};

export default FAQ; // Export the FAQ component as the default export.
