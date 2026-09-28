import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "Problem Statement",
    author: "Student",
    role: "Student",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitPost = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://https://sih-guide-backend.onrender.com/api/posts",
        form
      );

      alert("Question posted successfully!");

      navigate("/ask");
    } catch (error) {
      console.log(error);
      alert("Failed to post question.");
    }
  };

  return (
    <div className="page">
      <h1>💬 Create Post</h1>

      <p>
        Describe your problem and get guidance from the SIH community.
      </p>

      <form className="post-form" onSubmit={submitPost}>
        <label>Question Title</label>

        <input
          type="text"
          name="title"
          placeholder="Eg: How should we approach our SIH problem?"
          value={form.title}
          onChange={handleChange}
          required
        />

        <label>Describe your problem</label>

        <textarea
          name="description"
          placeholder="Explain your problem or doubt..."
          value={form.description}
          onChange={handleChange}
          required
        />

        <label>Category</label>

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
        >
          <option>Problem Statement</option>
          <option>PPT</option>
          <option>Project</option>
          <option>Presentation</option>
        </select>

        <button type="submit" className="primary-btn">
          Post Question
        </button>
      </form>
    </div>
  );
}

export default CreatePost;