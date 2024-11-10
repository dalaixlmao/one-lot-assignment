import Image from "next/image";

interface TestimonialType {
  icon: string;
  description: string;
  author: string;
  designation: string;
}

export default function Testimonial({
  icon,
  description,
  author,
  designation,
}: TestimonialType) {
  return (
    <div className="flex flex-col items-center w-1/2">
      <div className="my-5">
        <Image src={icon} height={100} width={100} alt={icon} />
      </div>
      <div className="my-5 text-3xl font-semibold text-center">
        {description}
      </div>
      <div className="my-5">
        <div className="text-xl font-bold flex text-black/70 md:flex-row flex-col items-center">
          {author}
          <a className="text-gray-500 text-base font-normal md:ml-6">
            {" " + designation}
          </a>
        </div>
      </div>
    </div>
  );
}
