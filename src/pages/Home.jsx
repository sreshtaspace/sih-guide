import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <section className="hero">

        <p className="tagline">
          SMART INDIA HACKATHON COMMUNITY
        </p>

        <h1>
          Learn. Build.Win SIH.
        </h1>

        <p className="hero-text">
          Learn from previous SIH winners, ask questions,
          connect with mentors and improve your hackathon strategy.
        </p>

        <div className="hero-buttons">

          <Link to="/ask" className="primary-btn">
            Ask for Guidance
          </Link>

          <Link to="/stories" className="secondary-btn">
            Explore Success Stories
          </Link>

        </div>

      </section>

      <section className="features">

        <div className="feature-card">
          <div className="feature-icon">🏆</div>

          <h2>Success Stories</h2>

          <p>
            Learn how previous SIH winners approached
            their problems and built their solutions.
          </p>
        </div>


        <div className="feature-card">
          <div className="feature-icon">💬</div>

          <h2>Ask Questions</h2>

          <p>
            Post your doubts and get suggestions from
            experienced participants and mentors.
          </p>
        </div>


        <div className="feature-card">
          <div className="feature-icon">🎨</div>

          <h2>PPT & Presentation</h2>

          <p>
            Learn how to create better presentations
            and explain your project effectively.
          </p>
        </div>


        <div className="feature-card">
          <div className="feature-icon">🚀</div>

          <h2>Project Strategy</h2>

          <p>
            Understand problem analysis, architecture
            and prototype planning.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Home;