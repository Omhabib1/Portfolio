"use client";

import React, { useState, useEffect } from 'react';

/**
 * Om A Habib — Software Engineer & AI Applications Developer
 * Minimalist Swiss-Editorial Portfolio
 */

const DEFAULT_PORTRAIT = '/Portfolio/profile-photo.jpg';

const ACCENT_PALETTES = [
  { id: 'coral', label: 'Coral', hex: '#F2A29B' },
  { id: 'sage', label: 'Sage', hex: '#9ED5B5' },
  { id: 'amber', label: 'Amber', hex: '#EBC278' },
  { id: 'slate', label: 'Slate Blue', hex: '#A7C7E7' },
];

const FONT_MODES = [
  {
    id: 'sans',
    label: 'Sans',
    name: 'Plus Jakarta Sans',
    family: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  {
    id: 'serif',
    label: 'Serif',
    name: 'Instrument Serif',
    family: "'Instrument Serif', Georgia, serif",
  },
  {
    id: 'mono',
    label: 'Mono',
    name: 'JetBrains Mono',
    family: "'JetBrains Mono', monospace",
  },
];

const EXPERIENCE_TIMELINE = [
  {
    index: '01',
    company: 'Prolim Infosystems Pvt. Ltd.',
    role: 'Software Developer — AI Applications',
    period: 'Dec 2025 – Present',
    location: 'Hubli, Karnataka',
    accent: '#F2A29B',
    stack: ['React', 'Supabase', 'PostgreSQL', 'REST APIs', 'LLM Integration', 'Git'],
    bullets: [
      'Architected and shipped production full-stack modules for an enterprise compliance automation platform using React, Supabase/PostgreSQL, and REST APIs.',
      'Built end-to-end workflows across forms, dashboards, controls, policies, risks, and document management, persisting organization-specific context for downstream compliance pipelines.',
      'Integrated LLM-powered document generation into production workflows, automating policy and compliance artifact creation from structured organizational context.',
      'Partnered directly with product leadership to scope technical requirements, plan release milestones, and translate compliance rules into reliable software.',
    ],
  },
  {
    index: '02',
    company: 'Kodnest Technologies',
    role: 'Java Full Stack Intern',
    period: 'Feb 2025 – Oct 2025',
    location: 'Bangalore, Karnataka (Remote)',
    accent: '#9ED5B5',
    stack: ['Java', 'Spring Boot', 'Hibernate / JPA', 'MySQL', 'React.js', 'Agile'],
    bullets: [
      'Engineered and tested Java and Spring Boot backend microservices with Hibernate/JPA and MySQL, delivering documented REST APIs and normalized relational schemas.',
      'Built modular React.js frontend interfaces integrated with backend endpoints while participating in Agile sprints and peer code reviews.',
    ],
  },
];

const CORE_CAPABILITIES = [
  {
    category: 'Backend & Systems',
    items: ['Java', 'Spring Boot', 'Hibernate / JPA', 'REST APIs', 'Python'],
  },
  {
    category: 'Frontend & Product',
    items: ['React.js', 'JavaScript', 'HTML / CSS', 'Tailwind CSS', 'Context API'],
  },
  {
    category: 'Data & AI',
    items: ['PostgreSQL', 'MySQL', 'Supabase', 'LLM Integration', 'OpenCV / MediaPipe'],
  },
];

const MARQUEE_STACK = [
  'Java',
  'Spring Boot',
  'React.js',
  'PostgreSQL',
  'Supabase',
  'Hibernate / JPA',
  'Python',
  'OpenCV',
  'REST APIs',
  'LLM Integration',
  'MySQL',
  'Git',
  'Tailwind CSS',
];

const PROJECTS = [
  {
    id: 'compliance-ai',
    title: 'Enterprise Compliance & AI Policy Engine',
    accent: '#F2A29B',
    backdrop: '#EAE7E1',
    summary:
      'Production full-stack platform with React, Supabase/PostgreSQL, and context-aware LLM policy generation across controls, risk registers, and audit workflows.',
    role: 'Software Developer — AI Applications · Prolim Infosystems Pvt. Ltd.',
    period: 'Dec 2025 – Present',
    stack: ['React', 'Supabase', 'PostgreSQL', 'LLM Integration', 'REST APIs', 'Git'],
    architectureNotes: [
      'Organization-scoped PostgreSQL schemas with Row-Level Security (RLS) persisting controls, policies, and risk assessments.',
      'Context-grounded prompt pipeline injecting structured organizational metadata into LLM document synthesis.',
      'End-to-end React workflows connecting compliance forms, real-time dashboards, and versioned policy exports.',
    ],
    preview: (
      <div className="w-full max-w-2xl bg-white rounded-xl border border-black/10 shadow-sm p-5 md:p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
          <div>
            <p className="text-[10px] font-mono text-neutral-400">WORKSPACE / COMPLIANCE-POLICY</p>
            <p className="text-sm font-semibold text-neutral-900 mt-0.5">Information Security & Access Control Policy</p>
          </div>
          <span className="px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-700 text-[10px] font-mono">Org Context Synced</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-100"><p className="text-[9px] text-neutral-400">Controls</p><p className="font-semibold text-neutral-900 mt-0.5">42 Mapped</p></div>
          <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-100"><p className="text-[9px] text-neutral-400">Risk Register</p><p className="font-semibold text-neutral-900 mt-0.5">14 Assessed</p></div>
          <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-100"><p className="text-[9px] text-neutral-400">Store</p><p className="font-semibold text-neutral-900 mt-0.5">PostgreSQL</p></div>
        </div>
        <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-100 space-y-1">
          <p className="text-[10px] font-medium text-neutral-700">Generated Policy Section 3.2 — Role-Based Access Review</p>
          <p className="text-xs text-neutral-500 leading-relaxed">Privileged database access in production environments shall be reviewed quarterly and logged against organizational control ID AC-04.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'quiz-platform',
    title: 'Full-Stack Assessment & Quiz Platform',
    accent: '#9ED5B5',
    backdrop: '#DFE5E1',
    summary:
      'Spring Boot, Hibernate/JPA, MySQL, and React.js platform featuring a timed assessment state machine, automated validation, and relational scoring.',
    role: 'Full-Stack Engineering Project',
    period: '2025',
    stack: ['Java', 'Spring Boot', 'Hibernate / JPA', 'MySQL', 'React.js', 'REST APIs'],
    architectureNotes: [
      'Normalized MySQL relational tables mapped via Hibernate/JPA for users, assessments, question banks, and attempt histories.',
      'Stateless Spring Boot REST controllers enforcing server-side answer validation and deterministic score computation.',
      'Timed React assessment state machine with dynamic question fetching and instant breakdown views.',
    ],
    preview: (
      <div className="w-full max-w-2xl bg-white rounded-xl border border-black/10 shadow-sm p-5 md:p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
          <span className="text-[10px] font-mono text-neutral-500">POST /api/v1/assessments/submit</span>
          <span className="text-[10px] font-mono text-neutral-900 bg-neutral-100 px-2 py-0.5 rounded">12:35 remaining</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-[10px] text-neutral-500"><span>Question 08 of 15 · Spring Data JPA</span><span>Hibernate MySQL</span></div>
          <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden"><div className="h-full w-1/2 bg-neutral-900 rounded-full" /></div>
        </div>
        <p className="text-sm font-medium text-neutral-900">Which annotation configures bidirectional entity ownership in Hibernate/JPA?</p>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2 rounded-lg border border-neutral-200 text-neutral-600 font-mono">@JoinColumn</div>
          <div className="p-2 rounded-lg bg-neutral-900 text-white font-mono">mappedBy = "quiz"</div>
        </div>
      </div>
    ),
  },
  {
    id: 'vision-voice',
    title: 'Computer Vision Virtual Mouse & Voice Assistant',
    accent: '#EBC278',
    backdrop: '#ECE5D8',
    summary:
      'Real-time hand-landmark gesture tracking and voice automation built with OpenCV, MediaPipe, NumPy, PyAutoGUI, and SpeechRecognition.',
    role: 'Computer Vision & Systems Automation',
    period: '2025',
    stack: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'PyAutoGUI', 'SpeechRecognition', 'pyttsx3'],
    architectureNotes: [
      '21-point 3D hand-landmark extraction at real-time frame rates using MediaPipe and OpenCV.',
      'NumPy coordinate interpolation and smoothing mapped to PyAutoGUI cursor movement, pinch clicks, and scroll gestures.',
      'Voice command loop combining SpeechRecognition and pyttsx3 TTS for browser, search, maps, and media control.',
    ],
    preview: (
      <div className="w-full max-w-2xl bg-white rounded-xl border border-black/10 shadow-sm p-5 md:p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
          <span className="text-[10px] font-mono text-neutral-700">mediapipe.hands · 21_LANDMARKS</span>
          <span className="text-[10px] font-mono text-neutral-500">SpeechRecognition Active</span>
        </div>
        <div className="grid grid-cols-12 gap-3 items-center">
          <div className="col-span-12 md:col-span-5 h-28 md:h-32 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-24 md:h-24 text-neutral-800" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="50" cy="76" r="6" /><line x1="50" y1="70" x2="28" y2="38" /><line x1="50" y1="70" x2="43" y2="22" />
              <line x1="50" y1="70" x2="57" y2="24" /><line x1="50" y1="70" x2="71" y2="38" />
              <circle cx="28" cy="38" r="2.5" fill="currentColor" /><circle cx="43" cy="22" r="2.5" fill="currentColor" />
              <circle cx="57" cy="24" r="2.5" fill="currentColor" /><circle cx="71" cy="38" r="2.5" fill="currentColor" />
            </svg>
          </div>
          <div className="col-span-12 md:col-span-7 space-y-1.5 text-[10px] font-mono">
            <div className="p-2 rounded-lg bg-neutral-50 border border-neutral-100 flex justify-between"><span className="text-neutral-400">CURSOR_XY</span><span className="text-neutral-900">(842, 419)</span></div>
            <div className="p-2 rounded-lg bg-neutral-50 border border-neutral-100 flex justify-between"><span className="text-neutral-400">GESTURE</span><span className="text-neutral-900">LEFT_CLICK</span></div>
            <div className="p-2 rounded-lg bg-neutral-50 border border-neutral-100 flex justify-between"><span className="text-neutral-400">VOICE_CMD</span><span className="text-neutral-900">"Open Maps"</span></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'recipe-platform',
    title: 'Real-Time Recipe Discovery Platform',
    accent: '#A7C7E7',
    backdrop: '#E0E5EC',
    summary:
      'Scalable React.js & Context API web application powered by TheMealDB API and Tailwind CSS for instant culinary search and ingredient indexing.',
    role: 'Frontend Systems Architecture',
    period: '2025',
    stack: ['React.js', 'Context API', 'TheMealDB API', 'Tailwind CSS', 'JavaScript'],
    architectureNotes: [
      'Centralized React Context API store managing query state, category filters, and asynchronous fetch states without prop drilling.',
      'Real-time REST integration with TheMealDB API parsing structured ingredient measurements and step-by-step instructions.',
      'Responsive editorial layout engineered with Tailwind CSS across mobile, tablet, and desktop viewports.',
    ],
    preview: (
      <div className="w-full max-w-2xl bg-white rounded-xl border border-black/10 shadow-sm p-5 md:p-6 space-y-4">
        <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-neutral-50 border border-neutral-200 text-xs">
          <span className="text-neutral-600">Query: "Paneer" · TheMealDB REST API</span>
          <span className="font-mono text-[10px] text-neutral-500">Context Store</span>
        </div>
        <div className="grid grid-cols-2 gap-2.5 text-xs">
          <div className="p-3 rounded-lg border border-neutral-100 bg-neutral-50/60 space-y-1"><p className="font-semibold text-neutral-900">Matar Paneer</p><p className="text-[10px] text-neutral-500">Category: Vegetarian · Area: Indian</p><p className="text-[10px] font-mono text-neutral-600 pt-1">12 Ingredients Indexed</p></div>
          <div className="p-3 rounded-lg border border-neutral-100 bg-neutral-50/60 space-y-1"><p className="font-semibold text-neutral-900">Paneer Tikka</p><p className="text-[10px] text-neutral-500">Category: Starter · Area: Indian</p><p className="text-[10px] font-mono text-neutral-600 pt-1">10 Ingredients Indexed</p></div>
        </div>
      </div>
    ),
  },
];

const FAQ_ITEMS = [
  {
    num: '01',
    question: 'What is your primary technical stack?',
    answer:
      'My core production stack centers on Java (primary), Spring Boot, Hibernate/JPA, and REST APIs on the backend; React.js, JavaScript, and Tailwind CSS on the frontend; PostgreSQL, Supabase, and MySQL for data persistence; and Python with LLM integration for AI application workflows.',
  },
  {
    num: '02',
    question: 'What full-stack and AI systems have you shipped in production?',
    answer:
      'At Prolim Infosystems Pvt. Ltd., I build full-stack modules for an enterprise compliance automation platform using React, Supabase/PostgreSQL, and REST APIs—including forms, dashboards, controls, policies, risks, and LLM-powered document generation grounded in organization-specific context.',
  },
  {
    num: '03',
    question: 'Are you available for on-site, hybrid, or remote roles?',
    answer:
      'Yes. I am currently based in Hubballi, Karnataka and previously worked remotely with a Bangalore engineering team during my Java Full Stack internship at Kodnest Technologies. I am open to full-time Software Engineer roles in Bengaluru, Hubballi, or remote across India.',
  },
  {
    num: '04',
    question: 'How do you approach backend and product development workflows?',
    answer:
      'I start with clean relational data modeling and well-contracted REST APIs, collaborate directly with product stakeholders to clarify edge cases early, and deliver modular, peer-reviewed React interfaces backed by automated validation and Git version control.',
  },
];

export default function Home() {
  const [fontIndex, setFontIndex] = useState(0);
  const [accentIndex, setAccentIndex] = useState(0);
  const [paperMode, setPaperMode] = useState(false);
  const [portraitSrc, setPortraitSrc] = useState(DEFAULT_PORTRAIT);
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const [toast, setToast] = useState('');
  const [istClock, setIstClock] = useState({
    date: 'Monday, 16 November',
    time: '00:18:00',
  });
  const [currentYear] = useState(2026);

  const RESUME_URL = 'https://drive.google.com/file/d/1MyMYrMDjkEkTnnTBuSBb6S-1No8AxkWs/view?usp=sharing';

  const currentFont = FONT_MODES[fontIndex];
  const currentAccent = ACCENT_PALETTES[accentIndex].hex;

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap';
    document.head.appendChild(link);
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  useEffect(() => {
    const tick = () => {
      try {
        const now = new Date();
        const date = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Kolkata',
          weekday: 'long',
          day: 'numeric',
          month: 'long',
        }).format(now);
        const time = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now);
        setIstClock({ date, time });
      } catch {
        // Fallback retained
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => {
      setToast((prev) => (prev === msg ? '' : prev));
    }, 2400);
  };

  const copyToClipboard = (value: string, label?: string) => {
    const textarea = document.createElement('textarea');
    textarea.value = value;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      showToast(label || `Copied ${value}`);
    } catch {
      showToast('Copy unavailable');
    }
    document.body.removeChild(textarea);
  };

  const bgPage = paperMode ? '#F5F4F0' : '#0B0B0B';
  const bgCard = paperMode ? '#FFFFFF' : '#141414';
  const bgInner = paperMode ? '#EFECE6' : '#1A1A1A';
  const fgPrimary = paperMode ? '#121212' : '#F5F5F3';
  const fgSecondary = paperMode ? '#5E5D59' : '#9A9A95';
  const borderLine = paperMode ? '#E2DFD7' : '#222222';
  const ctaBg = paperMode ? '#121212' : '#F5F5F3';
  const ctaFg = paperMode ? '#F5F4F0' : '#0B0B0B';

  // Consistent container - fluid padding, max-width
  const containerStyle: React.CSSProperties = {
    maxWidth: '1380px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
  };

  return (
    <div
      id="top"
      style={{
        backgroundColor: bgPage,
        color: fgPrimary,
        fontFamily: currentFont.family,
      }}
      className="min-h-screen transition-colors duration-300"
    >
      <style>{`
        /* Global reset for consistent cross-browser rendering */
        *, *::before, *::after { box-sizing: border-box; }
        
        html {
          scroll-behavior: smooth;
          overflow-x: hidden;
          overflow-y: scroll; /* keeps layout stable while hiding scrollbar */
          -webkit-text-size-adjust: 100%;
        }
        
        body {
          margin: 0;
          overflow-x: hidden;
          min-width: 0;
        }
        
        /* Hide scrollbars cross-browser but keep scroll functionality */
        html::-webkit-scrollbar,
        body::-webkit-scrollbar,
        *::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }
        html, body, * {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        /* Reduced motion - only affects animations, not scroll behavior */
        @media (prefers-reduced-motion: reduce) {
          .editorial-marquee-track { animation: none !important; }
        }
        
        /* Focus visible for accessibility */
        :focus-visible {
          outline: 2px solid currentColor;
          outline-offset: 2px;
        }
        
        /* Marquee animation */
        @keyframes editorial-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .editorial-marquee-track {
          display: flex;
          width: max-content;
          animation: editorial-marquee 40s linear infinite;
          will-change: transform;
        }
        .editorial-marquee-wrap:hover .editorial-marquee-track {
          animation-play-state: paused;
        }
        
        /* Project preview frame - responsive aspect ratio */
        .project-preview-frame {
          aspect-ratio: 16 / 10;
          width: 100%;
        }
        @media (max-width: 1023px) {
          .project-preview-frame { aspect-ratio: 4 / 3; }
        }
        @media (max-width: 639px) {
          .project-preview-frame { aspect-ratio: 1 / 1; }
        }
        
        /* Selection styles */
        ::selection {
          background-color: ${currentAccent}40;
        }
        
        /* Print styles */
        @media print {
          .editorial-marquee-track { animation: none; }
          header, footer, section { break-inside: avoid; }
        }
      `}</style>

      {toast && (
        <div
          role="status"
          aria-live="polite"
          style={{
            backgroundColor: bgCard,
            borderColor: borderLine,
            color: fgPrimary,
          }}
          className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-full border text-xs flex items-center gap-2 shadow-xl"
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: currentAccent }} />
          <span>{toast}</span>
        </div>
      )}

      {/* ==========================================================================
          01. HERO — Full-bleed asymmetric 12-col grid (7/5 split on lg+)
         ========================================================================== */}
      <header
        style={{ borderColor: borderLine }}
        className="relative grid grid-cols-1 lg:grid-cols-12 gap-0 border-b min-h-[70vh] lg:min-h-[80vh]"
      >
        {/* Left 7 Columns: Editorial Statement */}
        <div className="lg:col-span-7 flex flex-col justify-between px-5 sm:px-8 md:px-12 lg:px-16 py-10 lg:py-14 min-w-0">
          {/* Top Availability Indicator */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-2 text-xs tracking-tight">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: currentAccent }} />
              <span style={{ color: fgSecondary }} className="hidden sm:inline">Open to Software & AI Engineering Roles</span>
            </div>
          </div>

          {/* Center Display Headline & Subcopy */}
          <div className="my-8 lg:my-4 max-w-[42ch] min-w-0">
            <h1
              className={`font-normal tracking-[-0.03em] leading-[1.05] ${currentFont.id === 'serif' ? 'text-[clamp(2.2rem,5vw,4.2rem)]' : 'text-[clamp(2rem,4.2vw,3.6rem)]'}`}
            >
              Software Engineer building scalable full-stack systems and AI workflows.
            </h1>

            <p style={{ color: fgSecondary }} className="text-sm sm:text-base lg:text-lg max-w-[38ch] leading-relaxed mt-5">
              I&apos;m Om A Habib, based in Hubballi, Karnataka — currently engineering enterprise compliance automation and LLM document pipelines at Prolim Infosystems Pvt. Ltd.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#experience"
                style={{ backgroundColor: ctaBg, color: ctaFg }}
                className="rounded-full px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity inline-block whitespace-nowrap"
              >
                View Experience
              </a>
            </div>
          </div>

          {/* Bottom Editorial Links */}
          <div style={{ color: fgSecondary }} className="text-[11px] sm:text-xs flex flex-wrap items-center gap-x-4 gap-y-1.5">
            <a href="https://github.com/Omhabib1" target="_blank" rel="noopener noreferrer" style={{ color: fgPrimary }} className="underline underline-offset-2 hover:opacity-75 transition-opacity whitespace-nowrap">GitHub</a>
            <a href="https://www.linkedin.com/in/om-habib-14a733233/" target="_blank" rel="noopener noreferrer" style={{ color: fgPrimary }} className="underline underline-offset-2 hover:opacity-75 transition-opacity whitespace-nowrap">LinkedIn</a>
            <a href="https://leetcode.com/u/Omhabib/" target="_blank" rel="noopener noreferrer" style={{ color: fgPrimary }} className="underline underline-offset-2 hover:opacity-75 transition-opacity whitespace-nowrap">LeetCode</a>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" style={{ color: fgPrimary }} className="underline underline-offset-2 hover:opacity-75 transition-opacity whitespace-nowrap">Resume (PDF)</a>
          </div>
        </div>

        {/* Right 5 Columns: Portrait (Desktop) - fills full grid cell */}
        <div className="lg:col-span-5 relative bg-[#9A958E] overflow-hidden hidden lg:block min-w-0 h-full">
          <img
            src={portraitSrc}
            alt="Om A Habib — Hubballi, IN"
            className="w-full h-full object-cover select-none"
          />
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[11px] text-white/90 pointer-events-none">
            <span>Om A Habib — Hubballi, IN</span>
          </div>
        </div>

        {/* Mobile Portrait (stacked below header on mobile) */}
        <div className="lg:hidden w-full bg-[#9A958E] overflow-hidden min-w-0">
          <div style={{ aspectRatio: '607 / 852', maxWidth: '100%', margin: '0 auto' }} className="relative w-full">
            <img
              src={portraitSrc}
              alt="Om A Habib — Hubballi, IN"
              className="w-full h-full object-cover select-none"
            />
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[11px] text-white/90 pointer-events-none">
              <span>Om A Habib — Hubballi, IN</span>
            </div>
          </div>
        </div>
      </header>

      {/* ==========================================================================
          MAIN EDITORIAL CONTAINER
         ========================================================================== */}
      <main style={containerStyle} className="relative">
        {/* ==========================================================================
            02. EXPERIENCE & EDUCATION — Two-column asymmetric timeline
           ========================================================================== */}
        <section
          id="experience"
          style={{ borderColor: borderLine }}
          className="py-16 md:py-24 lg:py-28 border-b"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left Sticky Header (4 cols) */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24 space-y-3">
                <p style={{ color: fgSecondary }} className="text-[10px] uppercase tracking-[0.2em]">Career Timeline</p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-[-0.02em] leading-tight">Experience</h2>
                <p style={{ color: fgSecondary }} className="text-sm leading-relaxed max-w-xs">
                  Production software engineering across enterprise AI compliance platforms and Java full-stack web services.
                </p>
              </div>
            </div>

            {/* Right Structured Timeline (8 cols) */}
            <div className="lg:col-span-8 space-y-6 lg:space-y-8">
              {EXPERIENCE_TIMELINE.map((role) => (
                <article
                  key={role.index}
                  style={{ backgroundColor: bgCard, borderColor: borderLine }}
                  className="rounded-2xl border p-5 md:p-7 lg:p-8 space-y-5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b" style={{ borderColor: borderLine }}>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span style={{ color: role.accent }} className="text-[10px] font-mono shrink-0">{role.index}</span>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-normal tracking-tight leading-snug">{role.company}</h3>
                      </div>
                      <p style={{ color: role.accent }} className="text-sm mt-1 leading-snug">{role.role}</p>
                    </div>
                    <div style={{ color: fgSecondary }} className="text-[10px] sm:text-xs shrink-0 text-right sm:text-right mt-2 sm:mt-0">
                      <p className="font-mono">{role.period}</p>
                      <p>{role.location}</p>
                    </div>
                  </div>

                  <ul style={{ color: fgSecondary }} className="space-y-2.5 text-sm leading-relaxed list-disc pl-5">
                    {role.bullets.map((bullet, idx) => <li key={idx}>{bullet}</li>)}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {role.stack.map((tech) => (
                      <span
                        key={tech}
                        style={{ backgroundColor: bgInner, borderColor: borderLine, color: fgSecondary }}
                        className="px-2.5 py-1 rounded-full border text-[10px] sm:text-xs whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}

              {/* Education & Certification Bar */}
              <div style={{ backgroundColor: bgCard, borderColor: borderLine }} className="rounded-2xl border p-5 md:p-7 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                <div className="space-y-1.5">
                  <p style={{ color: fgSecondary }} className="text-[10px] uppercase tracking-[0.15em]">Education</p>
                  <h4 className="text-base md:text-lg font-medium leading-snug">Jain College of Engineering and Technology</h4>
                  <p style={{ color: fgSecondary }} className="text-sm leading-snug">B.E. in Computer Science and Engineering · Hubballi</p>
                  <p style={{ color: currentAccent }} className="text-[10px] font-mono pt-1">2025 · CGPA: 8.21</p>
                </div>
                <div style={{ borderColor: borderLine }} className="space-y-1.5 md:border-l md:pl-6">
                  <p style={{ color: fgSecondary }} className="text-[10px] uppercase tracking-[0.15em]">Certification</p>
                  <h4 className="text-base md:text-lg font-medium leading-snug">Java Full Stack Development Internship</h4>
                  <p style={{ color: fgSecondary }} className="text-sm leading-snug">Kodnest Pvt. Ltd. · Bangalore, Karnataka</p>
                  <p style={{ color: fgSecondary }} className="text-[10px] font-mono pt-1">Issued October 2025</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            03. CAPABILITIES — Three-column editorial bento grid
           ========================================================================== */}
        <section
          id="capabilities"
          style={{ borderColor: borderLine }}
          className="py-16 md:py-24 lg:py-28 border-b"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 md:gap-6 lg:gap-8">
            {/* Left Card: Engineering Philosophy & Clock (4 cols lg, 6 cols md, 12 cols mobile) */}
            <div
              style={{ backgroundColor: bgCard, borderColor: borderLine }}
              className="lg:col-span-4 md:col-span-6 col-span-12 rounded-2xl border p-6 md:p-8 flex flex-col"
            >
              <div className="space-y-3 flex-1">
                <p style={{ color: fgSecondary }} className="text-[10px] uppercase tracking-[0.15em]">Engineering Approach</p>
                <h2 className="text-xl md:text-2xl font-normal leading-snug tracking-[-0.02em]"><span style={{ color: currentAccent }}>Systems-first</span> development from relational schema to production interface.</h2>
                <p style={{ color: fgSecondary }} className="text-sm leading-relaxed">Focused on predictable REST architecture, strict data integrity, and practical AI integration that solves real operational bottlenecks.</p>
              </div>
              <div style={{ borderColor: borderLine }} className="pt-6 mt-auto border-t">
                <p style={{ color: fgSecondary }} className="text-[10px]">{istClock.date} · Hubballi IST</p>
                <p className="text-2xl md:text-3xl font-normal tracking-tight tabular-nums mt-1">{istClock.time}</p>
              </div>
            </div>

            {/* Center Card: Core Engineering Stack (5 cols lg, 6 cols md, 12 cols mobile) */}
            <div
              style={{ backgroundColor: bgCard, borderColor: borderLine }}
              className="lg:col-span-5 md:col-span-6 col-span-12 rounded-2xl border p-6 md:p-8 flex flex-col"
            >
              <div className="space-y-1 mb-5">
                <p style={{ color: fgSecondary }} className="text-[10px] uppercase tracking-[0.15em]">Core Capabilities</p>
                <h3 className="text-lg md:text-xl font-normal">Technical Stack</h3>
              </div>
              <div className="space-y-4 flex-1">
                {CORE_CAPABILITIES.map((group) => (
                  <div key={group.category} style={{ borderColor: borderLine }} className="pb-4 last:pb-0 border-b last:border-b-0">
                    <p style={{ color: fgSecondary }} className="text-[10px] mb-2 uppercase tracking-[0.1em]">{group.category}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span key={item} style={{ backgroundColor: bgInner, borderColor: borderLine }} className="px-2.5 py-1 rounded-full border text-[10px] whitespace-nowrap">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Stacked Cards: Metrics & Contact (3 cols lg, 12 cols md/mobile) */}
            <div className="lg:col-span-3 col-span-12 flex flex-col gap-5">
              {/* Top Card: Availability & Focus */}
              <div style={{ backgroundColor: bgCard, borderColor: borderLine }} className="rounded-2xl border p-6 flex flex-col">
                <div className="space-y-2">
                  <p style={{ color: fgSecondary }} className="text-[10px] uppercase tracking-[0.15em]">Availability</p>
                  <p className="text-base md:text-lg font-normal leading-snug">Bengaluru, Hubballi & Remote</p>
                </div>
                <div style={{ borderColor: borderLine }} className="pt-4 mt-auto border-t flex items-center justify-between text-[10px]">
                  <span style={{ color: fgSecondary }}>B.E. CSE CGPA</span>
                  <span className="font-mono font-medium">8.21 / 10</span>
                </div>
              </div>

              {/* Bottom Card: Direct Contact */}
              <div style={{ backgroundColor: bgCard, borderColor: borderLine }} className="rounded-2xl border p-6 flex flex-col">
                <div className="space-y-2">
                  <p style={{ color: fgSecondary }} className="text-[10px] uppercase tracking-[0.15em]">Direct Contact</p>
                  <p className="text-sm leading-relaxed" style={{ color: fgSecondary }}>Reach out directly for Software Engineer or AI Applications opportunities.</p>
                </div>
                <div className="space-y-2 pt-4 mt-auto">
                  <button type="button" onClick={() => copyToClipboard('omhabib1234@gmail.com', 'Copied omhabib1234@gmail.com')} style={{ backgroundColor: bgInner, borderColor: borderLine }} className="w-full px-3 py-2 rounded-xl border text-left text-[10px] flex items-center justify-between hover:opacity-80 transition-opacity cursor-pointer"><span className="truncate">omhabib1234@gmail.com</span><span style={{ color: fgSecondary }} className="ml-2 shrink-0">Copy</span></button>
                  <button type="button" onClick={() => copyToClipboard('+91 8431795097', 'Copied +91 84317 95097')} style={{ backgroundColor: bgInner, borderColor: borderLine }} className="w-full px-3 py-2 rounded-xl border text-left text-[10px] flex items-center justify-between hover:opacity-80 transition-opacity cursor-pointer"><span>+91 84317 95097</span><span style={{ color: fgSecondary }}>Copy</span></button>
                </div>
              </div>
            </div>
          </div>

          {/* Seamless Monochrome Infinite Marquee */}
          <div className="overflow-hidden relative editorial-marquee-wrap py-3 mt-6" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
            <div className="editorial-marquee-track items-center">
              {[...MARQUEE_STACK, ...MARQUEE_STACK].map((item, idx) => (
                <span key={`${item}-${idx}`} style={{ backgroundColor: bgCard, borderColor: borderLine, color: fgSecondary }} className="mx-2 px-3 py-1.5 rounded-full border text-[10px] whitespace-nowrap select-none shrink-0">{item}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================================================
            04. PROJECTS — Stacked horizontal split cards (5/7 on lg+)
           ========================================================================== */}
        <section
          id="projects"
          style={{ borderColor: borderLine }}
          className="py-16 md:py-24 lg:py-28 border-b"
        >
          <div className="space-y-2 mb-10 lg:mb-14">
            <p style={{ color: fgSecondary }} className="text-[10px] uppercase tracking-[0.2em]">Selected Work</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-[-0.02em] leading-tight">Engineering Projects</h2>
            <p style={{ color: fgSecondary }} className="text-sm leading-relaxed pt-1">Production enterprise features and full-stack applications built from relational data models to responsive interfaces.</p>
          </div>

          <div className="space-y-6 lg:space-y-8">
            {PROJECTS.map((project, idx) => (
              <article
                key={project.id}
                style={{ backgroundColor: bgCard, borderColor: borderLine }}
                className="rounded-2xl border overflow-hidden grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Left Content: 5 cols lg, full width mobile */}
                <div className="lg:col-span-5 p-5 md:p-7 lg:p-8 flex flex-col justify-between">
                  <div>
                    <h3 style={{ color: project.accent }} className="text-[10px] font-medium uppercase tracking-[0.1em]">{project.title}</h3>
                    <p className="text-lg md:text-xl lg:text-[22px] leading-[1.35] font-normal mt-3">{project.summary}</p>
                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {project.stack.map((tag) => (
                        <span key={tag} style={{ backgroundColor: bgInner, borderColor: borderLine, color: fgSecondary }} className="px-2 py-1 rounded-full border text-[10px] whitespace-nowrap">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <button type="button" onClick={() => setSelectedProject(project)} style={{ borderColor: borderLine }} className="mt-6 w-fit rounded-full border px-4 py-2 text-[10px] font-medium hover:opacity-75 transition-opacity cursor-pointer whitespace-nowrap">Inspect architecture →</button>
                </div>

                {/* Right Preview Frame: 7 cols lg, stacked below on mobile */}
                <div style={{ backgroundColor: project.backdrop }} className="lg:col-span-7 hidden lg:flex items-center justify-center p-5 md:p-8 relative project-preview-frame">
                  {project.preview}
                </div>

                {/* Mobile preview (visible only on mobile, stacked below content) */}
                <div className="lg:hidden p-5 border-t" style={{ borderColor: borderLine, backgroundColor: project.backdrop }}>
                  {project.preview}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ==========================================================================
            05. FAQ ACCORDION
           ========================================================================== */}
        <section
          id="faq"
          style={{ borderColor: borderLine }}
          className="py-16 md:py-24 lg:py-28 border-b"
        >
          <div className="space-y-2 mb-10 lg:mb-14">
            <p style={{ color: fgSecondary }} className="text-[10px] uppercase tracking-[0.2em]">Frequently Asked</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-[-0.02em] leading-tight">Questions</h2>
          </div>

          <div className="space-y-2.5">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.num}
                style={{ backgroundColor: bgCard, borderColor: borderLine }}
                className="rounded-2xl border p-5 md:p-6 group"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-2.5">
                    <span style={{ color: currentAccent }} className="text-[10px] font-mono shrink-0">{item.num}</span>
                    <span className="text-base md:text-lg font-medium leading-snug">{item.question}</span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 shrink-0 transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <p style={{ color: fgSecondary, borderColor: borderLine }} className="text-sm leading-relaxed mt-4 pt-4 border-t">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ==========================================================================
            06. FOOTER
           ========================================================================== */}
        <footer style={{ borderColor: borderLine }} className="py-10 border-t">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p style={{ color: fgSecondary }} className="text-[10px]">© {currentYear} Om A Habib. Built with Next.js, React, and Tailwind CSS.</p>
            <div className="flex flex-wrap items-center justify-end gap-3">
              <button type="button" onClick={() => setFontIndex((i) => (i + 1) % FONT_MODES.length)} style={{ borderColor: borderLine }} className="px-3 py-1.5 rounded-full border text-[10px] hover:opacity-75 transition-opacity cursor-pointer whitespace-nowrap">Font: {currentFont.label}</button>
              <button type="button" onClick={() => setAccentIndex((i) => (i + 1) % ACCENT_PALETTES.length)} style={{ borderColor: borderLine }} className="px-3 py-1.5 rounded-full border text-[10px] hover:opacity-75 transition-opacity cursor-pointer whitespace-nowrap">Accent: {ACCENT_PALETTES[accentIndex].label}</button>
              <button type="button" onClick={() => setPaperMode(!paperMode)} style={{ borderColor: borderLine }} className="px-3 py-1.5 rounded-full border text-[10px] hover:opacity-75 transition-opacity cursor-pointer whitespace-nowrap">{paperMode ? 'Dark' : 'Light'} Mode</button>
            </div>
          </div>
        </footer>
      </main>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div role="dialog" aria-modal="true" aria-labelledby="project-modal-title" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div style={{ backgroundColor: bgCard, borderColor: borderLine }} className="w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border p-6 md:p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 id="project-modal-title" style={{ color: selectedProject.accent }} className="text-[10px] font-medium uppercase tracking-[0.1em]">{selectedProject.title}</h2>
                <p style={{ color: fgSecondary }} className="text-sm mt-1">{selectedProject.role} · {selectedProject.period}</p>
              </div>
              <button type="button" onClick={() => setSelectedProject(null)} style={{ color: fgSecondary }} className="text-2xl leading-none hover:opacity-75 transition-opacity cursor-pointer p-1">×</button>
            </div>
            <div className="space-y-6">
              <p style={{ color: fgSecondary }} className="text-base leading-relaxed">{selectedProject.summary}</p>
              <div style={{ borderColor: borderLine }} className="pt-5 border-t">
                <p style={{ color: fgSecondary }} className="text-[10px] uppercase tracking-[0.15em] mb-3">Architecture Notes</p>
                <ul className="space-y-2 text-sm leading-relaxed" style={{ color: fgSecondary }}>
                  {selectedProject.architectureNotes.map((note, idx) => <li key={idx} className="flex gap-2"><span className="shrink-0">•</span><span>{note}</span></li>)}
                </ul>
              </div>
              <div style={{ borderColor: borderLine }} className="pt-5 border-t">
                <p style={{ color: fgSecondary }} className="text-[10px] uppercase tracking-[0.15em] mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.stack.map((tag) => (
                    <span key={tag} style={{ backgroundColor: bgInner, borderColor: borderLine, color: fgSecondary }} className="px-2.5 py-1 rounded-full border text-[10px] whitespace-nowrap">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}