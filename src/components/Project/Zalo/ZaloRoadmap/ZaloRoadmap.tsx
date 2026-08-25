import { motion } from "framer-motion";
import "./ZaloRoadmap.css";

const roadmapData = [
  {
    id: "smart-reply",
    title: "Smart Reply Reminder",
    colorClass: "theme-blue",
    tracks: [
      {
        name: "A. Re-notify",
        m1: ["Xác định trigger logic", "Internal testing"],
        m2: ["A/B test 10–20% mobile"],
        m3: ["Expand 50%+ (nếu đạt)", "Tune threshold"],
      },
      {
        name: "B. Reply Later",
        m1: ["Map flow & BA logic"],
        m2: ["Build + internal testing"],
        m3: ["Beta opt-in"],
      },
    ],
  },
  {
    id: "focus-mode",
    title: "Focus Mode",
    colorClass: "theme-coral",
    tracks: [
      {
        name: "",
        m1: ["Wireframe / define UX"],
        m2: ["Build MVP"],
        m3: ["Start mobile A/B test"],
      },
    ],
  },
  {
    id: "smart-org",
    title: "Smart Conv. Org",
    colorClass: "theme-teal",
    tracks: [
      {
        name: "",
        m1: ["Design banner / onboarding", "Ship quick win"],
        m2: ["Measure banner performance"],
        m3: ["Iterate copy if needed"],
      },
    ],
  },
];

export default function ZaloRoadmap() {
  return (
    <div className="roadmap-section" id="roadmap">
      <div className="roadmap-header">
        <h3>Roadmap 3 Tháng</h3>
        <p>Từ Validate Idea đến Launch & Iterate</p>
      </div>

      <div className="gantt-container">
        {/* HEADER: TIMELINE */}
        <div className="gantt-timeline-header">
          <div className="gantt-corner"></div>
          <div className="gantt-month">
            <strong>Tháng 1</strong>
            <span>Validate & Build</span>
          </div>
          <div className="gantt-month">
            <strong>Tháng 2</strong>
            <span>Launch & Measure</span>
          </div>
          <div className="gantt-month">
            <strong>Tháng 3</strong>
            <span>Iterate & Expand</span>
          </div>
        </div>

        {/* BODY: LANES & TASKS */}
        <div className="gantt-body">
          {roadmapData.map((category, catIndex) => (
            <motion.div
              className={`gantt-category-group ${category.colorClass}`}
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: catIndex * 0.15 }}
            >
              {/* Cột trái: Tên nhóm tính năng */}
              <div className="gantt-category-label">
                <span>{category.title}</span>
              </div>

              {/* Các Sub-tracks bên trong */}
              <div className="gantt-tracks-wrapper">
                {category.tracks.map((track, tIndex) => (
                  <div className="gantt-track-row" key={tIndex}>
                    {/* Sub-label (nếu có, VD: A. Re-notify) */}
                    <div className="track-sub-label">
                      {track.name && <span>{track.name}</span>}
                    </div>

                    {/* M1, M2, M3 Cells */}
                    <div className="track-cell">
                      <div className="task-bar m1-bar">
                        <ul>
                          {track.m1.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="track-cell">
                      <div className="task-bar m2-bar">
                        <ul>
                          {track.m2.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="track-cell">
                      <div className="task-bar m3-bar">
                        <ul>
                          {track.m3.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
