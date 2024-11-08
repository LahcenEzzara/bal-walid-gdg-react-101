import { useState } from "react";
// import "../stylesheets/TodoInput.css";

const TodoInput = ({ todos, setTodos }) => {
  const [value, setValue] = useState('');
  const onClick = () => {
    if (!value) return;
    const newTodo = {done: false, task: value, id: Date.now()};
    setTodos([...todos, newTodo]);
    setValue('');
  }
  return (
    <div className="input-div">
      <input onChange = {(e) => setValue(e.target.value)} value={value} placeholder={'Enter new todo'} type="text"/>
      <button onClick={onClick}>Add</button>
    </div>
  )
}

export default TodoInput;