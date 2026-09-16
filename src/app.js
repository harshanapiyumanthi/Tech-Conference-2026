// SLIIT Tech Conference 2026 - Main Application Logic

const CONFERENCE_DATA = {
  info: {
    name: "SLIIT Tech Conference 2026",
    tagline: "Explore the Future of Technology",
    dates: "November 12 - 14, 2026",
    isoDate: "2026-11-12T09:00:00+05:30",
    venue: "SLIIT Main Campus, Malabe, Sri Lanka",
    hall: "Computing Auditorium & Innovation Labs",
    organizer: "Faculty of Computing, SLIIT",
    email: "techconf2026@sliit.lk",
    phone: "+94 11 754 4801"
  },
  stats: [
    { value: "1,500+", label: "Attendees Expected" },
    { value: "25+", label: "World-Class Speakers" },
    { value: "30+", label: "Tech Talks & Labs" },
    { value: "4", label: "Specialized Tracks" },
    { value: "LKR 1M+", label: "Hackathon Prize Pool" }
  ],
  tracks: [
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
  ],
  speakers: [
    {
      id: "spk-1",
      name: "Dr. Sandaruwan Bandara",
      role: "Principal AI Scientist",
      company: "Google DeepMind",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      talkTitle: "Autonomous Reasoning & Multi-Agent Collaboration in Enterprise AI",
      track: "ai-data",
      bio: "Dr. Sandaruwan is a leading AI researcher specializing in multi-agent reinforcement learning and autonomous reasoning paradigms with over 15 years of industry experience across Silicon Valley and London.",
      socials: { linkedin: "https://linkedin.com", github: "https://github.com" }
    },
    {
      id: "spk-2",
      name: "Kasun Vithanage",
      role: "VP of Cloud Architecture",
      company: "Amazon Web Services (AWS)",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      talkTitle: "Building Planetary-Scale Resilience with Event-Driven Architectures",
      track: "cloud-devops",
      bio: "Kasun has architected global cloud platforms handling billions of transactions daily and mentors engineers worldwide on Kubernetes and platform resilience.",
      socials: { linkedin: "https://linkedin.com", twitter: "https://twitter.com" }
    },
    {
      id: "spk-3",
      name: "Elena Rostova",
      role: "Chief Cryptography Architect",
      company: "ChainGuard Global",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      talkTitle: "Zero-Knowledge Proofs & Quantum-Resistant Security Protocols",
      track: "cyber-web3",
      bio: "Elena is an international speaker on post-quantum cryptography, privacy-preserving zero knowledge protocols, and defensive security frameworks.",
      socials: { linkedin: "https://linkedin.com", github: "https://github.com" }
    },
    {
      id: "spk-4",
      name: "Dilshan Jayakody",
      role: "Senior Director of Engineering",
      company: "WSO2",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      talkTitle: "Next-Gen API Fabrics & Real-Time Data Streaming Ecosystems",
      track: "cloud-devops",
      bio: "Dilshan leads API governance and microservices integration platforms at WSO2, championing open standards and distributed streaming architectures.",
      socials: { linkedin: "https://linkedin.com", github: "https://github.com" }
    },
    {
      id: "spk-5",
      name: "Nimanthi Wickramasinghe",
      role: "Staff Frontend Architect",
      company: "Meta",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
      talkTitle: "The WebAssembly Revolution: High-Performance Compute in the Browser",
      track: "web-mobile",
      bio: "Nimanthi specializes in browser runtime optimization, React internals, and compiling complex C++/Rust graphics pipelines to WASM.",
      socials: { linkedin: "https://linkedin.com", twitter: "https://twitter.com" }
    },
    {
      id: "spk-6",
      name: "Prof. Anura Wijeratne",
      role: "Dean of Faculty of Computing",
      company: "SLIIT",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
      talkTitle: "Empowering Next-Gen Innovators: Research, Industry & Sri Lanka's Tech Future",
      track: "ai-data",
      bio: "Prof. Anura has spearheaded computing innovation and university-industry incubation at SLIIT, graduating thousands of top tier technology leaders.",
      socials: { linkedin: "https://linkedin.com" }
    }
  ],
  schedule: [
    {
      day: 1,
      date: "Thursday, Nov 12, 2026",
      title: "Hands-on Workshops & Hackathon Kickoff",
      sessions: [
        {
          id: "d1-s1",
          time: "08:30 AM - 09:30 AM",
          title: "Delegate Registration & Welcome Breakfast",
          speaker: "SLIIT Organizing Committee",
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
          title: "Panel: Navigating the Tech Horizon — Sri Lanka as an AI Innovation Hub",
          speaker: "Industry Tech Directors & Academic Visionaries",
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
          type: "Hackathon"
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
  ],
  tickets: [
    {
      id: "student",
      name: "Student Pass",
      badge: "Undergrad Special",
      priceLKR: "1,500",
      priceUSD: "10",
      description: "Full access for undergraduate & postgraduate students with valid University Student ID.",
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
      description: "Designed for software engineers, tech managers, researchers, and tech enthusiasts.",
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
        "Unrestricted VIP access to all 3 Days & Labs",
        "VIP Reserved Seating in Front Rows",
        "Private Speaker & Executive Dinner invitation",
        "1-on-1 Mentorship & Recruiting Lounge Access",
        "Full Digital Suite + Lifetime Video Archives",
        "Commemorative Tech Conference Trophy Plaque"
      ],
      popular: false,
      color: "#EC4899"
    }
  ],
  faqs: [
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
  ]
};

// Global App State
let appState = {
  activeScheduleDay: 1,
  scheduleSearch: "",
  scheduleTrack: "all",
  speakerTrack: "all",
  faqCategory: "All",
  ticketCurrency: "LKR",
  bookmarks: JSON.parse(localStorage.getItem('sliit_bookmarks') || '[]'),
  selectedTier: "student",
  venueTab: "halls"
};

// Toast System
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type === "success" ? "toast-success" : "toast-info"}`;
  toast.innerHTML = `
    <span style="font-size: 1.2rem;">${type === "success" ? "✅" : "ℹ️"}</span>
    <div style="font-size: 0.88rem; font-weight: 500; line-height: 1.4;">${message}</div>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Countdown Timer
function initCountdown() {
  const target = new Date(CONFERENCE_DATA.info.isoDate).getTime();

  function update() {
    const now = new Date().getTime();
    const diff = target - now;

    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      document.getElementById("cd-days").textContent = days;
      document.getElementById("cd-hours").textContent = String(hours).padStart(2, "0");
      document.getElementById("cd-minutes").textContent = String(minutes).padStart(2, "0");
      document.getElementById("cd-seconds").textContent = String(seconds).padStart(2, "0");
    }
  }

  update();
  setInterval(update, 1000);
}

// Render Stats Grid
function renderStats() {
  const container = document.getElementById("stats-grid");
  if (!container) return;

  container.innerHTML = CONFERENCE_DATA.stats.map(s => `
    <div class="glass-card" style="text-align: center; padding: 1.75rem 1rem;">
      <div style="font-family: var(--font-heading); font-size: 2.4rem; font-weight: 800; color: #fff; margin-bottom: 0.4rem; background: linear-gradient(135deg, #ffffff 0%, #a855f7 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
        ${s.value}
      </div>
      <div style="font-size: 0.9rem; color: var(--text-muted); font-weight: 500;">
        ${s.label}
      </div>
    </div>
  `).join('');
}

// Render Tracks
function renderTracks() {
  const container = document.getElementById("tracks-grid");
  if (!container) return;

  container.innerHTML = CONFERENCE_DATA.tracks.map(t => `
    <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between; border-top: 3px solid ${t.color}; cursor: pointer;" onclick="filterSpeakerByTrack('${t.id}')">
      <div>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
          <div style="width: 50px; height: 50px; border-radius: 12px; background: ${t.badgeColor}; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; box-shadow: 0 0 15px ${t.badgeColor};">
            ${t.icon}
          </div>
          <span style="font-size: 0.78rem; font-weight: 600; color: ${t.color}; text-transform: uppercase; letter-spacing: 0.05em;">Track</span>
        </div>
        <h3 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 0.75rem; color: #fff;">${t.title}</h3>
        <p style="color: var(--text-muted); fontSize: 0.92rem; line-height: 1.6; margin-bottom: 1.5rem;">${t.description}</p>
      </div>
      <div>
        <div style="font-size: 0.78rem; font-weight: 600; color: var(--text-dim); margin-bottom: 0.6rem; text-transform: uppercase;">Key Topics</div>
        <div style="display: flex; flex-wrap: wrap; gap: 0.45rem;">
          ${t.topics.map(topic => `
            <span style="font-size: 0.78rem; padding: 0.25rem 0.65rem; border-radius: var(--radius-sm); background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.08); color: #e2e8f0;">
              ${topic}
            </span>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// Render Speakers
function renderSpeakers() {
  const container = document.getElementById("speakers-grid");
  if (!container) return;

  const filtered = appState.speakerTrack === "all"
    ? CONFERENCE_DATA.speakers
    : CONFERENCE_DATA.speakers.filter(s => s.track === appState.speakerTrack);

  container.innerHTML = filtered.map(spk => `
    <div class="glass-card" style="display: flex; flex-direction: column; padding: 0; overflow: hidden; cursor: pointer;" onclick="openSpeakerModal('${spk.id}')">
      <div style="position: relative; height: 240px; overflow: hidden;">
        <img src="${spk.avatar}" alt="${spk.name}" style="width: 100%; height: 100%; object-fit: cover;" />
        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(15, 21, 38, 0.95) 0%, rgba(15, 21, 38, 0.2) 60%, transparent 100%);"></div>
        <div style="position: absolute; top: 1rem; right: 1rem; background: rgba(7, 9, 19, 0.7); backdrop-filter: blur(8px); padding: 0.3rem 0.75rem; border-radius: var(--radius-full); font-size: 0.78rem; font-weight: 700; color: var(--cyan-light); border: 1px solid rgba(6, 182, 212, 0.3);">
          ${spk.company}
        </div>
      </div>
      <div style="padding: 1.5rem; display: flex; flex-direction: column; flex: 1; justify-content: space-between;">
        <div>
          <h3 style="font-size: 1.3rem; font-weight: 800; color: #fff; margin-bottom: 0.25rem;">${spk.name}</h3>
          <div style="font-size: 0.88rem; color: var(--text-muted); font-weight: 500; margin-bottom: 1rem;">${spk.role}</div>
          <p style="font-size: 0.92rem; color: #cbd5e1; line-height: 1.5; font-style: italic; border-left: 2px solid var(--primary); padding-left: 0.75rem; margin-bottom: 1.25rem;">
            "${spk.talkTitle}"
          </p>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-glass); padding-top: 0.85rem;">
          <span style="font-size: 0.82rem; color: var(--primary-light); font-weight: 600;">View Full Bio & Abstract →</span>
          <span>✨</span>
        </div>
      </div>
    </div>
  `).join('');
}

function filterSpeakerByTrack(trackId) {
  appState.speakerTrack = trackId;
  const tabs = document.querySelectorAll(".speaker-tab-btn");
  tabs.forEach(tab => {
    if (tab.dataset.track === trackId) {
      tab.style.background = "rgba(124, 58, 237, 0.25)";
      tab.style.borderColor = "var(--primary-light)";
      tab.style.color = "#ffffff";
    } else {
      tab.style.background = "rgba(255, 255, 255, 0.03)";
      tab.style.borderColor = "var(--border-glass)";
      tab.style.color = "var(--text-muted)";
    }
  });
  renderSpeakers();
  const el = document.getElementById("speakers");
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Render Schedule
function renderSchedule() {
  const container = document.getElementById("schedule-list");
  if (!container) return;

  const currentDay = CONFERENCE_DATA.schedule.find(d => d.day === appState.activeScheduleDay) || CONFERENCE_DATA.schedule[0];

  const filtered = currentDay.sessions.filter(session => {
    const matchesSearch =
      session.title.toLowerCase().includes(appState.scheduleSearch.toLowerCase()) ||
      session.speaker.toLowerCase().includes(appState.scheduleSearch.toLowerCase()) ||
      session.room.toLowerCase().includes(appState.scheduleSearch.toLowerCase());

    const matchesTrack =
      appState.scheduleTrack === "all" ||
      session.track === appState.scheduleTrack ||
      session.track === "all";

    return matchesSearch && matchesTrack;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="glass-card" style="text-align: center; padding: 3rem;">
        <p style="color: var(--text-muted);">No sessions found matching your search.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(s => {
    const isSaved = appState.bookmarks.includes(s.id);
    return `
      <div class="glass-card" style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1.5rem; padding: 1.5rem 1.75rem; border-left: ${isSaved ? '4px solid var(--primary-light)' : '1px solid var(--border-glass)'};">
        <div style="min-width: 180px;">
          <div style="font-size: 1rem; font-weight: 800; color: var(--cyan-light); font-family: var(--font-heading);">${s.time}</div>
          <div style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.82rem; color: var(--text-muted); margin-top: 0.25rem;">
            <span>📍</span>
            <span>${s.room}</span>
          </div>
        </div>
        <div style="flex: 1; min-width: 240px;">
          <div style="margin-bottom: 0.4rem;">
            <span style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; padding: 0.2rem 0.55rem; border-radius: 4px; background: rgba(124, 58, 237, 0.2); color: #c4b5fd; border: 1px solid rgba(124, 58, 237, 0.4);">${s.type}</span>
          </div>
          <h4 style="font-size: 1.15rem; font-weight: 700; color: #fff; margin-bottom: 0.35rem;">${s.title}</h4>
          <div style="font-size: 0.88rem; color: var(--text-muted);">Speaker: <strong style="color: #e2e8f0;">${s.speaker}</strong></div>
        </div>
        <div>
          <button class="btn btn-outline btn-sm" onclick="toggleBookmark('${s.id}', '${s.title.replace(/'/g, "\\'")}')" style="border-color: ${isSaved ? 'var(--primary-light)' : 'var(--border-glass)'}; background: ${isSaved ? 'rgba(124, 58, 237, 0.25)' : 'rgba(255, 255, 255, 0.04)'}; color: ${isSaved ? '#fff' : 'var(--text-muted)'};">
            ${isSaved ? '★ Saved' : '☆ Save Session'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function toggleBookmark(sessionId, title) {
  if (appState.bookmarks.includes(sessionId)) {
    appState.bookmarks = appState.bookmarks.filter(id => id !== sessionId);
    showToast(`Removed "${title}" from your saved schedule.`, 'info');
  } else {
    appState.bookmarks.push(sessionId);
    showToast(`Added "${title}" to your saved schedule!`, 'success');
  }
  localStorage.setItem('sliit_bookmarks', JSON.stringify(appState.bookmarks));
  renderSchedule();
}

function setScheduleDay(dayNum) {
  appState.activeScheduleDay = dayNum;
  document.querySelectorAll(".day-tab-btn").forEach(btn => {
    const isThis = parseInt(btn.dataset.day) === dayNum;
    btn.style.border = isThis ? "1px solid var(--primary-light)" : "1px solid var(--border-glass)";
    btn.style.background = isThis ? "rgba(124, 58, 237, 0.2)" : "rgba(255, 255, 255, 0.03)";
    btn.style.boxShadow = isThis ? "0 10px 25px rgba(124, 58, 237, 0.25)" : "none";
  });
  renderSchedule();
}

// Render Tickets
function renderTickets() {
  const container = document.getElementById("tickets-grid");
  if (!container) return;

  container.innerHTML = CONFERENCE_DATA.tickets.map(tier => {
    const price = appState.ticketCurrency === "LKR" ? `LKR ${tier.priceLKR}` : `$${tier.priceUSD}`;
    return `
      <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 2.5rem 2rem; border: ${tier.popular ? '2px solid var(--primary-light)' : '1px solid var(--border-glass)'}; box-shadow: ${tier.popular ? '0 15px 40px rgba(124, 58, 237, 0.25)' : 'var(--shadow-card)'}; transform: ${tier.popular ? 'scale(1.02)' : 'none'}; background: ${tier.popular ? 'rgba(20, 27, 48, 0.9)' : 'var(--bg-card)'};">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <h3 style="font-size: 1.45rem; font-weight: 800; color: #fff;">${tier.name}</h3>
            <span style="font-size: 0.74rem; font-weight: 700; padding: 0.25rem 0.65rem; border-radius: var(--radius-full); background: ${tier.color}22; color: ${tier.color}; border: 1px solid ${tier.color}55; text-transform: uppercase;">${tier.badge}</span>
          </div>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.75rem; min-height: 42px;">${tier.description}</p>
          <div style="margin-bottom: 2rem;">
            <div style="font-family: var(--font-heading); font-size: 2.6rem; font-weight: 900; color: #fff; line-height: 1;">${price}</div>
            <div style="font-size: 0.8rem; color: var(--text-dim); margin-top: 0.35rem;">per attendee (taxes included)</div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.8rem; margin-bottom: 2.5rem;">
            ${tier.features.map(f => `
              <div style="display: flex; align-items: flex-start; gap: 0.65rem; font-size: 0.9rem; color: #e2e8f0;">
                <span style="color: ${tier.color}; font-weight: bold;">✓</span>
                <span>${f}</span>
              </div>
            `).join('')}
          </div>
        </div>
        <button class="btn ${tier.popular ? 'btn-primary' : 'btn-outline'}" style="width: 100%; padding: 0.95rem;" onclick="openRegisterModal('${tier.id}')">
          Select ${tier.name}
        </button>
      </div>
    `;
  }).join('');
}

function setTicketCurrency(curr) {
  appState.ticketCurrency = curr;
  document.getElementById("btn-curr-lkr").style.background = curr === "LKR" ? "var(--primary)" : "transparent";
  document.getElementById("btn-curr-usd").style.background = curr === "USD" ? "var(--primary)" : "transparent";
  renderTickets();
}

// Render FAQs
function renderFAQs() {
  const container = document.getElementById("faq-accordion");
  if (!container) return;

  const filtered = appState.faqCategory === "All"
    ? CONFERENCE_DATA.faqs
    : CONFERENCE_DATA.faqs.filter(f => f.category === appState.faqCategory);

  container.innerHTML = filtered.map((faq, idx) => `
    <div class="glass-card" style="padding: 1.25rem 1.5rem; border: 1px solid var(--border-glass); cursor: pointer;" onclick="toggleFaq(${idx})">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h3 style="font-size: 1.08rem; font-weight: 700; color: #fff; padding-right: 1rem;">${faq.question}</h3>
        <div id="faq-icon-${idx}" style="width: 28px; height: 28px; border-radius: 50%; background: rgba(255, 255, 255, 0.05); display: flex; align-items: center; justify-content: center; font-size: 1rem; color: #fff; transition: transform 0.2s ease;">+</div>
      </div>
      <div id="faq-answer-${idx}" style="display: ${idx === 0 ? 'block' : 'none'}; margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid rgba(255, 255, 255, 0.06);">
        <p style="color: #cbd5e1; font-size: 0.94rem; line-height: 1.65;">${faq.answer}</p>
      </div>
    </div>
  `).join('');
}

function toggleFaq(idx) {
  const ans = document.getElementById(`faq-answer-${idx}`);
  const icon = document.getElementById(`faq-icon-${idx}`);
  if (!ans || !icon) return;

  const isOpen = ans.style.display === "block";
  ans.style.display = isOpen ? "none" : "block";
  icon.style.transform = isOpen ? "rotate(0)" : "rotate(45deg)";
  icon.style.background = isOpen ? "rgba(255, 255, 255, 0.05)" : "var(--primary)";
}

function setFaqCat(cat) {
  appState.faqCategory = cat;
  document.querySelectorAll(".faq-tab-btn").forEach(btn => {
    const isThis = btn.dataset.cat === cat;
    btn.style.border = isThis ? "1px solid var(--primary-light)" : "1px solid var(--border-glass)";
    btn.style.background = isThis ? "rgba(124, 58, 237, 0.25)" : "rgba(255, 255, 255, 0.03)";
    btn.style.color = isThis ? "#fff" : "var(--text-muted)";
  });
  renderFAQs();
}

// Modal Controllers
function openSpeakerModal(speakerId) {
  const spk = CONFERENCE_DATA.speakers.find(s => s.id === speakerId);
  if (!spk) return;

  document.getElementById("modal-speaker-avatar").src = spk.avatar;
  document.getElementById("modal-speaker-name").textContent = spk.name;
  document.getElementById("modal-speaker-role").textContent = spk.role;
  document.getElementById("modal-speaker-company").textContent = spk.company;
  document.getElementById("modal-speaker-talk").textContent = `"${spk.talkTitle}"`;
  document.getElementById("modal-speaker-bio").textContent = spk.bio;

  document.getElementById("speaker-modal").style.display = "flex";
}

function closeSpeakerModal() {
  document.getElementById("speaker-modal").style.display = "none";
}

function openRegisterModal(tier = "student") {
  appState.selectedTier = tier;
  document.getElementById("reg-step-form").style.display = "block";
  document.getElementById("reg-step-badge").style.display = "none";
  document.getElementById("reg-tier-select").value = tier;
  document.getElementById("register-modal").style.display = "flex";
}

function closeRegisterModal() {
  document.getElementById("register-modal").style.display = "none";
}

function openCFPModal() {
  document.getElementById("cfp-step-form").style.display = "block";
  document.getElementById("cfp-step-success").style.display = "none";
  document.getElementById("cfp-modal").style.display = "flex";
}

function closeCFPModal() {
  document.getElementById("cfp-modal").style.display = "none";
}

function handleRegistrationSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("reg-name").value;
  const email = document.getElementById("reg-email").value;
  const tier = document.getElementById("reg-tier-select").value;
  const inst = document.getElementById("reg-inst").value || "Independent Delegate";

  if (!name || !email) {
    alert("Please fill in your name and email.");
    return;
  }

  const refCode = "SLIIT-TC26-" + Math.floor(100000 + Math.random() * 900000);

  document.getElementById("badge-name").textContent = name;
  document.getElementById("badge-inst").textContent = inst;
  document.getElementById("badge-tier").textContent = tier.toUpperCase() + " PASS";
  document.getElementById("badge-ref").textContent = refCode;
  document.getElementById("badge-qr").src = `https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(refCode)}`;

  document.getElementById("reg-step-form").style.display = "none";
  document.getElementById("reg-step-badge").style.display = "block";

  showToast(`Registration Successful! Pass ${refCode} assigned to ${name}.`, "success");
}

function handleCFPSubmit(e) {
  e.preventDefault();
  const title = document.getElementById("cfp-title").value;
  if (!title) return;

  document.getElementById("cfp-confirmed-title").textContent = `"${title}"`;
  document.getElementById("cfp-step-form").style.display = "none";
  document.getElementById("cfp-step-success").style.display = "block";

  showToast(`CFP proposal "${title}" submitted to committee!`, "success");
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  const email = document.getElementById("newsletter-email").value;
  if (!email) return;
  showToast(`Subscribed ${email} to conference updates!`, "success");
  document.getElementById("newsletter-email").value = "";
}

function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("contact-name").value;
  showToast(`Thank you ${name}! Your inquiry has been sent.`, "success");
  document.getElementById("contact-form").reset();
}

function setVenueTab(tab) {
  appState.venueTab = tab;
  document.getElementById("venue-tab-halls").className = `btn btn-sm ${tab === 'halls' ? 'btn-primary' : 'btn-outline'}`;
  document.getElementById("venue-tab-travel").className = `btn btn-sm ${tab === 'travel' ? 'btn-primary' : 'btn-outline'}`;
  document.getElementById("venue-content-halls").style.display = tab === 'halls' ? 'grid' : 'none';
  document.getElementById("venue-content-travel").style.display = tab === 'travel' ? 'grid' : 'none';
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  initCountdown();
  renderStats();
  renderTracks();
  renderSpeakers();
  renderSchedule();
  renderTickets();
  renderFAQs();

  // Search input listener
  const searchInput = document.getElementById("schedule-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      appState.scheduleSearch = e.target.value;
      renderSchedule();
    });
  }

  // Track select listener
  const trackSelect = document.getElementById("schedule-track-select");
  if (trackSelect) {
    trackSelect.addEventListener("change", (e) => {
      appState.scheduleTrack = e.target.value;
      renderSchedule();
    });
  }

  // Mobile menu toggle
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const isVisible = mobileMenu.style.display === "flex";
      mobileMenu.style.display = isVisible ? "none" : "flex";
      menuBtn.textContent = isVisible ? "☰" : "✕";
    });
  }
});
