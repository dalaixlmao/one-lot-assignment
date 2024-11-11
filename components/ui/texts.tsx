// Importing React for building UI components
import React from "react";
// Importing the TextType interface/type for defining props
import { TextType } from "@/lib/types";

/**
 * A component for rendering the largest text size.
 * @param {React.ReactNode} children - The text content to display.
 * @param {string} align - The text alignment (e.g., "left", "center", "right").
 */
export function LargestText({ children, align }: TextType) {
  return (
    <div className={`md:text-5xl text-3xl font-bold text-black text-${align}`}>
      {children}
    </div>
  );
}

/**
 * A component for rendering larger text.
 * @param {React.ReactNode} children - The text content to display.
 * @param {string} align - The text alignment (e.g., "left", "center", "right").
 */
export function LargerText({ children, align }: TextType) {
  return <div className={`text-3xl font-bold text-${align}`}>{children}</div>;
}

/**
 * A component for rendering large text.
 * @param {React.ReactNode} children - The text content to display.
 * @param {string} align - The text alignment (e.g., "left", "center", "right").
 */
export function LargeText({ children, align }: TextType) {
  return <div className={`text-lg font-bold text-${align}`}>{children}</div>;
}

/**
 * A component for rendering descriptive, lighter-colored text.
 * @param {React.ReactNode} children - The text content to display.
 * @param {string} align - The text alignment (e.g., "left", "center", "right").
 */
export function DescriptiveText({ children, align }: TextType) {
  return <div className={`text-gray-500 text-${align}`}>{children}</div>;
}
