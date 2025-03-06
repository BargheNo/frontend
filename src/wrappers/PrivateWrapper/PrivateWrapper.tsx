"use client";

import useClientCheck from "@/src/hooks/useClientCheck";

export default function PrivateWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const isClient = useClientCheck();
  let token = null;
  console.log("isClient", isClient);
  if (isClient) {
    token = localStorage.getItem("token");
  }
  if (!token) {
    return <div> please login</div>;
  }
  return <>{children}</>;
}
