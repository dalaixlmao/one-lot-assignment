import { WrapperFunctionTypes } from "@/lib/types";
import React from "react";

interface TextType {
  children: React.ReactNode;
  align: string;
}

export function LargestText({ children, align }: TextType) {
  return (
    <div className={`md:text-5xl text-3xl font-bold text-black text-${align}`}>
      {children}
    </div>
  );
}

export function LargerText({ children, align }: TextType) {
  return <div className={`text-3xl font-bold text-${align} `}>{children}</div>;
}

export function LargeText({ children, align }: TextType) {
  return <div className={`text-lg font-bold text-${align} `}>{children}</div>;
}

export function DescriptiveText({ children, align }: TextType) {
  return <div className={`text-gray-500 text-${align}`}>{children}</div>;
}
