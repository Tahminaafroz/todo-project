import { MdAddTask } from "react-icons/md";
import "../../../Styles/Pages/TodoPage.scss/TaskBar.scss";
import { useState } from "react";
import ModalComp from "../../ui/ModalComp";
// //Date Picker
// //import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// //Time picker
// //import TimePicker from "react-time-picker";
// import "react-time-picker/dist/TimePicker.css";
// import "react-clock/dist/Clock.css";

//import { useState } from "react";
//import { useNavigate } from "react-router-dom";
// import ModalComp from "../../ui/ModalComp";

const TaskBar = ({ todoFilter, setTodoFilter }) => {
  const [showModal, setShowModal] = useState(false);
  // const [date, setDate] = useState(new Date());
  const [name, setName] = useState();

  const Todo = () => {
      const todos = [];
      
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
  };
  console.log(name);
  return (
    <div className="task-container">
      <div className="task-box">
        <h2>Tasks</h2>
        <button className="task-btn" onClick={() => setShowModal(true)}>
          <MdAddTask />
          Add Task
        </button>
      </div>
      <div className="data-container">
        {todos?.length < 1 ? (
           <div>
             <img src="src/assets/images/dataimg.png" alt="" />
           </div>
        ) : todoFilter === "today" ? (
           <Today />
         ) : todoFilter === "pending" ? (
           <Pending />
         ) : todoFilter === "overdue" ? (
          <Overdue />
         ) : (
          <AllTodos />
        )}
      </div>









<div>

      {showModal && (
        <ModalComp showModal={showModal} setShowModal={setShowModal}>
          <div className="modalBox mt-4 ">
            <div className="text-center">
              <h2>Add a New Todo</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="text-center">
                <input
                  className="todoName"
                  type="text"
                  name="name"
                  value={""}
                  onChange={(e) => setName(e.target.value)}
                  placeholder=" Enter the todo Name"
                  required
                />
              </div>
              {/* <div className="date-picker">
                <p>
                  <MdDateRange></MdDateRange>Pick a date
                </p>
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                />
              </div> */}
            </form>
          </div>
          
        </ModalComp>
      )}
    </div>
  </div>
  );
};

export default TaskBar;
