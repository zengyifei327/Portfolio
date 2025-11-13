"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className="fixed bottom-5 right-5 glass w-[3rem] h-[3rem] border border-primary-200/50 dark:border-primary-800/50 shadow-xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all hover:border-primary-400 dark:hover:border-primary-600 hover:shadow-primary-500/20 text-primary-600 dark:text-primary-400"
            onClick={toggleTheme}
        >
            {theme === "light" ? <BsSun className="text-lg" /> : <BsMoon className="text-lg" />}
        </button>
    );
}