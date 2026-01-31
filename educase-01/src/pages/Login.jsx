import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/account"); // redirect after login
  }

  return (
    <div className="form-container">
      <h1>Signin to your PopX account</h1>
      <p className="sub-text">Enter your credentials below</p>

      <form onSubmit={handleSubmit}>
        <label>Email Address *</label>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password *</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn disabled">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
