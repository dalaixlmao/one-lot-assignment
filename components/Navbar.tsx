// Importing necessary components and icons
import { HyperButton, LightButton } from "./ui/buttons"; // Custom button components
import Image from "next/image"; // Next.js image component for optimized image rendering
import DownArrow from "./icons/down-arrow"; // Down arrow icon for dropdown functionality
import Menu from "./icons/menu"; // Hamburger menu icon for mobile view

export default function Navbar() {
  return (
    // Main container for the navbar, full width, with padding and flexbox layout
    <div className="w-screen flex flex-row items-center justify-between px-5 py-4">
      
      {/* Left section: Logo and navigation links */}
      <div className="flex flex-row items-center">
        
        {/* Logo section */}
        <div className="">
          <Image
            src="/logo.svg" // Logo source
            width={120} // Logo width
            height={120} // Logo height
            alt="Picture of the author" // Alt text for the image
          />
        </div>

        {/* Navigation links visible only on medium and larger screens (hidden on small screens) */}
        <div className="md:block hidden flex flex-row ml-2">
          <LightButton>Home</LightButton> {/* Home link button */}
          <LightButton>
            {/* Products link with a dropdown indicator */}
            <a className="flex flex-row items-center stroke-gray-900 hover:stroke-purple">
              Products
              <DownArrow /> {/* Down arrow icon */}
            </a>
          </LightButton>
          <LightButton>About</LightButton> {/* About link button */}
          <LightButton>Contact</LightButton> {/* Contact link button */}
        </div>
      </div>

      {/* Right section: Log In and Inquire buttons */}
      <div className="md:block hidden">
        <LightButton>Log In</LightButton> {/* Log In button */}
        <HyperButton>Inquire Now</HyperButton> {/* Inquire Now button */}
      </div>

      {/* Mobile menu button, only visible on small screens */}
      <div className="md:hidden block">
        <Menu /> {/* Menu icon for mobile */}
      </div>
    </div>
  );
}
