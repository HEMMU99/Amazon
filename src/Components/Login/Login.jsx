import React from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = () => {
    // Email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Invalid email address");
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    // Password validation pattern
    const passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordPattern.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit"
      );
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate email and password
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    // If both email and password are valid, navigate to the main page
    if (isEmailValid && isPasswordValid) {
      navigate("/Amazon-clone/");
    }
  };

  return (
    <div className="login">
      <Link to="/Amazon-clone/">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login-container">
        <h1>Sign-in</h1>

        <form onSubmit={handleSubmit}>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p style={{ color: "red" }}>{emailError}</p>}

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}

          <button type="submit" className="login-signInButton">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="login-registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
