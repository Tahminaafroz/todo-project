import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { createContext } from "react";

// eslint-disable-next-line react/prop-types
const SignInLink = ({ text = "" }) => {
  const UserContextData = createContext(UserContext);

  console.log("UserContext from signInLink ", UserContextData);
  return (
    <Link to="/sign-up">
      <p>{text}</p>
    </Link>
  );
};

export default SignInLink;
