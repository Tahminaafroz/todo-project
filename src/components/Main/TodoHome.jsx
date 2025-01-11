import TodoHeader from "./TodoPage/TodoHeader";
import TaskBar from "./TodoPage/TaskBar";
import TabBar from "./TodoPage/TabBar";
import CompletedBar from "./TodoPage/CompletedBar";
import { useState } from "react";
// import ModalComp from "../ui/ModalComp";
// ----------------------------Parent Component---------------------
const TodoHome = () => {
  const [todosFilter, setTodosFilter] = useState("todos"); //initialy null
  console.log("todosFilter", todosFilter);
  return (
    <div>
      <TodoHeader></TodoHeader>
      <TabBar setTodosFilter={setTodosFilter}></TabBar>
      <TaskBar todosFilter={todosFilter}></TaskBar>
      <CompletedBar></CompletedBar>
    </div>
  );
};

export default TodoHome;
