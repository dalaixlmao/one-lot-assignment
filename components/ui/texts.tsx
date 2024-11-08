import { WrapperFunctionTypes } from "@/lib/types";
import React from "react";

interface TextType {
  children: React.ReactNode;
}

export function LargestText({ children }: TextType) {
  return (
    <div className={"text-4xl font-bold text-black text-center"}>
      {children}
    </div>
  );
}

export function LargerText({ children }: TextType) {
  return <div className={"text-2xl "}>{children}</div>;
}

export function LargeText({ children }: TextType) {
  return <div className={"text-xl "}>{children}</div>;
}

export function DescriptiveText({ children }: TextType) {
  return <div className={"text-gray-500 text-center"}>{children}</div>;
}
