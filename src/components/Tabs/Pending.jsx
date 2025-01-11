// const Pending = () => {
//   const { todos } = useContext(UserContext);
//   const [pendingTodo, setPendingTodo] = useState([]);
//   const today = dayjs().startOf("day"); // Start of today in local time

//   useEffect(() => {
//     setPendingTodo(
//       todos.filter((todo) => {
//         const todoDate = dayjs(todo.date).startOf("day");
//         // Check if todoDate is after today
//         return todoDate.isAfter(today) && todo.status === "pending";
//       })
//     );
//   }, [todos]);

//   console.log(pendingTodo);
//   return (
//     <>
//       <div className="container nav-box py-5">
//         <div className="nav-img ">
//           <h2
//             className="text-center fs-1"
//             style={{ color: "white", paddingTop: "90px" }}
//           >
//             Todo App
//           </h2>
//         </div>
//       </div>
//       <ToDo></ToDo>
//       <TodosTable todos={pendingTodo}></TodosTable>
//     </>
//   );
// };

// export default Pending;

const Pending = () => {
  return (
    <div className="table-container">
      <h1>Pending</h1>
      <div className="data-box">
        <p>id #</p>
        <p>name:</p>
        <p>date:</p>
        <p>time:</p>
        <p>status</p>
      </div>
    </div>
  );
};

export default Pending;
