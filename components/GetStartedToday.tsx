import { HyperButton } from "./ui/buttons";
import { WhiteSection } from "./ui/section-card";
import { LargestText } from "./ui/texts";

export default function GetStartedToday() {
  return (
    <WhiteSection className="w-screen flex flex-col items-center">
      <LargestText align="center">Get Started Today</LargestText>
      <div className="mt-10 text-center md:w-1/4 w-[90%] text-gray-500 text-xl">
        We look forward to serving the needs of used car dealers across the
        Philippines and helping them thrive in this dynamic market.
      </div>
      <div className="mt-10 font-semibold">
        <HyperButton>Inquire Now</HyperButton>
      </div>
    </WhiteSection>
  );
}
