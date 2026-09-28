import MentorCard from "../components/MentorCard";

export default function Mentors() {
  const mentors = [
    {
      name: "Arjun Kumar",
      role: "SIH Winner",
      expertise: "Project Development and IoT",
      icon: "🏆",
    },
    {
      name: "Priya Sharma",
      role: "Technical Mentor",
      expertise: "AI and Machine Learning",
      icon: "💻",
    },
    {
      name: "Rahul Menon",
      role: "Presentation Mentor",
      expertise: "PPT Design and Presentation",
      icon: "🎤",
    },
  ];

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>🧑‍🏫 SIH Mentors</h1>

          <p>
            Connect with experienced participants and
            experts for guidance.
          </p>
        </div>
      </div>

      <div className="mentor-grid">
        {mentors.map((mentor, index) => (
          <MentorCard
            key={index}
            name={mentor.name}
            role={mentor.role}
            expertise={mentor.expertise}
            icon={mentor.icon}
          />
        ))}
      </div>
    </div>
  );
}