import { createSignal, onCleanup } from "solid-js";

const Counter = () => {
  const [count, setCount] = createSignal(0);
  const interval = setInterval(() => setCount(count() + 1), 1000);
  onCleanup(() => clearInterval(interval));

  return <div>Count value is {count()}</div>;
};

export default Counter;
