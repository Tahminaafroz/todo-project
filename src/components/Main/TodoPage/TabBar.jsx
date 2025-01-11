import { Button } from "react-bootstrap";
import "../../../Styles/Pages/TodoPage/TabBar.scss";

// eslint-disable-next-line react/prop-types
const TabBar = ({ setTodosFilter }) => {
  return (
    <div className="tabBar-container">
      <div className="tab-box">
        <div className="tabs">
          <Button
            variant="primary"
            onClick={() => {
              setTodosFilter("today");
            }}
          >
            Today
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setTodosFilter("pending");
            }}
          >
            Pending
          </Button>

          <Button
            variant="primary"
            onClick={() => {
              setTodosFilter("overdue");
            }}
          >
            Overdue
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setTodosFilter("completed");
            }}
          >
            Completed
          </Button>
        </div>
      </div>
    </div>
  );
};
export default TabBar;
