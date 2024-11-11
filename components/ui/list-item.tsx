// Importing the type definitions for the component props
import { WrapperFunctionTypes } from "@/lib/types";

// Importing the Tick icon component
import Tick from "../icons/tick";

// Defining the ListItem functional component
// This component takes `children` as props, wrapped in the `WrapperFunctionTypes` type
export default function ListItem({ children }: WrapperFunctionTypes) {
  return (
    // Outer container for the list item, styled with flexbox for horizontal alignment
    <div className="flex flex-row items-center my-5">
      {/* Container for the Tick icon, with a right margin to separate it from the content */}
      <div className="mr-2">
        <Tick />
      </div>
      {/* Rendering children passed to this component */}
      {children}
    </div>
  );
}
