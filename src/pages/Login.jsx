import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import eye1Icon from "../assets/eye1.png";
import eye2Icon from "../assets/eye2.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  
  const [error, setError] = useState("");
  const [buttonDisabled, setbuttonDisabled] = useState(false);

  const onSubmit = () => {
    if (!value.email || !value.password) {
      setError("Enter all required field");
      return;
    }
    setError("");
    setbuttonDisabled(true);
    signInWithEmailAndPassword(auth, value.email, value.password)
      .then(async (res) => {
        setbuttonDisabled(false);
        navigate("/Home");
      })
      .catch((err) => {
        setbuttonDisabled(false);
        setError(err.message);
      });
  };
  return (
    <>
      <div className="container">
        <h2>Login</h2>
        <form action="#" method="post">
          <div className="form-group">
            <label htmlFor="username">Email</label>
            <input
              type="text"
              id="username"
              placeholder="Enter email id"
              onChange={(e) =>
                setValue((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter password"
              onChange={(e) =>
                setValue((prev) => ({ ...prev, password: e.target.value }))
              }
            />
            <span
              style={{}}
              className="icon"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <img src={eye2Icon} alt="Eye 1" />
              ) : (
                <img src={eye1Icon} alt="Eye 2" />
              )}
            </span>
          </div>
          <b>{error}</b>
          <button
            type="submit"
            className="btn"
            onClick={onSubmit}
            disabled={buttonDisabled}
          >
            Login
          </button>
          <p>
            Don't have account ? please <Link to="/Signup">Signup</Link>
          </p>
        </form>
        {/* <img src="./" alt="" /> */}
      </div>
    </>
  );
};

export default Login;
