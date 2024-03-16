import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import frogImg from "@/public/frog.png";
import gameImg from "@/public/game.jpeg";
import susImg from "@/public/sus.png";
import eggImg from "@/public/egg.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "CST, Diploma | CGPA: 95%",
        location: "BCIT, Vancouver, BC",
        description:
            "Proficient in frontend (HTML, CSS, JavaScript), backend (Python, Java), and SQL.",
        icon: React.createElement(LuGraduationCap),
        date: "Sep 2023 – Dec 2025 (est.)",
    },
    {
        title: "Regional Operations Manager",
        location: "Xunjing Technology Ltd, Cairo, Egypt",
        description:
            "Analyzed user data, supervised team for technical support.",
        icon: React.createElement(CgWorkAlt),
        date: "Jul - Nov 2022",
    },
    {
        title: "Regional Operations Manager",
        location: "Tomorrow Wormhole Technology Ltd, Beijing, China",
        description:
            "Organized events, performed data analysis, documented reports.",
        icon: React.createElement(CgWorkAlt),
        date: "Aug 2021 - Jun 2022",
    },
    {
        title: "Content Operation",
        location: "ByteDance Ltd, Beijing, China",
        description:
            "Contributed ideas, uploaded and analyzed content.",
        icon: React.createElement(CgWorkAlt),
        date: "Nov 2020 - Feb 2021",
    },
    {
        title: "Digital Humanities, Master of Science | With Merit",
        location: "University College London, London, UK",
        description:
            "Proficient in digital tools, web development (XML, PHP, JavaScript, HTML, CSS).",
        icon: React.createElement(LuGraduationCap),
        date: "Sep 2019 - Dec 2020",
    },
    {
        title: "Ethnology, Bachelor of Arts | GPA: 3.85",
        location: "Minzu University of China, Beijing, China",
        description:
            "Enhanced cross-cultural communication, critical thinking skills.",
        icon: React.createElement(LuGraduationCap),
        date: "Sep 2014 - Jun 2018",
    },

] as const;

export const projectsData = [
    {
        title: "Don't Froget | 2-day Hackathon",
        description:
            "A website where users can record habits and track their mood. I worked as a frontend developer.",
        tags: ["React", "Typescript", "Javascript", "Tailwind", "Spring (Java + Rest API)", "MySQL"],
        imageUrl: frogImg,
        projectUrl: "https://devpost.com/software/don-t-froget",
    },
    {
        title: "Epic Adventure | Personal",
        description:
            "A fully tested Python text-based command line game with a graphical user interface (GUI) for displaying the map.",
        tags: ["Python", "Unit Test", "Tkinter", "GUI"],
        imageUrl: gameImg,
        projectUrl: "https://github.com/zengyifei327/Epic-Adventure-Game",
    },
    {
        title: "Suscipe | 24h Hackathon",
        description:
            "A mobile-first recipe generator website. My role primarily focused on backend development.",
        tags: ["Javascript", "CSS", "Web API", "JSON", "Figma"],
        imageUrl: susImg,
        projectUrl: "https://sustainablerecipes-50334.web.app/",
    },
    {
        title: "Cheapest Eggs | Academic",
        description:
            "Developed a mobile-first grocery price search and sharing website as a full-stack developer.",
        tags: ["Javascript", "CSS", "Bootstrap", "jQuery", "Firebase", "Agile", "Figma", "Trello"],
        imageUrl: eggImg,
        projectUrl: "https://dtc08-699f5.web.app/index.html",
    },
] as const;

export const skillsData = [
    "Python",
    "JavaScript",
    "Java",
    "C",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "jQuery",
    "Next.js",
    "Node.js",
    "Express.js",
    "Tailwind",
    "Bootstrap",
    "Web APIs",
    "MongoDB",
    "JSON",
    "Firebase",
    "SQL",
    "RDBMS",
    "Microsoft 365",
    "Testing",
    "Git",
    "Agile / Scrum",
    "Software Development Life Cycle",
    "Problem-Solving",
    "Communication",
    "Teamwork",
    "Time Management",
    "Leadership",
    "Customer Focus",
    "Project Management",
] as const;