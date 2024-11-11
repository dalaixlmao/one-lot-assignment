import Image from "next/image";

// Component to render a horizontally scrollable list of images
export default function HorizontalScrollBar({ posts }: { posts: string[] }) {
  return (
    // Container for the horizontal scroll bar
    <div className="flex flex-row my-5 justify-start flex-nowrap overflow-x-auto w-full">
      {/* Map through the posts array to display each image */}
      {posts?.map((p, index) => (
        <div 
          key={index} // Unique key for each child in the list
          className="w-96 mx-3 h-96 flex-shrink-0" // Styling for individual image containers
        >
          {/* Render the image using the Next.js Image component */}
          <Image
            src={p} // URL of the image
            height={400} // Image height
            width={500} // Image width
            alt={`Social post ${index + 1}`} // Accessible alt text for each image
            className="object-cover w-full h-full" // Styling for the image to cover the container
          />
        </div>
      ))}
    </div>
  );
}
