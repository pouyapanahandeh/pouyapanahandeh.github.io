export const resumeData = {
  name: "Pooya Panahandeh",
  title: "Senior Full-Stack Engineer",
  location: "Budapest, Hungary",
  phone: "+36307363426",
  email: "panahandehpooya@gmail.com",
  social: [
    { name: "LinkedIn", url: "#" }, // User didn't provide URLs, using # for now
    { name: "GitHub", url: "#" },
    { name: "Stack Overflow", url: "#" },
    { name: "npmjs.com", url: "#" },
  ],
  bio: "Senior Full-Stack Engineer with 6+ years of experience building and scaling web platforms across startups and global enterprises. Strong focus on TypeScript, Next.js, Salesforce (Apex, LWC, CRM Analytics), and data-driven systems. Proven ability to own features end-to-end, modernize legacy platforms, and deliver business-critical tools used by international teams.",
  skills: {
    Frontend: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "HTML5",
      "CSS3",
      "SASS",
      "Tailwind CSS",
    ],
    Backend: ["Node.js", "Express.js", "FastAPI", "Python", "REST APIs", "SQL"],
    Salesforce: ["Apex", "LWC", "SOQL", "CRM Analytics"],
    CloudDevOps: [
      "Google Cloud Platform",
      "Firebase",
      "AWS S3",
      "Docker",
      "CI/CD",
    ],
    AIData: ["PyTorch", "TensorFlow.js", "Machine Learning Pipelines"],
  },
  experience: [
    {
      company: "EF",
      location: "Budapest",
      role: "Software Developer",
      startDate: "Dec 2022",
      endDate: "Present",
      description: [
        "Developed and implemented several landing pages to enhance user experience and support marketing initiatives [technologies: Next.js, React, TypeScript].",
        "Integrated new features into Salesforce as per requirements to optimize the sales process [Apex, LWC].",
        "Contributed to the development of new features for the Cultural Care app, enhancing user engagement.",
      ],
    },
    {
      company: "Banzzay",
      location: "Budapest",
      role: "Full Stack Developer",
      startDate: "Dec 2021",
      endDate: "June 2022",
      description: [
        "Developed the whole concept from scratch and continued to add features to the final product. The Banzzay web application is a PWA that allows users to have a shortcut to their own account on their homepage.",
        "Developing a full project from conception to completion [Vue.js, Quasar].",
        "Develop a system for predicting customer churn [Python, PyTorch, FB Functions].",
        "Develop a task recommendation system [Python, PyTorch].",
      ],
    },
    {
      company: "Vodafone",
      location: "Budapest",
      role: "Web Developer Intern",
      startDate: "Oct 2019",
      endDate: "Oct 2021",
      description: [
        "Responsible for developing new features for Vodafone Business Websites using Javascript, HTML5, CSS3, and SASS.",
        "Provide an online editor for testing components in the Vodafone website environment through the developer console.",
        "PDF to HTML rendered including preview.",
        "Creating landing pages for Vodafone business.",
      ],
    },
    {
      company: "Nokia",
      location: "Budapest",
      role: "Intern Web Developer",
      startDate: "Feb 2019",
      endDate: "August 2019",
      description: [
        "Involved in the organization's management tools. Added new features and fixed bugs with Express.js and Vanilla JavaScript.",
      ],
    },
    {
      company: "Startups (Manytours, Madj.club, WAAC)",
      location: "",
      role: "Software Programmer & UI Developer",
      startDate: "Sep 2017",
      endDate: "Sep 2019",
      description: [
        "UI/UX Designer & Frontend Developer at manytours.com (tourflow.co): Designed UI and developed frontend [Nuxt.js, Vue.js, Vuetify].",
        "Co-founder and Frontend Developer at madj.club: Designed UI and developed frontend [Nuxt.js, Vue.js, Vuetify].",
        "Software Developer at WAAC: Designed UI/UX for Swarm platform & Neuron application. Developed REST API gateway [Spring Boot] and native Android app [Java].",
      ],
    },
  ],
  projects: [
    {
      name: "Centos",
      url: "https://centos.life",
      description:
        "Scalable PWA built with Next.js 16, TypeScript, Turborepo, Tailwind CSS v4, FlyonUI, Framer Motion, and Firebase serverless infrastructure.",
    },
    {
      name: "Billies",
      url: "https://billies.life",
      description:
        "Full-stack operating system for freelancers using Next.js 15, Firebase, AI integration, invoicing, PDF generation, and content monetization.",
    },
  ],
  openSource: [
    {
      name: "Treewise",
      description:
        "TypeScript library for managing tree (or forest) data structures.",
    },
    {
      name: "country-phonecode-flag",
      description:
        "Lightweight npm package for fetching country-related information (flags, phone codes).",
    },
  ],
  education: [
    {
      school: "ELTE, Budapest",
      degree: "Computer Science BSc",
      period: "Feb 2016 - June 2019",
      details: [
        "Thesis: New encryption method for p2p connections (Java)",
        "TDK competition: TCP connection over BlockChain (Java)",
      ],
    },
    {
      school: "ELTE, Budapest",
      degree: "AI MSc (Incomplete)",
      period: "Sep 2019 - Jan 2021",
      details: [
        "Real time face swap (Kotlin)",
        "Generating 3D model from 2D picture (Python)",
        "Human behavior prediction (Python)",
      ],
    },
  ],
  hackathons: [
    "EIT Climathon Hackathon - Android Application (2017)",
    "Accor Hotel Hackathon - Smart Mirror (2018)",
    "Nokia Internal Hackathon - Tracking System (2019)",
    "Junction X Budapest - PWA Game (2019)",
  ],
};
