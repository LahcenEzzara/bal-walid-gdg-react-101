import { useState } from "react";
import "reset-css";
import "./stylesheets/App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoHeader from "./components/TodoHeader";
function App() {
  const [count, setCount] = useState(0);
  const defaultTodos = [
    { task: "h", done: false, id: 0 },
    { task: "b", done: true, id: 1 },
    { task: "c", done: true, id: 2 },
  ];
  const [todos, setTodos] = useState(defaultTodos);
  return (
    <main>
      <TodoHeader />
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </main>
  );
}

export default App;
