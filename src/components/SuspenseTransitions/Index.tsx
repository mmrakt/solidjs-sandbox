import { Match, Suspense, Switch, createSignal, useTransition } from "solid-js";
import "./styles.css";
import Child from "./Child";

const SuspenseTransitions = () => {
  const [tab, setTab] = createSignal(0);
  const [pending, start] = useTransition();
  const updateTab = (index: number) => () => start(() => setTab(index));

  return (
    <>
      <ul class="inline">
        <li classList={{ selected: tab() === 0 }} onclick={updateTab(0)}>
          Uno
        </li>
        <li classList={{ selected: tab() === 1 }} onclick={updateTab(1)}>
          Dos
        </li>
        <li classList={{ selected: tab() === 2 }} onclick={updateTab(2)}>
          Tres
        </li>
      </ul>
      <div class="tab" classList={{ pending: pending() }}>
        <Suspense fallback={<div class="loader">Loading...</div>}>
          <Switch>
            <Match when={tab() === 0}>
              <Child page="Uno" />
            </Match>
            <Match when={tab() === 1}>
              <Child page="Dos" />
            </Match>
            <Match when={tab() === 2}>
              <Child page="Tres" />
            </Match>
          </Switch>
        </Suspense>
      </div>
    </>
  );
};

export default SuspenseTransitions;
