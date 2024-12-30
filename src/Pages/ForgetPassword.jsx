/* eslint-disable react/no-unknown-property */
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Pages/ForgetPassword.scss";
import axios from "axios";
import { useState } from "react";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const [isOtpSend, setIsOtpSend] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { email };
      const response = await axios.post(
        "https://staging-be-ecom.techserve4u.com/api/user/forgotpassword",
        data
      );
      console.log(response);

      if (response?.data?.isOtpSend) {
        alert("Send OTP successfully on your email !");
        setIsOtpSend(true);
        navigate(`/reset-password?email=${email}`);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <div className="forgetpass-container">
      <div className="forgetpass-box">
        <form className="forgetpass-form" onSubmit={onSubmit}>
          <h3>Forget Password</h3>
          <p>
            Enter your account email address. We will send a confirmation email
            <br />
            to reset your password.
          </p>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Bind the email input to state
              required
            />
          </div>
          <Button className="reset-btn" variant="primary" type="submit">
            Reset Password
          </Button>
          <div className="form-text">
            <h5>
              By clicking “Sign In”, you agree to our
              <Link>
                Terms of Use <br />
                and Privacy Policy.
              </Link>
            </h5>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
