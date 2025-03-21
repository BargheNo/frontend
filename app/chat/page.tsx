import ChatBox from "@/components/Chat/ChatBox/ChatBox";
import ChatList from "@/components/Chat/ChatList/ChatList";
import React from "react";

export default function page() {
  return (
    <div className=" flex flex-row-reverse ">
      <ChatList />
      <ChatBox />
    </div>
  );
}
