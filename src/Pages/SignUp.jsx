import { useState } from "react";
import "../Styles/Pages/SignUp.scss";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import axios from "axios";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOtpSend, setIsOtpSend] = useState(false);
  let otp = ["", "", "", "", "", ""];
  console.log(otp);
  const navigate = useNavigate();
  // ---------------------------------submithandle---------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        name: fullName,
        email,
        password,
      };
      const response = await axios.post(
        "https://staging-be-ecom.techserve4u.com/api/user/signup",
        data
      );
      if (response?.data?.isOtpSend) {
        setIsOtpSend(true);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  // -----------------------------------OTPhandle-------------------------------
  const handleOTP = async (e) => {
    e.preventDefault();
    console.log(otp);

    const joinOtp = otp.join("");
    try {
      const data = {
        otp: joinOtp,
        email,
      };
      const response = await axios.post(
        "https://staging-be-ecom.techserve4u.com/api/user/verifyotp",
        data
      );
      if (response?.data?.success) {
        alert("Registred successful !");
        navigate("/sign-in");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="login-container">
      {isOtpSend ? (
        // -----------------------------------VerifyForm------------------
        <div className="login-verify-box">
          <h1>Verification </h1>
          <p>
            Enter the 6-digit code that we sent to <br />
            **********@gmail.com
          </p>
          <form className="login-form" onSubmit={handleOTP}>
            <div className="input-container">
              <input
                type="text"
                maxLength="1"
                required
                onChange={(e) => {
                  otp[0] = e.target.value;
                }}
              />
              <input
                type="text"
                maxLength="1"
                required
                onChange={(e) => {
                  otp[1] = e.target.value;
                }}
              />
              <input
                type="text"
                maxLength="1"
                required
                onChange={(e) => {
                  otp[2] = e.target.value;
                }}
              />
              <input
                type="text"
                maxLength="1"
                required
                onChange={(e) => {
                  otp[3] = e.target.value;
                }}
              />
              <input
                type="text"
                maxLength="1"
                required
                onChange={(e) => {
                  otp[4] = e.target.value;
                }}
              />
              <input
                type="text"
                maxLength="1"
                required
                onChange={(e) => {
                  otp[5] = e.target.value;
                }}
              />
            </div>

            <Button className="submit-btn" variant="primary" type="submit">
              Submit
            </Button>

            <div className="form-text">
              <p>OTP(One time password) valid for 5 minutes</p>
              <p>
                Didn’t receive your code, or did the code time expire?
                <br />
                <Link to="/sign-up">Get a new one.</Link>
              </p>
            </div>
          </form>
        </div>
      ) : (
        // ---------------------verifyBox end-------------------------------
        // -----------------------------signupBox------------------------------

        <div className="signUp-box">
          <h3>SignUp</h3>
          <p>To stay connected with us, please sign up</p>
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
          </div>
          <p>or sign up with</p>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="input-group"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter Full Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="✉ Email address"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="🔒 Password"
                required
              />
            </div>
            {/* --------------------------------Button----------------------------- */}
            <div>
              <Button className="submit-btn" variant="primary" type="submit">
                Submit
              </Button>
            </div>
            <p>
              Already have an account? <Link to="/sign-in">Sign In</Link>
            </p>
          </form>
        </div>
      )}
      {/* --------------------------------SignupBox------------------------------- */}
    </div>
  );
};

export default SignUp;
