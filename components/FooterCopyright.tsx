// © 2024 OneLot Technologies Incorporated Pte. Ltd. All Rights Reserved.
// © 2024 OneLot Financing Corporation. All Rights Reserved.
import FacebookLogo from "./icons/facebook-logo";
import InstagramLogo from "./icons/instagram-logo";

export default function FooterCopyright() {
  return (
    <div className="flex md:flex-row flex-col w-[90%] justify-between mt-10">
      <div className="text-gray-500 text-xl font-medium">
        <div className="">
          © 2024 OneLot Technologies Incorporated Pte. Ltd. All Rights Reserved.
        </div>
        <div className="mt-5">© 2024 OneLot Financing Corporation. All Rights Reserved.</div>
      </div>
      <div className="flex flex-row items-end md:mt-0 mt-5">
        <div className="mr-3 cursor-pointer">
          <InstagramLogo color="#6b7280" />
        </div>
        <div className="ml-3 cursor-pointer">
          <FacebookLogo color="#6b7280" />
        </div>
      </div>
    </div>
  );
}
