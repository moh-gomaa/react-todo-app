import { useState } from "react";
import styles from "./todoform.module.css";

export default function TodoForm({ todosLst, setTodosLst }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setTodosLst([...todosLst, todo]);
    setTodo("");
  }

  return (
    <form className={styles.todoForm} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter todo item..."
        />
        <button className={styles.modernBtn} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
