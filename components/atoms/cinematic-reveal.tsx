"use client";

import React, { useEffect, useRef, useState } from 'react';

interface CinematicRevealProps {
    children: React.ReactNode;
    delay?: number; // Delay in milliseconds
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export const CinematicReveal: React.FC<CinematicRevealProps> = ({
    children,
    delay = 0,
    direction = 'up'
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    // Map direction to initial translation states
    const transformState = {
        up: 'translate-y-12',
        down: '-translate-y-12',
        left: 'translate-x-12',
        right: '-translate-x-12',
        none: 'translate-x-0 translate-y-0',
    };

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isVisible
                    ? 'opacity-100 translate-y-0 translate-x-0 blur-none scale-100'
                    : `opacity-0 ${transformState[direction]} blur-md scale-95`
                }`}
        >
            {children}
        </div>
    );
};