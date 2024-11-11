// Importing logo components for Facebook and Instagram
import FacebookLogo from "./icons/facebook-logo";
import InstagramLogo from "./icons/instagram-logo";

// FooterCopyright functional component
export default function FooterCopyright() {
  return (
    // Main container for the footer section, using flex layout for responsive design
    <div className="flex md:flex-row flex-col w-[90%] justify-between mt-10">
      
      {/* Copyright text section */}
      <div className="text-gray-500 text-xl font-medium">
        
        {/* First copyright statement for OneLot Technologies */}
        <div className="">
          © 2024 OneLot Technologies Incorporated Pte. Ltd. All Rights Reserved.
        </div>
        
        {/* Second copyright statement for OneLot Financing Corporation */}
        <div className="mt-5">© 2024 OneLot Financing Corporation. All Rights Reserved.</div>
      </div>

      {/* Social media icons container */}
      <div className="flex flex-row items-end md:mt-0 mt-5">
        
        {/* Instagram logo button */}
        <div className="mr-3 cursor-pointer">
          <InstagramLogo color="#6b7280" />
        </div>

        {/* Facebook logo button */}
        <div className="ml-3 cursor-pointer">
          <FacebookLogo color="#6b7280" />
        </div>
      </div>
    </div>
  );
}
