import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Pages/ResetPassword.scss";
import axios from "axios";
import { useState } from "react";
import { CiCircleChevRight } from "react-icons/ci";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [isOtpSend, setIsOtpSend] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      //not match when compare and check data type
      alert("Passwords do not match.");
      return;
    }

    try {
      const data = {
        otp: isOtpSend,
        password: newPassword,
      };
      const response = await axios.patch(
        "https://staging-be-ecom.techserve4u.com/api/user/resetPassword",
        { data }
      );

      if (response?.data?.success) {
        alert("Password reset successful!");
        navigate("/sign-in");
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      alert(
        "An error occurred while resetting the password. Please try again."
      );
    }
  };

  return (
    <div className="resetpass-container">
      <div className="resetpass-box">
        <form className="resetpass-form" onSubmit={handleSubmit}>
          <h1>Reset Password</h1>
          <h4>Setting up password for your account</h4>

          <div className="form-group">
            <input
              type="text"
              value={isOtpSend}
              onChange={(e) => setIsOtpSend(e.target.value)}
              placeholder="Enter your OTP here"
              required
            />
          </div>
          <p>
            <CiCircleChevRight /> OTP must be valid.
          </p>

          <div className="form-group">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter a new password"
              required
            />
          </div>
          <p>
            <CiCircleChevRight /> Password must be at least 8 characters.
          </p>

          <div className="form-group">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>
          <p>
            <CiCircleChevRight /> Passwords must match.
          </p>

          <Button className="reset-btn" variant="primary" type="submit">
            Reset Password
          </Button>

          <div className="form-text">
            <h5>
              By clicking <Link to="/sign-in">“Sign In”</Link>, you agree to our
              <Link to="/terms"> Terms of Use </Link>
              and <Link to="/privacy"> Privacy Policy</Link>.
            </h5>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
