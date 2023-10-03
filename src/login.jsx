import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Retrieve user information from local storage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    // Check if the entered email and password match the stored values
    if (email === storedEmail && password === storedPassword) {
      // Successful login
      setLoggedIn(true);
    } else {
      // Handle invalid login
      alert("Invalid login credentials. Please try again.");
    }
  };

  return (
    <div>
      <div className="login-box">
        <p>Login</p>
        <form>
          <div className="user-box">
            <input
              required
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="user-box">
            <input
              required
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
        <p>
          Dont have an account?{" "}
          <Link to="/signup" className="a2">
            Sign up!
          </Link>
        </p>
      </div>
      {loggedIn && <p className="bg-dark">Login successful. Redirecting...</p>}
      {loggedIn && (
        <div>
          {setTimeout(() => {
            window.location.href = "/home"; 
          }, 2000)} 
        </div>
      )}
    </div>
  );
};

export default Login;
