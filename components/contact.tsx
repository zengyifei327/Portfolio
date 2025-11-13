"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
    const { ref } = useSectionInView("Contact");

    return (
        <motion.section
            id="contact"
            ref={ref}
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>Contact me</SectionHeading>

            <p className="text-gray-700 -mt-6 dark:text-white/80">
                Please contact me directly at{" "}
                <a className="underline decoration-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium" href="mailto:zengyifei327@gmail.com">
                    zengyifei327@gmail.com
                </a>{" "}
                or through this form.
            </p>

            <form
                className="mt-10 flex flex-col glass rounded-2xl p-6 sm:p-8 border border-primary-200/50 dark:border-primary-800/50 shadow-xl"
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);

                    if (error) {
                        toast.error(error);
                        return;
                    }

                    toast.success("Email sent successfully!");
                }}
            >
                <input
                    className="h-14 px-4 rounded-lg border border-primary-200/50 dark:border-primary-800/50 bg-white/50 dark:bg-white/10 backdrop-blur-sm focus:bg-white dark:focus:bg-white/20 focus:border-primary-400 dark:focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="Your email"
                />
                <textarea
                    className="h-52 my-3 rounded-lg border border-primary-200/50 dark:border-primary-800/50 p-4 bg-white/50 dark:bg-white/10 backdrop-blur-sm focus:bg-white dark:focus:bg-white/20 focus:border-primary-400 dark:focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 resize-none"
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                />
                <SubmitBtn />
            </form>
        </motion.section>
    );
}