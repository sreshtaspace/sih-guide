import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Discussion() {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [answer, setAnswer] = useState("");
  const [author, setAuthor] = useState("");
  const [role, setRole] = useState("Student");

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await axios.get(
        `https://sih-guide-backend.onrender.com/api/posts/${id}`
      );

      setPost(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const submitAnswer = async (e) => {
    e.preventDefault();

    if (!answer.trim()) {
      alert("Please enter an answer.");
      return;
    }

    try {
      const response = await axios.post(
        `https://sih-guide-backend.onrender.com/api/posts/${id}/answer`,
        {
          author: author || "Anonymous",
          role,
          text: answer,
        }
      );

      setPost(response.data);
      setAnswer("");
      alert("Answer added successfully!");
    } catch (error) {
      console.log(error);
      alert("Failed to add answer.");
    }
  };

  if (!post) {
    return <div className="page">Loading discussion...</div>;
  }

  return (
    <div className="page">
      <h1>{post.title}</h1>

      <p>
        Asked by <b>{post.author}</b>
      </p>

      <span className="category">{post.category}</span>

      <div className="post-card">
        <p>{post.description}</p>
      </div>

      <h2>💬 Answers</h2>

      {(post.answers || []).length === 0 ? (
        <p>No answers yet. Be the first to help!</p>
      ) : (
        post.answers.map((item, index) => (
          <div className="post-card" key={index}>
            <h3>{item.author}</h3>
            <p>{item.role}</p>
            <p>{item.text}</p>
          </div>
        ))
      )}

      <h2>✍️ Add Your Answer</h2>

      <form className="post-form" onSubmit={submitAnswer}>
        <label>Your Name</label>

        <input
          type="text"
          placeholder="Enter your name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <label>Your Role</label>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Student</option>
          <option>Mentor</option>
          <option>SIH Winner</option>
          <option>Judge</option>
        </select>

        <label>Your Answer</label>

        <textarea
          placeholder="Write your guidance..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />

        <button type="submit" className="primary-btn">
          Post Answer
        </button>
      </form>
    </div>
  );
}

export default Discussion;