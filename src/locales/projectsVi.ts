const projectsVi = {
  reuse: {
    tag: "PROJECT CASE STUDY",
    title: "ReuseUni — Sàn Trao Đổi Đồ KTX",
    intro:
      "Nền tảng thương mại điện tử siêu cục bộ (Hyperlocal C2C) dành riêng cho sinh viên Làng Đại học — Giải quyết bài toán lãng phí đồ đạc mỗi mùa tốt nghiệp và nỗi lo lừa đảo trên các hội nhóm mạng xã hội.",
    pdf: "Tài liệu chi tiết (PDF)",
    github: "GitHub Organization / Board",
    entry: "EXHIBIT ENTRY",
    galleryPass: "GALLERY PASS",
    exhibitCode: "NO. 06-EXHIBITS",
    curatedJourney: "CURATED JOURNEY",
    ticket:
      "Chào mừng bạn đến với triển lãm <0>6 bức tranh thực thi</0> — nơi ghi lại từng nét vẽ định hình sản phẩm của mình trong vai trò <1>Product Manager</1>, từ phác thảo ý tưởng đầu tiên cho đến độ hoàn thiện cuối cùng.",
    scroll: "SCROLL TO EXPLORE",
    prototype: "Trải nghiệm Prototype",
    flowSpecs: "Xem Flow Specs",
    execution: "Ý đồ thực thi:",
    impact: "POST-EXHIBIT IMPACT",
    outcomeTitle: "Trái Ngọt Sau Hành Trình Thực Chiến",
    outcomeIntro:
      "Sau chu kỳ 4 Sprint đồng hành và thực chiến cùng đội ngũ, từ việc phác thảo những luồng sản phẩm (User Flows) đầu tiên cho đến khi kiểm thử hoàn thiện bản build trên Cloud, đây là những kết quả và thước đo thực tế mà ReuseUni đã xác lập.",
    pillars: [
      "Hiệu Năng & Vận Hành",
      "Trải Nghiệm Người Dùng",
      "Khám Phá & Roadmap",
    ],
    exhibits: {
      strategy: {
        tag: "Exhibit 01 • Business Strategy & Moat",
        title: "Bức Tranh 01 — Lean Canvas & Xác Lập Rào Cản Phòng Thủ (Moat)",
        desc: "Bóc tách không gian bài toán và khoảng trống thị trường; thiết lập lợi thế phòng thủ (Trust Moat) bằng cơ chế xác thực email .edu.vn và mô hình giao dịch siêu cục bộ tại KTX Làng Đại học với chi phí vận chuyển bằng 0.",
        alt: "Khung chiến lược Lean Canvas",
      },
      mvp: {
        tag: "Exhibit 02 • Scope & Trade-offs",
        title: "Bức Tranh 02 — Định Nghĩa MVP & Quyết Định Trade-off",
        desc: "Cắt giảm 60% tính năng phụ qua ma trận Impact/Effort; cô đọng 5 tính năng cốt lõi (Core Loop) để xác thực giải pháp (Problem-Solution Fit) sau 2 tháng phát triển.",
        alt: "Ma trận phạm vi và trade-off MVP",
      },
      ux: {
        tag: "Exhibit 03 • Product Flow & Edge Cases",
        title: "Bức Tranh 03 — Kiến Trúc Luồng Người Dùng (User Flows)",
        desc: "Trực tiếp thiết kế trọn bộ 5 luồng logic (Auth, Marketplace, Lọc KTX, Chat, Profile) và bao phủ triệt để các edge cases, đảm bảo hơn 90% sinh viên hoàn thành thao tác trơn tru ngay lần đầu.",
        alt: "Sơ đồ User Flow",
      },
      prototype: {
        tag: "Exhibit 04 • Hi-Fi Prototype & System",
        title: "Bức Tranh 04 — Hệ Thống Design System & Prototype Tương Tác",
        desc: "Tự tay xây dựng hệ sinh thái UI/UX theo chuẩn Mobile-First, tối ưu hóa hành trình đăng bài thanh lý chỉ trong 3 bước với điểm đánh giá độ trực quan > 4.0/5.0 từ đợt usability test thực tế.",
        alt: "Tổng quan màn hình Figma của ReuseUni",
      },
      scrum: {
        tag: "Exhibit 05 • Agile & Sprint Management",
        title: "Bức Tranh 05 — Vận Hành Scrum & Điều Phối Thực Thi",
        desc: "Trực tiếp điều phối tiến độ phát triển qua GitHub Projects với 4 Sprints (2 tuần/sprint), phân loại thẻ công việc P0→P3 để kiểm soát technical debts và bàn giao 100% deliverables đúng cam kết.",
        alt: "GitHub Projects Scrum Board",
      },
      qa: {
        tag: "Exhibit 06 • Quality Assurance & Automation",
        title: "Bức Tranh 06 — Kiểm Thử Giao Diện & Test Automation",
        desc: "Thiết lập hàng rào kiểm thử tự động trên Jest; đạt 82.5% Line Coverage (306/308 tests pass) nhằm triệt tiêu rủi ro lỗi giao diện và đảm bảo sản phẩm vận hành ổn định khi đến tay người dùng.",
        alt: "Test Coverage Terminal",
      },
    },
    outcomes: {
      performance: "Hiệu Năng & Vận Hành",
      ux: "Trải Nghiệm Người Dùng",
      discovery: "Khám Phá & Roadmap",
      api: "Độ trễ API",
      screen: "Chuyển màn hình",
      visual: "Điểm trực quan",
      smooth: "Thao tác mượt mà",
      interactions: "Tương tác",
      verification: "Xác thực .edu.vn",
      next: "Ưu tiên tiếp theo (P1)",
      apiValue: "115ms – 370ms.",
      screenValue: "~380ms (< 1s tối ưu).",
      visualValue: "> 4.0 / 5.0.",
      smoothValue: "> 90% (khó khăn < 10%).",
      interactionsValue: "5–7 hành vi/phiên (Home → Cart).",
      verificationValue: "100% sinh viên tin tưởng.",
      nextValue: "71.4% yêu cầu Đánh giá uy tín.",
    },
  },
  lean: {
    tag: "STRATEGIC FRAMEWORK",
    title: "Lean Canvas • ReuseUni",
    subtitle: "Mô hình hóa chiến lược sản phẩm tinh gọn",
    problem: [
      "Sinh viên ngân sách hạn hẹp, cần đồ cũ giá tốt.",
      "Đồ còn tốt bị vứt bỏ khi chuyển trọ / ra trường.",
      "Group MXH nhiều tin rác, lừa đảo, khó lọc khu vực.",
    ],
    solution: [
      "Sàn nội bộ làng đại học: Mua, Bán, Cho tặng, Swap.",
      "Xác thực 100% bằng email trường .edu.vn.",
      "Bộ lọc siêu cục bộ (theo KTX) & Chat in-app.",
    ],
    uvp: "Marketplace đồ cũ siêu cục bộ: Xác thực email trường, pickup an toàn trong 5 phút đi bộ.",
    concept: "Chợ Tốt an toàn cho Campus",
    customerSegments: [
      "Sinh viên sinh sống/học tập tại làng đại học.",
      "Sinh viên dọn phòng / tốt nghiệp.",
      "Tân sinh viên sắm đồ ban đầu.",
    ],
    earlyAdopters: "<0>Early Adopters:</0> CLB Tình nguyện, Hội SV.",
    metrics: [
      "<0>North Star:</0> Số lượt swap/giao dịch mỗi tuần.",
      "<0>Retention:</0> Tỷ lệ giữ chân D7 / D30.",
      "<0>Conversion:</0> Listing-to-Transaction rate.",
    ],
    advantage: [
      "<0>Trust Moat:</0> Xác thực .edu.vn tạo lòng tin tuyệt đối mà các sàn lớn khó áp dụng.",
      "<0>Hyperlocal Density:</0> Mật độ giao dịch dày đặc trong bán kính KTX, pickup trực tiếp không cần ship.",
    ],
    channels: [
      "<0>Partnership:</0> Ban KTX, Hội Sinh viên",
      "<0>Events:</0> Gian hàng Swap Day",
      "<0>Organic:</0> TikTok, Reels trường",
    ],
    cost: [
      "<0>Internal development:</0> Chi phí dev nội bộ",
      "<0>Cloud Hosting:</0> Free tier",
      "<0>Offline booth operations:</0> Chi phí vận hành booth offline",
    ],
    revenue: [
      "<0>Promoted Ads:</0> Phí tin nổi bật",
      "<0>Seller Pro:</0> Gói cho shop phụ kiện",
      "<0>Service fee:</0> 2–5% in-app payment",
    ],
  },
  mvp: {
    loop: [
      "Verify SSO",
      "List Item",
      "Filter KTX",
      "Chat Deal",
      "Meet & Pickup",
    ],
    feature: "Tính năng lõi",
    priority: "Ưu tiên",
    impact: "Impact vs Effort",
    tradeoff: "Quyết định Trade-off (Cắt giảm MVP)",
  },
  roadmap: {
    title: "Lộ Trình Thực Thi 3 Tháng",
    subtitle: "Từ Kiểm chứng Ý tưởng đến Phát hành & Tối ưu",
    months: ["Tháng 1", "Tháng 2", "Tháng 3"],
    monthSubtitles: [
      "Kiểm chứng & Xây dựng",
      "Phát hành & Đo lường",
      "Tối ưu & Mở rộng",
    ],
    categories: {
      smartReply: {
        title: "Smart Reply Reminder",
        tracks: {
          reNotify: {
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
          replyLater: {
            name: "B. Reply Later",
            m1: ["Xây dựng luồng trải nghiệm & Logic nghiệp vụ"],
            m2: ["Phát triển tính năng & Test nội bộ"],
            m3: ["Mở thử nghiệm Beta cho người dùng"],
          },
        },
      },
      focusMode: {
        title: "Focus Mode",
        tracks: {
          main: {
            name: "",
            m1: ["Thiết kế Wireframe & Định hình UX"],
            m2: ["Phát triển bản thử nghiệm (Build MVP)"],
            m3: ["Bắt đầu chạy thử nghiệm A/B trên mobile"],
          },
        },
      },
      smartOrg: {
        title: "Smart Conv. Org",
        tracks: {
          main: {
            name: "",
            m1: [
              "Thiết kế banner hướng dẫn (Onboarding)",
              "Triển khai nhanh tính năng sẵn có (Quick Win)",
            ],
            m2: ["Đo lường hiệu quả tương tác banner"],
            m3: ["Tinh chỉnh lại câu chữ (Copywriting)"],
          },
        },
      },
    },
  },
  zalo: {
    eyebrow: "⑂ case study · zalo pmt 2026",
    title: "Bước ngoặt: khoảnh khắc mình tìm thấy tư duy Product",
    lede: "Từ một người quen nhìn thế giới qua dòng lệnh, đến lúc nhận ra: công nghệ chỉ có ý nghĩa khi tháo gỡ được một nỗi đau có thật.",
    video: "Xem video thuyết trình",
    assignment: "Tài liệu Assignment (PDF)",
    footer: "Case Study · Zalo Product Management Trainee 2026",
    part1: {
      commit1: {
        tag: "điểm chạm",
        title: "Khi 'chạy đúng' không còn là thước đo duy nhất",
        intro:
          "Xuất phát điểm là dân kỹ thuật, mình từng tin sản phẩm tốt đơn giản là code mượt, thuật toán tối ưu. Đúng — là đủ.",
        setup:
          "Hai bài toán Zalo PMT 2026 không hỏi hệ thống chạy đúng không, mà thử thách 2 tầng năng lực bổ trợ cho nhau:",
        assignment1: "Product Sense · Nhìn đúng vấn đề:",
        assignment1Body:
          "Nhạy bén quan sát hệ thống đang vận hành trơn tru để tìm ra khoảng trống trải nghiệm bị bỏ quên.",
        assignment2: "Critical Thinking & Creativity · Giải bài toán khả thi:",
        assignment2Body:
          "Tự dựng bối cảnh mới từ không gian mở, phản biện và cân nhắc trade-off để chứng minh hiệu quả trong 3 tháng.",
        realization: "Đó là lần đầu tiên mình nhận ra:",
        realizationStrong:
          "Tư duy kỹ thuật đi tìm lỗi sai trong hệ thống — còn tư duy product đi tìm khoảng trống trong trải nghiệm con người.",
        technicalComment: "// góc nhìn kỹ thuật: tối ưu để hệ thống chạy đúng",
        productComment:
          "// góc nhìn product: tháo gỡ nỗi đau thực tế của người dùng",
      },
      commit2: {
        tag: "assignment 01",
        title: "Đi tìm khoảng trống trong một hệ thống đã quá hoàn chỉnh",
        briefLabel: "ĐỀ BÀI 01",
        brief:
          "Quan sát các tính năng AI trong Zalo và đề xuất tối ưu hoặc tính năng mới.",
        intro:
          "Lần đầu đọc đề, mình khá... trống rỗng. Zalo đã quá trưởng thành — không có lỗi to nào để bắt bẻ. Cảm giác bị bỏ giữa một hệ thống hoàn chỉnh, chẳng biết bắt đầu từ đâu.",
        insight:
          "Thay vì săm soi một danh sách tính năng, mình chọn đi cùng hành trình thật của người dùng và tự hỏi: Có điều gì họ đang phải tự xoay xở mà lẽ ra sản phẩm có thể đỡ đần? Hóa ra, AI hỗ trợ rất mượt mà khi cuộc gọi đang diễn ra, nhưng khi vừa gác máy, trải nghiệm ấy cũng dừng lại và để người dùng tự nhớ, tự ghi chép.",
        voice: "Voice-to-text",
        subtitle: "Subtitle",
        translate: "Dịch tin",
        callout:
          "Hóa ra khoảng trống không nằm ở những phút giây trò chuyện, mà bắt đầu ngay khoảnh khắc tiếng 'tút' vừa dứt.",
      },
      commit3: {
        title: "Cân bằng giữa dữ liệu và niềm tin",
        promptLabel: "ĐỀ BÀI",
        prompt:
          "Đề xuất tính năng AI mới dựa trên hệ sinh thái AI có sẵn của Zalo.",
        solutionLabel: "GIẢI PHÁP",
        solution:
          "<0>AI Call Note</0> — tóm tắt cuộc gọi, gửi thẳng vào khung chat kèm nút đặt lịch 1-chạm.",
        intro:
          "Tìm ra khoảng trống là nửa dễ. Nửa khó là bài toán lòng tin: một AI can thiệp vào cuộc trò chuyện riêng tư chỉ có giá trị khi người dùng thực sự cảm thấy an tâm.",
        diffBefore: "// càng nhiều dữ liệu càng 'chuẩn'",
        diffAfter: "// niềm tin trước, tối ưu sau",
        setup:
          "Thay vì tối ưu độ 'xịn' của công nghệ bằng cách thu thập tối đa dữ liệu, mình đặt ra 3 ranh giới thiết kế để đặt sự riêng tư lên hàng đầu:",
        card1Title: "1. Từ chối Full Recording",
        card1Body:
          "Chỉ bóc tách text thời gian thực và hủy dữ liệu sau cuộc gọi, tuyệt đối không lưu file âm thanh để triệt tiêu nỗi sợ bị ghi âm lén.",
        card2Title: "2. Nguyên tắc 100% Consent",
        card2Body:
          'AI chỉ kích hoạt khi tất cả thành viên trong cuộc gọi bấm "Đồng ý" — xây dựng lòng tin trước khi tính đến adoption.',
        card3Title: "3. MVP Summary Card",
        card3Body:
          'Đóng gói ngắn gọn dưới dạng thẻ trong khung chat kèm nút "Đặt lịch ngay" điền sẵn thông tin, không bắt user mở app/tab phụ.',
        flowLead:
          "Toàn bộ nguyên tắc này được cụ thể hóa qua luồng trải nghiệm 4 bước:",
        step1Title: "Bật AI Call Note trong cuộc gọi",
        step1Body:
          "Người dùng chủ động bật tính năng trong giao diện cuộc gọi.",
        step1a: "Nút đặt cạnh các nút điều khiển cuộc gọi.",
        step1b: "Chỉ báo hiển thị khi AI đang hoạt động để đảm bảo minh bạch.",
        step2Title: "Các thành viên đồng ý",
        step2Body: "Tất cả thành viên xác nhận đồng ý sử dụng tính năng.",
        step2a:
          "Nếu có người từ chối hoặc không phản hồi sau 1 phút, tính năng không bắt đầu.",
        step3Title: "Summary Card trong khung chat",
        step3Body:
          "Sau khi cuộc gọi kết thúc, AI gửi Summary Card vào khung chat.",
        step3a: "Hiển thị tóm tắt và thông tin quan trọng được trích xuất.",
        step4Title: "User nhấn Đặt lịch ngay",
        step4Body: "Zalo tự động điền sẵn thông tin nhắc hẹn.",
        step4a: "Người dùng chỉ cần kiểm tra và bấm Lưu.",
        callout:
          'Bốn bước này không phải để "cho đẹp demo" — mỗi bước đều là một lần hỏi lại: liệu người dùng có đang cảm thấy an toàn ở bước này không?',
      },
      commit4: {
        title:
          "Một tính năng 'chạy được' chưa chắc là một tính năng 'đáng tin'",
        intro:
          "Thiết kế xong 4 bước là lúc phản xạ kỹ thuật trong mình muốn dừng lại — mọi thứ đã hoạt động đúng. Nhưng tư duy product hỏi tiếp một câu khó hơn: làm sao biết người dùng có thực sự tin và dùng lại tính năng này, hay chỉ bấm thử một lần rồi thôi?",
        northStar:
          "% người mở xem hoặc chỉnh sửa Note sau khi cuộc gọi kết thúc. Đây là North Star, không phải Adoption, vì mở lại xem mới chứng minh nội dung tóm tắt thực sự hữu ích.",
        adoption:
          "% cuộc gọi thoại có tất cả thành viên đồng ý bật AI Call Note.",
        conversion: "% bấm Đặt lịch ngay và lưu thành công vào Lịch Zalo.",
        guardrail:
          "Tỷ lệ từ chối bật tính năng hoặc gạt bỏ thông báo. Vượt ngưỡng này nghĩa là cơ chế xin quyền đang có vấn đề — dừng lại xem trước khi mở rộng.",
        callout:
          "Vì với một tính năng đụng vào lòng tin, con số quan trọng nhất không phải là bao nhiêu người bấm thử, mà là bao nhiêu người quay lại lần thứ hai.",
      },
    },
    part2: {
      commit5: {
        title: "Reply Anxiety — Đối diện với nỗi đau của chính mình",
        promptLabel: "ĐỀ BÀI 02",
        prompt:
          "Chọn 1 trong 4 nhánh sản phẩm, chứng minh hiệu quả trong 3 tháng với nguồn lực giới hạn.",
        solutionLabel: "GIẢI PHÁP",
        solution:
          "<0>Mindful Context Workspace</0> — Quản lý ngữ cảnh hội thoại, giảm quá tải thông báo.",
        intro:
          "Đứng trước 4 cánh cửa mở của Zalo, cám dỗ lớn nhất là lao vào làm Social hay Video vì chúng dễ tạo ra những ý tưởng hào nhoáng, dễ viral. Nhưng tư duy Product nhắc mình: giá trị cốt lõi của Zalo nằm ở Chat.",
        insightBefore:
          'Thay vì tìm một tính năng "cool ngầu", mình nhìn lại trải nghiệm của chính bản thân và bạn bè xung quanh — những người trẻ vừa đi học, vừa đi làm, vừa gánh vác các nhóm dự án. Nỗi đau lớn nhất không phải là thiếu chỗ giải trí, mà là',
        insightQuestion:
          "<0>áp lực bị bủa vây giữa quá nhiều vai trò trong cùng một hòm thư.</0>",
        insightAfter: "",
        personaBadge: "THE CONTEXT SWITCHERS",
        personaChats: [
          "🏠 Gia đình",
          "📚 Học tập",
          "💼 Công việc",
          "🎓 Thực tập",
        ],
        personaSub:
          "Người trẻ phải liên tục chuyển đổi vai trò giữa học tập, công việc, gia đình mỗi ngày.",
        personaLabels: ["HỌ LÀ", "HỌ MUỐN", "HỌ LO NGẠI", "HỌ KỲ VỌNG"],
        personaItems: [
          ["Sinh viên năm cuối", "Intern / Fresher"],
          ["Không bỏ sót việc quan trọng", "Phản hồi đúng lúc"],
          ["Spam notification", "Bị đánh giá thiếu trách nhiệm"],
          ["App nhắc nhẹ, đúng lúc", "Không xâm phạm riêng tư"],
        ],
        anxiety:
          "Và hệ quả tâm lý lớn nhất của việc liên tục nhảy ngữ cảnh chính là Reply Anxiety: tin nhắn càng dồn ứ, người ta càng ngại mở ra, và sự trì hoãn bắt đầu trở thành gánh nặng tâm lý.",
        unread: "tin nhắn chưa đọc — nhìn vào là thấy mệt, và... né luôn.",
      },
      commit6: {
        title: "Nghệ thuật cắt gọt khi nguồn lực chỉ có 3 tháng",
        intro:
          "Khi nhìn ra bài toán Reply Anxiety, phản xạ tự nhiên của một người làm kỹ thuật là muốn giải quyết triệt để: vẽ ra cả một hệ sinh thái đồ sộ gồm AI phân loại thông minh, bộ lọc Focus Mode phức tạp và hệ thống nhắc nhở đa tầng.",
        constraint:
          "Nhưng đề bài đặt ra một ràng buộc ngặt nghèo: 3 tháng với nguồn lực giới hạn. Nếu cố làm tất cả, sản phẩm sẽ không kịp hoàn thiện hoặc ra mắt dở dang. Lúc này, tư duy Product buộc mình phải tự phản biện: Đâu là đòn bẩy tạo tác động lớn nhất mà tốn ít chi phí nhất?.",
        lead: "Sử dụng khung đánh giá ICE (Impact - Confidence - Ease), mình dũng cảm chia nhỏ bài toán thành 3 nhóm hành động rõ ràng:",
        roadmapLead:
          "Kế hoạch thực thi 3 tháng: Từ Validate ý tưởng đến Launch & Đo lường.",
        callout:
          "Ba tháng không đủ để làm mọi thứ — nhưng đủ để chứng minh một điều: liệu cắt đúng chỗ có tạo ra khác biệt hay không.",
        cards: [
          {
            title: "#1 Smart Reply Reminder",
            tag: "STRATEGIC BET",
            body: 'Đặt cược lớn vào nỗi đau cốt lõi: nhắc nhẹ tin quan trọng bị trôi + nút "Reply Later" gỡ bỏ áp lực phải trả lời ngay.',
          },
          {
            title: "2. Conversation Organization",
            tag: "QUICK WIN",
            body: "Tận dụng tính năng phân loại chat sẵn có từ Desktop đưa lên Mobile, giải phóng hòm thư nhanh nhất với chi phí dev thấp.",
          },
          {
            title: "3. Focus Mode",
            tag: "BETA LATER",
            body: "Chủ động lùi lại, chỉ thử nghiệm nội bộ, gom tin nhắn ồn ào vào bản tóm tắt định kỳ để tránh làm phức tạp hóa MVP ban đầu.",
          },
        ],
      },
      commit7: {
        title: "Cắt gọn phạm vi không có nghĩa là hạ thấp mục tiêu",
        intro:
          "Chọn làm ít hơn dễ khiến người ta tự thỏa hiệp luôn với một mục tiêu khiêm tốn hơn. Nhưng nếu không có một con số duy nhất để đối chiếu, sẽ không bao giờ biết được liệu cách cắt ở commit trước có đúng hay không.",
        northStarLabel: "NORTH STAR",
        northStar:
          "trên các Hội thoại quan trọng (nhóm công việc, đối tác có trao đổi file/link hoặc cuộc gọi trước đó).",
        definitionLabel: 'ĐỊNH NGHĨA "HỘI THOẠI QUAN TRỌNG"',
        definition:
          "Thỏa ít nhất 1 trong 2 điều kiện: (1) thuộc thư mục người dùng tự gán nhãn Công việc/Gia đình/Khách hàng, hoặc (2) nằm trong top 15% hội thoại có tần suất tương tác cao nhất 30 ngày gần nhất.",
        benchmark:
          "Vì Zalo chưa có baseline nội bộ cho hành vi này, mình neo target vào benchmark ngành thay vì đoán số trên trời:",
        cards: [
          "Reply rate sau Gentle Reminder",
          "Retention Reply Later (D28)",
          "Adoption Focus Mode (D7)",
        ],
        cardBodies: [
          "Benchmark in-app reminder chỉ ~10% (Leanplum). Đặt cao gấp ~2x vì Zalo có captive audience và context cụ thể hơn một prompt chung chung.",
          "Benchmark utility feature ~20% (Mixpanel). Nhỉnh hơn vì giải quyết đúng pain point có tần suất xảy ra hàng ngày.",
          "Ngang benchmark ~5% DAU (Mixpanel) — đây là hành vi hoàn toàn mới, không kỳ vọng vượt chuẩn ngay ở tháng đầu.",
        ],
        callout:
          "Một target không dựa trên số liệu nào cả thì cũng chỉ là một lời hứa suông — số liệu ngành, dù không hoàn hảo, vẫn là điểm neo tốt hơn cảm tính.",
      },
      commit8: {
        title: "Rủi ro cần kiểm soát trước khi Rollout",
        intro:
          "Làm sản phẩm không chỉ là tối đa hóa chỉ số tăng trưởng, mà còn là bảo vệ trải nghiệm cốt lõi của người dùng không bị tổn hại:",
        risks: [
          {
            name: "1. Gây phiền (Spam Fatigue)",
            signal:
              "Dấu hiệu: Tần suất notification quá dày làm user bực mình.",
            control:
              "Giới hạn tối đa 1 nhắc nhở/ngày/hội thoại; tuyệt đối không gửi sau 22:00.",
          },
          {
            name: "2. Tăng áp lực (Anxiety)",
            signal: "Dấu hiệu: Cảm giác bị theo dõi và ép trả lời.",
            control:
              "Copywriting mềm mỏng, cung cấp 1-chạm tắt vĩnh viễn tính năng.",
          },
          {
            name: "3. Tóm tắt sai ngữ cảnh",
            signal: "Dấu hiệu: AI trích xuất nhầm từ các cuộc gọi tán gẫu.",
            control:
              "Chỉ kích hoạt khi phát hiện từ khóa hành động; luôn yêu cầu user duyệt trước khi lưu.",
          },
        ],
        guardrail:
          "<0>Guardrail Trigger:</0> Nếu tỷ lệ tắt thông báo (Opt-out Rate) > 25% hoặc điểm CSAT giảm quá 0.3 ở nhóm thử nghiệm, sẵn sàng dừng rollout để tối ưu hóa mô hình AI — dù tỷ lệ phản hồi tin nhắn có tăng.",
        callout:
          "Vì đôi khi, thứ khó đo nhất trong một sản phẩm lại chính là niềm tin — và nó chỉ mất, không dễ lấy lại.",
      },
      commit9: {
        tag: "điều đọng lại",
        title: "Định hình bản sắc Technical PM",
        intro:
          'Sau tất cả, điều đọng lại sâu nhất trong mình không nằm ở quy mô của giải pháp, mà ở những khoảng lặng rất nhỏ trong trải nghiệm — không chuông reo dồn dập, không rung bần bật, chỉ một dòng copy nhẹ nhàng <0>"Sẵn sàng phản hồi chưa?"</0> thay vì hối thúc.',
        technical: "// đánh giá xem công nghệ có làm được không",
        product: "// quyết định nó nên được tạo ra như thế nào cho con người",
        quote:
          "Kỹ thuật giỏi giúp mình biết một thứ có thể làm được. Chỉ tư duy product mới giúp mình quyết định nó nên được làm như thế nào.",
        closing: "Vì với người dùng, không có chi tiết nào là nhỏ.",
      },
    },
  },
};

export default projectsVi;
