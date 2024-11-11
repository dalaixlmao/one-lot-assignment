// Importing necessary components and data
import { LargestText } from "./ui/texts"; // LargestText is used to display prominent text on the page
import { WhiteSection } from "./ui/section-card"; // WhiteSection is used to wrap the content in a styled section
import { values } from "@/lib/data"; // 'values' contains the data for ValueCards to be displayed
import ValueCard from "./ValueCard"; // ValueCard is used to display individual cards with icon, title, and value

export default function WhyOneLot() {
  return (
    <WhiteSection className=""> {/* Wrapper section with optional styling */}
      <div>
        {/* Main heading to explain the purpose of the section */}
        <LargestText align={`center`}>Why Onelot?</LargestText>
        
        {/* Grid layout for the ValueCards */}
        <div className="mt-12 grid md:gap-x-10 grid-cols-1 gap-y-10 md:grid-cols-5">
          {/* Iterating over 'values' to display each ValueCard */}
          {values.map((v, index) => {
            return (
              <div key={index}> {/* Using 'index' as the key for each item in the list */}
                {/* Rendering the ValueCard component with the respective props */}
                <ValueCard icon={v.icon} title={v.title} value={v.value} />
              </div>
            );
          })}
        </div>
      </div>
    </WhiteSection>
  );
}
