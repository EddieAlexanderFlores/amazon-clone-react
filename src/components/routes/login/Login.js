import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import amazonLogo from "../../../images/header/amazon-logo-black.svg";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputPwdType, setInputPwdType] = useState("password");

  const login = (e) => {
    e.preventDefault(); // stop the refresh
    // Login logic
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //const user = userCredential.user;
        // Signed in

        // redirect to homepage
        setTimeout(() => {
          navigate("/");
        }, 400);
      })
      .catch((error) => {
        //const code = error.code;
        const message = error.message;
        alert(message);
      });
  };

  const showPassword = (e) => {
    if (e.target.checked) {
      setInputPwdType("text");
    } else {
      setInputPwdType("password");
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src={amazonLogo} alt="Amazon Logo" />
      </Link>
      <div className="login-form-container">
        <h1>Sign-In</h1>
        <form>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
          <label htmlFor="password">Password</label>
          <input
            type={inputPwdType}
            id="password"
            name="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />
          <div className="checkbox-container">
            <input type="checkbox" id="checkbox" onClick={showPassword} />
            <label htmlFor="checkbox">Show Password</label>
          </div>
          <button className="login-button" type="submit" onClick={login}>
            Sign-In
          </button>
        </form>
        <p className="legal-terms-text">
          By signing-in, you agree to Amazon's <span>Conditions of Use</span>{" "}
          and <span>Privacy Notice.</span>
        </p>
      </div>
      <div className="login-create-account">
        <div className="title-divider">
          <h5>New to Amazon?</h5>
        </div>
        <Link to="/register" className="create-account-button-container">
          <button className="create-account-button">
            Create your Amazon account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
