import { WrapperFunctionTypes } from "@/lib/types";
import React from "react";

interface TextType {
  children: React.ReactNode;
}

export function LargestText({ children }: TextType) {
  return (
    <div className={"md:text-5xl text-3xl font-bold text-black text-center"}>
      {children}
    </div>
  );
}

export function LargerText({ children }: TextType) {
  return <div className={"text-3xl font-bold "}>{children}</div>;
}

export function LargeText({ children }: TextType) {
  return <div className={"text-lg font-bold "}>{children}</div>;
}

export function DescriptiveText({ children, align }: {children: React.ReactNode, align:string}) {
  return <div className={`text-gray-500 text-${align}`}>{children}</div>;
}
