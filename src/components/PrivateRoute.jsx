import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem("user-token") || null; // || logical OR

  return token ? element : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
