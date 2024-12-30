import { RiArrowDropDownLine } from "react-icons/ri";
import "../../../Styles/Pages/TodoPage.scss/CompletedBar.scss";

const CompletedBar = () => {
  return (
    <div className="completed-bar-container">
      <div className="completed-bar-box">
        <h2>
          Completed <RiArrowDropDownLine />
        </h2>
      </div>
    </div>
  );
};

export default CompletedBar;
