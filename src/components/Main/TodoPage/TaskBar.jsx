// // import { MdDateRange } from "react-icons/md";
import "../../../Styles/Pages/TodoPage/TaskBar.scss";
import moment from "moment/moment";
import { useContext, useState } from "react";
//import { useContext } from "react";
import ModalComp from "../../ui/ModalComp";
import { MdDateRange } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import Today from "../../../components/Tabs/Today";
import Pending from "../../../components/Tabs/Pending";
import Overdue from "../../../components/Tabs/Overdue";
import Completed from "../../../components/Tabs/Completed";
import { UserContext } from "../../../provider/TodoContextProvider";

//import { UserContext } from "../../../provider/TodoContextProvider";

// ------------------------------------------------------------------------

const TaskBar = ({ todosFilter }) => {
  // todo.jsx
  const [showModal, setShowModal] = useState(false); //by default its false
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState();
  const [error, setError] = useState("");
  const [time, setTime] = useState("10:00");
  const [all, setAll] = useState("");
  const [showUI, setShowUI] = useState("");
  const { addTodo } = useContext(UserContext);

  console.log(all);

  const todos = [{}];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    if (name && time) {
      setError("");
      addTodo([
        ...todos,
        {
          id: Math.ceil(Math.random() * 1000),
          names: name,
          times: moment(time, "HH:mm:ss").format("hh:mm a"),
          dates: moment(date, "DD/MM/YYYY"),
          checked: false,
        },
      ]);
      setTime("");
      setName("");
      setShowModal(false);
    } else {
      setError("Provide name and time!");
    }
  };

  console.log("todos", todos);
  return (
    <div className="task-container">
      <div className="task-box">
        <h2>Tasks</h2>

        <div className="text-center">
          <button
            onClick={() => {
              setShowModal(true);
              setAll("make-todo");
              setShowUI("all");
            }}
            className="add-task-btn"
          >
            Add task
          </button>
        </div>
      </div>
      {/* ----------------------------------------showUI---------------------- */}
      <div className="data-container">
        <div className="data-box">
          {todos?.length < 1 ? (
            <div className="data-img">
              <img src="../../../assets/Images/DataImage.png" alt="No Data" />
            </div>
          ) : todosFilter === "today" ? (
            <Today />
          ) : todosFilter === "pending" ? (
            <Pending />
          ) : todosFilter === "overdue" ? (
            <Overdue />
          ) : todosFilter === "completed" ? (
            <Completed />
          ) : (
            <div>
              <h1>All Todos here</h1>
            </div>
          )}
        </div>
      </div>
      {/* ----------------------------modal-------------------------------- */}
      <div className="modal-container">
        {all === "make-todo" && showModal && (
          <ModalComp showModal={showModal} setShowModal={setShowModal}>
            <div className="modal-box">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Add a New Todo</h4>
                <button
                  type="button"
                  className="close-button"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                >
                  &times;
                </button>
              </div>

              {/* Modal Body */}
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  {/* Todo Name */}
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="todo-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter todo name"
                      required
                    />
                  </div>

                  {/* Date Picker */}
                  <div className="form-group">
                    <label>
                      <MdDateRange className="icon" /> Pick a Date
                    </label>
                    <input
                      type="date"
                      placeholder="name"
                      name="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>

                  {/* Time Picker */}
                  <div className="form-group">
                    <label>
                      <IoMdTime className="icon" /> Pick a Time
                    </label>
                    <input
                      type="time"
                      placeholder="name"
                      name="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="form-actions">
                    <button type="submit" className="add-button">
                      Add
                    </button>
                  </div>
                </form>

                {/* Error Message */}
                {error && (
                  <div className="error-message">
                    <p>{error}</p>
                  </div>
                )}
              </div>
            </div>
          </ModalComp>
        )}
      </div>
    </div>
  );
};

export default TaskBar;
