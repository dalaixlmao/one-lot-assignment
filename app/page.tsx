import Image from "next/image";
import Landing from "@/components/Landing";
import Offering from "@/components/Offering";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center">
      <Landing />
      <Offering />
      <Features />
    </div>
  );
}
