import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Footprints, MapPin } from "lucide-react";
import "./Experience.css";

// Mảng tọa độ chuẩn của bạn
const STAGE_OFFSETS = ["5%", "32%", "59%", "87%"];

const roadStages = [
  {
    index: 0,
    step: "01",
    km: "KM 0.0",
    tag: "GỐC RỄ TƯ DUY",
    title: "Những bài toán không có đáp án mẫu",
    lens: "Chuyên Toán • THPT Chuyên Quang Trung",
    shortDesc:
      "Những năm tháng học chuyên Toán rèn cho em thói quen không ngại bài toán khó. Khi đối mặt với sự mơ hồ, phản xạ đầu tiên là đào sâu tìm bản chất chứ không học vẹt công thức.",
    takeaway:
      "Tư duy gốc rễ: Luôn bóc tách vấn đề về những điều cơ bản nhất trước khi tìm lời giải.",
    side: "left",
  },
  {
    index: 1,
    step: "02",
    km: "KM 2.5",
    tag: "NỀN TẢNG KỸ THUẬT",
    title: "Làm chủ dòng code & Hệ thống",
    lens: "Computer Science • Bách Khoa HCMUT",
    shortDesc:
      "Những đêm debug đồ án lớn ở Bách Khoa cho em cái nhìn thực tế về cách phần mềm vận hành: code chạy được là một chuyện, hệ thống chịu tải tốt và dễ bảo trì hay không lại là chuyện khác.",
    takeaway:
      "Hiểu sâu về kỹ thuật để biết rõ giới hạn công nghệ và nói cùng ngôn ngữ với Dev.",
    side: "right",
  },
  {
    index: 2,
    step: "03",
    km: "KM 5.0",
    tag: "BƯỚC NGOẶT THỰC TẾ",
    title: "Khi tính năng tâm huyết bị ngó lơ",
    lens: "Mobile App • Interlink Labs",
    shortDesc:
      "Làm app thực tế, nhìn người dùng drop-off ở những tính năng mình mất cả tháng để viết code, em mới vỡ lẽ: Code xịn đến đâu mà giải sai nhu cầu thì sản phẩm vẫn bị bỏ xó.",
    takeaway:
      "Chuyển dịch tư duy: Đừng chỉ hỏi 'làm như thế nào', hãy luôn tự hỏi 'tại sao người ta phải dùng?'.",
    side: "left",
  },
  {
    index: 3,
    step: "04",
    km: "KM 10.0",
    tag: "ĐÍCH ĐẾN HIỆN TẠI",
    title: "Làm chủ sản phẩm từ đầu đến cuối",
    lens: "Product Management & AI",
    shortDesc:
      "Em kết hợp logic toán học, nền tảng kỹ thuật và làn sóng AI để nhận trọn trách nhiệm cho sản phẩm—từ lúc bóc tách ý tưởng sơ khai cho đến trải nghiệm cuối cùng trên tay người dùng.",
    takeaway:
      "Biến những công nghệ phức tạp thành trải nghiệm số đơn giản và tạo ra giá trị thật.",
    side: "right",
  },
];

export default function Experience() {
  const [visibleStages, setVisibleStages] = useState<number[]>([0]);

  const handleStageEnter = (index: number) => {
    setVisibleStages((prev) => Array.from(new Set([...prev, index])));
  };

  const handleStageLeave = (index: number) => {
    setVisibleStages((prev) => {
      const next = prev.filter((i) => i !== index);
      return next.length > 0 ? next : [index];
    });
  };

  // Luôn lấy trạm lớn nhất đang hiển thị
  const activeStage = visibleStages.length > 0 ? Math.max(...visibleStages) : 0;

  return (
    <section className="road-section" id="experience">
      <div className="road-ambient-glow" aria-hidden="true" />

      {/* Header */}
      <header className="road-header">
        <div className="road-badge">
          <Sparkles size={14} className="text-sky-500" />
          <span>THE PRODUCT ODYSSEY</span>
        </div>
        <h2>
          Con Đường Chuyển Dịch <br />
          <em>Từ Code sang Product</em>
        </h2>
        <p>
          Hành trình từng bước định hình bản năng sản phẩm qua 4 cột mốc đáng nhớ.
        </p>
      </header>

      {/* Sân khấu Roadmap */}
      <div className="road-stage-arena">
        {/* TRỤC ĐƯỜNG TRUNG TÂM */}
        <div className="road-track-wrapper">
          <svg
            className="road-svg-canvas"
            viewBox="0 0 100 1000"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="35%" stopColor="#6366f1" />
                <stop offset="70%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>

            <line
              x1="50"
              y1="0"
              x2="50"
              y2="1000"
              className="road-base-track"
            />
            <line x1="50" y1="0" x2="50" y2="1000" className="road-dash-line" />

            <motion.line
              x1="50"
              y1="0"
              x2="50"
              y2="1000"
              className="road-active-laser"
              animate={{ pathLength: (activeStage + 0.6) / roadStages.length }}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
            />
          </svg>

          {/* BƯỚC CHÂN DỪNG CHUẨN OFFSET */}
          <motion.div
            className="road-traveler-avatar"
            animate={{ top: STAGE_OFFSETS[activeStage] }}
            transition={{ type: "spring", stiffness: 65, damping: 18 }}
          >
            <div className="traveler-pulse" />
            <div className="traveler-core">
              <Footprints size={15} className="text-sky-500" />
            </div>
            <span className="traveler-tag">STATION 0{activeStage + 1}</span>
          </motion.div>
        </div>

        {/* DANH SÁCH 4 CHẶNG ĐƯỜNG */}
        <div className="road-milestones-container">
          {roadStages.map((stage) => {
            const isLeft = stage.side === "left";
            const isCurrentActive = activeStage === stage.index;

            return (
              <div
                key={stage.step}
                className={`road-milestone-row ${isLeft ? "row-left" : "row-right"}`}
              >
                {/* VẾ TRÁI */}
                <div className="road-col col-left">
                  {isLeft ? (
                    <motion.div
                      className={`road-station-card ${isCurrentActive ? "card-highlight" : ""}`}
                      initial={{ opacity: 0, x: -30, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      onViewportEnter={() => handleStageEnter(stage.index)}
                      onViewportLeave={() => handleStageLeave(stage.index)}
                      viewport={{ amount: 0.35 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                    >
                      <div className="card-top-bar">
                        <div className="card-badge-group">
                          <span className="stage-pill-tag">{stage.tag}</span>
                          <span className="stage-lens-tag">{stage.lens}</span>
                        </div>
                      </div>

                      <h3 className="stage-title">{stage.title}</h3>
                      <p className="stage-desc">{stage.shortDesc}</p>

                      <div className="stage-takeaway-simple">
                        <p className="takeaway-text">{stage.takeaway}</p>
                      </div>
                    </motion.div>
                  ) : (
                    /* BIỂN BÁO CÓ ANIMATION ĐỒNG BỘ */
                    <motion.div
                      className={`road-signpost signpost-left ${isCurrentActive ? "signpost-highlight" : ""}`}
                      initial={{ opacity: 0, x: -20, y: 15 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ amount: 0.35 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                    >
                      <div className="signpost-head">
                        <MapPin size={12} className="text-sky-500" />
                        <span>{stage.km}</span>
                      </div>
                      <div className="signpost-body">
                        <strong>STATION {stage.step}</strong>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* TIM ĐƯỜNG */}
                <div className="road-col col-center" />

                {/* VẾ PHẢI */}
                <div className="road-col col-right">
                  {!isLeft ? (
                    <motion.div
                      className={`road-station-card ${isCurrentActive ? "card-highlight" : ""}`}
                      initial={{ opacity: 0, x: 30, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      onViewportEnter={() => handleStageEnter(stage.index)}
                      onViewportLeave={() => handleStageLeave(stage.index)}
                      viewport={{ amount: 0.35 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                    >
                      <div className="card-top-bar">
                        <div className="card-badge-group">
                          <span className="stage-pill-tag">{stage.tag}</span>
                          <span className="stage-lens-tag">{stage.lens}</span>
                        </div>
                      </div>

                      <h3 className="stage-title">{stage.title}</h3>
                      <p className="stage-desc">{stage.shortDesc}</p>

                      <div className="stage-takeaway-simple">
                        <p className="takeaway-text">{stage.takeaway}</p>
                      </div>
                    </motion.div>
                  ) : (
                    /* BIỂN BÁO CÓ ANIMATION ĐỒNG BỘ */
                    <motion.div
                      className={`road-signpost signpost-right ${isCurrentActive ? "signpost-highlight" : ""}`}
                      initial={{ opacity: 0, x: 20, y: 15 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ amount: 0.35 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                    >
                      <div className="signpost-head">
                        <MapPin size={12} className="text-sky-500" />
                        <span>{stage.km}</span>
                      </div>
                      <div className="signpost-body">
                        <strong>STATION {stage.step}</strong>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
