import { useState } from "react";
import styles from "./todoform.module.css";

export default function TodoForm({ todosLst, setTodosLst }) {
  const [todo, setTodo] = useState({ name: "", isDone: false });

  function handleSubmit(e) {
    e.preventDefault();

    setTodosLst([...todosLst, todo]);
    setTodo({ name: "", isDone: false });
  }

  return (
    <form className={styles.todoForm} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          type="text"
          value={todo.name}
          onChange={(e) => setTodo({ name: e.target.value, isDone: false })}
          placeholder="Enter todo item..."
        />
        <button className={styles.modernBtn} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
