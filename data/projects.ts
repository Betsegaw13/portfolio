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
   title: "GoEvents",
    description:
      "A modern event discovery and ticket booking platform that enables users to explore events, purchase tickets, and helps organizers manage their events through an intuitive web interface.",
    tags: ["Web App", "Ticket Booking", "Internship Project"],
    image: "/projects/goevents.jpg",
    liveUrl: "",
    githubUrl: "",
    featured: true,
     status: "In Progress",

  year: "2026",
  },
];