
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Welcome to PopX</h1>
        <p>
          Manage your customers and grow <br />
          your business with ease on PopX.
        </p>

        <button
          className="btn primary"
          onClick={() => navigate("/register")}
        >
          Create Account
        </button>

        <button
          className="btn secondary"
          onClick={() => navigate("/login")}
        >
          Already Registered? Log In
        </button>
      </div>
    </div>
  );
}

export default Welcome;
