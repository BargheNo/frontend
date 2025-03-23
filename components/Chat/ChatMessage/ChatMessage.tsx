"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React, { useEffect, useState } from "react";

export default function ChatMessage({
  log = false,
  type = "self",
  containerWidth,
}: {
  log?: boolean;
  type?: "self" | "other";
  containerWidth: number;
}) {
  const [messageWidth, setMessageWidth] = useState<number>(0);

  useEffect(() => {
    // Set random width only if it hasn't been set yet (messageWidth is 0)
    if (messageWidth === 0) {
      const minWidth = Math.min(320, containerWidth * 0.4);
      const maxWidth = containerWidth * 0.8;
      setMessageWidth(
        Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth)
      );
    }
    // If message width is larger than container, adjust it
    else if (messageWidth > containerWidth - 100) {
      setMessageWidth(containerWidth - 100);
    }
    if (log) {
      console.log("messageWidth",messageWidth);
      console.log("containerWidth",containerWidth);
    }
  }, [containerWidth, messageWidth]);

  return type === "other" ? (
    <div
      className="flex flex-col items-end gap-2 self-end"
      style={{ width: `${messageWidth}px` }}
    >
      <Avatar className="h-12 w-12">
        <AvatarImage
          src="/images/Default/jinks.jpg"
          alt="Profile"
          className="object-cover"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
      <div
        className="bg-gray-800 text-white rounded-b-xl rounded-tr-xl ml-4 p-4 neo-card"
        style={{ width: `${messageWidth}px` }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nihil
        incidunt at saepe magnam? Placeat maxime nulla atque ducimus ratione,
        soluta consectetur officiis saepe magnam suscipit, pariatur
        necessitatibus illo odio!
      </div>
    </div>
  ) : (
    <div
      className="flex flex-col items-start gap-2 self-start"
      style={{ width: `${messageWidth}px` }}
    >
      <Avatar className="h-12 w-12">
        <AvatarImage
          src="/images/Default/jinks.jpg"
          alt="Profile"
          className="object-cover"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
      <div
        className="bg-white text-gray-800 rounded-b-xl rounded-tl-xl mr-4 p-4 neo-card"
        style={{ width: `${messageWidth}px` }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nihil
        incidunt at saepe magnam? Placeat maxime nulla atque ducimus ratione,
        soluta consectetur officiis saepe magnam suscipit, pariatur
        necessitatibus illo odio!
      </div>
    </div>
  );
}
