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
        title: "Don't Froget-Record Your Life",
        description:
            "During a 2-day hackathon, I worked as a frontend developer on a project where users can record habits and track their mood.",
        tags: ["React", "Typescript", "Javascript", "Tailwind", "Spring (Java + Rest API)", "MySQL"],
        imageUrl: frogImg,
    },
    {
        title: "Epic Adventure",
        description:
            "I developed a Python text-based command line game and created unit tests. Additionally, I implemented a GUI for displaying the map.",
        tags: ["Python", "Testing", "Tkinter", "GUI"],
        imageUrl: gameImg,
    },
    {
        title: "Suscipe",
        description:
            "During a 24-hour hackathon, I led a team of 4 individuals in building a mobile-first recipe generator website. My role primarily focused on backend development.",
        tags: ["Javascript", "CSS", "Web API", "JSON"],
        imageUrl: susImg,
    },
    {
        title: "Cheapest Eggs",
        description:
            "In a team of 4, I built a mobile-first grocery price search and sharing website, using Agile Scrum and Git for version control. I developed a responsive frontend with HTML, CSS, JavaScript, Bootstrap, and jQuery, and handled the backend using Firebase for optimized functionality.",
        tags: ["Javascript", "CSS", "Bootstrap", "jQuery", "Firebase", "Agile", "Figma", "Trello"],
        imageUrl: eggImg,
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