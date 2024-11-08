import { HyperButton, LightButton } from "./ui/buttons";
import Image from "next/image";
import DownArrow from "./icons/down-arrow";
import Menu from "./icons/menu";

export default function Navbar() {
  return (
    <div className="w-screen flex flex-row items-center justify-between px-5 py-4">
      <div className="flex flex-row items-center">
        <div className="">
          <Image
            src="/logo.svg"
            width={120}
            height={120}
            alt="Picture of the author"
          />
        </div>

        <div className="md:block hidden flex flex-row ml-2">
          <LightButton>Home</LightButton>
          <LightButton>
            <a className="flex flex-row items-center stroke-gray-900 hover:stroke-purple">
              Products
              <DownArrow />
            </a>
          </LightButton>
          <LightButton>About</LightButton>
          <LightButton>Contact</LightButton>
        </div>
      </div>
      <div className="md:block hidden">
        <LightButton>Log In</LightButton>
        <HyperButton>Inquire Now</HyperButton>
      </div>
      <div className="md:hidden block"><Menu /></div>
    </div>
  );
}
