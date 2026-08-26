import { Zap, SlidersHorizontal, Bell } from "lucide-react";
import { CommitLayout } from "./ZaloCaseStudy";
import ZaloRoadmap from "./ZaloRoadmap/ZaloRoadmap";
import loopDiagram from "../../../assets/loop_diagram.png"; 

export default function ShowcasePart2() {
  return (
    <>
      {/* ================= COMMIT 04: EMPATHIZE ================= */}
      <CommitLayout
        hash="#c93a15"
        cmd="empathize(pain)"
        tag="assignment 02 · critical thinking"
      >
        <h2>Reply Anxiety — Đối diện với nỗi đau của chính mình</h2>

        <div className="brief">
          <div className="row">
            <span className="label">ĐỀ BÀI 02</span>
            <span className="val">
              Chọn 1 trong 4 nhánh sản phẩm, chứng minh hiệu quả trong 3 tháng
              với nguồn lực giới hạn[cite: 3].
            </span>
          </div>
          <div className="row">
            <span className="label">GIẢI PHÁP</span>
            <span className="val">
              <b>Mindful Context Workspace</b> — Quản lý ngữ cảnh hội thoại,
              giảm quá tải thông báo[cite: 3].
            </span>
          </div>
        </div>

        {/* STORYTELLING: LÝ DO CHỌN NHÁNH CHAT & KHỞI NGUỒN TỪ NỖI ĐAU THẬT */}
        <p>
          Đứng trước 4 cánh cửa mở của Zalo, cám dỗ lớn nhất là lao vào làm
          Social hay Video vì chúng dễ tạo ra những ý tưởng hào nhoáng, dễ
          viral. Nhưng tư duy Product nhắc mình:{" "}
          <em>giá trị cốt lõi của Zalo nằm ở Chat</em>.
        </p>
        <p style={{ color: "var(--ink-soft)" }}>
          Thay vì tìm một tính năng "cool ngầu", mình nhìn lại trải nghiệm của
          chính bản thân và bạn bè xung quanh — những người trẻ vừa đi học, vừa
          đi làm, vừa gánh vác các nhóm dự án. Nỗi đau lớn nhất không phải là
          thiếu chỗ giải trí, mà là{" "}
          <strong>
            áp lực bị bủa vây giữa quá nhiều vai trò trong cùng một hòm thư
          </strong>
          .
        </p>

        {/* PERSONA CARD */}
        <div className="persona">
          <div className="persona-head">
            <span className="persona-badge">02 · NGƯỜI DÙNG MỤC TIÊU</span>
          </div>
          <div className="persona-title">The Context Switchers</div>
          <p className="persona-sub">
            Người trẻ phải liên tục chuyển đổi vai trò giữa học tập, công việc,
            gia đình mỗi ngày[cite: 3].
          </p>
          <div className="persona-chats">
            <span className="persona-chip">🏠 Gia đình</span>
            <span className="persona-chip">📚 Học tập</span>
            <span className="persona-chip">💼 Công việc</span>
            <span className="persona-chip">🎓 Thực tập</span>
          </div>
          <div className="persona-grid">
            <div className="persona-col">
              <span className="pc-label">HỌ LÀ</span>
              <ul>
                <li>Sinh viên năm cuối[cite: 3]</li>
                <li>Intern / Fresher[cite: 3]</li>
              </ul>
            </div>
            <div className="persona-col">
              <span className="pc-label">HỌ MUỐN</span>
              <ul>
                <li>Không bỏ sót việc quan trọng[cite: 3]</li>
                <li>Phản hồi đúng lúc[cite: 3]</li>
              </ul>
            </div>
            <div className="persona-col">
              <span className="pc-label">HỌ LO NGẠI</span>
              <ul>
                <li>Spam notification[cite: 3]</li>
                <li>Bị đánh giá thiếu trách nhiệm[cite: 3]</li>
              </ul>
            </div>
            <div className="persona-col">
              <span className="pc-label">HỌ KỲ VỌNG</span>
              <ul>
                <li>App nhắc nhẹ, đúng lúc[cite: 3]</li>
                <li>Không xâm phạm riêng tư[cite: 3]</li>
              </ul>
            </div>
          </div>
        </div>

        <p>
          Và hệ quả tâm lý lớn nhất của việc liên tục "nhảy ngữ cảnh" chính là{" "}
          <strong>Reply Anxiety</strong>: tin nhắn càng dồn ứ, người ta càng
          ngại mở ra, và sự trì hoãn bắt đầu trở thành gánh nặng tâm lý.
        </p>

        <div className="zalo-mock">
          <span className="badge">23</span> tin nhắn chưa đọc — nhìn vào là thấy
          mệt, và... né luôn[cite: 3].
        </div>

        {/* VÒNG LẶP HÌNH ẢNH */}
        <div className="loop-image-wrap">
          <img src={loopDiagram} alt="Vòng lặp tâm lý Reply Anxiety" />
        </div>
      </CommitLayout>

      {/* ================= COMMIT 05: PLAN ================= */}
      <CommitLayout
        type="mint"
        hash="#f3a021"
        cmd="plan(cut)"
        tag="3-month execution"
      >
        <h2>Nghệ thuật cắt gọt khi nguồn lực chỉ có 3 tháng</h2>

        <p>
          Khi nhìn ra bài toán Reply Anxiety, phản xạ tự nhiên của một người làm
          kỹ thuật là muốn "giải quyết triệt để": vẽ ra cả một hệ sinh thái đồ
          sộ gồm AI phân loại thông minh, bộ lọc Focus Mode phức tạp và hệ thống
          nhắc nhở đa tầng.
        </p>
        <p style={{ color: "var(--ink-soft)" }}>
          Nhưng đề bài đặt ra một ràng buộc ngặt nghèo:{" "}
          <strong>3 tháng với nguồn lực giới hạn</strong>. Nếu cố làm tất cả,
          sản phẩm sẽ không kịp hoàn thiện hoặc ra mắt dở dang. Lúc này, tư duy
          Product buộc mình phải tự phản biện:{" "}
          <em>
            "Đâu là đòn bẩy tạo tác động lớn nhất mà tốn ít chi phí nhất?"
          </em>
          .
        </p>

        <div className="diff">
          <div className="diff-row minus">
            <span className="sign">−</span>
            <span>
              build(fullEcosystem){" "}
              <span className="code-comment">
                // tham vọng ôm đồm nhưng bất khả thi trong 3 tháng
              </span>
            </span>
          </div>
          <div className="diff-row plus">
            <span className="sign">+</span>
            <span>
              bet(onePainPoint) + reuse(existing){" "}
              <span className="code-comment">
                // dùng ICE: đánh cược nỗi đau lớn nhất, tái sử dụng cái có sẵn
              </span>
            </span>
          </div>
        </div>

        <p style={{ margin: "18px 0 10px" }}>
          Sử dụng khung đánh giá{" "}
          <strong>ICE (Impact - Confidence - Ease)</strong>, mình dũng cảm chia
          nhỏ bài toán thành 3 nhóm hành động rõ ràng:
        </p>

        <div className="card-row">
          <div className="card blue">
            <span className="card-icon">
              <Zap size={16} />
            </span>
            <span className="card-title">#1 Smart Reply Reminder</span>
            <span className="card-tag">STRATEGIC BET</span>
            <p>
              Đặt cược lớn vào nỗi đau cốt lõi: nhắc nhẹ tin quan trọng bị trôi
              + nút "Reply Later" gỡ bỏ áp lực phải trả lời ngay.
            </p>
          </div>
          <div className="card green">
            <span className="card-icon">
              <SlidersHorizontal size={16} />
            </span>
            <span className="card-title">2. Conversation Organization</span>
            <span className="card-tag">QUICK WIN</span>
            <p>
              Tận dụng tính năng phân loại chat sẵn có từ Desktop đưa lên Mobile
              nhằm giải phóng hòm thư nhanh nhất với chi phí dev thấp.
            </p>
          </div>
          <div className="card red">
            <span className="card-icon">
              <Bell size={16} />
            </span>
            <span className="card-title">3. Focus Mode</span>
            <span className="card-tag">BETA LATER</span>
            <p>
              Chủ động lùi lại và chỉ thử nghiệm nội bộ, gom tin nhắn ồn ào vào
              bản tóm tắt định kỳ để tránh làm phức tạp hóa MVP ban đầu.
            </p>
          </div>
        </div>

        <div className="callout">
          <b>Guardrail Metric:</b> "Nếu người dùng thấy bị làm phiền hoặc tăng
          tỷ lệ tắt thông báo, sẵn sàng dừng rollout — dù tỷ lệ phản hồi tin
          nhắn có tăng."
        </div>

        <p className="wf-flow-lead" style={{ margin: "26px 0 14px" }}>
          Kế hoạch thực thi 3 tháng: Từ Validate ý tưởng đến Launch &amp; Đo
          lường
        </p>

        <div className="roadmap-wrapper-box">
          <ZaloRoadmap />
        </div>
      </CommitLayout>

      {/* ================= COMMIT 06: MERGE ================= */}
      <CommitLayout
        type="final"
        hash="#f1nal"
        cmd="merge(identity)"
        tag="điều đọng lại"
      >
        <h2>Định hình bản sắc Technical PM</h2>

        <p>
          Sau tất cả, điều đọng lại sâu nhất trong mình không nằm ở quy mô của
          giải pháp, mà ở những khoảng lặng rất nhỏ trong trải nghiệm — không
          chuông reo dồn dập, không rung bần bật, chỉ một dòng copy nhẹ nhàng
          'Sẵn sàng phản hồi chưa?' thay vì hối thúc.
        </p>

        <div className="diff">
          <div className="diff-row minus">
            <span className="sign">−</span>
            <span>
              canWeBuildThis(){" "}
              <span className="code-comment">
                // đánh giá xem công nghệ có làm được không
              </span>
            </span>
          </div>
          <div className="diff-row plus">
            <span className="sign">+</span>
            <span>
              howShouldItBeBuilt(){" "}
              <span className="code-comment">
                // quyết định nó nên được tạo ra như thế nào cho con người
              </span>
            </span>
          </div>
        </div>

        <blockquote className="pullquote">
          Kỹ thuật giỏi giúp mình biết một thứ có thể làm được. Chỉ tư duy
          product mới giúp mình quyết định nó nên được làm như thế nào.
        </blockquote>

        <p
          style={{
            textAlign: "center",
            color: "var(--ink-soft)",
            marginTop: "22px",
          }}
        >
          Vì với người dùng, không có chi tiết nào là nhỏ.
        </p>
      </CommitLayout>
    </>
  );
}