"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section
            ref={ref}
            id="home"
            className="mb-28 max-w-[55rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image
                            src="/pic.png"
                            alt="Yifei portrait"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                        />
                    </motion.div>

                    <motion.span
                        className="absolute bottom-0 right-0 text-4xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>

            <motion.h1
                className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-3xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Hello, I'm <span className="italic bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent font-semibold">Yifei,</span> a passionate Computer Systems Technology student at BCIT, graduating in December 2025. With a strong background in{" "}
                <span className="font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">software development, automation, and system optimization,</span> I'm now seeking a <span className="underline decoration-primary-500 decoration-2 underline-offset-4">full-time position</span> where I can apply my technical skills, contribute to real-world projects, and continue growing as a developer.

            </motion.h1>

            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link
                    href="#contact"
                    className="group bg-gradient-to-r from-primary-600 to-accent-600 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/50 active:scale-105 transition-all duration-300 font-medium"
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Contact me here {" "}
                    <BsArrowRight className="opacity-90 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                    className="group glass px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all duration-300 cursor-pointer border border-primary-200/50 dark:border-primary-800/50 hover:border-primary-400 dark:hover:border-primary-600 hover:shadow-lg hover:shadow-primary-500/20 font-medium"
                    href="/YifeiZengCV.pdf"
                    download
                >
                    Download CV{" "}
                    <HiDownload className="opacity-70 group-hover:translate-y-1 transition-transform" />
                </a>

                <a
                    className="glass p-4 text-primary-600 dark:text-primary-400 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-primary-700 dark:hover:text-primary-300 active:scale-105 transition-all duration-300 cursor-pointer border border-primary-200/50 dark:border-primary-800/50 hover:border-primary-400 dark:hover:border-primary-600 hover:shadow-lg hover:shadow-primary-500/20"
                    href="https://www.linkedin.com/in/yifei-zeng/"
                    target="_blank"
                >
                    <BsLinkedin />
                </a>

                <a
                    className="glass p-4 text-primary-600 dark:text-primary-400 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-primary-700 dark:hover:text-primary-300 active:scale-105 transition-all duration-300 cursor-pointer border border-primary-200/50 dark:border-primary-800/50 hover:border-primary-400 dark:hover:border-primary-600 hover:shadow-lg hover:shadow-primary-500/20"
                    href="https://github.com/zengyifei327"
                    target="_blank"
                >
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section >
    );
}