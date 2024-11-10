import Image from "next/image";

interface ValueType {
  icon: string;
  value: string;
  title: string;
}

export default function ValueCard({ icon, value, title }: ValueType) {
  return (
    <div className="flex flex-col items-center px-5 py-6 h-full shadow rounded-lg">
      <div className="">
        <Image src={icon} width={50} height={50} alt={icon} />
      </div>
      <div className="text-center my-5 text-2xl font-semibold">{value}</div>
      <div className="text-center text-gray-500">{title}</div>
    </div>
  );
}
