import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/reset-password/${token}`,
        { password }
      );

      alert("Password reset successful");
      navigate("/login");

    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Reset Password</h2>

        <input
          type="password"
          placeholder="Enter new password"
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleSubmit} style={styles.button}>
          Reset Password
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)"
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "15px",
    width: "350px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    textAlign: "center"
  },
  heading: {
    marginBottom: "20px",
    fontWeight: "bold"
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ccc"
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#667eea",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer"
  }
};