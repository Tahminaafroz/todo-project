// import { useContext, useEffect, useState } from "react";
// import dayjs from "dayjs";
// import ToDo from "../ToDo/ToDo";

// import { UserContext } from "../TodoContext";
// import TodosTable from "../TodosTable";

// const Today = () => {
//   const { todos } = useContext(UserContext);
//   const [todayTodo, setTodayTodo] = useState([]);
//   const today = dayjs().startOf("day"); // Start of today in local time

//   useEffect(() => {
//     setTodayTodo(
//       todos.filter((todo) => {
//         const todoDate = dayjs(todo.date).startOf("day");
//         return todoDate.isSame(today) && todo.status === "pending";
//       })
//     );
//   }, [todos]);

//   console.log(todayTodo);

//   return (
//     <>
//       <div className="table-container ">
//         <div className="data-box ">

//           <h2
//             className="text-center fs-1"
//             style={{ color: "white", paddingTop: "90px" }}
//           >
//             Todo App
//           </h2>
//         </div>
//       </div>
//       <ToDo></ToDo>
//       <TodosTable todos={todayTodo}></TodosTable>
//     </>
//   );
// };

// export default Today;

// -------------------------------------------------------------------------------

import "../../Styles/Pages/TodoPage/Tabs.scss";

const Today = () => {
  return (
    <div className="table-container">
      {/* <div className="title"> */}
      {/* <h5>Today todo</h5> */}
      <h1>Today todo</h1>
      <div className="data-box">
        <p>id #</p>
        <p>name:</p>
        <p>date:</p>
        <p>time:</p>
        <p>status</p>
      </div>
    </div>
    // </div>
  );
};

export default Today;
