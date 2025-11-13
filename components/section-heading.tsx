import React from "react";
import Image from "next/image";

type SectionHeadingProps = {
    children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
    return (
        <h2 className="text-3xl font-medium capitalize mb-8 text-center flex items-center justify-center gap-3">
            <Image 
                src="/pepeflower.gif" 
                alt="Pepe" 
                width="32" 
                height="32" 
                className="h-8 w-8"
            />
            <span className="gradient-text-vibrant dark:gradient-text-vibrant">
                {children}
            </span>
        </h2>
    );
}