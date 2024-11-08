import { WrapperFunctionTypes } from "@/lib/types";

type SectionType = WrapperFunctionTypes & { className: string };

export function WhiteSection({ children, className }: SectionType) {
  return (
    <div className={`w-full flex flex-col items-center py-10`}>
      <div className={`w-[90%] ${className}`}>{children}</div>
    </div>
  );
}

export function GraySection({ children, className }: SectionType) {
  return (
    <div
      className={`w-full flex flex-col bg-gray-100 items-center py-10 ${className}`}
    >
      <div className={`w-[90%] ${className}`}>{children}</div>
    </div>
  );
}
