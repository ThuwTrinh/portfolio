import React from "react";
import {
  AlertCircle,
  Sparkles,
  Lightbulb,
  ShieldCheck,
  Users,
  Activity,
  Share2,
  Wallet,
  Layers,
} from "lucide-react";
import "./LeanCanvasReuseUni.css";

interface LeanCanvasProps {
  className?: string;
}

export default function LeanCanvasReuseUni({
  className = "",
}: LeanCanvasProps) {
  return (
    <div className={`lean-canvas-section ${className}`} id="lean-canvas">
      <div className="canvas-header">
        <span className="canvas-tag">STRATEGIC FRAMEWORK</span>
        <h3>Lean Canvas • ReuseUni</h3>
        <p>Mô hình hóa chiến lược sản phẩm tinh gọn</p>
      </div>

      <div className="lean-canvas-grid">
        {/* 1. PROBLEM */}
        <div className="canvas-block block-problem">
          <div className="block-title">
            <AlertCircle size={15} /> PROBLEM
          </div>
          <ul className="canvas-list">
            <li>Sinh viên ngân sách hạn hẹp, cần đồ cũ giá tốt.</li>
            <li>Đồ còn tốt bị vứt bỏ khi chuyển trọ / ra trường.</li>
            <li>Group MXH nhiều tin rác, lừa đảo, khó lọc khu vực.</li>
          </ul>
        </div>

        {/* 2. SOLUTION & KEY METRICS */}
        <div className="canvas-column-split">
          <div className="canvas-block block-solution">
            <div className="block-title">
              <Lightbulb size={15} /> SOLUTION
            </div>
            <ul className="canvas-list">
              <li>Sàn nội bộ làng đại học: Mua, Bán, Cho tặng, Swap.</li>
              <li>
                Xác thực 100% bằng email trường <code>.edu.vn</code>.
              </li>
              <li>Bộ lọc siêu cục bộ (theo KTX) & Chat in-app.</li>
            </ul>
          </div>

          <div className="canvas-block block-metrics">
            <div className="block-title">
              <Activity size={15} /> KEY METRICS
            </div>
            <ul className="canvas-list">
              <li>
                <strong>North Star:</strong> Số lượt swap/giao dịch mỗi tuần.
              </li>
              <li>
                <strong>Retention:</strong> Tỷ lệ giữ chân D7 / D30.
              </li>
              <li>
                <strong>Conversion:</strong> Listing-to-Transaction rate.
              </li>
            </ul>
          </div>
        </div>

        {/* 3. UNIQUE VALUE PROPOSITION */}
        <div className="canvas-block block-uvp">
          <div className="block-title highlight">
            <Sparkles size={15} /> UNIQUE VALUE PROPOSITION
          </div>
          <div className="uvp-statement">
            “Marketplace đồ cũ siêu cục bộ: Xác thực email trường, pickup an
            toàn trong 5 phút đi bộ.”
          </div>
          <div className="high-level-tag">
            <span>High-level Concept:</span>{" "}
            <strong>Chợ Tốt an toàn cho Campus</strong>
          </div>
        </div>

        {/* 4. UNFAIR ADVANTAGE & CHANNELS */}
        <div className="canvas-column-split">
          <div className="canvas-block block-advantage">
            <div className="block-title">
              <ShieldCheck size={15} /> UNFAIR ADVANTAGE
            </div>
            <ul className="canvas-list">
              <li>
                <strong>Trust Moat:</strong> Xác thực <code>.edu.vn</code> tạo
                lòng tin tuyệt đối mà các sàn lớn khó áp dụng.
              </li>
              <li>
                <strong>Hyperlocal Density:</strong> Mật độ giao dịch dày đặc
                trong bán kính KTX, pickup trực tiếp không cần ship.
              </li>
            </ul>
          </div>

          <div className="canvas-block block-channels">
            <div className="block-title">
              <Share2 size={15} /> CHANNELS
            </div>
            <ul className="canvas-list compact-channels">
              <li>
                <strong>Partnership:</strong> Ban KTX, Hội Sinh viên
              </li>
              <li>
                <strong>Events:</strong> Gian hàng Swap Day
              </li>
              <li>
                <strong>Organic:</strong> TikTok, Reels trường
              </li>
            </ul>
          </div>
        </div>

        {/* 5. CUSTOMER SEGMENTS */}
        <div className="canvas-block block-customers">
          <div className="block-title">
            <Users size={15} /> CUSTOMER SEGMENTS
          </div>
          <ul className="canvas-list">
            <li>Sinh viên sinh sống/học tập tại làng đại học.</li>
            <li>
              <strong>Sellers:</strong> Sinh viên dọn phòng / tốt nghiệp.
            </li>
            <li>
              <strong>Buyers:</strong> Tân sinh viên sắm đồ ban đầu.
            </li>
          </ul>
          <div className="early-adopters-pill">
            <strong>Early Adopters:</strong> CLB Tình nguyện, Hội SV.
          </div>
        </div>

        {/* 6. COST STRUCTURE */}
        <div className="canvas-block block-cost">
          <div className="block-title">
            <Layers size={15} /> COST STRUCTURE (MVP)
          </div>
          <div className="bottom-row-items">
            <span>• Chi phí dev nội bộ</span>
            <span>• Cloud Hosting (Free tier)</span>
            <span>• Chi phí vận hành booth offline</span>
          </div>
        </div>

        {/* 7. REVENUE STREAMS */}
        <div className="canvas-block block-revenue">
          <div className="block-title">
            <Wallet size={15} /> REVENUE STREAMS
          </div>
          <div className="bottom-row-items">
            <span>• Phí tin nổi bật (Promoted Ads)</span>
            <span>• Gói "Seller Pro" cho shop phụ kiện</span>
            <span>• Phí dịch vụ (2–5% in-app payment)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
