import { Button } from "react-bootstrap";
import "../../../Styles/Pages/TodoPage.scss/AllTodo.scss";
//import { FcTodoList } from "react-icons/fc";
//import { MdAddTask, MdDateRange } from "react-icons/md";
import "../../../Styles/Pages/TodoPage.scss/TaskBar.scss";
//import { useState } from "react";

//import { useNavigate } from "react-router-dom";
//import ModalComp from "../../ui/ModalComp";

// eslint-disable-next-line react/prop-types
const AllTodo = ({ setTodosFilter }) => {
  return (
    <div className="alltodo-container">
      <div className="tabs">
        <Button variant="primary" onClick={() => setTodosFilter("today")}>
          Today
        </Button>
        <Button variant="primary" onClick={() => setTodosFilter("pending")}>
          Pending
        </Button>
        <Button variant="primary" onClick={() => setTodosFilter("overdue")}>
          Overdue
        </Button>
        <Button variant="primary" onClick={() => setTodosFilter("completed")}>
          Completed
        </Button>
      </div>
      {/* -------------------------------------------- */}
    </div>
  );
};

export default AllTodo;
