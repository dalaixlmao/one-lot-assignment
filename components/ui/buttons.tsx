import { WrapperFunctionTypes } from "@/lib/types";
import React from "react";

export function HyperButton({ children }: WrapperFunctionTypes) {
  return (
    <button className="px-3 py-2 text-sm text-white font-semmibold bg-purple rounded-md">
      {children}
    </button>
  );
}

export function LightButton({ children }: WrapperFunctionTypes) {
  return (
    <button className="px-3 py-2 text-sm font-semibold text-gray-900 hover:text-purple">
      {children}
    </button>
  );
}

export function SocialButton({
  children,
  onMouseEnter,
  onMouseLeave,
  className,
}: {
  children: React.ReactNode;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  className: string;
}) {
  return (
    <button
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={"px-3 py-2 border border-black rounded-lg " + className}
    >
      {children}
    </button>
  );
}
