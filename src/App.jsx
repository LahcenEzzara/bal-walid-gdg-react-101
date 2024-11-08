import { useState } from "react";
import "reset-css";
import "./stylesheets/App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoHeader from "./components/TodoHeader";
function App() {
  const defaultTodos = [
    { task: "Tyb lftor", done: true, id: 0 },
    { task: "Walk to school", done: true, id: 1 },
    { task: "Finish react workshop", done: false, id: 2 },
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
