import "../stylesheets/TodoList.css"

const TodoList = ({ todos, setTodos }) => {
  const toggleTodo = (id) => {
    setTodos(todos.map(
      (todo) => {
        if (todo.id != id) {
          return todo;
        } else {
          return {...todo, done: !todo.done}
        }
      }
    ))
  }
  return (
    <ul>
      {todos.map((todo, index) => 
        <li key={index}>
          <input onChange={() => toggleTodo(todo.id)} type={"checkbox"} checked={todo.done} />
          {todo.task}
        </li>
      )}
    </ul>
  );
};

export default TodoList;
