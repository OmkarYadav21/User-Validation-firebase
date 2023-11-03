import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
// import Home from './Home'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import eye1Icon from "../assets/eye1.png";
import eye2Icon from "../assets/eye2.png";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [buttonDisabled, setbuttonDisabled] = useState(false);

  const onHandelClick = () => {
    if (!value.name || !value.email || !value.password) {
      setError("Enter all required field");
      return;
    }
    setError("");
    console.log(value);
    setbuttonDisabled(true);
    createUserWithEmailAndPassword(auth, value.email, value.password)
      .then(async (res) => {
        setbuttonDisabled(false);
        // console.log(res);
        const user = res.user;
        // console.log(user);
        await updateProfile(user, {
          displayName: value.name,
        });
        navigate("/Home");
      })
      .catch((err) => {
        setbuttonDisabled(false);
        setError(err.message);
        // console.log(err);
      });
  };
  return (
    <>
      <div className="container">
        <h1>Signup</h1>
        <form action="#">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your name"
              onChange={(e) =>
                setValue((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
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
              placeholder="Enter Password"
              onChange={(e) =>
                setValue((prev) => ({ ...prev, password: e.target.value }))
              }
            />
            <span
              style={{
                position: "absolute",
                right: "10vh",
                top: "44px",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
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
            onClick={onHandelClick}
            disabled={buttonDisabled}
          >
            Signup
          </button>
          <p>
            Already have account? <Link to="/">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
