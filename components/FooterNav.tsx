import Image from "next/image";
import { ChevronDown } from "lucide-react";
export default function FooterNav() {
  return (
    <div className="flex md:flex-row flex-col justify-between border-b-2 w-[90%]">
      <div>
        <Image src={"/logo.svg"} width={200} height={200} alt="onelot-logo" />
      </div>
      <div>
        <div className="flex md:flex-row flex-col md:items-center">
          <div className="mx-3 text-xl text-gray-500">Home</div>
          <div className="mx-3 text-xl text-gray-500">Features</div>
          <div className="mx-3 text-xl text-gray-500">About</div>
          <div className="mx-3 text-xl text-gray-500">Contact</div>
        </div>
        <div className="flex flex-row items-center md:justify-end my-7">
          <div className="font-semibold">ENG</div>
          <div className="mx-1">
            <Image src={"/USA.svg"} height={30} width={30} alt="usa-flag" />
          </div>
          <div>
            <ChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
}
