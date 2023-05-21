import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const token = await response.json();
        console.log("Login successful");
        console.log("Token:", token);
        setLoginSuccess(true); // Set login success state to display the success message
        // Handle successful login, e.g., store token in local storage
      } else {
        console.log("Login failed");
        setLoginSuccess(false); // Set login success state to hide the success message
        // Handle login failure, e.g., display an error message
      }
    } catch (error) {
      console.log(error);
      // Handle error case
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
      {loginSuccess && <p>Login successful!</p>}
    </form>
  );
};

export default LoginForm;
