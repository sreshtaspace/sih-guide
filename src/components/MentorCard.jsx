export default function MentorCard({ name, role, expertise, icon }) {
  return (
    <div className="mentor-card">
      <div className="mentor-icon">{icon}</div>

      <h2>{name}</h2>

      <span className="category">{role}</span>

      <h3>{expertise}</h3>

      <button className="primary-btn">
        View Profile
      </button>
    </div>
  );
}