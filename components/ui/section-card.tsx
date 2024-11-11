// Importing the type `WrapperFunctionTypes` from the specified path. 
// This type is used to extend the props of the components.
import { WrapperFunctionTypes } from "@/lib/types";

// Defining a custom type `SectionType` which extends `WrapperFunctionTypes` 
// and includes an additional `className` property of type string.
type SectionType = WrapperFunctionTypes & { className: string };

// A reusable component that renders a white-colored section.
// It takes in `children` (content to display) and `className` (custom styles).
export function WhiteSection({ children, className }: SectionType) {
  return (
    <div className={`w-full flex flex-col items-center py-10`}>
      {/* Wrapper for the children, allowing custom className for styling */}
      <div className={`w-[90%] ${className}`}>{children}</div>
    </div>
  );
}

// A reusable component that renders a gray-colored section with a light transparent background.
// Similar to `WhiteSection`, it accepts `children` and `className` as props.
export function GraySection({ children, className }: SectionType) {
  return (
    <div
      className={`w-full flex flex-col bg-gray-200/20 items-center py-10 ${className}`}
    >
      {/* Wrapper for the children, with custom className applied for additional styles */}
      <div className={`${className}`}>{children}</div>
    </div>
  );
}
