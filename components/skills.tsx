"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function Skills() {
    const { ref } = useSectionInView("Skills");

    return (
        <section
            id="skills"
            ref={ref}
            className="mb-28 max-w-[60rem] scroll-mt-28 sm:mb-40"
        >
            <SectionHeading>My skills</SectionHeading>
            <div className="space-y-6">
                {skillsData.map((category, categoryIndex) => (
                    <motion.div
                        key={categoryIndex}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={categoryIndex}
                        className="glass rounded-2xl p-6 border border-primary-200/50 dark:border-primary-800/50 shadow-xl hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300"
                    >
                        <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent dark:from-primary-400 dark:to-accent-400">
                            {category.category}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill, skillIndex) => (
                                <motion.div
                                    key={skillIndex}
                                    className="group relative"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="bg-white/50 dark:bg-white/10 rounded-lg px-4 py-2 border border-primary-200/50 dark:border-primary-800/50 cursor-pointer transition-all duration-300 hover:border-primary-400 dark:hover:border-primary-600 hover:shadow-md hover:shadow-primary-500/20 group-hover:bg-gradient-to-r group-hover:from-primary-500/10 group-hover:to-accent-500/10">
                                        <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent font-medium dark:from-primary-400 dark:to-accent-400 text-sm sm:text-base">
                                            {skill}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}