"use client";
import { Button } from "@/components/ui/button";
import { decrement, increment } from "@/src/store/slices/counterSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Home</h1>
      <div>
        <h1>Counter: {count}</h1>
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button variant={"neo"} onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
      </div>
    </div>
  );
}
