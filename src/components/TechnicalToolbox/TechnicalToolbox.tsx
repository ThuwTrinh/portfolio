import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  CheckCircle2,
  ArrowUpRight,
  Code2,
  Database,
  Network,
} from "lucide-react";
import "./TechnicalToolbox.css";
import Sparkles from "../Sparkles";

import sspsUseCaseImg from "../../assets/ssps_usecase_diagram.png";
import sqlResultImg from "../../assets/restaurant_sql_revenue_result.png";
import erdDiagramImg from "../../assets/restaurant_erd_diagram.png";

interface SkillProof {
  id: string;
  category: string;
  title: string;
  project: string;
  projectUrl: string;
  artifactLabel: string;
  description: string;
  takeaway: string;
  image: string;
  icon: React.ReactNode;
}

const skillsList: SkillProof[] = [
  {
    id: "skill-prd",
    category: "Product Requirement",
    title: "Đặc tả PRD, User Stories & Kịch bản Use Case",
    project: "HCMUT_SSPS",
    projectUrl:
      "https://drive.google.com/file/d/1U-PeyDG1E-8cjje1H9uiDZ3M1eyCZt8Q/view?usp=sharing",
    artifactLabel: "Use Case Diagram",
    description:
      "Đặc tả trọn bộ tài liệu PRD, phân rã backlog thành các User Stories có tiêu chuẩn nghiệm thu (AC), và thiết kế kịch bản Use Case chi tiết giúp team dev nắm bắt chuẩn luồng nghiệp vụ.",
    takeaway:
      "Bảo đảm tính chặt chẽ về nghiệp vụ và đúng phạm vi trước khi bước vào giai đoạn code.",
    image: sspsUseCaseImg,
    icon: <Code2 size={15} />,
  },
  {
    id: "skill-sql",
    category: "Data Querying",
    title: "Truy vấn SQL & Bóc tách doanh thu",
    project: "Restaurant DB",
    projectUrl: "https://github.com/PTToNhu/Database-System-Assignment-2",
    artifactLabel: "SQL Query Results",
    description:
      "Tự viết các câu lệnh và thủ tục SQL để tính toán doanh thu theo chi nhánh, lọc các điểm bán đạt KPI phục vụ việc đánh giá hiệu quả kinh doanh.",
    takeaway:
      "Chủ động truy vấn và phân tích số liệu không phụ thuộc vào data team.",
    image: sqlResultImg,
    icon: <Database size={15} />,
  },
  {
    id: "skill-erd",
    category: "System Design",
    title: "Thiết kế mô hình dữ liệu & Logic nghiệp vụ",
    project: "Restaurant DB",
    projectUrl: "https://github.com/PTToNhu/Database-System-Assignment-2",
    artifactLabel: "E-ERD System Model",
    description:
      "Thiết kế sơ đồ quan hệ E-ERD, chuẩn hóa dữ liệu và xây dựng Trigger/Stored Procedure để tự động hóa toàn bộ logic: phân hạng thành viên, áp dụng ưu đãi và trừ kho nguyên liệu theo món ăn.",
    takeaway:
      "Tối ưu hóa tính toàn vẹn dữ liệu và thông suốt luồng xử lý backend.",
    image: erdDiagramImg,
    icon: <Network size={15} />,
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

export default function TechnicalToolbox() {
  return (
    <section
      className="toolbox-section"
      id="skills"
      aria-label="Skill Showcase"
    >
      <Sparkles count={8} />

      <div className="toolbox-container">
        {/* Header Block */}
        <motion.div
          className="toolbox-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="toolbox-tag">
            <span className="toolbox-tag-dot" />
            <span>SKILL SHOWCASE</span>
          </div>
          <h2>Năng Lực Bổ Trợ</h2>
          <p>
            Những kỹ năng thực chiến khác được kiểm chứng qua sản phẩm và công
            việc thực tế.
          </p>
        </motion.div>

        {/* Danh sách Skills: Mỗi Card tự canh Scroll riêng */}
        <div className="toolbox-list">
          {skillsList.map((skill) => (
            <motion.div
              key={skill.id}
              className="toolbox-item-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {/* CỘT TRÁI */}
              <div className="toolbox-content-col">
                <div className="toolbox-meta-row">
                  <span className="toolbox-category-pill">
                    {skill.icon}
                    {skill.category}
                  </span>

                  <a
                    href={skill.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="toolbox-source-project"
                  >
                    <span>{skill.project}</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>

                <h3 className="toolbox-item-title">{skill.title}</h3>
                <p className="toolbox-item-desc">{skill.description}</p>

                <div className="toolbox-takeaway-box">
                  <CheckCircle2 size={16} className="toolbox-takeaway-icon" />
                  <span>{skill.takeaway}</span>
                </div>
              </div>

              {/* CỘT PHẢI */}
              <div className="toolbox-preview-col">
                <div className="toolbox-preview-window">
                  <div className="toolbox-window-header">
                    <span className="toolbox-window-dot" />
                    <span className="toolbox-window-dot" />
                    <span className="toolbox-window-dot" />
                    <span className="toolbox-window-title">
                      {skill.artifactLabel}
                    </span>
                  </div>
                  <div className="toolbox-window-canvas">
                    <img src={skill.image} alt={skill.title} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
