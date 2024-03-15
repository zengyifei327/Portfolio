"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
    return (
        <motion.section
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                With a background in Ethnology and Digital Humanities, complemented by ongoing studies in Computer Systems Technology, I offer a unique blend of cultural insight and technical acumen.</p>
            <p className="mb-3">I enjoy coding because I enjoy solving problems in creative ways. My core coding language is <span className="font-medium">Python, Javascript</span>, and <span className="font-medium">SQL</span>, I am also familiar with <span className="font-medium">Java, React</span>, and <span className="font-medium">MongoDB</span>.</p>
            <p className="mb-3"><span className="italic">Detail-oriented</span> and <span className="italic">process-driven</span>, I'm eager to learn and thrive as a <span className="italic">team player</span>, using strong communication skills for effective collaboration.</p>
            <p className="mb-3">My hobbies include fitness, music, and travel. I find inspiration and rejuvenation in exploring new destinations.</p>
        </motion.section>
    );
}