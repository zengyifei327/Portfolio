"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <div className="glass rounded-2xl p-6 sm:p-8 border border-primary-200/50 dark:border-primary-800/50 shadow-xl hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300">
                <p className="mb-4 text-left">
                    With a foundation in Ethnology and a Master's in Digital Humanities from UCL, I bring a <span className="font-semibold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">multidisciplinary perspective</span> that combines cultural understanding with technical precision. Currently completing my Computer Systems Technology Diploma (Cloud Computing Option) at BCIT, I specialize in software development, automation, and cloud-based system optimization.
                </p>
                <p className="mb-4 text-left">
                    I enjoy coding because it challenges me to think creatively while solving real-world problems. My core languages are <span className="font-medium text-primary-600 dark:text-primary-400">Python, JavaScript</span>, and <span className="font-medium text-primary-600 dark:text-primary-400">SQL</span>, and I'm experienced with <span className="font-medium text-primary-600 dark:text-primary-400">React, Power Platform</span>, and <span className="font-medium text-primary-600 dark:text-primary-400">SharePoint integration</span>. Through the Cloud Computing program, I've also gained hands-on experience with <span className="font-medium text-primary-600 dark:text-primary-400">AWS services</span> such as <span className="font-medium text-primary-600 dark:text-primary-400">EC2, S3</span>, and <span className="font-medium text-primary-600 dark:text-primary-400">Lambda</span>, focusing on deploying scalable and serverless applications.
                </p>
                <p className="mb-0 text-left">
                    <span className="italic font-medium text-accent-600 dark:text-accent-400">Detail-oriented</span> and <span className="italic font-medium text-accent-600 dark:text-accent-400">process-driven</span>, I value efficiency, clear communication, and teamwork. Outside of work, I'm passionate about fitness, music, and travel, which keep me inspired and bring balance to my technical pursuits.
                </p>
            </div>
        </motion.section>
    );
}