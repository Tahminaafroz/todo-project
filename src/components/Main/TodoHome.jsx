import TodoHeader from "./TodoPage/TodoHeader";
import TaskBar from "./TodoPage/TaskBar";
import AllTodo from "./TodoPage/AllTodo";
import DataBar from "./TodoPage/DataBar";
import CompletedBar from "./TodoPage/CompletedBar";
import { useState } from "react";
// import ModalComp from "../ui/ModalComp";
// ----------------------------Parent Component---------------------
const TodoHome = () => {
  const [todosFilter, setTodosFilter] = useState("all-todos"); //initialy null
  console.log("todosFilter", todosFilter);
  return (
    <div>
      <TodoHeader></TodoHeader>
      <AllTodo setTodosFilter={setTodosFilter}></AllTodo>
      <TaskBar></TaskBar>
      <DataBar></DataBar>
      <CompletedBar></CompletedBar>
    </div>
  );
};

export default TodoHome;
