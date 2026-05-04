import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, form);
      alert("Login successful");
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Login</h2>

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          style={styles.input}
        />

        <button onClick={handleSubmit} style={styles.button}>
          Login
        </button>

        <p style={styles.text}>
          <Link to="/forgot-password" style={styles.link}>
            Forgot Password?
          </Link>
        </p>

        <p style={styles.text}>
          Don't have an account?{" "}
          <Link to="/" style={styles.link}>
            Register
          </Link>
        </p>
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
  },
  text: {
    marginTop: "10px"
  },
  link: {
    color: "#667eea",
    fontWeight: "bold",
    textDecoration: "none"
  }
};
