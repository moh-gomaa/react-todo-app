import { useState } from "react";

export default function TodoForm({ todosLst, setTodosLst }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setTodosLst([...todosLst, todo]);
    setTodo("");
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
