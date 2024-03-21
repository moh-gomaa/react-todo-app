import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodosList({ todosLst, setTodosLst }) {
  const sortedTodos = todosLst.slice().sort((a, b) => a.isDone - b.isDone);
  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todosLst={todosLst}
          setTodosLst={setTodosLst}
        />
      ))}
    </div>
  );
}
