import { Button } from "react-bootstrap";
import "../../../Styles/Pages/TodoPage.scss/AllTodo.scss";
import { Link } from "react-router-dom";
//import { FcTodoList } from "react-icons/fc";
const AllTodo = () => {
  return (
    <div className="alltodo-container">
      <div className="alltodo-box">
        <div className="header-btn-items">
          <Link>
            <Button variant="primary">Today</Button>
            <Button variant="primary">Pending</Button>
            <Button variant="primary">Overdue</Button>
            <Button variant="primary">Completed</Button>
          </Link>
        </div>
        {/* <div className="signin-btn">
          <Button variant="primary">Sign in </Button>
        </div> */}
      </div>
    </div>
  );
};

export default AllTodo;
