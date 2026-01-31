import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agent: "yes",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // (optional) save data later
    // localStorage.setItem("user", JSON.stringify(formData));

    navigate("/account"); // 👈 DIRECT OPEN ACCOUNT PAGE
  }

  return (
    <div className="form-container">
      <h1>Create Your PopX Account</h1>

      <form onSubmit={handleSubmit}>
        <label>Full Name *</label>
        <input
          type="text"
          name="fullName"
          placeholder="Marry Doe"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label>Phone Number *</label>
        <input
          type="text"
          name="phone"
          placeholder="+123456789"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Email Address *</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password *</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label>Company Name *</label>
        <input
          type="text"
          name="company"
          placeholder="Educase India"
          value={formData.company}
          onChange={handleChange}
          required
        />

        <p className="agent-text">Are you an agent? *</p>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="agent"
              value="yes"
              checked={formData.agent === "yes"}
              onChange={handleChange}
            />
            Yes
          </label>

          <label>
            <input
              type="radio"
              name="agent"
              value="no"
              checked={formData.agent === "no"}
              onChange={handleChange}
            />
            No
          </label>
        </div>

        <button type="submit" className="btn primary">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Register;
