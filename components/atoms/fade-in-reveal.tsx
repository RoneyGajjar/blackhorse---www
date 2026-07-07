"use client";

import React, { useEffect, useRef, useState } from 'react';

interface FadeInRevealProps {
    children: React.ReactNode;
    delay?: number;
}

export const FadeInReveal: React.FC<FadeInRevealProps> = ({ children, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Unobserve after triggering to prevent re-runs
                }
            },
            // Triggers when the element is 50px from the bottom of the viewport
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transform transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
        >
            {children}
        </div>
    );
};