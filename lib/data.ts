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
        title: "Computer Systems Technology, Diploma | CGPA: 95%",
        location: "British Columbia Institute of Technology, Vancouver, BC",
        description:
            "Term 2 CST student at BCIT, Looking for a Co-op opportunity\nAcquired proficiency in frontend development technologies such as HTML, CSS, and JavaScript.\nDeveloped skills in server- side programming languages like Python and Java for backend development and application scripting.\nGained knowledge in SQL for database management and querying.\n",
        icon: React.createElement(LuGraduationCap),
        date: "Sep 2023 – Dec 2025 (est.)",
    },
    {
        title: "Regional Operations Manager",
        location: "Xunjing Technology Ltd, Cairo, Egypt",
        description:
            "Analyzed user data using Excel, leading to strategic modifications in platform policies\nSupervised a team of 4 to troubleshoot technical issues reported by platform users, ensuring exceptional customer service",
        icon: React.createElement(CgWorkAlt),
        date: "Jul - Nov 2022",
    },
    {
        title: "Regional Operations Manager",
        location: "Tomorrow Wormhole Technology Ltd, Beijing, China",
        description:
            "Collaborated with cross-functional teams to organize events and self-learned SQL to extract data, empowering data-driven analysis and informed decision-making for future events\nDocumented weekly reports to extract insights, improving operational efficiencies",
        icon: React.createElement(CgWorkAlt),
        date: "Aug 2021 - Jun 2022",
    },
    {
        title: "Content Operation",
        location: "ByteDance Ltd, Beijing, China",
        description:
            "Contributed ideas and insights to brainstorming sessions and content planning meetings, fostering collaboration and innovation within team\nUploaded, formatted, and published content on platforms, tracked post performance, monitored data to understand user preferences and engagement patterns",
        icon: React.createElement(CgWorkAlt),
        date: "Nov 2020 - Feb 2021",
    },
    {
        title: "Digital Humanities, Master of Science | With Merit",
        location: "University College London(QS Top 10 World-Ranked University), London, UK",
        description:
            "Acquired proficiency in using digital tools like text analysis software and data visualization tools\nGained knowledge in XML, PHP, JavaScript, HTML, and CSS for data manipulation, web development, and frontend design\n",
        icon: React.createElement(LuGraduationCap),
        date: "Sep 2019 - Dec 2020",
    },
    {
        title: "Ethnology, Bachelor of Arts | GPA: 3.85",
        location: "Minzu University of China, Beijing, China",
        description:
            "Enhanced cross-cultural communication skills\nDeveloped critical thinking and analysis skills",
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
            "A Python text-based command line game with a GUI for displaying the map. I designed game logic and created unit tests.",
        tags: ["Python", "Testing", "Tkinter", "GUI"],
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
    "Next.js",
    "Node.js",
    "Express.js",
    "Git",
    "Tailwind",
    "jQuery",
    "Bootstrap",
    "Web APIs",
    "MongoDB",
    "JSON",
    "Firebase",
    "SQL",
    "RDBMS",
    "Testing",
    "Agile",
    "SDLC",
] as const;