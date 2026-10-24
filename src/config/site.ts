export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string[];
  metrics: string[];
  tags: string[];
  link?: string;
  liveUrl?: string;
  status: "Live" | "Case Study" | "Concept";
  date: string;
  role: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  cgpa: string;
  grade: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  keywords: string[];
}

export const siteConfig = {
  name: "Shravani Sutar",
  title: "Shravani Sutar — Product Designer & UI/UX Designer",
  role: "Product Designer | UI/UX Designer | Visual Designer",
  url: "https://designftshravani.com",
  ogImage: "/assets/images/opengraph-image.png",
  twitterImage: "/assets/images/twitter-image.png",
  favicon: "/assets/icons/favicon.ico",
  icon: "/assets/icons/icon.png",
  appleTouchIcon: "/assets/icons/apple-touch-icon.png",
  description:
    "Portfolio of Shravani Sutar — Product Designer and UI/UX Designer based in Navi Mumbai, India. Specializing in 0-1 product design, design systems, visual identity, e-commerce, and digital brand experiences.",
  shortBio:
    "A visual designer working across digital products, e-commerce, brands and campaigns, packaging, and illustration systems, combining with visual experimentation.",
  author: {
    name: "Shravani Sutar",
    email: "digital.shravanisutar@gmail.com",
    phone: "+91 9653448537",
    url: "https://designftshravani.com",
    address: {
      addressLocality: "Navi Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
      postalCode: "400614",
    },
    socials: {
      linkedin: "https://www.linkedin.com/in/shravanisutar",
      email: "mailto:digital.shravanisutar@gmail.com",
      tel: "tel:+919653448537",
      website: "https://designftshravani.com",
    },
  },
  keywords: [
    "Shravani Sutar",
    "Product Designer",
    "UI/UX Designer",
    "Visual Designer Navi Mumbai",
    "Product Designer Mumbai",
    "UX Designer India",
    "Brand Identity Designer",
    "Figma Specialist",
    "Nepali Tales Designer",
    "Kora Brand Identity",
    "Design Systems Specialist",
    "E-commerce UX Design",
    "Visual Experimentation",
    "Digital Product Designer",
  ],
  skillGroups: [
    {
      category: "Brand Creative",
      description: "Crafting distinct visual language and cohesive systems.",
      skills: [
        "Visual System",
        "Brand Identity",
        "Art Direction",
        "Typography",
        "Illustration",
        "Design systems",
      ],
    },
    {
      category: "Research & Strategy",
      description: "Data-informed design validation and cultural context.",
      skills: [
        "A/B Testing",
        "Product Analytics",
        "Cultural Research",
        "Trend Research",
        "User Behavior",
      ],
    },
    {
      category: "Tools & Technologies",
      description: "Industry-standard design, 3D, and workflow tools.",
      skills: [
        "Figma",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "After Effects",
        "Blender",
        "Notion",
        "Claude",
        "Visual Studio Code",
        "Git",
      ],
    },
  ] as SkillGroup[],
  experience: [
    {
      company: "Kairos",
      role: "Product and Brand Designer",
      period: "July 2026 – Present",
      location: "Hybrid",
      type: "Freelance",
      description: [
        "Partnered with founders and emerging brands to develop visual work adapting creative across products.",
        "Designed customer-facing touchpoints for high-growth startups and established brands.",
      ],
      highlights: [
        "End-to-end multi-platform design delivery",
        "Cross-functional collaboration with engineering & marketing",
      ],
    },
    {
      company: "PlixLife",
      role: "Visual Designer Intern",
      period: "Aug 2021 – Nov 2022",
      location: "Lower Parel, Mumbai",
      type: "Internship",
      description: [
        "Created 50+ marketing creatives, social media assets, and sales materials to support brand communication and campaign execution.",
        "Maintained UI consistency, refining interface elements and supporting incremental feature updates across digital experiences.",
      ],
      highlights: [
        "50+ marketing creatives and campaign assets produced",
        "Enhanced brand cohesion across consumer digital touchpoints",
      ],
    },
    {
      company: "Digimedic",
      role: "UI/UX Intern",
      period: "Aug 2024 – Oct 2024",
      location: "Navi Mumbai, India",
      type: "Internship",
      description: [
        "Designed and prototyped key user flows for Digimedic, enhancing task efficiency and user clarity.",
      ],
      highlights: [
        "Streamlined patient-clinician interaction workflows",
        "Reduced cognitive load through modular UI components",
      ],
    },
  ] as Experience[],
  education: [
    {
      institution: "Tilak University",
      degree: "Bachelor of Computer Applications (BCA)",
      field: "Computer Applications & Digital Design",
      period: "2022 – 2025",
      location: "Belapur, Navi Mumbai",
      cgpa: "8.4",
      grade: "Grade: O (Outstanding)",
    },
  ] as Education[],
  projects: [
    {
      id: "nepali-tales",
      title: "Nepali Tales",
      category: "Product & UI/UX Design",
      tagline: "Culturally inspired food-ordering digital experience from concept to launch",
      description: [
        "Led 0–1 product design for Nepali Tales, crafting a playful, culturally inspired food-ordering experience from concept to launch.",
        "Created brand assets and UI designs, collaborating closely with developers to bring the experience to production.",
        "Achieved rapid early traction: attracted 5,000+ visitors and 150+ direct orders, reducing manual operational work.",
      ],
      metrics: ["5K+ Visitors", "150+ Orders", "0-1 Product Delivery"],
      tags: ["0-1 Product Design", "Food Delivery", "Brand Assets", "UI/UX", "Design Systems"],
      status: "Live",
      link: "https://designftshravani.com/projects/nepali-tales",
      liveUrl: "https://designftshravani.com/projects/nepali-tales",
      date: "2026",
      role: "Lead Product Designer",
    },
    {
      id: "kora-brand-identity",
      title: "Kora — Brand Identity",
      category: "Brand Systems & Packaging",
      tagline: "Earthy, culturally rooted identity, visual system, and packaging",
      description: [
        "Developed Kora from concept to brand, shaping its identity around cultural cues, consumer behavior, and a warm, earthy aesthetic.",
        "Designed the comprehensive visual system including logo, logo motion, brand guidelines, and packaging across key touchpoints.",
      ],
      metrics: ["Full Visual System", "Logo Motion", "Multi-SKU Packaging"],
      tags: ["Brand Identity", "Packaging", "Art Direction", "Motion Design", "Visual Experimentation"],
      status: "Concept",
      link: "https://designftshravani.com/projects/kora",
      date: "2025",
      role: "Brand & Visual Designer",
    },
    {
      id: "redbus-case-study",
      title: "Redbus — Mobile Experience Case Study",
      category: "UI/UX Case Study",
      tagline: "Optimizing interstate commuter booking flow & accessibility",
      description: [
        "Conducted deep user research and competitive audit to uncover drop-off points in long-distance bus ticket checkout.",
        "Re-architected seat selection, boarding point filtering, and live tracking UI for high clarity on mobile devices.",
      ],
      metrics: ["Reduced Friction", "Enhanced Accessibility", "Streamlined Checkout"],
      tags: ["UX Research", "Mobile App Design", "Information Architecture", "Prototyping"],
      status: "Case Study",
      link: "https://designftshravani.com/projects/redbus",
      date: "2025",
      role: "UX Researcher & Designer",
    },
  ] as Project[],
  // Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) structured FAQ
  faqs: [
    {
      question: "Who is Shravani Sutar?",
      answer:
        "Shravani Sutar is a professional Product Designer and UI/UX Designer based in Navi Mumbai, Maharashtra, India. She specializes in 0-1 product design, design systems, visual brand identity, e-commerce UX, and packaging design, combining strategic user research with visual experimentation.",
      keywords: ["Shravani Sutar", "Product Designer", "UI/UX Designer Navi Mumbai"],
    },
    {
      question: "What design services and expertise does Shravani Sutar offer?",
      answer:
        "Shravani Sutar provides comprehensive digital design services including 0-1 product design, web & mobile UI/UX design, visual identity systems, art direction, packaging design, design system architecture, A/B testing strategy, and interactive prototyping using Figma, Blender, and Adobe Creative Cloud.",
      keywords: ["Design Services", "0-1 Product Design", "UI UX Consultation"],
    },
    {
      question: "What are Shravani Sutar's most notable design projects?",
      answer:
        "Key projects include: 1) 'Nepali Tales', a live 0-1 culturally inspired food-ordering platform that generated 5,000+ visitors and 150+ orders; 2) 'Kora', a complete brand identity and packaging visual system with logo motion rooted in earthy aesthetics; and 3) 'Redbus Case Study', a UX optimization project addressing commuter booking flows and mobile accessibility.",
      keywords: ["Nepali Tales", "Kora Brand Identity", "Redbus Case Study", "Projects"],
    },
    {
      question: "What tools and technologies does Shravani Sutar use?",
      answer:
        "Shravani leverages industry-leading design and development tools including Figma, Adobe Photoshop, Adobe Illustrator, After Effects, Blender for 3D visualizations, Notion, Claude for AI-augmented workflows, Visual Studio Code, and Git.",
      keywords: ["Figma", "Blender", "Adobe Illustrator", "Tools", "Design Stack"],
    },
    {
      question: "What is Shravani Sutar's educational background?",
      answer:
        "Shravani holds a Bachelor of Computer Applications (BCA) degree from Tilak University (Belapur, Navi Mumbai, 2022-2025), graduating with a CGPA of 8.4 and an Outstanding (Grade O) distinction.",
      keywords: ["Tilak University", "Education", "BCA", "Credentials"],
    },
    {
      question: "How can clients and recruiters get in touch with Shravani Sutar?",
      answer:
        "You can contact Shravani Sutar directly via email at digital.shravanisutar@gmail.com, by phone/WhatsApp at +91 9653448537, or through her LinkedIn profile at linkedin.com/in/shravanisutar. Her official portfolio is hosted at designftshravani.com.",
      keywords: ["Contact", "Email", "Hire Shravani Sutar", "Freelance Designer"],
    },
  ] as FaqItem[],
};
