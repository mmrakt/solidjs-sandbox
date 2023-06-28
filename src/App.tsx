import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import Context from "./components/Context";
import { ThemeProvider } from "./utils/theme";
import { Clock } from "./components/Clock";
import EtchASketch from "./components/EtchASketch";
import Scoreboard from "./components/ScoreBoard";
import AsyncResource from "./components/AsyncResource";
import SuspenseTransitions from "./components/SuspenseTransitions/Index";

const App: Component = () => {
  return (
    <ThemeProvider color="#335d92" title="Context Example">
      <div class={styles.App}>
        {/* <Counter /> */}
        {/* <Todo /> */}
        {/* <Context /> */}
        {/* <Clock /> */}
        {/* <EtchASketch /> */}
        {/* <Scoreboard /> */}
        {/* <AsyncResource /> */}
        <SuspenseTransitions />
      </div>
    </ThemeProvider>
  );
};

export default App;
