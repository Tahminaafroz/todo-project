//import "./index.css";
import Pagination from "@mui/material/Pagination";
import "../../../Styles/Pages/TodoPage/CompletedBar.scss";

const CompletedBar = () => {
  return (
    <div className="completed-container">
      <h1>Completed</h1>
      <div className="completed-box"></div>
      <div className="page-display">
        <p>Showing 1 to 10 of 10 entries</p>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </div>
    </div>
  );
};

export default CompletedBar;
