// Importing the necessary data and components
import { features } from "@/lib/data";  // Importing features data from the data module
import { GraySection } from "./ui/section-card";  // Importing the GraySection component for layout
import Feature from "./Feature";  // Importing the Feature component to display individual feature details

// Defining the Features component
export default function Features() {
  return (
    // Wrapping the content in a GraySection for consistent styling
    <GraySection className="w-full">
      {/* Iterating over each feature in the 'features' array */}
      {features.map((e, index) => {
        return (
          // Rendering the Feature component for each feature
          <Feature
            key={index}  // Using the index as a unique key for each feature
            index={index}  // Passing the index to the Feature component (could be useful for styling or animations)
            title={e.title}  // Passing the title of the feature
            subTitle={e.subTitle}  // Passing the subtitle of the feature
            headerDescription={e.headerDescription}  // Passing the header description for the feature
            imagePath={e.imagePath}  // Passing the path to the feature's image
            footerDescription={e.footerDescription}  // Passing the footer description for the feature
            advantages={e.advantages}  // Passing the advantages of the feature
            buttonText={e.buttonText}  // Passing the button text for the feature
          />
        );
      })}
    </GraySection>
  );
}
