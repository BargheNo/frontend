import React from "react";
import { Sun } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import { vazirBold } from "@/lib/fonts";

export default function DesktopNavbar() {
  return (
    <>
      <div className="h-[70px] fix top-0 w-full flex flex-col justify-center items-center">
        <div className="flex justify-between items-center h-[70%] w-[94%] rounded-full mx-auto bg-gray-100 py-3 px-5 border-2 border-gray-300">
          <div>
            <Sun size={28} />
          </div>
          <div className="flex flex-row-reverse justify-start items-center w-[50%] px-3 gap-8">
            <CircleUserRound size={28} />
            <Link className={["", vazirBold.className].join(" ")} href={"/"}>
              ایتم 1
            </Link>
            <Link className={["", vazirBold.className].join(" ")} href={"/"}>
              ایتم 2
            </Link>
            <Link className={["", vazirBold.className].join(" ")} href={"/"}>
              ایتم 3
            </Link>
            <Link className={["", vazirBold.className].join(" ")} href={"/"}>
              ایتم 4
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[70px]"></div>
    </>
  );
}
