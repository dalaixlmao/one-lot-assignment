import { WrapperFunctionTypes } from "@/lib/types";


export function HyperButton({ children }: WrapperFunctionTypes) {
  return <button className="px-3 py-2 text-sm text-white font-semmibold bg-purple rounded-md">{children}</button>;
}

export function LightButton({ children }: WrapperFunctionTypes) {
  return <button className="px-3 py-2 text-sm font-semibold text-gray-900 hover:text-purple">{children}</button>;
}
