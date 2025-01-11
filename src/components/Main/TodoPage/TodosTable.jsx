// /* eslint-disable react/prop-types */
// import { useContext, useState } from "react";
// import { FaPenAlt } from "react-icons/fa";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { UserContext } from "../../../App";
// import "../../../Styles/Pages/TodoPage/TodosTable.scss";
// const TodosTable = ({ todos }) => {
//   const { email, deleteTodo, editTodo, updateTodoStatus } =
//     useContext(UserContext);
//   const [name, setName] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [editingTodoId, setEditingTodoId] = useState(null); // Track the id of the todo being edited
//   // --------------------------------howtohandle- edit,delete,----------------------
//   const handleDelete = (id) => {
//     // handle delete
//     deleteTodo(id);
//   };
//   const handleEdit = (todo) => {
//     //handle edit
//     // Populate the input fields with the current todo values
//     setEditingTodoId(todo.id);
//     setName(todo.title);
//     setDate(todo.date);
//     setTime(todo.time);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const todo = {
//       // todo data will be title,date,time

//       title: name,
//       date: date,
//       time: time,
//       status: "pending",
//     };
//     editTodo(editingTodoId, todo);

//     setName("");
//     setDate("");
//     setTime("");
//     setEditingTodoId(null);
//   };
//   const handleStatusChange = (id, currentStatus) => {
//     //handle status change
//     const newStatus = currentStatus === "pending" ? "completed" : "pending";
//     updateTodoStatus(id, newStatus);
//   };

//   return (
//     <div className="table-container">
//       <table className=" table  table-striped">
//         {todos.length > 0 && (
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Task Name</th>
//               <th scope="col">Email</th>
//               <th scope="col">Date & Time</th>
//               <th scope="col">Actions</th>
//             </tr>
//           </thead>
//         )}
//         <tbody>
//           {todos.length > 0 ? (
//             todos.map((todo, index) => (
//               <tr key={index}>
//                 <th scope="row">
//                   <input
//                     type="checkbox"
//                     checked={todo.status == "completed"}
//                     onChange={() => {
//                       handleStatusChange(todo.id, todo.status);
//                     }}
//                   />
//                 </th>
//                 <td>{todo.title}</td>
//                 <td>{email}</td>

//                 <td>
//                   {todo.date} <br /> {todo.time}
//                 </td>
//                 <td>
//                   <button
//                     type="button"
//                     className="btn btn-primary mx-2"
//                     data-bs-toggle="modal"
//                     data-bs-target="#editModal"
//                     onClick={() => handleEdit(todo)}
//                   >
//                     <FaPenAlt />
//                   </button>

//                   <div
//                     className=" modal fade"
//                     id="editModal"
//                     tabIndex={-1}
//                     aria-labelledby="exampleModalLabel"
//                     aria-hidden="true"
//                   >
//                     <div className=" row modal-dialog modal-dialog-centered">
//                       <div className="modal-content5">
//                         <div className="modal-header6">
//                           <h1
//                             className="modal-title vrow fs-5"
//                             id="exampleModalLabel"
//                           >
//                             Edit ToDo
//                           </h1>
//                           <button
//                             type="button"
//                             className=" btn-close"
//                             data-bs-dismiss="modal"
//                             aria-label="Close"
//                           />
//                         </div>
//                         <form onSubmit={handleSubmit}>
//                           <div className="modal-body row d-flex flex-column align-items-center justify-content-center">
//                             <div>
//                               <label htmlFor="" className="mx-2">
//                                 Task Name:
//                               </label>
//                               <input
//                                 type="text"
//                                 placeholder="name"
//                                 name="title"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                               />
//                             </div>
//                             <div className="text-start row my-5">
//                               <label htmlFor="" className="mx-2">
//                                 Pick a date:
//                               </label>
//                               <input
//                                 type="date"
//                                 name="date"
//                                 value={date}
//                                 onChange={(e) => setDate(e.target.value)}
//                               />
//                             </div>
//                             <div>
//                               <label htmlFor="" className="mx-2">
//                                 Pick your time:
//                               </label>
//                               <input
//                                 type="time"
//                                 name="time"
//                                 value={time}
//                                 onChange={(e) => setTime(e.target.value)}
//                               />
//                             </div>
//                           </div>
//                           <div className="row modal-footer">
//                             <button
//                               type="submit"
//                               data-bs-dismiss="modal"
//                               aria-label="Close"
//                               className="btn btn-primary"
//                             >
//                               Update
//                             </button>
//                           </div>
//                         </form>
//                       </div>
//                     </div>
//                   </div>

//                   <button
//                     className="btn btn-danger"
//                     onClick={() => {
//                       handleDelete(todo.id);
//                     }}
//                   >
//                     <RiDeleteBin6Line />
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <div
//               className="d-flex align-items-center justify-content-center"
//               style={{ width: "1240px" }}
//             >
//               <img
//                 src={"../../../assets/Images/DataImage.png"}
//                 alt=""
//                 className=""
//               />
//             </div>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TodosTable;

// // const TodosTable = () => {
// //   return (
// //     <div>
// //       <h1>Todos table</h1>
// //     </div>
// //   );
// // };

// // export default TodosTable;
