import { features } from "@/lib/data";
import { GraySection } from "./ui/section-card";
import Feature from "./Feature";
export default function Features() {
  return (
    <GraySection className="w-full">
      {features.map((e, index) => {
        return (
          <Feature
          key={index}
          index = {index}
            title={e.title}
            subTitle={e.subTitle}
            headerDescription={e.headerDescription}
            imagePath={e.imagePath}
            footerDescription={e.footerDescription}
            advantages={e.advantages}
            buttonText={e.buttonText}
          />
        );
      })}
    </GraySection>
  );
}
