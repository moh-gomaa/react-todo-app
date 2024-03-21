import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodosList({ todosLst, setTodosLst }) {
  return (
    <div className={styles.list}>
      {todosLst.map((item) => (
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
