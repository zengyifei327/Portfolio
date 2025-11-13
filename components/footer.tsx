import React from "react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="mb-10 px-4 text-center text-gray-600 dark:text-gray-400">
            <small className="mb-2 block text-xs flex items-center justify-center gap-2">
                &copy; 2024 Yifei Zeng. All rights reserved.
                <Image 
                    src="/pepe-happy.png" 
                    alt="Pepe" 
                    width="20" 
                    height="20" 
                    className="h-5 w-5 inline-block"
                />
            </small>
            <p className="text-xs">
                <span className="font-semibold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent dark:from-primary-400 dark:to-accent-400">About this website:</span> built with
                React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
                Framer Motion, React Email & Resend, Vercel hosting.
            </p>
        </footer>
    );
}