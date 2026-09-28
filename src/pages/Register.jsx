import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "Student",
    college: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/auth/register",
        form
      );

      alert("Registration successful!");

      navigate("/login");

    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
        "Registration failed."
      );
    }
  };

  return (
    <div className="page">

      <div className="auth-container">

        <div className="auth-header">
          <h1>🚀 Join SIH Guide</h1>

          <p>
            Create your account and become part of
            the SIH community.
          </p>
        </div>

        <form
          className="post-form"
          onSubmit={handleSubmit}
        >

          <label>Full Name</label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
          />


          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />


          <label>Password</label>

          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={form.password}
            onChange={handleChange}
            required
          />


          <label>Role</label>

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
          >
            <option>Student</option>
            <option>Mentor</option>
            <option>SIH Winner</option>
            <option>Judge</option>
          </select>


          <label>College</label>

          <input
            type="text"
            name="college"
            placeholder="Enter your college"
            value={form.college}
            onChange={handleChange}
          />


          <button
            type="submit"
            className="primary-btn"
          >
            Create Account
          </button>

        </form>


        <div className="auth-footer">

          <p>
            Already have an account?
            {" "}
            <Link to="/login">
              Login here
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;