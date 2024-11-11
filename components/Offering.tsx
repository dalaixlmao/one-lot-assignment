// Importing necessary components and data for the Offering section
import { WhiteSection } from "./ui/section-card";  // WhiteSection for wrapping the content with styling
import { LargerText, DescriptiveText } from "./ui/texts";  // LargerText and DescriptiveText components for text styling
import LongRightArrow from "./icons/long-right-arrow";  // Icon for the arrow
import Offer from "./Offer";  // Offer component to display each offer
import { pageDescription, offer } from "@/lib/data";  // Importing page description and offer data from the lib folder

// The Offering component displays a section with a description and a list of offers
export default function Offering() {
  return (
    // WhiteSection wraps the whole content with flex display for responsive design
    <WhiteSection className="flex md:flex-row flex-col">
      {/* Left side: Page description and the "Learn More" button */}
      <div className="md:w-1/2 w-full md:pr-[200px] pb-5 md:border-0 border-b">
        {/* Title of the offering section */}
        <LargerText align="center">{pageDescription.title}</LargerText>

        {/* Description under the title */}
        <DescriptiveText align="">
          {pageDescription.description}
        </DescriptiveText>

        {/* Button with text and an arrow icon */}
        <button className="text-purple font-semibold flex flex-row items-center">
          Learn More
          <div className="ml-1 mt-1">
            {/* Right arrow icon next to the text */}
            <LongRightArrow color="purple" />
          </div>
        </button>
      </div>

      {/* Right side: List of offers */}
      <div className="md:pl-24">
        {/* Mapping over the offers data to display each offer */}
        {offer.map((e, index) => {
          return (
            // Rendering Offer component for each item in the offer array
            <Offer
              key={index}  // Using index as key for unique identification
              title={e.title}  // Title of the offer
              description={e.description}  // Description of the offer
              motive={e.motive}  // Motive behind the offer
              color={e.color}  // Color associated with the offer
              icon={e.icon}  // Icon representing the offer
            />
          );
        })}
      </div>
    </WhiteSection>
  );
}
