//

// const Completed = () => {
//   //child component getting access to data by using usecontext from contextApi
//   const { todos } = useContext(UserContext);
//   const [completedTodo, setcompletedTodo] = useState([]);

//   useEffect(() => {
//     setcompletedTodo(todos.filter((todo) => todo.status === "completed"));
//   }, [todos]);

//   console.log(completedTodo);

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
//       <TodosTable todos={completedTodo}></TodosTable>
//     </>
//   );
// };

// export default Completed;

const Completed = () => {
  return (
    <div>
      <h4>Completed</h4>
    </div>
  );
};

export default Completed;
