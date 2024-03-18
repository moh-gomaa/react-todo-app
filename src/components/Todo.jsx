import { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todosLst, setTodosLst] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodosLst([...todosLst, todo]);
    setTodo("");
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {todosLst.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}
