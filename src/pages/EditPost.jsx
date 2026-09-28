import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const response = await axios.get(
        `https://sih-guide-backend.onrender.com/api/posts/${id}`
      );

      setTitle(response.data.title);
      setDescription(response.data.description);
      setCategory(response.data.category);
    } catch (error) {
      console.log(error);
    }
  };

  const updatePost = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `https://sih-guide-backend.onrender.com/api/posts/${id}`,
        {
          title,
          description,
          category,
        }
      );

      alert("Post updated successfully!");

      navigate("/ask");
    } catch (error) {
      console.log(error);
      alert("Failed to update post");
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>✏️ Edit Post</h1>
          <p>Update your guidance question.</p>
        </div>
      </div>

      <form className="create-form" onSubmit={updatePost}>
        <label>Title</label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Description</label>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label>Category</label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option value="Problem Statement">
            Problem Statement
          </option>
          <option value="PPT">PPT</option>
          <option value="Project">Project</option>
          <option value="Presentation">Presentation</option>
        </select>

        <button type="submit" className="primary-btn">
          Save Changes
        </button>
      </form>
    </div>
  );
}