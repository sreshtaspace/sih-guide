import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AskGuidance() {

  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/posts"
      );

      setPosts(response.data);

    } catch (error) {
      console.log(error);
    }
  };

const deletePost = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/api/posts/${id}`);

    alert("Post deleted successfully!");

    fetchPosts();
  } catch (error) {
    console.log(error);
    alert("Failed to delete post");
  }
};
  const filteredPosts =
    category === "All"
      ? posts
      : posts.filter((post) => post.category === category);

  return (
    <div className="page">

      <div className="page-header">

        <div>
          <h1>💬 Ask for Guidance</h1>

          <p>
            Have a doubt? Ask the SIH community.
          </p>
        </div>

        <a href="/create-post" className="primary-btn">
          + Ask Question
        </a>

      </div>

      <div className="filters">

        <button onClick={() => setCategory("All")}>
          All
        </button>

        <button onClick={() => setCategory("Problem Statement")}>
          Problem Statement
        </button>

        <button onClick={() => setCategory("PPT")}>
          PPT
        </button>

        <button onClick={() => setCategory("Project")}>
          Project
        </button>

        <button onClick={() => setCategory("Presentation")}>
          Presentation
        </button>

      </div>

      <div>

        {filteredPosts.map((post) => (

          <div className="post-card" key={post._id}>

            <div className="post-header">

              <div>

                <h2>{post.title}</h2>

                <p>
                  Asked by <b>{post.author}</b>
                </p>

              </div>

              <span className="category">
                {post.category}
              </span>

            </div>

            <p>{post.description}</p>

            <div className="answers">
              💬 {post.answers.length} answers
            </div>
            
<Link
  to={`/post/${post._id}`}
  className="secondary-btn"
>
  View Discussion →
</Link>
<Link
  to={`/edit-post/${post._id}`}
  className="secondary-btn"
>
  ✏️ Edit
</Link>
<button
  className="delete-btn"
  onClick={() => deletePost(post._id)}
>
  🗑️ Delete
</button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AskGuidance;