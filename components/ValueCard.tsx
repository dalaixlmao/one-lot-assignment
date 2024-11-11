import Image from "next/image"; // Importing the Image component from Next.js to handle image optimization
import { ValueType } from "@/lib/types"; // Importing the ValueType type definition from a local file for type safety

// ValueCard component to display an icon, value, and title in a card format
export default function ValueCard({ icon, value, title }: ValueType) {
  return (
    <div className="flex flex-col items-center px-5 py-6 h-full shadow rounded-lg"> {/* Card container with flexbox for layout, padding, shadow, and rounded corners */}
      
      {/* Image container */}
      <div className="">
        <Image src={icon} width={50} height={50} alt={icon} /> {/* Displaying the icon with specified width, height, and alt text */}
      </div>

      {/* Value text display */}
      <div className="text-center my-5 text-2xl font-semibold">{value}</div> {/* Value text with styling for centering, margin, font size, and bold font */}

      {/* Title text display */}
      <div className="text-center text-gray-500">{title}</div> {/* Title text with gray color */}
    </div>
  );
}
