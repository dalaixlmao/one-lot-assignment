import { ChevronDown } from "lucide-react";
import QuestionMark from "./icons/question-mark";

interface FAQItem {
  question: string;
  answer: string;
  link?: {
    text: string;
    url: string;
  };
}

export default function FAQList({
  index,
  toggleFAQ,
  faq,
  openIndex,
}: {
  index: number;
  faq: FAQItem;
  toggleFAQ: (index: number) => void;
  openIndex: number | null;
}) {
  return (
    <div key={index} className="border-b-2 border-gray-200 pb-4 text-xl">
        
      {/* Complete question is used as button so that it performs toggle functions. */}
      <button
        className="w-full text-left flex items-center justify-between py-4"
        onClick={() => toggleFAQ(index)}
      >
        <div className="flex items-center">
          <span className="text-gray-400 mr-2">

            {/* Question Mark Icon */}
            <QuestionMark />
          </span>
          <span className="text-gray-700 font-semibold">{faq.question}</span>
        </div>

        {/* Down Facing Icon */}
        <ChevronDown
          className={`transform transition-transform duration-200 ${
            openIndex === index ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`transition-all duration-200 overflow-hidden ${
          openIndex === index ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="py-2 text-gray-500 font-medium">

          {/* FAQ Answer */}
          {faq.answer}

          {/* FAQ Link if Any */}
          {faq.link && (
            <a
              href={faq.link.url}
              className="text-purple-600 hover:text-purple-700 ml-1"
            >
              {faq.link.url}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
