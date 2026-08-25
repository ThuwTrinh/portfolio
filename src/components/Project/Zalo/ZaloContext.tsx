import { motion } from "framer-motion";
import zaloLogo from "../../../assets/zalo.png";

export default function ZaloContext() {
  return (
    <motion.div
      className="zalo-story-flow"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="flow-step-divider">
        <span className="step-track-line" />
        <div className="step-pill">The Product Landscape</div>
        <span className="step-track-line" />
      </div>

      <div className="flow-intro-hook">
        <h3>The Canvas: Understanding Zalo</h3>
        <p>Bối cảnh thực tế và bài toán cốt lõi của siêu ứng dụng quốc dân.</p>
      </div>

      <div className="zalo-context-split-card">
        {/* CỘT TRÁI: ECOSYSTEM STATS & MOAT */}
        <div className="context-left-identity">
          <div className="zalo-brand-badge">
            <img
              src={
                zaloLogo ||
                "https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
              }
              alt="Zalo Logo"
              className="zalo-logo-img"
            />
            <div className="brand-text-block">
              <span className="brand-name">Zalo Ecosystem</span>
              <span className="brand-tag">National Infrastructure</span>
            </div>
          </div>

          <div className="zalo-macro-stats">
            <div className="stat-pill">
              <strong>~80M</strong>
              <span>Active Users</span>
            </div>
            <div className="stat-pill">
              <strong>22%</strong>
              <span>Screen Time</span>
            </div>
            <div className="stat-pill">
              <strong>&gt;2.1B</strong>
              <span>Msg / Day</span>
            </div>
          </div>

          <p className="left-summary-note">
            <strong>Moat & Network Effect:</strong> Mạng lưới người dùng rộng
            tạo rào cản chuyển đổi (<strong>Switching Cost</strong>), định vị
            Zalo như hạ tầng liên lạc thiết yếu của người Việt.
          </p>
        </div>

        {/* CỘT PHẢI: MY PERSPECTIVE */}
        <div className="context-right-perspective">
          <span className="perspective-tag">
            My Perspective • The Product Tension
          </span>

          <div className="perspective-body">
            <p>
              <strong>Nghịch lý Attention:</strong> Phủ sóng toàn dân, nhưng
              hành vi chính là <em>"tiện ích giao dịch"</em> — nhắn rồi thoát.
              Mật độ hội thoại dày dễ tạo <strong>Friction</strong>, khiến người
              trẻ ngần ngại mở app.
            </p>

            <p>
              <strong>Góc nhìn PM Trainee:</strong> Bài toán là mở rộng trải
              nghiệm mà không phá vỡ sự riêng tư và thói quen cốt lõi của người
              dùng.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
