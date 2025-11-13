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
            <p className="mb-3">
                With a foundation in Ethnology and a Master's in Digital Humanities from UCL, I bring a multidisciplinary perspective that combines cultural understanding with technical precision. Currently completing my Computer Systems Technology Diploma (Cloud Computing Option) at BCIT, I specialize in software development, automation, and cloud-based system optimization.
            </p>
            <p className="mb-3">
                I enjoy coding because it challenges me to think creatively while solving real-world problems. My core languages are <span className="font-medium">Python, JavaScript</span>, and <span className="font-medium">SQL</span>, and I'm experienced with <span className="font-medium">React, Power Platform</span>, and <span className="font-medium">SharePoint integration</span>. Through the Cloud Computing program, I've also gained hands-on experience with <span className="font-medium">AWS services</span> such as <span className="font-medium">EC2, S3</span>, and <span className="font-medium">Lambda</span>, focusing on deploying scalable and serverless applications.
            </p>
            <p className="mb-3">
                <span className="italic">Detail-oriented</span> and <span className="italic">process-driven</span>, I value efficiency, clear communication, and teamwork. Outside of work, I'm passionate about fitness, music, and travel, which keep me inspired and bring balance to my technical pursuits.
            </p>
        </motion.section>
    );
}