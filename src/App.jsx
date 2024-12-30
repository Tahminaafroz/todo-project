import { Route, Routes } from "react-router-dom";

import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
//import ForgetPassword from "./Pages/ForgetPassword";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
import { createContext } from "react";
import ForgetPassword from "./Pages/ForgetPassword";
import ResetPassword from "./Pages/ResetPassword";
import TodoHome from "./components/Main/TodoHome";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();
function App() {
  const [token, setToken] = useState(
    localStorage.getItem("user-token") || null
  );
  return (
    <div>
      <UserContext.Provider value={{ token, setToken }}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
          <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
          <Route path="/todo-home" element={<TodoHome></TodoHome>}></Route>
          <Route
            path="/forget-password"
            element={<ForgetPassword></ForgetPassword>}
          ></Route>
          <Route
            path="/reset-password"
            element={<ResetPassword></ResetPassword>}
          ></Route>

          <Route
            path="/profile"
            element={<PrivateRoute element={<Profile />} />}
          >
            {/* <Route
            path="/forget-password"
            element={<ForgetPassword></ForgetPassword>}
          ></Route> */}
          </Route>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
