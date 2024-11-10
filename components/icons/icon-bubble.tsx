import { WrapperFunctionTypes } from "@/lib/types";

type IconBubble = WrapperFunctionTypes & { color: string };

export default function IconBubble({ children, color }: IconBubble) {
  return (
    <div
      className={`bg-${color}1 fill-blue-500 h-5 w-5 rounded-full flex flex-row items-center justify-center`}
    >
      {children}
    </div>
  );
}
