import Image from "next/image";
import { TestimonialType } from "@/lib/types";

// Component to display a testimonial
export default function Testimonial({
  icon,
  description,
  author,
  designation,
}: TestimonialType) {
  return (
    <div className="flex flex-col items-center md:w-1/2 w-[90%]">
      {/* Displaying the icon image */}
      <div className="my-5">
        <Image src={icon} height={100} width={100} alt={icon} />
      </div>

      {/* Testimonial description */}
      <div className="my-5 md:text-3xl text-xl font-semibold text-center">
        {description}
      </div>

      {/* Author and designation */}
      <div className="my-5">
        <div className="text-xl font-bold flex text-black/70 md:flex-row flex-col items-center">
          {author}
          
          {/* Designation text */}
          <a className="text-gray-500 text-base font-normal md:ml-6">
            {" " + designation}
          </a>
        </div>
      </div>
    </div>
  );
}
