import Image from "next/image";  // Importing Image component from Next.js for optimized image loading
import { ChevronDown } from "lucide-react";  // Importing ChevronDown icon from lucide-react

// FooterNav component representing the footer navigation section of the page
export default function FooterNav() {
  return (
    <div className="flex md:flex-row flex-col justify-between border-b-2 w-[90%]">  {/* Container for the footer with flexbox for layout and a bottom border */}
      
      {/* Logo section */}
      <div>
        <Image src={"/logo.svg"} width={200} height={200} alt="onelot-logo" />  {/* Logo image with defined width and height */}
      </div>

      <div>
        {/* Navigation links */}
        <div className="flex md:flex-row flex-col md:items-center">  {/* Flex container for navigation items */}
          <div className="mx-3 text-xl text-gray-500">Home</div>  {/* Home link */}
          <div className="mx-3 text-xl text-gray-500">Features</div>  {/* Features link */}
          <div className="mx-3 text-xl text-gray-500">About</div>  {/* About link */}
          <div className="mx-3 text-xl text-gray-500">Contact</div>  {/* Contact link */}
        </div>

        {/* Language and flag section */}
        <div className="flex flex-row items-center md:justify-end my-7">  {/* Flex container for language and flag */}
          <div className="font-semibold">ENG</div>  {/* Language text (English) */}
          <div className="mx-1">
            <Image src={"/USA.svg"} height={30} width={30} alt="usa-flag" />  {/* USA flag image */}
          </div>
          <div>
            <ChevronDown />  {/* Dropdown arrow icon for language selection */}
          </div>
        </div>
      </div>
    </div>
  );
}
