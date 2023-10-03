import { useState } from "react";
import { Link } from "react-router-dom";
import { validateSignup } from "./SignupValidation";
import "./Signup.css";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSignup = () => {
    const validationErrors = validateSignup({ name, email, password });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Store user information in local storage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    // Clear any previous errors
    setErrors({});
  };

  return (
    <div>
      <div className="login-box">
        <p>Sign Up</p>
        <form>
          <div className="user-box">
            <input
              required
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value); // Set the 'name' state based on input value
                console.log("Name:", e.target.value); // Log the input value if needed
              }}
            />
            <p className="error-message">{errors.name}</p>
          </div>
          <div className="user-box">
            <input
              required
              type="email"
              autoComplete="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
                console.log("Email:", e.target.value); // Log the input value if needed
              }}
            />
            <p className="error-message">{errors.email}</p>
          </div>
          <div className="user-box">
            <input
              required
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
                console.log("Password:", e.target.value); // Log the input value if needed
              }}
            />
            <p className="error-message">{errors.password}</p>
          </div>
          <Link to="/">
            <button type="button" onClick={handleSignup}>
              Sign Up
            </button>
          </Link>
        </form>
        <p>
          Already have an account?
          <Link to="/" className="a2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Signup;
