const projectsEn = {
  reuse: {
    tag: "PROJECT CASE STUDY",
    title: "ReuseUni — Dorm Marketplace",
    intro:
      "A hyperlocal C2C e-commerce platform built exclusively for students at the University Village — solving the waste of usable items every graduation season and the scam risk on social media groups.",
    pdf: "Full Document (PDF)",
    github: "GitHub Organization / Board",
    entry: "EXHIBIT ENTRY",
    galleryPass: "GALLERY PASS",
    exhibitCode: "NO. 06-EXHIBITS",
    curatedJourney: "CURATED JOURNEY",
    ticket:
      "Welcome to an exhibition of <0>6 execution paintings</0> — a record of every brushstroke that shaped this product in my role as <1>Product Manager</1>, from the first sketch of an idea to the final polish.",
    scroll: "SCROLL TO EXPLORE",
    prototype: "Try the Prototype",
    flowSpecs: "View Flow Specs",
    execution: "Execution intent:",
    impact: "POST-EXHIBIT IMPACT",
    outcomeTitle: "The Fruits of a Real Execution Journey",
    outcomeIntro:
      "After 4 sprints working alongside the team, here are the real results and metrics ReuseUni has achieved.",
    pillars: [
      "Performance & Operations",
      "User Experience",
      "Discovery & Roadmap",
    ],
    exhibits: {
      strategy: {
        tag: "Exhibit 01 • Business Strategy & Moat",
        title: "Chapter 01 — Lean Canvas & Building the Moat",
        desc: "From wasted secondhand goods and social-media scams, I built a trust moat with .edu.vn email verification — turning ReuseUni into a safe campus marketplace.",
        alt: "Lean Canvas strategy framework",
      },
      mvp: {
        tag: "Exhibit 02 • Scope & Trade-offs",
        title: "Chapter 02 — Defining the MVP & Trade-offs",
        desc: "Using an Impact/Effort matrix, I cut 60% of nice-to-haves and kept 5 core features — shipped the MVP in 2 months.",
        alt: "MVP scope and trade-off matrix",
      },
      ux: {
        tag: "Exhibit 03 • Product Flow & Edge Cases",
        title: "Chapter 03 — Mapping the User Flows",
        desc: "Mapped 5 core flows and covered every edge case — over 90% of students completed key actions on their first try.",
        alt: "User flow diagram",
      },
      prototype: {
        tag: "Exhibit 04 • Hi-Fi Prototype & System",
        title: "Chapter 04 — Design System & Interactive Prototype",
        desc: "Built a Mobile-First design system from scratch — cut the listing flow down to 3 steps, scoring 4.0/5.0 in usability testing.",
        alt: "Figma screens overview for ReuseUni",
      },
      scrum: {
        tag: "Exhibit 05 • Agile & Sprint Management",
        title: "Chapter 05 — Running Scrum & Driving Execution",
        desc: "Ran 4 sprints on GitHub Projects — delivered 100% of commitments on time.",
        alt: "GitHub Projects Scrum board",
      },
      qa: {
        tag: "Exhibit 06 • Quality Assurance & Automation",
        title: "Chapter 06 — Testing & Automation",
        desc: "Built an automated test suite as a safety net — 306/308 tests passing, 82.5% coverage.",
        alt: "Test coverage terminal output",
      },
    },
    outcomes: {
      performance: "Performance & Operations",
      ux: "User Experience",
      discovery: "Discovery & Roadmap",
      api: "API Latency",
      screen: "Screen Transition",
      visual: "Visual Score",
      smooth: "Smooth Interactions",
      interactions: "Interactions",
      verification: "「.edu.vn」 Verification",
      next: "Next Priority (P1)",
      apiValue: "115ms – 370ms.",
      screenValue: "~380ms (optimized under 1s).",
      visualValue: "> 4.0 / 5.0.",
      smoothValue: "> 90% (friction < 10%).",
      interactionsValue: "5–7 actions/session (Home → Cart).",
      verificationValue: "100% student trust.",
      nextValue: "71.4% requested a Trust Score feature.",
    },
  },
  lean: {
    tag: "STRATEGIC FRAMEWORK",
    title: "Lean Canvas • ReuseUni",
    subtitle: "Modeling a lean product strategy",
    problem: [
      "Budget-constrained students need affordable secondhand goods.",
      "Good items get thrown out when students move out or graduate.",
      "Social media groups are full of spam and scams, hard to filter by area.",
    ],
    solution: [
      "Internal campus marketplace: Buy, Sell, Donate, Swap.",
      "100% verification via .edu.vn school email.",
      "Hyperlocal filter (by dorm) & in-app chat.",
    ],
    uvp: "A hyperlocal secondhand marketplace: verified school email, safe pickup within a 5-minute walk.",
    concept: "A Safe Marketplace for Campus",
    customerSegments: [
      "Students living/studying at the University Village.",
      "Students moving out or graduating.",
      "First-year students furnishing their room.",
    ],
    earlyAdopters: "<0>Early Adopters:</0> Volunteer Clubs, Student Union.",
    metrics: [
      "<0>North Star:</0> Weekly swaps/transactions.",
      "<0>Retention:</0> D7 / D30 retention rate.",
      "<0>Conversion:</0> Listing-to-transaction rate.",
    ],
    advantage: [
      "<0>Trust Moat:</0> .edu.vn verification builds a level of trust big marketplaces can't replicate.",
      "<0>Hyperlocal Density:</0> Dense transaction volume within dorm radius, direct pickup with no shipping needed.",
    ],
    channels: [
      "<0>Partnership:</0> Dorm Management, Student Union",
      "<0>Events:</0> Swap Day booths",
      "<0>Organic:</0> Campus TikTok, Reels",
    ],
    cost: [
      "<0>Internal development:</0> In-house dev cost",
      "<0>Cloud Hosting:</0> Free tier",
      "<0>Offline booth operations:</0> Offline booth running cost",
    ],
    revenue: [
      "<0>Promoted Ads:</0> Featured listing fee",
      "<0>Seller Pro:</0> Package for accessory shops",
      "<0>Service fee:</0> 2–5% in-app payment",
    ],
  },
  mvp: {
    loop: [
      "Verify SSO",
      "List Item",
      "Filter by Dorm",
      "Chat Deal",
      "Meet & Pickup",
    ],
    feature: "Core Feature",
    priority: "Priority",
    impact: "Impact vs Effort",
    tradeoff: "Trade-off Decision (Scope Cut)",
  },
  roadmap: {
    title: "3-Month Execution Roadmap",
    subtitle: "From Idea Validation to Launch & Optimization",
    months: ["Month 1", "Month 2", "Month 3"],
    monthSubtitles: [
      "Validate & Build",
      "Launch & Measure",
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
              "Roll out to 50%+ (if metrics hold)",
              "Fine-tune activation threshold",
            ],
          },
          replyLater: {
            name: "B. Reply Later",
            m1: ["Build the flow & business logic"],
            m2: ["Develop feature & internal testing"],
            m3: ["Open beta test to users"],
          },
        },
      },
      focusMode: {
        title: "Focus Mode",
        tracks: {
          main: {
            name: "",
            m1: ["Wireframe & define UX"],
            m2: ["Build MVP"],
            m3: ["Start mobile A/B test"],
          },
        },
      },
      smartOrg: {
        title: "Smart Conv. Org",
        tracks: {
          main: {
            name: "",
            m1: [
              "Design onboarding banner",
              "Ship quick-win with existing feature",
            ],
            m2: ["Measure banner engagement"],
            m3: ["Refine copywriting"],
          },
        },
      },
    },
  },
  zalo: {
    eyebrow: "⑂ case study · zalo pmt 2026",
    title: "Where Product Thinking Clicked",
    lede: "I used to see the world through code — until I realized tech only matters when it solves a real problem.",
    video: "Watch the Presentation",
    assignment: "Assignment Document (PDF)",
    footer: "Case Study · Zalo Product Management Trainee 2026",
    part1: {
      commit1: {
        tag: "the spark",
        title: 'Beyond "It Works"',
        intro:
          "Coming from a technical background, I believed a good product just meant clean code and optimized algorithms. Correct was enough.",
        setup:
          "The two Zalo PMT 2026 assignments asked for something else entirely — two complementary capabilities:",
        assignment1: "Product Sense · Seeing the real problem:",
        assignment1Body:
          "spotting the experience gap hidden inside a system that already runs smoothly.",
        assignment2: "Critical Thinking & Creativity · Solving it feasibly:",
        assignment2Body:
          "building a new context from an open-ended prompt, weighing trade-offs to prove impact in 3 months.",
        realization: "That was the first time I realized:",
        realizationStrong:
          "Technical thinking hunts for bugs in the system — product thinking hunts for gaps in the human experience.",
        technicalComment:
          "// technical lens: optimize so the system runs correctly",
        productComment: "// product lens: solve a real pain point for the user",
      },
      commit2: {
        tag: "assignment 01",
        title: "Finding the User Gap",
        briefLabel: "PROMPT 01",
        brief:
          "Observe Zalo's AI features and propose an optimization or a new feature.",
        intro:
          "I froze when I first read the brief. Zalo is already mature, so there were no obvious problems to fix. I realized I had to look beyond bugs — and start with users.",
        insight:
          "I followed the user journey instead: what happens after the call? AI helps during the conversation, but once it ends, users are back to remembering and writing everything down.",
        voice: "Voice-to-text",
        subtitle: "Subtitle",
        translate: "Translate",
        callout:
          "Turns out the gap wasn't in the conversation itself — it started the moment the call ended.",
      },
      commit3: {
        title: "Balancing Trust & Data",
        promptLabel: "PROMPT",
        prompt:
          "Observe Zalo's AI features and propose an optimization or a new feature.",
        solutionLabel: "SOLUTION",
        solution:
          "<0>AI Call Note</0> — summarizes the call, drops it straight into the chat with a one-tap scheduling button.",
        intro:
          "Finding the gap was the easy half. The hard half was trust: an AI listening into a private conversation only has value if the user genuinely feels safe.",
        diffBefore: '// more data = "better"',
        diffAfter: "// trust first, optimization second",
        setup:
          'Instead of chasing how "smart" the tech looked by hoarding as much data as possible, I set 3 design boundaries that put privacy first:',
        card1Title: "1. No Full Recording",
        card1Body:
          "Pulls live text, drops the audio the moment the call ends — no recording, no fear of being secretly taped.",
        card2Title: "2. 100% Consent Rule",
        card2Body:
          'AI only turns on once everyone taps "Agree" — trust first, adoption second.',
        card3Title: "3. MVP Summary Card",
        card3Body:
          'Lands right in the chat with a one-tap "Schedule Now" button — no extra app, no extra tab.',
        flowLead: "These principles came to life through a 4-step experience:",
        step1Title: "Turn On",
        step1a: "Placed next to the call controls",
        step1b: "Clear indicator when AI is active",
        step2Title: "Get consent",
        step2a: "If anyone declines, the feature stays off",
        step3Title: "Summarize",
        step3a: "Key points and action items are extracted",
        step3b: "Users can review the full note",
        step4Title: "Take action",
        step4a: "Key details are pre-filled",
        step4b: "Saved directly to Zalo Calendar",
        callout:
          'These four steps weren\'t built "for a nice demo" — each one is a re-check: does the user still feel safe here?',
      },
      commit4: {
        title: "From Working to Trusted",
        intro:
          "The flow worked, but I didn't stop there. Product thinking made me ask: will users trust it, use it again, or simply tap it once and leave?",
        northStar: "Users open or edit the summary",
        adoption: "Calls where all participants enable it",
        conversion: "Users who save a reminder",
        guardrail: "Users who turn it off or dismiss it",
        callout:
          "For a trust-based feature, success isn't just getting users to try it once — it's getting them to come back.",
      },
    },
    part2: {
      commit5: {
        title: "Finding Reply Anxiety",
        promptLabel: "PROMPT 02",
        prompt:
          "Pick one of 4 product tracks and prove its impact within 3 months on limited resources.",
        solutionLabel: "SOLUTION",
        solution:
          "<0>Mindful Context Workspace</0> — managing conversation context to reduce notification overload.",
        intro:
          "With 4 tracks to choose from, I focused on where Zalo creates the most everyday value: Chat.",
        insightBefore:
          "I looked at my own experience and those around me. We were juggling school, work, and family — all in one inbox.",
        insightQuestion:
          "<0>The pain wasn't more entertainment; it was managing too many roles at once.</0>",
        insightAfter: "",
        personaBadge: "THE CONTEXT SWITCHERS",
        personaChats: ["🏠 Family", "📚 Study", "💼 Work", "🎓 Internship"],
        personaSub:
          "Young people constantly switching roles between study, work, and family every day.",
        personaLabels: [
          "WHO THEY ARE",
          "WHAT THEY WANT",
          "WHAT WORRIES THEM",
          "WHAT THEY EXPECT",
        ],
        personaItems: [
          ["Final-year students", "Interns / Freshers"],
          ["Not missing anything important", "Replying at the right time"],
          ["Notification spam", "Being seen as irresponsible"],
          ["Gentle, well-timed nudges", "No privacy intrusion"],
        ],
        anxiety:
          "This overload creates a hidden pain: Reply Anxiety. The more messages pile up, the harder it feels to open and reply.",
        unread:
          "unread messages — just looking at it is exhausting, so you avoid it.",
      },
      commit6: {
        title: "Prioritizing Under Constraints",
        intro:
          "Once I spotted Reply Anxiety, I wanted to build the full solution — AI categorization, Focus Mode, and multi-tier reminders. But product thinking made me step back and prioritize.",
        constraint:
          "With only 3 months and limited resources, I couldn't build everything. So I stepped back: what's the highest-impact, lowest-cost lever?",
        lead: "Using the ICE framework, I broke the problem into 3 clear tracks:",
        roadmapLead:
          "3-month execution plan: from validating the idea to launch & measurement.",
        callout:
          "Three months isn't enough to do everything — but it's enough to prove one thing: whether cutting in the right place actually makes a difference.",
        cards: [
          {
            title: "#1 Smart Reply Reminder",
            tag: "STRATEGIC BET",
            body: "Addresses the core pain with a gentle nudge and “Reply Later” — reducing the pressure to reply instantly.",
          },
          {
            title: "2. Conversation Organization",
            tag: "QUICK WIN",
            body: "Brings existing Desktop chat categories to Mobile — a low-cost way to declutter the inbox.",
          },
          {
            title: "3. Focus Mode",
            tag: "BETA LATER",
            body: "Held for later testing to avoid adding complexity to the initial MVP.",
          },
        ],
      },
      commit7: {
        title: "Build Less, Prove More",
        intro:
          "I cut features to keep the MVP focused. Now I needed one clear metric to prove it was solving the right problem.",
        northStarLabel: "NORTH STAR",
        northStar: "on Important Conversations.",
        definitionLabel: 'DEFINING "IMPORTANT CONVERSATION"',
        definition:
          "Meets at least 1 of 2 conditions: (1) tagged by the user under Work/Family/Client, or (2) in the top 15% most active conversations over the last 30 days.",
        benchmark:
          "Without a Zalo baseline, I wouldn't guess the number. I'd start with a testable target and validate it through an experiment.",
        cards: [
          "Reply rate after Gentle Reminder",
          "Reply Later Retention (D28)",
          "Focus Mode Adoption (D7)",
        ],
        cardBodies: [
          "~2× the typical reminder benchmark (~10%), reflecting the value of more relevant context.",
          "Slightly above the utility-feature benchmark (~20%), as this addresses a daily pain point.",
          "In line with the ~5% DAU benchmark, as this is a new behavior unlikely to spike early.",
        ],
        callout:
          "A target with no data behind it is just a hollow promise — industry benchmarks, imperfect as they are, still beat a gut guess.",
      },
      commit8: {
        title: "Managing Rollout Risks",
        intro:
          "Building a product isn't just about maximizing growth metrics — it's also about protecting the core experience from harm:",
        risks: [
          {
            name: "1. Spam Fatigue",
            signal:
              "Signal: Notification frequency is too high, annoying users.",
            control:
              "Cap at 1 reminder/day/conversation; never send after 10 PM.",
          },
          {
            name: "2. Rising Anxiety",
            signal:
              "Signal: A feeling of being watched and pressured to reply.",
            control:
              "Gentle copy + one-tap option to turn off the feature permanently.",
          },
          {
            name: "3. Wrong-context Summaries",
            signal: "Signal: AI misreads casual chit-chat as action items.",
            control:
              "Only suggests action items when clear keywords are detected. Users review before saving.",
          },
        ],
        guardrail:
          "<0>Guardrail Trigger:</0> If opt-out exceeds 25% or CSAT drops by more than 0.3 in the test group, pause the rollout and refine the AI model — even if reply rates are rising.",
        callout:
          "Because trust is hard to measure — and even harder to win back.",
      },
      commit9: {
        tag: "what stayed with me",
        title: "Growing as a Technical PM",
        intro:
          'In the end, what stayed with me most wasn\'t the scale of the solution — it was the smallest moments in the experience: no blaring notifications, no aggressive vibration, just one gentle line of copy — <0>"Ready to reply?"</0> — instead of a push.',
        technical: "// assessing whether the technology is even possible",
        product: "// deciding how it should be built for real people",
        quote:
          "Technical skill tells me what's possible to build. Only product thinking tells me how it should be built.",
        closing: "Because to users, no detail is ever too small.",
      },
    },
  },
};

export default projectsEn;
