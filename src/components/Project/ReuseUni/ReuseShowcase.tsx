import { motion, type Variants } from "framer-motion";
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
  Ticket,
} from "lucide-react";

import LeanCanvasReuseUni from "./LeanCanvas/LeanCanvasReuseUni";
import MVPReuseUni from "./MVPReuseUni/MVPReuseUni";
import flowImg from "../../../assets/userflow.png";
import screensOverviewImg from "../../../assets/figma-screens-overview.png";
import scrumImg from "../../../assets/scrum-board.png";
import testImg from "../../../assets/coverage.png";
import "./ReuseShowcase.css";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const exhibits = [
  {
    id: "strategy",
    tag: "Exhibit 01 • Business Strategy & Moat",
    icon: <Layers size={14} />,
    title: "Bức Tranh 01 — Lean Canvas & Xác Lập Rào Cản Phòng Thủ (Moat)",
    desc: "Bóc tách không gian bài toán và khoảng trống thị trường; thiết lập lợi thế phòng thủ (Trust Moat) bằng cơ chế xác thực email .edu.vn và mô hình giao dịch siêu cục bộ tại KTX Làng Đại học với chi phí vận chuyển bằng 0.",
    align: "align-left",
    isCanvas: true,
  },
  {
    id: "mvp-scoping",
    tag: "Exhibit 02 • Scope & Trade-offs",
    icon: <Sparkles size={14} />,
    title: "Bức Tranh 02 — Định Nghĩa MVP & Quyết Định Trade-off",
    desc: "Cắt giảm 60% tính năng phụ qua ma trận Impact/Effort; cô đọng 5 tính năng cốt lõi (Core Loop) để xác thực giải pháp (Problem-Solution Fit) sau 2 tháng phát triển.",
    align: "align-right",
    isMVP: true,
  },
  {
    id: "ux",
    tag: "Exhibit 03 • Product Flow & Edge Cases",
    icon: <Layout size={14} />,
    title: "Bức Tranh 03 — Kiến Trúc Luồng Người Dùng (User Flows)",
    desc: "Trực tiếp thiết kế trọn bộ 5 luồng logic (Auth, Marketplace, Lọc KTX, Chat, Profile) và bao phủ triệt để các edge cases, đảm bảo hơn 90% sinh viên hoàn thành thao tác trơn tru ngay lần đầu.",
    align: "align-left",
    image: flowImg,
    alt: "User Flow Diagram",
    isCompactMedia: true,
    drawIOLink:
      "https://drive.google.com/file/d/1mcz3m8hW4O1EUFuDN8a3E2GBfzYDX5Nn/view?usp=sharing",
  },
  {
    id: "prototype",
    tag: "Exhibit 04 • Hi-Fi Prototype & System",
    icon: <Smartphone size={14} />,
    title: "Bức Tranh 04 — Hệ Thống Design System & Prototype Tương Tác",
    desc: "Tự tay xây dựng hệ sinh thái UI/UX theo chuẩn Mobile-First, tối ưu hóa hành trình đăng bài thanh lý chỉ trong 3 bước với điểm đánh giá độ trực quan > 4.0/5.0 từ đợt usability test thực tế.",
    align: "align-right",
    image: screensOverviewImg,
    alt: "Overview toàn bộ màn hình thiết kế Figma của ReuseUni",
    figmaLink:
      "https://www.figma.com/design/k5GiTmZeSafBUGYg4avD0Z/Mobile-App?node-id=0-1&t=k5S1mUk0NzNdVujD-1",
  },
  {
    id: "scrum",
    tag: "Exhibit 05 • Agile & Sprint Management",
    icon: <GitPullRequest size={14} />,
    title: "Bức Tranh 05 — Vận Hành Scrum & Điều Phối Thực Thi",
    desc: "Trực tiếp điều phối tiến độ phát triển qua GitHub Projects với 4 Sprints (2 tuần/sprint), phân loại thẻ công việc P0→P3 để kiểm soát technical debts và bàn giao 100% deliverables đúng cam kết.",
    align: "align-left",
    image: scrumImg,
    alt: "GitHub Projects Scrum Board",
  },
  {
    id: "qa",
    tag: "Exhibit 06 • Quality Assurance & Automation",
    icon: <Terminal size={14} />,
    title: "Bức Tranh 06 — Kiểm Thử Giao Diện & Test Automation",
    desc: "Thiết lập hàng rào kiểm thử tự động trên Jest; đạt 82.5% Line Coverage (306/308 tests pass) nhằm triệt tiêu rủi ro lỗi giao diện và đảm bảo sản phẩm vận hành ổn định khi đến tay người dùng.",
    align: "align-right", // <-- Đã bổ sung thuộc tính này để Bức tranh 06 lệch sang phải
    image: testImg,
    alt: "Test Coverage Terminal",
    isTerminal: true,
  },
];

export default function ReuseUniShowcase() {
  return (
    <section className="gallery-showcase-section" id="reuseuni">
      <div className="section-head">
        <span className="pill-tag">PROJECT CASE STUDY</span>
        <h2>ReuseUni — Sàn Trao Đổi Đồ KTX</h2>

        <p className="one-liner">
          Nền tảng thương mại điện tử siêu cục bộ (Hyperlocal C2C) dành riêng
          cho sinh viên Làng Đại học — Giải quyết bài toán lãng phí đồ đạc mỗi
          mùa tốt nghiệp và nỗi lo lừa đảo trên các hội nhóm mạng xã hội.
        </p>

        {/* NÚT TÀI LIỆU DỰ ÁN */}
        <div className="project-links-bar">
          <a
            href="https://drive.google.com/file/d/1vCoCGkduFmCh8rTPT2GtD6Y0qeeOVHhj/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="link-pill pdf-link"
          >
            <FileText size={15} />
            <span>Tài liệu chi tiết (PDF)</span>
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

        {/* CON DẤU SÁP NIÊM PHONG (EXHIBIT ENTRY) */}
        <motion.div
          className="gallery-seal-divider"
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="seal-line-top" />
          <div className="seal-badge">
            <Sparkles size={13} className="seal-icon" />
            <span>EXHIBIT ENTRY</span>
          </div>
          <div className="seal-line-bottom" />
        </motion.div>

        {/* THẺ VÉ THAM QUAN */}
        <motion.div
          className="art-ticket-wrapper"
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="art-ticket-card">
            <div className="ticket-stub">
              <div className="stub-header">
                <Ticket size={14} className="text-sky-500" />
                <span>GALLERY PASS</span>
              </div>
              <span className="stub-code">NO. 06-EXHIBITS</span>
            </div>

            <div className="ticket-tear-line" />

            <div className="ticket-body">
              <span className="ticket-tagline">CURATED JOURNEY</span>
              <p className="ticket-narrative">
                Chào mừng bạn đến với triển lãm{" "}
                <strong>6 bức tranh thực thi</strong> — nơi ghi lại từng nét vẽ
                định hình sản phẩm của mình trong vai trò{" "}
                <strong>Technical Product Owner</strong>, từ phác thảo ý tưởng
                đầu tiên cho đến độ hoàn thiện cuối cùng.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* DÒNG SCROLL TO EXPLORE */}
      <motion.div
        className="scroll-cue-wrapper"
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="scroll-side-cue">
          <span>SCROLL TO EXPLORE</span>
          <span className="side-cue-line" />
        </div>
      </motion.div>

      {/* TRACK 6 BỨC TRANH */}
      <div className="gallery-track">
        {exhibits.map((item) => (
          <div className={`gallery-frame-row ${item.align}`} key={item.id}>
            <motion.div
              className={`art-frame ${item.isCompactMedia ? "compact-frame" : ""}`}
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="placard-tag">
                {item.icon}
                <span>{item.tag}</span>
              </div>

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
                  {item.drawIOLink && (
                    <a
                      href={item.drawIOLink}
                      target="_blank"
                      rel="noreferrer"
                      className="figma-live-btn"
                    >
                      <span>Xem Flow Specs</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>

                <p className="placard-curator-note">
                  <strong>Ý đồ thực thi:</strong> {item.desc}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* KHU VỰC TỔNG KẾT KẾT QUẢ ĐẠT ĐƯỢC (POST-EXHIBIT IMPACT) */}
      <div className="outcomes-summary-section">
        {/* CON DẤU PHÂN CÁCH POST-EXHIBIT IMPACT */}
        <motion.div
          className="gallery-seal-divider"
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="seal-line-top" />
          <div className="seal-badge">
            <Sparkles size={13} className="seal-icon" />
            <span>POST-EXHIBIT IMPACT</span>
          </div>
          <div className="seal-line-bottom" />
        </motion.div>

        {/* TIÊU ĐỀ & LỜI DẪN STORYTELLING */}
        <motion.div
          className="outcomes-header"
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3>Trái Ngọt Sau Hành Trình Thực Chiến</h3>
          <p>
            Sau chu kỳ 4 Sprint đồng hành và thực chiến cùng đội ngũ, từ việc
            phác thảo những luồng sản phẩm (User Flows) đầu tiên cho đến khi
            kiểm thử hoàn thiện bản build trên Cloud, đây là những kết quả và
            thước đo thực tế mà ReuseUni đã xác lập.
          </p>
        </motion.div>

        {/* 3 THẺ METRICS GỌN GÀNG */}
        <div className="outcomes-cards-grid">
          {/* Cột 1: Hiệu năng */}
          <motion.div
            className="outcome-pillar-card pillar-sky"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="card-top-header">
              <div className="pillar-title-wrap">
                <span className="pillar-tag">PILLAR 01</span>
                <h4>Hiệu Năng & Vận Hành</h4>
              </div>
            </div>
            <ul className="pillar-list">
              <li>
                <strong>Độ trễ API:</strong> 115ms – 370ms.
              </li>
              <li>
                <strong>Chuyển màn hình:</strong> ~380ms (&lt; 1s tối ưu).
              </li>
            </ul>
          </motion.div>

          {/* Cột 2: Trải nghiệm người dùng */}
          <motion.div
            className="outcome-pillar-card pillar-emerald"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="card-top-header">
              <div className="pillar-title-wrap">
                <span className="pillar-tag">PILLAR 02</span>
                <h4>Trải Nghiệm Người Dùng</h4>
              </div>
            </div>
            <ul className="pillar-list">
              <li>
                <strong>Điểm trực quan:</strong> &gt; 4.0 / 5.0.
              </li>
              <li>
                <strong>Thao tác mượt mà:</strong> &gt; 90% (khó khăn &lt; 10%).
              </li>
              <li>
                <strong>Tương tác:</strong> 5–7 hành vi/phiên (Home → Cart).
              </li>
            </ul>
          </motion.div>

          {/* Cột 3: Khám phá & Roadmap */}
          <motion.div
            className="outcome-pillar-card pillar-amber"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="card-top-header">
              <div className="pillar-title-wrap">
                <span className="pillar-tag">PILLAR 03</span>
                <h4>Khám Phá & Roadmap</h4>
              </div>
            </div>
            <ul className="pillar-list">
              <li>
                <strong>Xác thực .edu.vn:</strong> 100% sinh viên tin tưởng.
              </li>
              <li>
                <strong>Ưu tiên tiếp theo (P1):</strong> 71.4% yêu cầu Đánh giá
                uy tín.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
