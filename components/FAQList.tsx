import { ChevronDown } from "lucide-react"; // Importing a down-chevron icon from the lucide-react library.
import QuestionMark from "./icons/question-mark"; // Importing a custom Question Mark icon component.

interface FAQItem {
  question: string; // The FAQ question.
  answer: string; // The answer to the question.
  link?: {
    text: string; // Optional link text.
    url: string; // Optional link URL.
  };
}

// Component to render the FAQ list with toggle functionality.
export default function FAQList({
  index, // Current FAQ item index.
  toggleFAQ, // Function to toggle the FAQ item's visibility.
  faq, // The FAQ item containing question, answer, and optional link.
  openIndex, // The currently open FAQ item's index (null if none are open).
}: {
  index: number;
  faq: FAQItem;
  toggleFAQ: (index: number) => void;
  openIndex: number | null;
}) {
  return (
    <div key={index} className="border-b-2 border-gray-200 pb-4 text-xl">
      {/* The entire question acts as a button to toggle the visibility of the answer */}
      <button
        className="w-full text-left flex items-center justify-between py-4"
        onClick={() => toggleFAQ(index)} // Calls toggleFAQ with the current index.
      >
        <div className="flex items-center">
          {/* Icon displayed next to the question */}
          <span className="text-gray-400 mr-2">
            <QuestionMark /> {/* Renders the question mark icon */}
          </span>
          {/* Display the FAQ question */}
          <span className="text-gray-700 font-semibold">{faq.question}</span>
        </div>

        {/* Chevron icon indicates whether the FAQ is expanded or collapsed */}
        <ChevronDown
          className={`transform transition-transform duration-200 ${
            openIndex === index ? "rotate-180" : "" // Rotate icon if the item is open.
          }`}
        />
      </button>

      {/* Container for the answer section, collapses or expands based on openIndex */}
      <div
        className={`transition-all duration-200 overflow-hidden ${
          openIndex === index ? "max-h-40" : "max-h-0" // Animate height transition.
        }`}
      >
        {/* Answer content */}
        <div className="py-2 text-gray-500 font-medium">
          {faq.answer} {/* Display the FAQ answer */}

          {/* Render a clickable link if the FAQ item includes a link */}
          {faq.link && (
            <a
              href={faq.link.url} // Hyperlink to the specified URL.
              className="text-purple-600 hover:text-purple-700 ml-1" // Styled link with hover effect.
            >
              {faq.link.url} {/* Text for the hyperlink */}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
