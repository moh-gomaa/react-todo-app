import TodoItem from "./TodoItem";

export default function TodosList({ todosLst }) {
  return (
    <div>
      {todosLst.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}
