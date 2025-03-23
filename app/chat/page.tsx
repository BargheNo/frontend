"use client"
import ChatBox from "@/components/Chat/ChatBox/ChatBox";
import ChatList from "@/components/Chat/ChatList/ChatList";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import React from "react";

export default function page() {
  return (
    // <div className="fixed m-5 flex flex-row top-3 left-3 right-3 bottom-3">
      <ResizablePanelGroup
        className="min-h-full bg-gray-100"
        direction="horizontal"
      >
        <ResizablePanel className="h-full flex justify-center items-center py-2 pl-1 pr-2 rounded-lg bg-transparent" defaultSize={0.1} minSize={10} maxSize={50}>
          <ChatList className="w-full h-full" />
        </ResizablePanel>
        <ResizableHandle className="bg-transparent" />
        <ResizablePanel className="h-full flex justify-center items-center py-2 pl-3 pr-2 bg-transparent rounded-lg">
          <ChatBox className="w-full h-full" />
        </ResizablePanel>
      </ResizablePanelGroup>
  );
}
