"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
    const { ref } = useSectionInView("Experience");
    const { theme } = useTheme();

    return (
        <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
            <SectionHeading>My experience</SectionHeading>
            <VerticalTimeline lineColor="">
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            visible={true}
                            contentStyle={{
                                background:
                                    theme === "light" 
                                        ? "rgba(255, 255, 255, 0.7)" 
                                        : "rgba(0, 0, 0, 0.3)",
                                backdropFilter: "blur(10px)",
                                WebkitBackdropFilter: "blur(10px)",
                                boxShadow: "0 8px 32px 0 rgba(34, 197, 94, 0.1)",
                                border: theme === "light" 
                                    ? "1px solid rgba(34, 197, 94, 0.2)" 
                                    : "1px solid rgba(255, 255, 255, 0.1)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                                borderRadius: "1rem",
                            }}
                            contentArrowStyle={{
                                borderRight:
                                    theme === "light"
                                        ? "0.4rem solid rgba(34, 197, 94, 0.3)"
                                        : "0.4rem solid rgba(74, 222, 128, 0.3)",
                            }}
                            date={item.date}
                            dateClassName="ml-3 mr-3 font-medium text-primary-600 dark:text-primary-400"
                            icon={item.icon}
                            iconStyle={{
                                background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                                fontSize: "1.5rem",
                                boxShadow: "0 4px 20px rgba(34, 197, 94, 0.4)",
                            }}
                        >
                            <h3 className="font-semibold capitalize bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent dark:from-primary-400 dark:to-accent-400">
                                {item.title}
                            </h3>
                            <p className="font-normal !mt-0 text-primary-700 dark:text-primary-300">{item.location}</p>
                            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                                {item.description}
                            </p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
}