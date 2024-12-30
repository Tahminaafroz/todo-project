import TodoHeader from "./TodoPage/TodoHeader";
import TaskBar from "./TodoPage/TaskBar";
import AllTodo from "./TodoPage/AllTodo";
import DataBar from "./TodoPage/DataBar";
import CompletedBar from "./TodoPage/CompletedBar";
//import ModalComp from "../ui/ModalComp";

const TodoHome = () => {
  return (
    <div>
      <TodoHeader></TodoHeader>
      <AllTodo></AllTodo>
      <TaskBar></TaskBar>
      <DataBar></DataBar>
      <CompletedBar></CompletedBar>
    </div>
  );
};

export default TodoHome;
