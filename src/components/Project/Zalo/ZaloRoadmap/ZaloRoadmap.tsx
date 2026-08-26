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
        m1: [
          "Xác định logic kích hoạt (Trigger Logic)",
          "Thử nghiệm nội bộ (Internal Test)",
        ],
        m2: ["Chạy thử nghiệm A/B test 10–20% user"],
        m3: [
          "Mở rộng Rollout 50%+ (nếu đạt chuẩn)",
          "Tinh chỉnh ngưỡng kích hoạt (Threshold)",
        ],
      },
      {
        name: "B. Reply Later",
        m1: ["Xây dựng luồng trải nghiệm & Logic nghiệp vụ"],
        m2: ["Phát triển tính năng & Test nội bộ"],
        m3: ["Mở thử nghiệm Beta cho người dùng"],
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
        m1: ["Thiết kế Wireframe & Định hình UX"],
        m2: ["Phát triển bản thử nghiệm (Build MVP)"],
        m3: ["Bắt đầu chạy thử nghiệm A/B trên mobile"],
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
        m1: [
          "Thiết kế banner hướng dẫn (Onboarding)",
          "Triển khai nhanh tính năng sẵn có (Quick Win)",
        ],
        m2: ["Đo lường hiệu quả tương tác banner"],
        m3: ["Tinh chỉnh lại câu chữ (Copywriting)"],
      },
    ],
  },
];

export default function ZaloRoadmap() {
  return (
    <div className="roadmap-section" id="roadmap">
      <div className="roadmap-header">
        <h3>Lộ Trình Thực Thi 3 Tháng</h3>
        <p>Từ Kiểm chứng Ý tưởng đến Phát hành &amp; Tối ưu</p>
      </div>

      <div className="gantt-container">
        {/* HEADER: TIMELINE */}
        <div className="gantt-timeline-header">
          <div className="gantt-corner"></div>
          <div className="gantt-month">
            <strong>Tháng 1</strong>
            <span>Kiểm chứng &amp; Xây dựng</span>
          </div>
          <div className="gantt-month">
            <strong>Tháng 2</strong>
            <span>Phát hành &amp; Đo lường</span>
          </div>
          <div className="gantt-month">
            <strong>Tháng 3</strong>
            <span>Tối ưu &amp; Mở rộng</span>
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
                    {/* Sub-label (A. Re-notify / B. Reply Later) */}
                    <div className="track-sub-label">
                      {track.name && <span>{track.name}</span>}
                    </div>

                    {/* Khối nhiệm vụ Tháng 1, 2, 3 */}
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
