export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  status: "Completed" | "In Progress";
  year: string;
};

export const projects: Project[] = [
  {
    title: "AI-Powered LAN Traffic & Bandwidth Management System",
    description:
      "An intelligent network monitoring platform designed to analyze real-time LAN traffic, detect abnormal per-device usage, and dynamically optimize bandwidth distribution using feedback control logic.",
    tags: ["Python", "FastAPI", "React", "Networking"],
    image: "/projects/AI.jpg",
    liveUrl: "https://ai-powered-lan-traffic-and-bandwidt.vercel.app/",
    githubUrl: "https://github.com/Betsegaw13/AI-Powered-LAN-Traffic-and-Bandwidth-Management-System",
    featured: false,
    status: "Completed",
    year: "2026",
  },
  {
   title: "Autonomous Selective Coffee Harvesting Machine", 
    description:
      "An intelligent robotic system integrating an Arduino Uno, a multi-DOF robotic arm, and spectral color sensors to autonomously identify, target, and pick ripe red coffee cherries while minimizing labor costs and protecting harvest quality.", // [cite: 287, 288, 289, 291, 335]
    tags: ["Arduino", "Robotics", "Sensors", "Automation"], 
    image: "/projects/arduino.jpg",
    liveUrl: "https://sites.google.com/aastustudent.edu.et/group-3/home?authuser=0",
    githubUrl: "",
    featured: false, 
    status: "Completed", 
    year: "2025", 

  },
  
 {
  title: "SMARTRENT ET",
  description:
    "A full-stack rental management platform designed to streamline property rental processes, connecting landlords, tenants, and government officers through secure authentication, rental agreements, approval workflows, and payment management.",
  tags: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma"],
  image: "/projects/smartrent.jpg",
  liveUrl: "",
  githubUrl: "https://github.com/Henok-SE/SmartRentET",
  featured: true,
  status: "Completed",
  year: "2026",
},
{
  title: "Full-Stack E-Commerce Platform",
  description:
    "A complete e-commerce web application featuring product browsing, category organization, product details, shopping cart management, user authentication, order processing, RESTful APIs, PostgreSQL database integration, and deployment.",
  tags: ["React", "Django", "Django REST Framework", "PostgreSQL"],
  image: "/projects/store.png",
  liveUrl: "https://code-alpha-ecommerce-store-pi.vercel.app/",
  githubUrl: "https://github.com/Betsegaw13/CodeAlpha_ecommerce-store",
  featured: false,
  status: "Completed",
  year: "2026",
},

{
  title: "MeetSphere — Real-Time Video Meeting Platform",
  description:
    "A real-time video meeting and communication platform built with React, Node.js, and Express, integrating WebRTC for audio/video communication, Socket.IO for real-time interactions, JWT authentication, and PostgreSQL with Prisma ORM.",
  tags: ["React", "Node.js", "Express", "WebRTC", "Socket.IO", "PostgreSQL"],
  image: "/projects/meet.png",
  liveUrl: "https://code-alpha-meet-sphere.vercel.app/",
  githubUrl: "https://github.com/Betsegaw13/CodeAlpha_MeetSphere",
  featured: false,
  status: "Completed",
  year: "2026",
},
];