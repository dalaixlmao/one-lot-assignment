import Image from "next/image";  // Importing Next.js Image component for optimized images
import { HyperButton } from "./ui/buttons";  // Importing a custom HyperButton component
import { DescriptiveText, LargestText } from "./ui/texts";  // Importing custom text components for varying text sizes

// The main Landing page component
export default function Landing() {
  return (
    <div className="w-screen flex flex-col items-center mt-10"> {/* Container for the whole landing page with flexbox */}
      <div className="items-center flex flex-col">  {/* Inner container for text content */}
        
        {/* Largest headline text for the landing section */}
        <LargestText align="center">
          Grow your dealership with working capital loans and digital tools from
          OneLot
        </LargestText>

        {/* Description text with a margin on mobile and larger screens */}
        <div className="md:w-1/2 w-[90%] py-5">
          <DescriptiveText align="center">
            We enable dealers to buy more cars through our inventory loan
            solutions and sell cars more efficiently through our Dealership
            Management System with its inventory management, marketing solutions
            and market insights
          </DescriptiveText>
        </div>

        {/* Call-to-action button */}
        <div className="pb-5">
          <HyperButton>Inquire Now</HyperButton>
        </div>
      </div>

      {/* Displaying the image only on larger screens (hidden on mobile) */}
      <Image
        className="z-10 md:block hidden"
        src={"/screen.svg"}  // Image showing the product in use
        width={800}
        height={800}
        alt={"screen"}  // Alt text for accessibility
      />

      {/* Section below the fold with background and regulatory information */}
      <div className="bg-gray-200/30 pt-10 md:pt-0 pb-10 md:mt-[-20rem] w-screen flex flex-col items-center">
        <div className="w-[90%] md:pt-96 flex flex-col items-center">

          {/* Displaying the image on mobile screens only */}
          <Image
            className="z-10 md:hidden block"
            src={"/screen.svg"}  // Same image for mobile users
            width={800}
            height={800}
            alt={"screen"}
          />

          {/* Text informing users about the regulation */}
          <DescriptiveText align="center">Regulated By</DescriptiveText>

          {/* Image for regulatory logo */}
          <Image
            src={"/regulated-credits.svg"}  // Regulatory logo image
            height={200}
            width={200}
            alt={"Regulated by"}  // Alt text for the regulatory image
          />
        </div>
      </div>
    </div>
  );
}
