import { useState } from "react";
import TodoItem from "./TodoItem";
import TodosList from "./TodosList";
import TodoForm from "./TodoForm";

export default function Todo() {
  const [todosLst, setTodosLst] = useState([]);

  return (
    <div>
      <TodoForm todosLst={todosLst} setTodosLst={setTodosLst} />
      <TodosList todosLst={todosLst} />
    </div>
  );
}
