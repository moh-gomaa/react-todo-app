import { useState } from "react";
import TodosList from "./TodosList";
import TodoForm from "./TodoForm";
import Footer from "./Footer";

export default function Todo() {
  const [todosLst, setTodosLst] = useState([]);

  const allTodosCount = todosLst.length;
  const completedTodosCount = todosLst.filter((todo) => todo.isDone).length;
  return (
    <div>
      <TodoForm todosLst={todosLst} setTodosLst={setTodosLst} />
      <TodosList todosLst={todosLst} setTodosLst={setTodosLst} />
      <Footer
        allTodosCount={allTodosCount}
        completedTodosCount={completedTodosCount}
      />
    </div>
  );
}
