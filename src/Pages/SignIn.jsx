import { createContext, useState } from "react";
import "../Styles/Pages/SignIn.scss";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import { ImCheckboxUnchecked } from "react-icons/im";
import { CiCircleChevRight } from "react-icons/ci";
// or less ideally
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SignInLink from "../components/SignInLink";

import { UserContext } from "../App";

const SignIn = () => {
  const UserContextData = createContext(UserContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = { email, password };
      const response = await axios.post(
        "https://staging-be-ecom.techserve4u.com/api/user/signin",
        data
      );

      const token = response?.data?.token;
      if (token) {
        localStorage.setItem("user-token", token);
      }
      setTimeout(() => {
        navigate("/todo-home");
      }, 600);

      if (response?.data?.success) {
        navigate("/todo-home");
      }
    } catch (error) {
      alert(`Error logging in: ${error.message}`);
    }
  };
  console.log(UserContextData);
  return (
    <div className="login-container">
      <div className="signin-box">
        <h2>SignIn</h2>
        <p>To stay connected with us , please sign in</p>
        <div>
          <button className="icon-btn">
            <FcGoogle />
            Continue with Google
          </button>
        </div>
        <br />
        <div>
          <button className="icon-btn">
            <GrApple />
            Continue with Apple
          </button>
          <p>or sign In With</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" ✉ Email address"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="🔒password"
              required
            />
          </div>
          <div className="check-box">
            <p>
              <ImCheckboxUnchecked /> Keep signed in to stay connected
            </p>
            <p>
              <CiCircleChevRight /> Must be at least 8 charecters
            </p>
          </div>

          <div>
            <Button className="signin-btn" variant="primary" type="submit">
              Sign In
            </Button>
          </div>

          <SignInLink text="Create a new account" />
          <hr />
          <p>
            <Link to="/forget-password">Forget Password</Link>
          </p>
        </form>
        <div>
          <p>
            By clicking “Sign In”, you agree to our.
            <Link to="/terms"> Terms of Use </Link> and
            <Link to="/privacy-policy"> Privacy Policy </Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
