"use client";
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
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}
