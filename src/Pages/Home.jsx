import { Link } from "react-router-dom";
import "../Styles/Pages/Home.scss";
const Home = () => {
  return (
    <div className="header">
      <div className="nav-container">
        <h1>App Store</h1>
      </div>
      <div className="nav-items">
        <Link to="/sign-in">
          <ul className="list-item">
            <a href="">Home</a>
            <a href="">Today</a>
            <a href="">Pending</a>
            <a href="">overdue</a>
            <Link to="/sign-up">
              <a href="">Sign up</a>
            </Link>
            <Link to="/sign-in">
              <a href="">Sign in</a>
            </Link>
          </ul>
        </Link>
      </div>
    </div>
  );
};

export default Home;
