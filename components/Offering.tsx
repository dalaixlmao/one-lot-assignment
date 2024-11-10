import { WhiteSection } from "./ui/section-card";
import { LargerText, DescriptiveText } from "./ui/texts";
import Dollar from "./icons/dollar";
import Speaker from "./icons/speaker";
import LongRightArrow from "./icons/long-right-arrow";
import Offer from "./Offer";

const pageDescription = {
  title: "Everything you need to grow your business",
  description: `OneLot is your trusted lending and financing partner, exclusively
          tailored for used car dealerships. We also offer digital tools for
          streamlined operations and growth of your dealership.`,
};

const offer = [
  {
    title: "Dealer Loans",
    motive: "Accelerate your growth with tailored loan solutions.",
    description:
      "Get comprehensive car financing solutions, unlock the potential of your dealership, and take it to new heights.",
    icon: <Dollar color="#51CAD7" />,
    color: "blue",
  },
  {
    title: "Dealership Management System",
    description:
      "OneLot offers a suite of powerful digital tools designed to optimize your dealership's operations.",
    motive:
      "Enhance Efficiency and Sales with Free Digital Tools for Car Dealerships.",
    icon: <Speaker color="#57009C" />,
    color: "purple",
  },
];

export default function Offering() {
  return (
    <WhiteSection className="flex md:flex-row flex-col">
      <div className="md:w-1/2 w-full md:pr-[200px] pb-5 md:border-0 border-b">
        <LargerText align="center">{pageDescription.title}</LargerText>
        <DescriptiveText align="">
          {pageDescription.description}
        </DescriptiveText>
        <button className="text-purple font-semibold flex flex-row items-center">
          Learn More
          <div className="ml-1 mt-1">
            <LongRightArrow color="purple" />
          </div>
        </button>
      </div>
      <div className="md:pl-24">
        {offer.map((e, index) => {
          return (
            <Offer
              key={index}
              title={e.title}
              description={e.description}
              motive={e.motive}
              color={e.color}
              icon={e.icon}
            />
          );
        })}
      </div>
    </WhiteSection>
  );
}
