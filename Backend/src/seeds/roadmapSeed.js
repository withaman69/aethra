const mongoose = require("mongoose");
const Roadmap = require("../models/Roadmap");

const roadmaps = [
  {
    title: "Frontend Developer",
    careerPath: "Web Development",
    description: "Master frontend development.",
    difficulty: "Beginner",
    estimatedDuration: "6 Months",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind"
    ],
    steps: [
      "Learn HTML",
      "Learn CSS",
      "Learn JavaScript",
      "Master Git & GitHub",
      "Learn React",
      "Learn Tailwind CSS",
      "Build Projects",
      "Deploy Applications"
    ]
  },

  {
    title: "Backend Developer",
    careerPath: "Web Development",
    description: "Become a backend engineer.",
    difficulty: "Intermediate",
    estimatedDuration: "8 Months",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT"
    ],
    steps: [
      "Learn Node.js",
      "Learn Express",
      "MongoDB Basics",
      "Authentication",
      "REST APIs",
      "Error Handling",
      "Deployment"
    ]
  },

  {
    title: "Full Stack Developer",
    careerPath: "Web Development",
    description: "Frontend + Backend mastery.",
    difficulty: "Intermediate",
    estimatedDuration: "10 Months",
    skills: [
      "React",
      "Node.js",
      "MongoDB",
      "Docker"
    ],
    steps: [
      "Frontend Fundamentals",
      "React",
      "Backend Development",
      "Authentication",
      "Databases",
      "Deployment",
      "Docker"
    ]
  },

  {
    title: "AI Engineer",
    careerPath: "Artificial Intelligence",
    description: "Build AI applications.",
    difficulty: "Intermediate",
    estimatedDuration: "12 Months",
    skills: [
      "Python",
      "ML",
      "Deep Learning",
      "LLMs"
    ],
    steps: [
      "Python",
      "NumPy",
      "Pandas",
      "Machine Learning",
      "Scikit-Learn",
      "Deep Learning",
      "PyTorch",
      "Transformers",
      "LLMs",
      "RAG Systems"
    ]
  },

  {
    title: "Data Analyst",
    careerPath: "Data Science",
    description: "Analyze and visualize data.",
    difficulty: "Beginner",
    estimatedDuration: "5 Months",
    skills: [
      "Excel",
      "SQL",
      "Power BI",
      "Python"
    ],
    steps: [
      "Excel",
      "Statistics",
      "SQL",
      "Python",
      "Pandas",
      "Power BI",
      "Dashboard Building"
    ]
  },

  {
    title: "DevOps Engineer",
    careerPath: "Cloud",
    description: "Cloud infrastructure and automation.",
    difficulty: "Advanced",
    estimatedDuration: "10 Months",
    skills: [
      "Linux",
      "Docker",
      "Kubernetes",
      "AWS"
    ],
    steps: [
      "Linux",
      "Networking",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "AWS",
      "Terraform"
    ]
  },

  {
    title: "Cybersecurity Engineer",
    careerPath: "Security",
    description: "Learn ethical hacking and security.",
    difficulty: "Advanced",
    estimatedDuration: "10 Months",
    skills: [
      "Networking",
      "Linux",
      "Security"
    ],
    steps: [
      "Networking",
      "Linux",
      "Web Security",
      "OWASP",
      "Burp Suite",
      "Penetration Testing",
      "Cloud Security"
    ]
  },

  {
    title: "Mobile App Developer",
    careerPath: "Mobile Development",
    description: "Build Android & iOS apps.",
    difficulty: "Intermediate",
    estimatedDuration: "8 Months",
    skills: [
      "React Native",
      "Flutter"
    ],
    steps: [
      "Dart",
      "Flutter",
      "State Management",
      "API Integration",
      "Firebase",
      "Publishing Apps"
    ]
  },

  {
    title: "UI/UX Designer",
    careerPath: "Design",
    description: "Design modern interfaces.",
    difficulty: "Beginner",
    estimatedDuration: "4 Months",
    skills: [
      "Figma",
      "UX",
      "Wireframing"
    ],
    steps: [
      "Design Principles",
      "Color Theory",
      "Typography",
      "Wireframes",
      "Figma",
      "Prototyping"
    ]
  },

  {
    title: "Cloud Engineer",
    careerPath: "Cloud Computing",
    description: "Cloud architecture and deployment.",
    difficulty: "Advanced",
    estimatedDuration: "9 Months",
    skills: [
      "AWS",
      "Azure",
      "Docker"
    ],
    steps: [
      "Cloud Basics",
      "AWS",
      "IAM",
      "EC2",
      "S3",
      "Docker",
      "Monitoring"
    ]
  }
];

module.exports = roadmaps;