import React from "react";
import {
  ShieldCheck,
  PackagePlus,
  Filter,
  MessageSquare,
  SmartphoneNfc,
  XCircle,
  TrendingUp,
  Clock,
} from "lucide-react";
import "./MVPReuseUni.css";

interface MVPProps {
  className?: string;
}

export default function MVPReuseUni({ className = "" }: MVPProps) {
  return (
    <div className={`mvp-showcase-container ${className}`} id="mvp-definition">
      {/* 1. THANH CORE LOOP TIÊU ĐIỂM (ĐƯỢC ĐẨY LÊN ĐẦU LÀM KIM CHỈ NAM) */}
      <div className="mvp-loop-bar">
        <span className="loop-label">MVP CORE LOOP</span>
        <div className="loop-steps">
          <span>01. Verify SSO</span>
          <em>→</em>
          <span>02. List Item</span>
          <em>→</em>
          <span>03. Filter KTX</span>
          <em>→</em>
          <span>04. Chat Deal</span>
          <em>→</em>
          <span className="highlight">05. Meet & Pickup</span>
        </div>
      </div>

      {/* 2. MA TRẬN PHÂN LOẠI IMPACT - EFFORT & TRADE-OFF */}
      <div className="mvp-matrix-table-wrap">
        <table className="mvp-matrix-table">
          <thead>
            <tr>
              <th style={{ width: "26%" }}>Tính năng lõi</th>
              <th style={{ width: "16%" }}>Ưu tiên</th>
              <th style={{ width: "20%" }}>Impact vs Effort</th>
              <th style={{ width: "38%" }}>
                Quyết định Trade-off (Cắt giảm MVP)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="feature-name">
                  <ShieldCheck size={16} className="feat-icon" />
                  <strong>
                    SSO <code>.edu.vn</code>
                  </strong>
                </div>
              </td>
              <td>
                <span className="p-tag p0">P0 • Must-have</span>
              </td>
              <td>
                <div className="metric-eval">
                  <span className="impact high">
                    <TrendingUp size={12} /> High
                  </span>
                  <span className="effort low">
                    <Clock size={12} /> Low
                  </span>
                </div>
              </td>
              <td className="tradeoff-col">
                <span className="cut-item">
                  <XCircle size={13} /> Bỏ KYC CCCD / thẻ cứng
                </span>
                <span className="keep-reason">
                  → Dùng OAuth Google Edu có sẵn để launch nhanh.
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <div className="feature-name">
                  <PackagePlus size={16} className="feat-icon" />
                  <strong>Listing & Tag KTX</strong>
                </div>
              </td>
              <td>
                <span className="p-tag p0">P0 • Must-have</span>
              </td>
              <td>
                <div className="metric-eval">
                  <span className="impact high">
                    <TrendingUp size={12} /> High
                  </span>
                  <span className="effort med">
                    <Clock size={12} /> Med
                  </span>
                </div>
              </td>
              <td className="tradeoff-col">
                <span className="cut-item">
                  <XCircle size={13} /> Bỏ Video review & Đấu giá
                </span>
                <span className="keep-reason">
                  → Chỉ hỗ trợ 3 ảnh + nhãn Tòa KTX cụ thể.
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <div className="feature-name">
                  <Filter size={16} className="feat-icon" />
                  <strong>Hyper-local Filter</strong>
                </div>
              </td>
              <td>
                <span className="p-tag p0">P0 • Must-have</span>
              </td>
              <td>
                <div className="metric-eval">
                  <span className="impact high">
                    <TrendingUp size={12} /> High
                  </span>
                  <span className="effort low">
                    <Clock size={12} /> Low
                  </span>
                </div>
              </td>
              <td className="tradeoff-col">
                <span className="cut-item">
                  <XCircle size={13} /> Bỏ GPS Tracking / Bản đồ
                </span>
                <span className="keep-reason">
                  → Lọc dropdown tĩnh theo Cụm tòa/Khu A-B.
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <div className="feature-name">
                  <MessageSquare size={16} className="feat-icon" />
                  <strong>In-App Chat</strong>
                </div>
              </td>
              <td>
                <span className="p-tag p1">P1 • Core UX</span>
              </td>
              <td>
                <div className="metric-eval">
                  <span className="impact high">
                    <TrendingUp size={12} /> High
                  </span>
                  <span className="effort med">
                    <Clock size={12} /> Med
                  </span>
                </div>
              </td>
              <td className="tradeoff-col">
                <span className="cut-item">
                  <XCircle size={13} /> Bỏ Gọi thoại & Chốt đơn bot
                </span>
                <span className="keep-reason">
                  → Chat text đơn giản, người dùng tự hẹn gặp.
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <div className="feature-name">
                  <SmartphoneNfc size={16} className="feat-icon" />
                  <strong>Campus Feed UI</strong>
                </div>
              </td>
              <td>
                <span className="p-tag p1">P1 • Retention</span>
              </td>
              <td>
                <div className="metric-eval">
                  <span className="impact med">
                    <TrendingUp size={12} /> Med
                  </span>
                  <span className="effort low">
                    <Clock size={12} /> Low
                  </span>
                </div>
              </td>
              <td className="tradeoff-col">
                <span className="cut-item">
                  <XCircle size={13} /> Bỏ Social Feed & Comment
                </span>
                <span className="keep-reason">
                  → Feed dạng Grid 2 cột thuần sản phẩm.
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
