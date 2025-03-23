"use client";
import { ChevronLeft } from "lucide-react";
import React from "react";
import ChatMessage from "../ChatMessage/ChatMessage";
import { cn } from "@/lib/utils";

export default function ChatBox({ className }: { className?: string }) {
  const [boxWidth, setBoxWidth] = React.useState(0);
  const boxRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!boxRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setBoxWidth(entry.contentRect.width);
      }
    });

    resizeObserver.observe(boxRef.current);

    // Initial width set
    setBoxWidth(boxRef.current.offsetWidth);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={boxRef}
      className={cn("neo-card bg-[#F0EDEF] rounded-lg relative", className)}
    >
      <div className=" flex flex-row-reverse px-6 items-center absolute top-0 right-0 left-0 h-20 rounded-t-md bg-white shadow-[2px_2px_5px_rgba(0,0,0,0.3)]">
        <ChevronLeft size={32} />
      </div>
      <div className="flex flex-col gap-4 absolute p-3 top-20 right-0 left-0 bottom-18 rounded-lg overflow-y-scroll no-scrollbar neo-card-rev-lg m-3">
        <ChatMessage containerWidth={boxWidth} />
        <ChatMessage type="other" containerWidth={boxWidth} />
        <ChatMessage containerWidth={boxWidth} />
        <ChatMessage type="other" containerWidth={boxWidth} />
        <ChatMessage containerWidth={boxWidth} />
        <ChatMessage containerWidth={boxWidth} />
        <ChatMessage type="other" containerWidth={boxWidth} />
      </div>
      <div className="absolute neo-card-rev bottom-3 bg-white opacity-90 h-14 right-3 left-3 rtl mx-auto flex items-center rounded-lg px-3">
        پیام خود را بنویسید...
      </div>
    </div>
  );
}
