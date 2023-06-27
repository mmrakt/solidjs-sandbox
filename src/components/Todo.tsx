import { For, batch, createSignal } from "solid-js";
import { createLocalStore, removeIndex } from "../utils";

type TodoItem = {
  title: string;
  done: boolean;
};
const Todo = () => {
  const [newTitle, setTitle] = createSignal("");
  const [todos, setTodos] = createLocalStore<TodoItem[]>("todos", []);

  const addTodo = (e: SubmitEvent) => {
    e.preventDefault();
    batch(() => {
      setTodos(todos.length, {
        title: newTitle(),
        done: false,
      });
      setTitle("");
    });
  };

  return (
    <>
      <h3>Simple Todo List</h3>
      <form onsubmit={addTodo}>
        <input
          type="text"
          required
          value={newTitle()}
          oninput={(e) => setTitle(e.currentTarget.value)}
        />
        <button>+</button>
      </form>
      <For each={todos}>
        {(todo, i) => (
          <div>
            <input
              type="checkbox"
              checked={todo.done}
              onchange={(e) => setTodos(i(), "done", e.currentTarget.checked)}
            />
            <input
              type="text"
              value={todo.title}
              onchange={(e) => setTodos(i(), "title", e.currentTarget.value)}
            />
            <button onclick={() => setTodos((t) => removeIndex(t, i()))}>
              ×
            </button>
          </div>
        )}
      </For>
    </>
  );
};

export default Todo;
