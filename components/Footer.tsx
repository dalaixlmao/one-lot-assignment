import { HyperButton } from "./ui/buttons";
import { WhiteSection } from "./ui/section-card";
import FooterNav from "./FooterNav";
import FooterCopyright from "./FooterCopyright";

export default function Footer() {
  return (
    <WhiteSection className="w-screen flex flex-col items-center w-screen">
      <div className="w-full flex flex-col items-center">
        <FooterNav />
      </div>
      <div className="w-full flex flex-col items-center">
        <FooterCopyright />
      </div>
    </WhiteSection>
  );
}
