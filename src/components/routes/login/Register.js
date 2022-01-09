import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import amazonLogo from "../../../images/header/amazon-logo-black.svg";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useStateValues } from "../../store/StateProvider";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputPwdType, setInputPwdType] = useState("password");
  const [, dispatch] = useStateValues();
  const element = useRef(null);

  const register = (e) => {
    e.preventDefault();
    // Register logic
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // created user and signed in!
        const user = userCredential.user;

        updateProfile(user, { displayName: name })
          .then(() => {
            // PROFILE UPDATED !
            dispatch({ type: "set_user", user: name });

            element.current.innerHTML = `<h1>Account created!<br/>Signing you in ...</h1>`;

            // redirect to homepage
            setTimeout(() => {
              navigate("/");
            }, 1500);
          })
          .catch((error) => {
            //const code = error.code;
            const message = error.message;
            alert(message);
          });
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
    <div id="message" ref={element} className="register">
      <Link to="/">
        <img className="register-logo" src={amazonLogo} alt="Amazon Logo" />
      </Link>
      <div className="register-form-container">
        <h1>Create Account</h1>
        <form>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required={true}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
          <label htmlFor="password">Password</label>
          <input
            type={inputPwdType}
            id="password"
            name="password"
            autoComplete="new-password"
            value={password}
            placeholder="At least 6 characters"
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />
          <div className="checkbox-container">
            <input type="checkbox" id="checkbox" onClick={showPassword} />
            <label htmlFor="checkbox">Show Password</label>
          </div>
          <button className="register-button" type="submit" onClick={register}>
            Register
          </button>
        </form>
        <p className="legal-terms-text">
          By creating an account, you agree to Amazon's{" "}
          <span>Conditions of Use</span> and <span>Privacy Notice.</span>
        </p>
      </div>
    </div>
  );
}

export default Register;
