import React from "react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="mb-10 px-4 text-center text-gray-600 dark:text-gray-400">
            <small className="mb-2 block text-xs flex items-center justify-center gap-2">
                &copy; 2025 Yifei Zeng. All rights reserved.
                <Image 
                    src="/pepe-happy.png" 
                    alt="Pepe" 
                    width="20" 
                    height="20" 
                    className="h-5 w-5 inline-block"
                />
            </small>
            <p className="text-xs">
                <span className="font-semibold gradient-text-vibrant">About this website:</span> built with
                React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
                Framer Motion, React Email & Resend, Vercel hosting.
            </p>
        </footer>
    );
}