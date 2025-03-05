"use client"; // Mark this component as a Client Component

import { Provider } from "react-redux";
import { store } from "../src/store/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
