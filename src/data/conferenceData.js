export const CONFERENCE_INFO = {
  name: "SLIIT Tech Conference 2026",
  tagline: "Explore the Future of Technology",
  dates: "November 12 - 14, 2026",
  isoDate: "2026-11-12T09:00:00+05:30",
  venue: "SLIIT Main Campus, Malabe, Sri Lanka",
  hall: "Computing Auditorium & Innovation Center",
  organizer: "Faculty of Computing, SLIIT",
  contactEmail: "techconf2026@sliit.lk",
  contactPhone: "+94 11 754 4801"
};

export const STATS = [
  { value: "1,500+", label: "Attendees Expected" },
  { value: "25+", label: "World-Class Speakers" },
  { value: "30+", label: "Tech Talks & Workshops" },
  { value: "4", label: "Specialized Tracks" },
  { value: "LKR 1M+", label: "Hackathon Prize Pool" }
];

export const TRACKS = [
  {
    id: "ai-data",
    icon: "🧠",
    title: "Artificial Intelligence & ML",
    color: "#7C3AED",
    badgeColor: "rgba(124, 58, 237, 0.2)",
    description: "Generative AI, Large Foundation Models, Autonomous Agents, Edge AI, and ethical machine learning architectures.",
    topics: ["LLM Orchestration", "Multimodal Agents", "Edge AI & ONNX", "AI Safety & Governance"]
  },
  {
    id: "cloud-devops",
    icon: "☁️",
    title: "Cloud Native & DevOps",
    color: "#06B6D4",
    badgeColor: "rgba(6, 182, 212, 0.2)",
    description: "Microservices resilience, Kubernetes automation, Platform Engineering, Serverless architectures, and GitOps.",
    topics: ["Kubernetes & Service Mesh", "Platform Engineering", "FinOps & Cost Optimization", "Zero-Downtime CI/CD"]
  },
  {
    id: "cyber-web3",
    icon: "🛡️",
    title: "Cybersecurity & Web3",
    color: "#EC4899",
    badgeColor: "rgba(236, 72, 153, 0.2)",
    description: "Zero-Trust security paradigms, Quantum-resistant cryptography, Smart contract audits, and decentralized identity systems.",
    topics: ["Zero-Trust Networks", "Post-Quantum Cryptography", "Smart Contract Security", "Threat Intelligence"]
  },
  {
    id: "web-mobile",
    icon: "⚡",
    title: "Next-Gen Web & Mobile",
    color: "#10B981",
    badgeColor: "rgba(16, 185, 129, 0.2)",
    description: "High-performance full-stack architectures, WebAssembly, Immersive WebXR, and modern cross-platform engineering.",
    topics: ["WebAssembly (WASM)", "React 19 & Server Actions", "Cross-Platform Frameworks", "Spatial & WebXR Computing"]
  }
];

export const SPEAKERS = [
  {
    id: "spk-1",
    name: "Dr. Sandaruwan Bandara",
    role: "Principal AI Scientist",
    company: "Google DeepMind",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    talkTitle: "Autonomous Reasoning & Multi-Agent Collaboration in Enterprise AI",
    track: "ai-data",
    featured: true,
    bio: "Dr. Sandaruwan is a leading AI researcher specializing in multi-agent reinforcement learning and autonomous reasoning paradigms with over 15 years of industry experience.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "spk-2",
    name: "Kasun Vithanage",
    role: "VP of Cloud Architecture",
    company: "Amazon Web Services (AWS)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    talkTitle: "Building Planetary-Scale Resilience with Event-Driven Architectures",
    track: "cloud-devops",
    featured: true,
    bio: "Kasun has architected global cloud platforms handling billions of transactions daily and mentors engineers worldwide on Kubernetes and platform resilience.",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "spk-3",
    name: "Elena Rostova",
    role: "Chief Cryptography Architect",
    company: "ChainGuard Global",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    talkTitle: "Zero-Knowledge Proofs & Quantum-Resistant Security Protocols",
    track: "cyber-web3",
    featured: true,
    bio: "Elena is an international speaker on post-quantum cryptography, privacy-preserving zero knowledge protocols, and defensive security frameworks.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: "spk-4",
    name: "Dilshan Jayakody",
    role: "Senior Director of Engineering",
    company: "WSO2",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    talkTitle: "Next-Gen API Fabrics & Real-Time Data Streaming Ecosystems",
    track: "cloud-devops",
    featured: true,
    bio: "Dilshan leads API governance and microservices integration platforms at WSO2, championing open standards and distributed streaming architectures.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: "spk-5",
    name: "Nimanthi Wickramasinghe",
    role: "Staff Frontend Architect",
    company: "Meta",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    talkTitle: "The WebAssembly Revolution: High-Performance Compute in the Browser",
    track: "web-mobile",
    featured: false,
    bio: "Nimanthi specializes in browser runtime optimization, React internals, and compiling complex C++/Rust graphics pipelines to WASM.",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "spk-6",
    name: "Prof. Anura Wijeratne",
    role: "Dean of Faculty of Computing",
    company: "SLIIT",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    talkTitle: "Empowering Next-Gen Innovators: Research, Industry & Sri Lanka's Tech Future",
    track: "ai-data",
    featured: true,
    bio: "Prof. Anura has spearheaded computing innovation and university-industry incubation at SLIIT, graduating thousands of top tier technology leaders.",
    socials: {
      linkedin: "https://linkedin.com"
    }
  }
];

export const SCHEDULE = [
  {
    day: 1,
    date: "Thursday, Nov 12, 2026",
    title: "Hands-on Workshops & Hackathon Kickoff",
    sessions: [
      {
        id: "d1-s1",
        time: "08:30 AM - 09:30 AM",
        title: "Delegate Registration & Welcome Breakfast",
        speaker: "SLIIT Organizing Team",
        room: "Main Courtyard & Atrium",
        track: "all",
        type: "Networking"
      },
      {
        id: "d1-s2",
        time: "09:30 AM - 11:30 AM",
        title: "Hands-on Workshop: Fine-Tuning Open Source LLMs on Custom Datasets",
        speaker: "Dr. Sandaruwan Bandara",
        room: "Lab 01 (Computing Block)",
        track: "ai-data",
        type: "Workshop"
      },
      {
        id: "d1-s3",
        time: "09:30 AM - 11:30 AM",
        title: "Hands-on Workshop: Automated Kubernetes Platform Engineering with ArgoCD",
        speaker: "Kasun Vithanage",
        room: "Lab 03 (Innovation Block)",
        track: "cloud-devops",
        type: "Workshop"
      },
      {
        id: "d1-s4",
        time: "11:45 AM - 01:00 PM",
        title: "Building Zero-Knowledge Verification Circuits in Rust",
        speaker: "Elena Rostova",
        room: "Mini Theater A",
        track: "cyber-web3",
        type: "Masterclass"
      },
      {
        id: "d1-s5",
        time: "02:00 PM - 05:30 PM",
        title: "24-Hour National Tech Hackathon Kickoff & Problem Statement Reveal",
        speaker: "SLIIT Tech Council & Industry Mentors",
        room: "Innovation Hub & Hackathon Floor",
        track: "all",
        type: "Hackathon"
      }
    ]
  },
  {
    day: 2,
    date: "Friday, Nov 13, 2026",
    title: "Main Conference & Keynote Plenaries",
    sessions: [
      {
        id: "d2-s1",
        time: "09:00 AM - 09:45 AM",
        title: "Grand Opening Ceremony & Welcome Address",
        speaker: "Prof. Anura Wijeratne (Dean, SLIIT Computing)",
        room: "Main Auditorium",
        track: "all",
        type: "Keynote"
      },
      {
        id: "d2-s2",
        time: "09:50 AM - 10:45 AM",
        title: "Autonomous Reasoning & Multi-Agent Collaboration in Enterprise AI",
        speaker: "Dr. Sandaruwan Bandara (Google DeepMind)",
        room: "Main Auditorium",
        track: "ai-data",
        type: "Keynote"
      },
      {
        id: "d2-s3",
        time: "11:15 AM - 12:15 PM",
        title: "Building Planetary-Scale Resilience with Event-Driven Architectures",
        speaker: "Kasun Vithanage (AWS)",
        room: "Main Auditorium",
        track: "cloud-devops",
        type: "Tech Talk"
      },
      {
        id: "d2-s4",
        time: "01:30 PM - 02:30 PM",
        title: "The WebAssembly Revolution: High-Performance Compute in the Browser",
        speaker: "Nimanthi Wickramasinghe (Meta)",
        room: "Hall B",
        track: "web-mobile",
        type: "Tech Talk"
      },
      {
        id: "d2-s5",
        time: "02:45 PM - 04:00 PM",
        title: "Panel Discussion: Navigating the Tech Horizon — Sri Lanka as an AI Innovation Hub",
        speaker: "Industry Tech Leaders & Academic Visionaries",
        room: "Main Auditorium",
        track: "all",
        type: "Panel"
      },
      {
        id: "d2-s6",
        time: "04:15 PM - 05:30 PM",
        title: "Evening Networking Gala & Industry Partner Mixer",
        speaker: "All Attendees & Sponsors",
        room: "SLIIT Sky Lounge",
        track: "all",
        type: "Networking"
      }
    ]
  },
  {
    day: 3,
    date: "Saturday, Nov 14, 2026",
    title: "Hackathon Demos, Career Expo & Grand Awards",
    sessions: [
      {
        id: "d3-s1",
        time: "09:00 AM - 12:00 PM",
        title: "SLIIT Tech Career Expo 2026 & Startup Showcase",
        speaker: "30+ Tech Recruiters & VC Investors",
        room: "Computing Atrium",
        track: "all",
        type: "Career Fair"
      },
      {
        id: "d3-s2",
        time: "01:00 PM - 03:30 PM",
        title: "Top 10 Finalists Live Hackathon Pitch & Prototype Showcase",
        speaker: "Hackathon Finalist Teams",
        room: "Main Auditorium",
        track: "all",
        type: "Hackathon Demos"
      },
      {
        id: "d3-s3",
        time: "03:45 PM - 05:00 PM",
        title: "Grand Awards Ceremony & Conference Closing",
        speaker: "SLIIT Faculty & Industry Sponsors",
        room: "Main Auditorium",
        track: "all",
        type: "Awards"
      }
    ]
  }
];

export const TICKET_TIERS = [
  {
    id: "student",
    name: "Student Pass",
    badge: "Popular with Undergrads",
    priceLKR: "1,500",
    priceUSD: "10",
    description: "Full access for undergraduate & postgraduate students with valid University ID.",
    features: [
      "Access to all 3-day Keynotes & Tech Sessions",
      "Access to Hackathon Showcase & Career Expo",
      "Official Conference Swag Bag & T-Shirt",
      "Digital Certificate of Participation",
      "Lunch & Refreshments included",
      "Discounted Workshop Add-on"
    ],
    popular: false,
    color: "#06B6D4"
  },
  {
    id: "pro",
    name: "Professional Pass",
    badge: "Most Popular",
    priceLKR: "6,500",
    priceUSD: "35",
    description: "Designed for software engineers, tech managers, researchers, and industry pros.",
    features: [
      "All-Access to Keynotes, Panels & Tech Tracks",
      "Entry to 2 Hands-on Masterclasses of choice",
      "Exclusive Evening Networking Gala access",
      "Premium Swag Kit + NFC Conference Badge",
      "VIP Lunch & Delegate Lounge Access",
      "Recorded Session Access & Slide Deck Portal"
    ],
    popular: true,
    color: "#7C3AED"
  },
  {
    id: "vip",
    name: "VIP All-Access Pass",
    badge: "Executive",
    priceLKR: "15,000",
    priceUSD: "80",
    description: "Exclusive executive experience with speaker green-room access and VIP dinner.",
    features: [
      "Unrestricted VIP access to all 3 Days & Workshops",
      "VIP Reserved Seating in Front Rows",
      "Private Speaker & Executive Dinner invitation",
      "1-on-1 Mentorship & Recruiting Lounge Access",
      "Full Digital Suite + Lifetime Video Archives",
      "Commemorative Tech Conference Trophy Plaque"
    ],
    popular: false,
    color: "#EC4899"
  }
];

export const SPONSORS = {
  platinum: [
    { name: "Google Cloud", logoText: "Google Cloud", color: "#4285F4" },
    { name: "AWS", logoText: "Amazon Web Services", color: "#FF9900" },
    { name: "Microsoft", logoText: "Microsoft Azure", color: "#00A4EF" }
  ],
  gold: [
    { name: "WSO2", logoText: "WSO2", color: "#FF7300" },
    { name: "IFS", logoText: "IFS Technologies", color: "#6F2DBD" },
    { name: "Sysco LABS", logoText: "Sysco LABS", color: "#0091FF" }
  ],
  community: [
    { name: "SLIIT FCSC", logoText: "Faculty of Computing Student Community" },
    { name: "IEEE SLIIT", logoText: "IEEE Student Branch SLIIT" },
    { name: "Mozilla Campus Club", logoText: "Mozilla Club SLIIT" },
    { name: "Women in Tech SL", logoText: "Women in Tech Sri Lanka" }
  ]
};

export const FAQS = [
  {
    category: "General",
    question: "Who can attend SLIIT Tech Conference 2026?",
    answer: "The conference is open to all university students, school leavers, software engineers, DevOps specialists, data scientists, UX designers, tech founders, and anyone passionate about modern technology."
  },
  {
    category: "General",
    question: "Where is the conference held?",
    answer: "The conference will be hosted at the SLIIT Main Campus, New Kandy Road, Malabe, Sri Lanka across the Computing Auditorium, Innovation Labs, and the Main Courtyard."
  },
  {
    category: "Ticketing",
    question: "How do I verify my student status for the discounted pass?",
    answer: "When purchasing the Student Pass, simply enter your university student registration ID number and present your student ID card at the registration desk on the event morning."
  },
  {
    category: "Hackathon",
    question: "How can I participate in the 24-Hour Hackathon?",
    answer: "Any ticket holder can register a team of 3-5 members for the hackathon. Teams will receive problem statements during Day 1 afternoon, and final prototypes will be evaluated by industry judges on Day 3."
  },
  {
    category: "Workshops",
    question: "Are workshop seats limited?",
    answer: "Yes, hands-on lab workshops have a capacity of 60 participants per lab due to hardware requirements. We recommend registering early to guarantee your lab seat."
  }
];
