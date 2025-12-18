export const portfolioData = {
  personal: {
    name: "SNEHA CHOUKSEY",
    taglines: [
      "Full Stack Engineer",
      "GenAI Engineer"
    ],
    location: "Jabalpur, India",
    email: "snehachouksey2403@gmail.com",
    phone: "+91 9340749064",
    linkedin: "https://www.linkedin.com/in/sneha-chouksey",
    bio: "From engineering systems to engineering intelligence. I specialize in building production-ready SaaS applications with deep expertise in the MERN stack and Next.js ecosystem, and AI integrations. My journey is about transforming Real World problems into elegant, intelligent solutions."
  },

  skills: {
    languages: [
      { name: "TypeScript", level: 75 },
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 75 },
      { name: "Java", level: 85 }
    ],
    frontend: [
      { name: "Next.js", level: 95 },
      { name: "React", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Shadcn/ui", level: 90 },
      { name: "Framer Motion", level: 85 },
      { name: "GSAP", level: 80 }
    ],
    backend: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 75 },
      { name: "Prisma ORM", level: 85 },
      { name: "BullMQ", level: 80 },
      { name: "WebSockets", level: 50 }
    ],
    ai: [
      { name: "LangChain", level: 80 },
      { name: "RAG Pipelines", level: 85 },
      { name: "Vector Database(Qdrant)", level: 80 },
      { name: "OpenAI API", level: 85 },
      { name: "Gemini API", level: 85 },
      { name: "Groq", level: 80 }
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "Postman", level: 90 },
      { name: "Docker", level: 60 },
      { name: "Vercel", level: 95 },
      { name: "Render", level: 90 },
      { name: "Clerk Auth", level: 85 }
    ]
  },

  projects: [
    {
      id: 1,
      name: "Acadlyst",
      tagline: "AI-Powered Academic Copilot",
      description: "A context-aware PAG based Q&A engine that enables semantic search over PDF textbooks, delivering accurate answers with page citations. Features video summarization, quiz generation, and tiered access control.",
      features: [
        "Context-aware Q&A with semantic search over PDFs",
        "YouTube video summarization and quiz generation",
        "Event-driven backend with BullMQ for async tasks",
        "Role-based access control with Clerk",
        "Production-grade SaaS architecture"
      ],
      tech: [
        "LangChain",
        "Qdrant",
        "Node.js",
        "Express.js",
        "BullMQ",
        "Redis",
        "Next.js 14",
        "Cloudinary",
        "Multer",
        "Docker Compose",
        "Clerk",
        "PostgreSQL",
        "Docker Compose",
        "Render",
        "Vercel"
      ],
      highlights: [
        "Zero-latency UI with async processing",
        "Semantic search with vector embeddings",
        "Structured outputs with JSON prompting"
      ],
      demoLink: "https://acadlyst-opal.vercel.app/",
      githubLink: "https://github.com/SnehaChouksey/Acadlyst"
    },
    {
      id: 2,
      name: "Serene.AI",
      tagline: "LLM-Based Mental Wellness Companion",
      description: "A conversational agent with session-based memory providing continuous emotional support. Features daily check-ins, emotion tracking, and insights visualization.",
      features: [
        "Context-aware conversational AI with LangChain",
        "Session-based memory for continuous support",
        "Daily emotion tracking and check-ins",
        "Weekly trends visualization dashboard",
        "Secured authentication with NextAuth"
      ],
      tech: [
        "LangChain",
        "Groq API",
        "PostgreSQL",
        "Prisma",
        "Next.js",
        "Framer Motion",
        "GSAP",
        "NextAuth"
      ],
      highlights: [
        "Engaging UI with calm animations",
        "Privacy-first architecture",
        "Real-time emotion insights"
      ],
      demoLink: "https://serene-ai-fawn.vercel.app/",
      githubLink: "https://github.com/SnehaChouksey/serene-ai"
    }
  ],

  experience: {
    education: {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Jabalpur Engineering College",
      year: "2027",
      
    },
    achievements: [
      {
        title: "Smart India Hackathon (SIH)",
        description: "Ranked 7th among top 50 teams in the internal university round",
        year: "2024",
        icon: "trophy"
      },
      {
        title: "HackCrux Hackathon (GDG LNMIIT)",
        description: "Finalist team that presented 'GreenTech' - an AI-powered waste detection platform utilizing computer vision models at LNMIIT Jaipur",
        year: "2024",
        icon: "award"
      }
    ]
  },

  timeline: [
    {
      year: "2025",
      title: "Started Full Stack Journey",
      description: "Began exploring modern web development with React and Node.js"
    },
    {
      year: "2025",
      title: "Deep Dive into AI",
      description: "Mastered LangChain, RAG pipelines, and vector databases. Built production-ready AI applications."
    },
    {
      year: "2025",
      title: "Built a SaaS Architecture ",
      description: "Proven skills in building scalable SaaS platforms with async architectures and AI integrations"
    }
  ]
};
