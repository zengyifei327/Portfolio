"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from 'next/link';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
    title,
    description,
    tags,
    imageUrl,
    projectUrl,
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <Link href={projectUrl} passHref legacyBehavior>
                <a target="_blank">
                    <section className="glass max-w-[42rem] border border-primary-200/50 dark:border-primary-800/50 rounded-xl overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:border-primary-400 dark:hover:border-primary-600 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 sm:group-even:pl-8">
                        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                            <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent dark:from-primary-400 dark:to-accent-400">
                                {title}
                            </h3>
                            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                                {description}
                            </p>
                            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                                {tags.map((tag, index) => (
                                    <li
                                        className="bg-gradient-to-r from-primary-600 to-accent-600 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full font-medium shadow-md shadow-primary-500/30"
                                        key={index}
                                    >
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Image
                            src={imageUrl}
                            alt="Project I worked on"
                            quality={95}
                            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                            transition 
                            group-hover:scale-[1.04]
                            group-hover:-translate-x-3
                            group-hover:translate-y-3
                            group-hover:-rotate-2
                            
                            group-even:group-hover:translate-x-3
                            group-even:group-hover:translate-y-3
                            group-even:group-hover:rotate-2
                            
                            group-even:right-[initial] group-even:-left-40"
                        />
                    </section>
                </a>
            </Link>
        </motion.div>
    );
}