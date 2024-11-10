import { WrapperFunctionTypes } from "@/lib/types";
import Tick from "../icons/tick";
import IconBubble from "../icons/icon-bubble";

export default function ListItem({ children }: WrapperFunctionTypes) {
  return <div className="flex flex-row items-center my-5">
    <div className="mr-2">
        <IconBubble 
        color="purple"
        >{<Tick />}</IconBubble>
    </div>
    {children}</div>;
}
