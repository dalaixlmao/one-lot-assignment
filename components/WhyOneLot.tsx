import { LargestText } from "./ui/texts";
import { WhiteSection } from "./ui/section-card";
import { values } from "@/lib/data";
import ValueCard from "./ValueCard";
export default function WhyOneLot() {
  return (
    <WhiteSection className="">
      <div>
        <LargestText align={`center`}>Why Onelot?</LargestText>
        <div className="mt-12 grid md:gap-x-10 grid-cols-1 gap-y-10 md:grid-cols-5">
          {values.map((v, index) => {
            return (
              <div key={index}>
                <ValueCard icon={v.icon} title={v.title} value={v.value} />
              </div>
            );
          })}
        </div>
      </div>
    </WhiteSection>
  );
}
