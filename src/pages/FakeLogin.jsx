import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FakeLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
    navigate("/");
  };

  return (
    <section>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            <h3>Login</h3>
          </button>
        </form>
      </div>
    </section>
  );
}

export default FakeLogin;
