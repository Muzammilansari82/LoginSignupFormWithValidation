// import React from "react";

const Home = () => {
  const userName = localStorage.getItem("name");
  const userEmail = localStorage.getItem("email");
  const password = localStorage.getItem("password");

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>Name: {userName}</p>
      <p>Email: {userEmail}</p>
      <p>Password: {password}</p>
    </div>
  );
};

export default Home;
