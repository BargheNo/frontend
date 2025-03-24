"use client";
import React from "react";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import { useSelector, useDispatch } from "react-redux";
import { MOBILE_NAVBAR_SELECT } from "@/src/types/navbarTypes";
import { changeSelect } from "@/src/store/slices/mobileNavbarSlice";
import DesktopNavbar from "./DesktopNavbar/DesktopNavbar";
import { useMediaQuery } from "react-responsive";
import useClientCheck from "@/src/hooks/useClientCheck";

export default function Navbar() {
  const selected = useSelector((state: any) => state.mobileNavbar.selected);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  // const isDesktop = useMediaQuery({ minWidth: 1024 });
  
  

  const changeSelectFunc = (selected: MOBILE_NAVBAR_SELECT) => {
    dispatch(changeSelect(selected));
    if (selected === MOBILE_NAVBAR_SELECT.MORE) {}
  };
  if (!useClientCheck()) return <>Loading...</>;
  if (isMobile)
    return <MobileNavbar selected={selected} changeSelect={changeSelectFunc} />;
  else return <DesktopNavbar />;
}
