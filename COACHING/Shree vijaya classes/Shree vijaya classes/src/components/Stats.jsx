import react from "react";
import { Users, ShieldCheck, Medal, Target } from "lucide-react";

const stats = [
  [Users, "1200+", "Selected Students"],
  [ShieldCheck, "10+", "Defence Exams"],
  [Medal, "15+", "Years of Excellence"],
  [Target, "95%", "Success Rate"],
];

export default function Stats() {
  return (
    <section className="stats-wrap section-pad">
      <div className="stats-card">
        {stats.map(([Icon, value, label]) => (
          <div className="stat" key={label}>
            <Icon />
            <div>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
