"use client"
import React from "react";
import { cn } from "@/lib/utils";
export default function ChatList({className}:{className?:string}) {
  return (
    <>
      <div className={cn("neo-card bg-[#F0EDEF] flex flex-col items-center gap-3 rounded-md py-5 w-[650px]",className)}>
        <span>A1</span>
        <span>A2</span>
        <span>A3</span>
        <span>A4</span>
      </div>
    </>
  );
}
