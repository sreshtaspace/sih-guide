import { Link } from "react-router-dom";

function Stories() {
  const stories = [
    {
      id: 1,
      team: "Team Innovators",
      problem: "Smart Agriculture Monitoring",
      year: "SIH 2025",
      members: 6,
      category: "Hardware + IoT",
      strategy:
        "The team focused on building a working prototype instead of presenting only an idea.",
      challenge:
        "Their biggest challenge was collecting reliable sensor data from different field conditions.",
      solution:
        "They developed an IoT-based monitoring system that collected soil and environmental data and displayed it through a dashboard.",
      winningTip:
        "Keep the prototype simple, reliable and easy for the judges to understand.",
    },

    {
      id: 2,
      team: "Tech Titans",
      problem: "AI Based Healthcare Solution",
      year: "SIH 2024",
      members: 6,
      category: "AI + Software",
      strategy:
        "They divided the problem into hardware, software and AI modules and assigned clear responsibilities.",
      challenge:
        "The team had to handle a large amount of healthcare data while keeping the system simple enough for real-world use.",
      solution:
        "They created an AI-assisted platform that analysed input data and provided useful recommendations to healthcare workers.",
      winningTip:
        "Don't use AI just because it sounds impressive. Clearly explain what problem the AI actually solves.",
    },

    {
      id: 3,
      team: "Code Warriors",
      problem: "Disaster Management Platform",
      year: "SIH 2025",
      members: 6,
      category: "Web + AI",
      strategy:
        "They concentrated heavily on understanding the problem statement and presenting their solution clearly.",
      challenge:
        "The main challenge was coordinating information from multiple sources during a disaster.",
      solution:
        "They developed a centralized platform for reporting incidents, tracking affected areas and coordinating emergency responses.",
      winningTip:
        "A strong presentation should clearly connect the problem, proposed solution, prototype and real-world impact.",
    },

    {
      id: 4,
      team: "Build Beyond",
      problem: "Smart Waste Management",
      year: "SIH 2024",
      members: 6,
      category: "IoT + Automation",
      strategy:
        "The team concentrated on creating a low-cost solution that could realistically be deployed.",
      challenge:
        "They had to make their system affordable while maintaining reliable monitoring.",
      solution:
        "They created smart monitoring units that detected waste levels and helped optimise collection routes.",
      winningTip:
        "Judges care about feasibility. Explain how your solution can actually be deployed outside the hackathon.",
    },
  ];

  return (
    <div className="page">

      <div className="page-header">
        <div>
          <h1>🏆 SIH Success Stories</h1>

          <p>
            Learn how previous teams approached their problems,
            built their prototypes and presented their ideas.
          </p>
        </div>
      </div>

      <div className="story-grid">

        {stories.map((story) => (

          <div className="story-card" key={story.id}>

            <span>{story.year}</span>

            <h2>{story.team}</h2>

            <h3>{story.problem}</h3>

            <p>
              {story.strategy}
            </p>

            <p>
              👥 {story.members} members
            </p>

            <p>
              🛠️ {story.category}
            </p>

            <Link
              to={`/story/${story.id}`}
              className="primary-btn"
            >
              Read Full Story →
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Stories;