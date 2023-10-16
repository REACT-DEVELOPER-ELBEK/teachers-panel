import React, { useState } from "react";
import "./Login.scss";
import { login } from "../../assets/img";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [isShown, setIsShown] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const toHome = useNavigate();
  function submitLogin() {
    if ((userName, password).trim().length == 0) {
      toast.error("Please fill fields", {
        theme: "colored",
      });
    } else if (password.length < 8) {
      toast.warning("Password should be at least 8 characters", {
        theme: "colored",
      });
    } else {
      localStorage.setItem("userName", JSON.stringify(userName));
      localStorage.setItem("password", JSON.stringify(password));
      toast.success("Account successfully logged", {
        theme: "colored",
      });
      setTimeout(() => {
        toHome("/");
      }, 1270);
    }
  }
  return (
    <div className="login">
      <div className="container">
        <div className="login__wrapper">
          <div className="login__form">
            <h2>Login</h2>
            <div className="login__inputs">
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUserName(e.target.value)}
              />
              <div className="password">
                <input
                  type={isShown ? "password" : "text"}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  onClick={() =>
                    isShown ? setIsShown(false) : setIsShown(true)
                  }
                >
                  {isShown ? <FiEye /> : <FiEyeOff />}
                </button>
              </div>
              <button type="submit" onClick={() => submitLogin()}>
                Login
              </button>
            </div>
          </div>
          <img src={login} alt="" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
