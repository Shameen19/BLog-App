import React, { useState } from "react";

const RegisterationPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(ev) {
    ev.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        alert("registeration successful");
      } else {
        alert("registeration failed");
      }
    } catch (e) {
      console.log("Registeration Failed");
    }
  }
  return (
    <form action="register" onSubmit={register}>
      <h1>Register here</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button>Register</button>
    </form>
  );
};

export default RegisterationPage;
