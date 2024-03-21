import styles from "./todoitem.module.css";
export default function TodoItem({ item, todosLst, setTodosLst }) {
  function handleDelete(deletedTodo) {
    const fiteredTodos = todosLst.filter((todo) => todo !== deletedTodo);
    setTodosLst(fiteredTodos);
  }

  function handleClick(todoName) {
    const affectedTodos = todosLst.map((todo) =>
      todo.name === todoName ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodosLst(affectedTodos);
  }

  const todoClass = item.isDone ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={todoClass} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        <span>
          <button
            className={styles.deleteBtn}
            onClick={() => handleDelete(item)}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line}></hr>
    </div>
  );
}
