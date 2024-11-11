import { WrapperFunctionTypes } from "@/lib/types";
import React from "react";

//File contains all sort of buttons that'll be used in the project.

// Hyper button of purple color
export function HyperButton({ children }: WrapperFunctionTypes) {
  return (
    <button className="px-3 py-2 text-sm text-white font-semmibold bg-purple rounded-md">
      {children}
    </button>
  );
}


// Buttons with transparent borders and background
export function LightButton({ children }: WrapperFunctionTypes) {
  return (
    <button className="px-3 py-2 text-sm font-semibold text-gray-900 hover:text-purple">
      {children}
    </button>
  );
}


//Button with black border, only used for social media
export function SocialButton({
  children,
  onChange,
  className,
}: {
  children: React.ReactNode;
  onChange: () => void;
  className: string;
}) {
  return (
    <button
      onMouseEnter={onChange}
      onMouseLeave={onChange}
      className={"px-3 py-2 border border-black rounded-lg " + className}
    >
      {children}
    </button>
  );
}

// Content inside social media button
export function SocialButtonContent({
  icon,
  hover,
  social,
}: {
  icon: React.ReactNode;
  hover: boolean;
  social: string;
}) {
  return (
    <div className="flex flex-row">
      {icon}
      <div className={(hover ? `text-[#57009C]` : `text-black`) + ` ml-3`}>
        Follow on {social}
      </div>
    </div>
  );
}
