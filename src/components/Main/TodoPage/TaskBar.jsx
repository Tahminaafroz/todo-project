import { MdAddTask } from "react-icons/md";
import "../../../Styles/Pages/TodoPage.scss/TaskBar.scss";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ModalComp from "../../ui/ModalComp";

const TaskBar = () => {
  return (
    <div className="task-container">
      <div className="task-box">
        <h2>Tasks</h2>
        <button className="task-btn">
          <MdAddTask />
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskBar;
