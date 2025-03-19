"use client";
import React from "react";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import { useSelector, useDispatch } from "react-redux";
import { MOBILE_NAVBAR_SELECT } from "@/src/types/navbarTypes";
// import { MOBILE_NAVBAR_SELECT } from "@/src/types/navbarTypes";
import { changeSelect } from "@/src/store/slices/mobileNavbarSlice";

export default function Navbar() {
  const selected = useSelector((state: any) => state.mobileNavbar.selected);
  const dispatch = useDispatch();
  const changeSelectFunc = (selected: MOBILE_NAVBAR_SELECT) => {
    dispatch(changeSelect(selected));
  };
  return <MobileNavbar selected={selected} changeSelect={changeSelectFunc} />;
}
