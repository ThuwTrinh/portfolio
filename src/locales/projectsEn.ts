const projectsEn = {
  reuse: {
    tag: "PROJECT CASE STUDY",
    title: "ReuseUni — Campus Exchange Marketplace",
    intro:
      "A hyperlocal C2C marketplace for university village students, solving graduation-season waste and trust issues in social groups.",
    pdf: "Detailed document (PDF)",
    github: "GitHub Organization / Board",
    entry: "EXHIBIT ENTRY",
    galleryPass: "GALLERY PASS",
    exhibitCode: "NO. 06-EXHIBITS",
    curatedJourney: "CURATED JOURNEY",
    ticket:
      "Welcome to an exhibition of <0>six execution frames</0>, capturing how I shaped a product as a <1>Product Manager</1> from the first sketch to the final build.",
    scroll: "SCROLL TO EXPLORE",
    prototype: "Try the prototype",
    flowSpecs: "View flow specs",
    execution: "Execution intent:",
    impact: "POST-EXHIBIT IMPACT",
    outcomeTitle: "The Outcome of Hands-on Work",
    outcomeIntro:
      "After four sprints of working alongside the team, from the first user flows to testing the completed cloud build, these are the practical outcomes and measures ReuseUni established.",
    pillars: [
      "Performance & Operations",
      "User Experience",
      "Discovery & Roadmap",
    ],
    exhibits: {
      strategy: {
        tag: "Exhibit 01 • Business Strategy & Moat",
        title: "Exhibit 01 — Lean Canvas & Building a Defensible Moat",
        desc: "Mapped the problem space and market gap; built a Trust Moat through .edu.vn email verification and a hyperlocal marketplace in the university dorms with zero delivery cost.",
        alt: "Lean Canvas strategy framework",
      },
      mvp: {
        tag: "Exhibit 02 • Scope & Trade-offs",
        title: "Exhibit 02 — Defining the MVP & Making Trade-offs",
        desc: "Cut 60% of secondary features through an Impact/Effort matrix and focused on five core-loop features to validate problem-solution fit after two months.",
        alt: "MVP scope and trade-off matrix",
      },
      ux: {
        tag: "Exhibit 03 • Product Flow & Edge Cases",
        title: "Exhibit 03 — User Flow Architecture",
        desc: "Designed five complete logic flows (Auth, Marketplace, Dorm Filters, Chat and Profile) and covered edge cases so over 90% of students could complete the task smoothly on the first try.",
        alt: "User Flow Diagram",
      },
      prototype: {
        tag: "Exhibit 04 • Hi-Fi Prototype & System",
        title: "Exhibit 04 — Design System & Interactive Prototype",
        desc: "Built a Mobile-First UI/UX system and reduced the clearance-listing journey to three steps, reaching a usability score above 4.0/5.0.",
        alt: "Overview of ReuseUni Figma screens",
      },
      scrum: {
        tag: "Exhibit 05 • Agile & Sprint Management",
        title: "Exhibit 05 — Scrum Operations & Delivery Coordination",
        desc: "Coordinated delivery through GitHub Projects across four two-week sprints, prioritized P0→P3 work to control technical debt and delivered 100% of committed scope.",
        alt: "GitHub Projects Scrum Board",
      },
      qa: {
        tag: "Exhibit 06 • Quality Assurance & Automation",
        title: "Exhibit 06 — UI Testing & Test Automation",
        desc: "Built a Jest automation safety net and reached 82.5% line coverage (306/308 tests passing), reducing UI regression risk and keeping the product stable for users.",
        alt: "Test Coverage Terminal",
      },
    },
    outcomes: {
      performance: "Performance & Operations",
      ux: "User Experience",
      discovery: "Discovery & Roadmap",
      api: "API latency",
      screen: "Screen transition",
      visual: "Usability score",
      smooth: "Smooth completion",
      interactions: "Interactions",
      verification: "Verified .edu.vn",
      next: "Next priority (P1)",
      apiValue: "115ms – 370ms.",
      screenValue: "~380ms (< 1s optimized).",
      visualValue: "> 4.0 / 5.0.",
      smoothValue: "> 90% (difficulty < 10%).",
      interactionsValue: "5–7 actions/session (Home → Cart).",
      verificationValue: "100% student trust.",
      nextValue: "71.4% requested a trust rating.",
    },
  },

  lean: {
    tag: "STRATEGIC FRAMEWORK",
    title: "Lean Canvas • ReuseUni",
    subtitle: "A lean product strategy model",
    problem: [
      "Students have limited budgets and need affordable second-hand goods.",
      "Usable items are discarded when students move or graduate.",
      "Social groups contain spam and scams with weak location filtering.",
    ],
    solution: [
      "Campus marketplace: buy, sell, give away or swap.",
      "100% verification through university .edu.vn email.",
      "Hyperlocal dorm filters and in-app chat.",
    ],
    uvp: "A hyperlocal second-hand marketplace: verified campus email and safe pickup within a five-minute walk.",
    concept: "A safer Chotot for campus",
    customerSegments: [
      "Students living or studying in the university village.",
      "Students moving out or graduating.",
      "Freshmen furnishing their first room.",
    ],
    earlyAdopters:
      "<0>Early Adopters:</0> Volunteer clubs and student associations.",
    metrics: [
      "<0>North Star:</0> weekly swaps or transactions.",
      "<0>Retention:</0> D7 / D30 retention rate.",
      "<0>Conversion:</0> listing-to-transaction rate.",
    ],
    advantage: [
      "<0>Trust Moat:</0> .edu.vn verification creates trust that large marketplaces struggle to replicate.",
      "<0>Hyperlocal Density:</0> dense dorm-radius transactions enable direct pickup without shipping.",
    ],
    channels: [
      "<0>Partnership:</0> dorm management and student associations",
      "<0>Events:</0> Swap Day booths",
      "<0>Organic:</0> campus TikTok and Reels",
    ],
    cost: [
      "<0>Internal development:</0> internal development cost",
      "<0>Cloud Hosting:</0> free tier",
      "<0>Offline booth operations:</0> offline booth operations",
    ],
    revenue: [
      "<0>Promoted Ads:</0> promoted listing fees",
      "<0>Seller Pro:</0> packages for accessory shops",
      "<0>Service fee:</0> 2–5% in-app payment",
    ],
  },

  mvp: {
    loop: [
      "Verify SSO",
      "List Item",
      "Filter Dorm",
      "Chat Deal",
      "Meet & Pickup",
    ],
    feature: "Core feature",
    priority: "Priority",
    impact: "Impact vs Effort",
    tradeoff: "MVP trade-off decision",
  },

  roadmap: {
    title: "Three-Month Execution Roadmap",
    subtitle: "From Idea Validation to Release & Optimization",
    months: ["Month 1", "Month 2", "Month 3"],
    monthSubtitles: [
      "Validate & Build",
      "Release & Measure",
      "Optimize & Scale",
    ],
    categories: {
      smartReply: {
        title: "Smart Reply Reminder",
        tracks: {
          reNotify: {
            name: "A. Re-notify",
            m1: ["Define trigger logic", "Internal testing"],
            m2: ["Run A/B test with 10–20% of users"],
            m3: [
              "Roll out to 50%+ if quality criteria are met",
              "Tune the trigger threshold",
            ],
          },
          replyLater: {
            name: "B. Reply Later",
            m1: ["Build the experience flow and business logic"],
            m2: ["Develop the feature and run internal tests"],
            m3: ["Open a beta experiment to users"],
          },
        },
      },

      focusMode: {
        title: "Focus Mode",
        tracks: {
          main: {
            name: "",
            m1: ["Design wireframes and shape the UX"],
            m2: ["Build the MVP experiment"],
            m3: ["Start mobile A/B testing"],
          },
        },
      },

      smartOrg: {
        title: "Smart Conv. Org",
        tracks: {
          main: {
            name: "",
            m1: [
              "Design onboarding guidance banners",
              "Ship an existing feature as a quick win",
            ],
            m2: ["Measure banner interaction effectiveness"],
            m3: ["Refine the copywriting"],
          },
        },
      },
    },
  },

  zalo: {
    eyebrow: "⑂ case study · zalo pmt 2026",
    title: "The turning point: finding my Product mindset",
    lede: "From seeing the world through code to realizing that technology only matters when it removes a real pain point.",
    video: "Watch presentation",
    assignment: "Assignment document (PDF)",
    footer: "Case Study · Zalo Product Management Trainee 2026",

    part1: {
      commit1: {
        tag: "touchpoint",
        title: "When 'working correctly' is no longer the only measure",
        intro:
          "Coming from an engineering background, I used to believe a good product simply meant smooth code and optimized algorithms. Correct meant enough.",
        setup:
          "The two Zalo PMT 2026 problems did not ask whether the system worked. They tested two complementary layers of capability:",
        assignment1: "Product Sense · Seeing the right problem:",
        assignment1Body:
          "Sharply observing a smoothly operating system to find an overlooked experience gap.",
        assignment2:
          "Critical Thinking & Creativity · Solving a feasible problem:",
        assignment2Body:
          "Building a new context from an open space, challenging assumptions and weighing trade-offs to prove impact in three months.",
        realization: "That was the first time I realized:",
        realizationStrong:
          "Engineering thinking looks for errors in systems — product thinking looks for gaps in human experience.",
        technicalComment: "// engineering view: optimize for a correct system",
        productComment: "// product view: remove a real user pain point",
      },

      commit2: {
        tag: "assignment 01",
        title: "Finding a gap in a system that already feels complete",
        briefLabel: "ASSIGNMENT 01",
        brief:
          "Observe Zalo's AI features and propose an optimization or a new feature.",
        intro:
          "When I first read the prompt, I felt... blank. Zalo was already mature, with no obvious flaw to point at. I felt dropped into a complete system without knowing where to begin.",
        insight:
          "Instead of inspecting a feature list, I followed the user's real journey and asked: Is there something they are still handling alone that the product could make easier? It turned out AI supported the conversation smoothly, but the experience stopped the moment the call ended, leaving users to remember and take notes themselves.",
        voice: "Voice-to-text",
        subtitle: "Subtitle",
        translate: "Translate message",
        callout:
          "The gap was not in the minutes of conversation. It began the moment the beep ended.",
      },

      commit3: {
        title: "Balancing data and trust",
        promptLabel: "PROMPT",
        prompt:
          "Propose a new AI feature based on Zalo's existing AI ecosystem.",
        solutionLabel: "SOLUTION",
        solution:
          "<0>AI Call Note</0> — summarize calls, send the result directly into chat and include a one-tap scheduling action.",
        intro:
          "Finding the gap was the easy half. The harder half was trust: an AI that enters a private conversation only creates value when people genuinely feel safe.",
        diffBefore: "// more data means a more accurate result",
        diffAfter: "// trust first, optimization second",
        setup:
          "Instead of maximizing the technology's sophistication by collecting as much data as possible, I set three design boundaries to put privacy first:",
        card1Title: "1. Reject full recording",
        card1Body:
          "Extract real-time text only and discard it after the call. Never store audio, removing the fear of being recorded without consent.",
        card2Title: "2. 100% consent principle",
        card2Body:
          "AI activates only when every participant taps Agree, building trust before thinking about adoption.",
        card3Title: "3. MVP summary card",
        card3Body:
          "Package the summary as a compact chat card with a pre-filled Book now action, without forcing users into another app or tab.",
        flowLead: "These principles became a four-step experience flow:",
        step1Title: "Enable AI Call Note during the call",
        step1Body:
          "The user actively enables the feature from the call interface.",
        step1a: "The button sits alongside the call controls.",
        step1b:
          "An indicator stays visible while AI is active for transparency.",
        step2Title: "Participants give consent",
        step2Body: "Every participant confirms they agree to use the feature.",
        step2a:
          "If anyone declines or does not respond within one minute, the feature does not start.",
        step3Title: "Summary card in chat",
        step3Body:
          "After the call ends, AI sends a summary card into the chat.",
        step3a:
          "The card shows the extracted summary and important information.",
        step4Title: "The user taps Book now",
        step4Body: "Zalo pre-fills the reminder details automatically.",
        step4a: "The user only needs to review and tap Save.",
        callout:
          "These four steps are not there to make a pretty demo. Each one asks again: does the user feel safe at this point?",
      },

      commit4: {
        title: "A feature that works is not necessarily a feature people trust",
        intro:
          "After designing the four steps, my engineering instinct wanted to stop — everything worked correctly. But product thinking asks a harder question: how do we know people genuinely trust and reuse the feature instead of trying it once and leaving?",
        northStar:
          "% of people who open or edit the Note after the call. This is the North Star, not Adoption: reopening it proves the summary is genuinely useful.",
        adoption:
          "% of voice calls where every participant agrees to enable AI Call Note.",
        conversion:
          "% of users who tap Book now and successfully save it to Zalo Calendar.",
        guardrail:
          "The rate of users declining the feature or dismissing the notification. Crossing this threshold means the consent mechanism needs review before expansion.",
        callout:
          "For a feature that touches trust, the most important number is not how many people try it, but how many come back a second time.",
      },
    },

    part2: {
      commit5: {
        title: "Reply Anxiety — facing a pain I know myself",
        promptLabel: "ASSIGNMENT 02",
        prompt:
          "Choose one of four product branches and prove its impact in three months with limited resources.",
        solutionLabel: "SOLUTION",
        solution:
          "<0>Mindful Context Workspace</0> — manage conversation context and reduce notification overload.",
        intro:
          "Standing before four open doors at Zalo, the strongest temptation was to build Social or Video because they invite flashy, viral ideas. But product thinking reminded me: Zalo's core value lives in Chat.",
        insightBefore:
          'Instead of looking for a "cool" feature to build, I looked back at my own experiences and those of the friends around me — young people who are studying, working, and taking on the responsibilities of project teams all at once. The biggest pain point wasn’t the lack of ways to have fun, but the',
        insightQuestion:
          "<0>pressure of being pulled in too many directions, with too many roles packed into the same inbox.</0>",
        insightAfter: "",
        personaBadge: "THE CONTEXT SWITCHERS",
        personaChats: ["🏠 Family", "📚 Study", "💼 Work", "🎓 Internship"],
        personaSub:
          "Young people constantly switch between study, work and family every day.",
        personaLabels: [
          "WHO THEY ARE",
          "WHAT THEY WANT",
          "WHAT THEY FEAR",
          "WHAT THEY EXPECT",
        ],
        personaItems: [
          ["Final-year student", "Intern / Fresher"],
          ["Never miss an important task", "Reply at the right time"],
          ["Notification spam", "Being judged irresponsible"],
          ["A gentle, timely nudge", "Privacy respected"],
        ],
        anxiety:
          "The biggest psychological consequence of constant context switching is Reply Anxiety: the more messages pile up, the harder they are to open, and delay becomes a mental burden.",
        unread: "unread messages — exhausting to look at, so you avoid them.",
      },

      commit6: {
        title: "The art of cutting scope when you only have three months",
        intro:
          "Once I saw the Reply Anxiety problem, my engineering instinct wanted to solve it completely: design a large ecosystem with smart AI classification, a complex Focus Mode and multi-layer reminders.",
        constraint:
          "But the brief came with a hard constraint: three months with limited resources. Trying to do everything would leave the product unfinished or half-launched. Product thinking forced a sharper question: What is the highest-impact lever at the lowest cost?",
        lead: "Using the ICE (Impact - Confidence - Ease) framework, I broke the problem into three clear action groups:",
        cards: [
          {
            title: "#1 Smart Reply Reminder",
            tag: "STRATEGIC BET",
            body: 'Bet on the core pain: gently remind users about an important message and use "Reply Later" to remove the pressure to answer now.',
          },
          {
            title: "2. Conversation Organization",
            tag: "QUICK WIN",
            body: "Bring the existing desktop chat classification to mobile, clearing the inbox quickly with low development cost.",
          },
          {
            title: "3. Focus Mode",
            tag: "BETA LATER",
            body: "Hold it for an internal experiment, grouping noisy messages into periodic summaries instead of complicating the first MVP.",
          },
        ],
        roadmapLead:
          "Three-month execution plan: from idea validation to launch and measurement.",
        callout:
          "Three months is not enough to do everything — but it is enough to prove whether cutting in the right place can make a difference.",
      },

      commit7: {
        title: "A smaller scope does not mean a smaller ambition",
        intro:
          "Doing less can tempt us to compromise on a more modest goal. Without one number to anchor on, we can never know whether the cut in the previous commit was right.",
        northStarLabel: "NORTH STAR",
        northStar:
          "+15% – 20% Reply Rate within 24h on important conversations (work groups, partners who exchanged files or links, or had a previous call).",
        definitionLabel: 'DEFINITION OF "IMPORTANT CONVERSATION"',
        definition:
          "Meet at least one condition: (1) the user labels it Work, Family or Customer, or (2) it falls within the top 15% of highest-frequency conversations over the last 30 days.",
        benchmark:
          "Because Zalo has no internal baseline for this behavior, I anchored the target to industry benchmarks instead of guessing:",
        cards: [
          "Reply rate after Gentle Reminder",
          "Retention Reply Later (D28)",
          "Focus Mode Adoption (D7)",
        ],
        cardBodies: [
          "In-app reminder benchmarks are around 10% (Leanplum). I set the target near 2x because Zalo has a more captive audience and specific context.",
          "Utility feature benchmarks are around 20% (Mixpanel). The target is higher because it addresses a daily pain point.",
          "Around the 5% DAU benchmark (Mixpanel): this is a new behavior, so there is no expectation to exceed the benchmark in month one.",
        ],
        callout:
          "A target without evidence is just a promise. Industry data, even imperfect data, is a better anchor than intuition.",
      },

      commit8: {
        title: "Risks to control before rollout",
        intro:
          "Product work is not only about maximizing growth metrics. It is also about protecting the user's core experience from harm.",
        risks: [
          {
            name: "1. Spam fatigue",
            signal: "Signal: notification frequency frustrates users.",
            control:
              "limit to one reminder per conversation per day; never send after 10 PM.",
          },
          {
            name: "2. Anxiety",
            signal: "Signal: users feel watched and pressured to reply.",
            control: "use gentle copy and provide a one-tap permanent opt-out.",
          },
          {
            name: "3. Wrong-context summary",
            signal: "Signal: AI extracts content from casual calls.",
            control:
              "activate only on action verbs and require user approval before saving.",
          },
        ],
        guardrail:
          "<0>Guardrail Trigger:</0> If Opt-out Rate exceeds 25% or CSAT drops by more than 0.3 in the test group, stop the rollout and optimize the AI model even if reply rate increases.",
        callout:
          "Sometimes the hardest thing to measure in a product is trust — and once lost, it is difficult to regain.",
      },

      commit9: {
        tag: "the takeaway",
        title: "Shaping the identity of a Technical PM",
        intro:
          'What stayed with me was not the scale of the solution, but the small quiet moments in an experience — no barrage of bells, no relentless vibration, just a gentle line of copy: <0>"Ready to reply?"</0>',
        technical: "// assess whether the technology can do it",
        product: "// decide how it should be built for people",
        quote:
          "Strong engineering helps me know whether something can be built. Product thinking helps me decide how it should be built.",
        closing: "For users, no detail is too small.",
      },
    },
  },
};

export default projectsEn;
