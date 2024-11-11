import Image from "next/image";
import { HyperButton } from "./ui/buttons";
import { DescriptiveText, LargestText } from "./ui/texts";

export default function Landing() {
  return (
    <div className="w-screen flex flex-col items-center mt-10">
      <div className=" items-center flex flex-col">
        <LargestText align="center">
          Grow your dealership with working capital loans and digital tools from
          OneLot
        </LargestText>
        <div className="md:w-1/2 w-[90%] py-5">
          <DescriptiveText align="center">
            We enable dealers to buy more cars through our inventory loan
            solutions and sell cars more efficiently through our Dealership
            Management System with its inventory management, marketing solutions
            and market insights
          </DescriptiveText>
        </div>
        <div className="pb-5">
          <HyperButton>Inquire Now</HyperButton>
        </div>
      </div>
      <Image
        className="z-10 md:block hidden"
        src={"/screen.svg"}
        width={800}
        height={800}
        alt={"screen"}
      />
      <div className="bg-gray-200/30 pt-10 md:pt-0 pb-10 md:mt-[-20rem] w-screen flex flex-col items-center">
        <div className="w-[90%] md:pt-96 flex flex-col items-center">
          <Image
            className="z-10 md:hidden block"
            src={"/screen.svg"}
            width={800}
            height={800}
            alt={"screen"}
          />
          <DescriptiveText align="center">Regulated By</DescriptiveText>
          <Image
            src={"/regulated-credits.svg"}
            height={200}
            width={200}
            alt={"Regulated by"}
          />
        </div>
      </div>
    </div>
  );
}
