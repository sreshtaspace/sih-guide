
import { useState } from "react";

export default function Resources() {
  const [selected, setSelected] = useState(null);

  const resources = [
    {
      id: 1,
      title: "Problem Statement Analysis",
      icon: "🔍",
      category: "Analysis",
      description:
        "Learn how to understand the problem statement, identify the target users and find the real-world problem.",
      points: [
        "Read the problem statement carefully.",
        "Identify the target users and their difficulties.",
        "Understand the existing solutions and their limitations.",
        "Define what your proposed solution will improve.",
      ],
    },
    {
      id: 2,
      title: "Project Approach",
      icon: "🚀",
      category: "Development",
      description:
        "Understand how to convert your problem statement into a practical project with clear modules and implementation steps.",
      points: [
        "Break the project into smaller modules.",
        "Choose suitable hardware and software technologies.",
        "Design the system architecture.",
        "Build a basic working prototype first.",
        "Test each module and integrate them.",
      ],
    },
    {
      id: 3,
      title: "PPT Designing Ideas",
      icon: "🎨",
      category: "Presentation",
      description:
        "Learn how to create a clear, attractive and informative SIH presentation.",
      points: [
        "Use a simple and consistent slide design.",
        "Explain the problem before presenting the solution.",
        "Use diagrams and visuals wherever helpful.",
        "Avoid filling slides with long paragraphs.",
        "Highlight your innovation and real-world impact.",
      ],
    },
    {
      id: 4,
      title: "Presentation & Demo",
      icon: "🎤",
      category: "Presentation",
      description:
        "Prepare your team to explain the project confidently and demonstrate the working prototype.",
      points: [
        "Divide presentation responsibilities among team members.",
        "Practice explaining the project within the given time.",
        "Prepare for technical questions from judges.",
        "Demonstrate the important features of your prototype.",
        "Explain limitations and future improvements honestly.",
      ],
    },
  ];

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>📚 SIH Resources</h1>
          <p>
            Learn the strategies, techniques and skills needed
            to prepare a successful SIH project.
          </p>
        </div>
      </div>

      <div className="resource-grid">
        {resources.map((resource) => (
          <div className="resource-card" key={resource.id}>
            <div className="resource-icon">{resource.icon}</div>

            <span className="category">{resource.category}</span>

            <h2>{resource.title}</h2>

            <p>{resource.description}</p>

            <button
              className="primary-btn"
              onClick={() => setSelected(resource)}
            >
              Explore Resource →
            </button>
          </div>
        ))}
      </div>

      {selected && (
        <div className="resource-details">
          <h2>
            {selected.icon} {selected.title}
          </h2>

          <p>{selected.description}</p>

          <h3>Important Points</h3>

          <ul>
            {selected.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <button
            className="secondary-btn"
            onClick={() => setSelected(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}