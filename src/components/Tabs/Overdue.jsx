// const Overdue = () => {
//   const { todos } = useContext(UserContext);
//   const [pastTodo, setPastTodo] = useState([]);
//   const today = dayjs().startOf("day"); // Start of today in local time

//   useEffect(() => {
//     setPastTodo(
//       todos.filter((todo) => {
//         const todoDate = dayjs(todo.date).startOf("day");
//         // Check if todoDate is before today
//         return todoDate.isBefore(today) && todo.status === "pending";
//       })
//     );
//   }, [todos]);
//   console.log(pastTodo);

//   return (
//     <>
//       <div className="table-container ">
//         <div className=" ">
//           <h2
//             className="text-center fs-1"
//             style={{ color: "white", paddingTop: "90px" }}
//           >
//             Todo App
//           </h2>
//         </div>
//       </div>
//       <ToDo></ToDo>
//       <TodosTable todos={pastTodo}></TodosTable>
//     </>
//   );
// };

// export default Overdue;

const Overdue = () => {
  return (
    <div className="table-container">
      <h1>Overdue</h1>
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

export default Overdue;
