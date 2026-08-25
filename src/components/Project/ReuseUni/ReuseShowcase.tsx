import {
  Layers,
  Sparkles,
  Layout,
  Smartphone,
  GitPullRequest,
  Terminal,
  ExternalLink,
  FileText,
  FolderGit2,
} from "lucide-react";

import LeanCanvasReuseUni from "./LeanCanvas/LeanCanvasReuseUni";
import MVPReuseUni from "./MVPReuseUni/MVPReuseUni";
import flowImg from "../../../assets/userflow.png";
import screensOverviewImg from "../../../assets/figma-screens-overview.png";
import scrumImg from "../../../assets/scrum-board.png";
import testImg from "../../../assets/coverage.png";
import "./ReuseShowcase.css";

const exhibits = [
  {
    id: "strategy",
    tag: "Exhibit 01 • Business Strategy",
    icon: <Layers size={14} />,
    title: "Lean Canvas Framework",
    desc: "Target: Sinh viên KTX cần đồ cũ giá rẻ · Core Moat: Xác thực .edu.vn & pickup tại chỗ.",
    align: "align-left",
    isCanvas: true,
  },
  {
    id: "mvp-scoping",
    tag: "Exhibit 02 • Scope & Trade-offs",
    icon: <Sparkles size={14} />,
    title: "Core-Loop Scope & Trade-off Decisions",
    desc: "Phân bổ tính năng theo Impact/Effort: Giữ trọn vẹn luồng giao dịch cơ bản và cắt bỏ toàn bộ tính năng phụ để ra mắt sớm nhất.",
    align: "align-right",
    isMVP: true,
  },
  {
    id: "ux",
    tag: "Exhibit 03 • Product Flow",
    icon: <Layout size={14} />,
    title: "User Flow Optimization",
    desc: "Core Action: Luồng Đăng bán/Sửa/Xóa · Edge Case: Validation form & hạn chế drop-off.",
    align: "align-left",
    image: flowImg,
    alt: "User Flow Diagram",
    isCompactMedia: true,
  },
  {
    id: "prototype",
    tag: "Exhibit 04 • Hi-Fi Prototype & System",
    icon: <Smartphone size={14} />,
    title: "Complete Mobile Design System",
    desc: "Bao quát 30+ màn hình & 6 Flows nghiệp vụ: Xác thực .edu.vn, Quản lý kho tin đăng, Bộ lọc KTX và In-app Chat.",
    align: "align-right",
    image: screensOverviewImg,
    alt: "Overview toàn bộ màn hình thiết kế Figma của ReuseUni",
    figmaLink: "https://www.figma.com/proto/YOUR_PROTOTYPE_LINK", // Thay link Figma của bạn tại đây
  },
  {
    id: "scrum",
    tag: "Exhibit 05 • Agile Management",
    icon: <GitPullRequest size={14} />,
    title: "GitHub Scrum Board",
    desc: "Delivery: 3 Sprints rõ ràng · Prioritization: Gán nhãn P0→P3 & Estimate theo từng task.",
    align: "align-left",
    image: scrumImg,
    alt: "GitHub Projects Scrum Board",
  },
  {
    id: "qa",
    tag: "Exhibit 06 • Quality Assurance",
    icon: <Terminal size={14} />,
    title: "Jest Test Coverage",
    desc: "High Quality: 82.5% Line Coverage · Automation: 306/308 Unit Tests cho Auth, Chat & Store.",
    align: "align-right",
    image: testImg,
    alt: "Test Coverage Terminal",
    isTerminal: true,
  },
];

export default function ReuseUniShowcase() {
  return (
    <section className="gallery-showcase-section" id="reuseuni">
      <div className="section-head">
        <span className="pill-tag">PROJECT STORY • TECHNICAL PM</span>
        <h2>ReuseUni — KTX Marketplace</h2>
        <p className="one-liner">
          Hành trình từ mô hình hoá chiến lược đến định nghĩa MVP, thiết kế
          UI/UX &amp; kiểm thử
        </p>

        {/* THANH ACTION BAR: FULL REPORT & GITHUB LINK */}
        <div className="project-links-bar">
          <a
            href="https://drive.google.com/file/d/1vCoCGkduFmCh8rTPT2GtD6Y0qeeOVHhj/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="link-pill pdf-link"
          >
            <FileText size={15} />
            <span>Full Documentation (PDF)</span>
            <ExternalLink size={13} className="ext-icon" />
          </a>

          <a
            href="https://github.com/maycongabietgi"
            target="_blank"
            rel="noreferrer"
            className="link-pill gh-link"
          >
            <FolderGit2 size={15} />
            <span>GitHub Organization / Board</span>
            <ExternalLink size={13} className="ext-icon" />
          </a>
        </div>
      </div>

      <div className="gallery-track">
        {exhibits.map((item) => (
          <div className={`gallery-frame-row ${item.align}`} key={item.id}>
            <div
              className={`art-frame ${item.isCompactMedia ? "compact-frame" : ""}`}
            >
              {/* 1. Tag xanh trên đầu */}
              <div className="placard-tag">
                {item.icon}
                <span>{item.tag}</span>
              </div>

              {/* 2. Nội dung chính: Canvas / MVP Table / Ảnh */}
              <div
                className={`frame-canvas ${item.isTerminal ? "dark-theme" : ""} ${
                  item.isCompactMedia ? "flow-compact-canvas" : ""
                }`}
              >
                {item.isCanvas ? (
                  <LeanCanvasReuseUni className="gallery-canvas" />
                ) : item.isMVP ? (
                  <MVPReuseUni />
                ) : (
                  <img src={item.image} alt={item.alt} />
                )}
              </div>

              {/* 3. Tiêu đề, Link Prototype (nếu có) & Description */}
              <div className="frame-placard">
                <div className="placard-head">
                  <h3 className="placard-title">{item.title}</h3>
                  {item.figmaLink && (
                    <a
                      href={item.figmaLink}
                      target="_blank"
                      rel="noreferrer"
                      className="figma-live-btn"
                    >
                      <span>Trải nghiệm Prototype</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
                <p className="placard-desc">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
