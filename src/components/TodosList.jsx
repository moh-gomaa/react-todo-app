import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodosList({ todosLst }) {
  return (
    <div className={styles.list}>
      {todosLst.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}
