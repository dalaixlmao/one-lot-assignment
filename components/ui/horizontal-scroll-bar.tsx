import Image from "next/image";

export default function HorizontalScrollBar({ posts }: { posts: string[] }) {
  return (
    <div className="flex flex-row my-5 justify-start flex-nowrap overflow-x-auto w-full">
      {posts?.map((p, index) => (
        <div key={index} className="w-96 mx-3 h-96 flex-shrink-0">
          <Image
            src={p}
            height={400}
            width={500}
            alt={`Social post ${index + 1}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
}
