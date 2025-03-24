import React from "react";
import { EllipsisVertical } from "lucide-react";
import { Search } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { House } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import {
  MOBILE_NAVBAR_SELECT,
  mobileNavbarSelect,
} from "@/src/types/navbarTypes";
import { SidebarTrigger } from "@/components/ui/sidebar";
import MobileNavbarSlider from "../MobileNavbarSlider/MobileNavbarSlider";
import { navItems } from "@/app/dashboard/layout";
const selectToIcon = (selected: MOBILE_NAVBAR_SELECT, color?: string) => {
  switch (selected) {
    case MOBILE_NAVBAR_SELECT.HOME:
      return <House color={color} size={28} />;
    case MOBILE_NAVBAR_SELECT.SEARCH:
      return <Search color={color} size={28} />;
    case MOBILE_NAVBAR_SELECT.DASHBOARD:
      return <LayoutDashboard color={color} size={28} />;
    case MOBILE_NAVBAR_SELECT.PROFILE:
      return <CircleUserRound color={color} size={28} />;
    case MOBILE_NAVBAR_SELECT.MORE:
      return <EllipsisVertical color={color} size={28} />;
    default:
      return <House color={color} size={28} />;
  }
};

export default function MobileNavbar({
  selected,
  changeSelect,
  ...props
}: mobileNavbarSelect | any) {
  return (
    <>
      <MobileNavbarSlider navItems={navItems} />
      <div className="fixed bottom-3 w-full flex justify-center items-center z-50">
        <div className="h-[70px] flex justify-evenly items-center bg-[#F0EDEF] p-2 w-[90%] rounded-full mx-auto neo-oval">
          {Object.values(MOBILE_NAVBAR_SELECT)
            .filter((val) => typeof val === "number")
            .map((select: MOBILE_NAVBAR_SELECT) => {
              console.log(select);
              if (select === MOBILE_NAVBAR_SELECT.MORE) {
                // if (false) {
                return (
                  <SidebarTrigger
                    key={select}
                    className={
                      selected === select ? "neo-btn-active p-1" : "neo-btn p-1"
                    }
                    // onClick={() => changeSelect(select)}
                  >
                    {selectToIcon(
                      select as MOBILE_NAVBAR_SELECT,
                      selected === select ? "orange" : "black"
                    )}
                  </SidebarTrigger>
                );
              } else {
                return (
                  <button
                    key={select}
                    className={
                      selected === select ? "neo-btn-active p-1" : "neo-btn p-1"
                    }
                    onClick={() => changeSelect(select)}
                  >
                    {selectToIcon(
                      select as MOBILE_NAVBAR_SELECT,
                      selected === select ? "orange" : "black"
                    )}
                  </button>
                );
              }
            })}
        </div>
      </div>
    </>
  );
}
