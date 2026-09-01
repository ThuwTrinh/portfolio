import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  CheckCircle2,
  ArrowUpRight,
  Code2,
  Database,
  Network,
  LineChart,
} from "lucide-react";
import "./TechnicalToolbox.css";
import Sparkles from "../Sparkles";

import sspsUseCaseImg from "../../assets/ssps_usecase_diagram.png";
import sqlResultImg from "../../assets/restaurant_sql_revenue_result.png";
import erdDiagramImg from "../../assets/restaurant_erd_diagram.png";
import ga4AnalyticsImg from "../../assets/ga4_funnel_analytics.png";

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
    id: "skill-ga4",
    category: "Product & Data Analytics",
    title: "Phân tích Phễu Chuyển Đổi & Phát Hiện Bất Thường Dữ Liệu",
    project: "E-commerce Funnel (GA4)",
    projectUrl:
      "https://docs.google.com/document/d/18VIstypqma6MsIB18-lnOJ-fVFW1H-Px4uAQARu93qs/edit?usp=sharing",
    artifactLabel: "GA4 Funnel & User Journey",
    description:
      "Phân tích hành trình đặt hàng đa kênh, bóc tách điểm nghẽn Checkout trên Mobile (ma sát phí ship & thẻ tín dụng); đồng thời nhận diện và bóc tách ~40k phiên bot traffic bất thường để bảo vệ độ chuẩn xác của dữ liệu.",
    takeaway:
      "Định lượng ma sát trải nghiệm và đề xuất giải pháp tối ưu chuyển đổi dựa trên dữ liệu hành vi thực tế.",
    image: ga4AnalyticsImg,
    icon: <LineChart size={15} />,
  },
  {
    id: "skill-prd",
    category: "Product Requirement & Delivery",
    title: "Đặc tả PRD, User Stories & Kịch bản Use Case",
    project: "HCMUT_SSPS",
    projectUrl:
      "https://drive.google.com/file/d/1U-PeyDG1E-8cjje1H9uiDZ3M1eyCZt8Q/view?usp=sharing",
    artifactLabel: "Use Case & Flow Specs",
    description:
      "Chuyển hóa bài toán người dùng thành tài liệu PRD, phân rã backlog thành User Stories với tiêu chuẩn nghiệm thu (Acceptance Criteria) rõ ràng, làm cầu nối truyền đạt logic nghiệp vụ cho đội ngũ kỹ thuật.",
    takeaway:
      "Đảm bảo sự thấu hiểu đồng nhất giữa Business và Engineering trước khi bước vào giai đoạn phát triển.",
    image: sspsUseCaseImg,
    icon: <Code2 size={15} />,
  },
  {
    id: "skill-sql",
    category: "Business Intelligence & SQL",
    title: "Truy vấn Dữ liệu & Bóc tách Hiệu quả Kinh doanh",
    project: "Restaurant Management DB",
    projectUrl: "https://github.com/PTToNhu/Database-System-Assignment-2",
    artifactLabel: "SQL Query Metrics",
    description:
      "Chủ động xây dựng câu lệnh SQL đa bảng, trích xuất và đo lường doanh thu theo từng chi nhánh cùng các chỉ số KPI vận hành, phục vụ việc đánh giá hiệu suất kinh doanh độc lập.",
    takeaway:
      "Chủ động khai thác dữ liệu có cấu trúc để đưa ra các phân tích định lượng mà không phụ thuộc data team.",
    image: sqlResultImg,
    icon: <Database size={15} />,
  },
  {
    id: "skill-erd",
    category: "System & Logic Design",
    title: "Mô hình hóa Luồng Nghiệp vụ & Cơ sở Dữ liệu",
    project: "Restaurant Management DB",
    projectUrl: "https://github.com/PTToNhu/Database-System-Assignment-2",
    artifactLabel: "E-ERD Database Model",
    description:
      "Thiết kế sơ đồ quan hệ E-ERD chuẩn hóa và xây dựng quy tắc tự động hóa luồng nghiệp vụ (tính điểm thành viên, áp dụng khuyến mãi, cập nhật tồn kho) nhằm đảm bảo tính toàn vẹn hệ thống.",
    takeaway:
      "Thấu hiểu kiến trúc dữ liệu nền tảng để phối hợp trơn tru cùng đội ngũ Backend và Solution Architect.",
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

        {/* Danh sách Skills */}
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
