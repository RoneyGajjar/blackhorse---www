// import React from 'react';
// import { Heading } from '../atoms/heading';
// import { Text } from '../atoms/text';
// import { StatCard } from '../molecules/statcard';

// interface StatData {
//     title: string;
//     description: string;
// }

// export const Features: React.FC = () => {
//     const stats: StatData[] = [
//         { title: "12+", description: "Years of experience in the U.S. tax and accounting industry" },
//         { title: "5000+", description: "US Tax returns prepared/Reviewed" },
//         { title: "60%", description: "Cost reduction" },
//         { title: "94%", description: "Client Retention Rate" }
//     ];

//     return (
//         <section className="py-24 px-4 max-w-7xl mx-auto text-center border-t border-gray-100">

//             <Text className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-6">
//                 PROBLEM SECTION
//             </Text>

//             <Heading level={2} className="text-5xl lg:text-[64px] mb-20 max-w-3xl mx-auto text-brand-dark leading-tight font-normal">
//                 Accuracy isn’t an <br /> aspiration—it’s our history.
//             </Heading>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
//                 {stats.map((stat, index) => (
//                     <StatCard key={index} title={stat.title} description={stat.description} />
//                 ))}
//             </div>
//         </section>
//     );
// };
"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Heading } from '../atoms/heading';
import { Text } from '../atoms/text';
import { StatCard } from '../molecules/statcard';
import { CinematicReveal } from '../atoms/cinematic-reveal';

// ----------------------------------------------------------------------
// 1. High-Performance Count-Up Hook
// ----------------------------------------------------------------------
const useCountUp = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let startTime: number;

                    const animate = (time: number) => {
                        if (!startTime) startTime = time;
                        const progress = time - startTime;

                        // Calculate percentage and apply an ease-out math function
                        const percentage = Math.min(progress / duration, 1);
                        const easeOut = percentage * (2 - percentage);

                        setCount(Math.floor(easeOut * end));

                        if (progress < duration) {
                            requestAnimationFrame(animate);
                        }
                    };

                    requestAnimationFrame(animate);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [end, duration]);

    return { count, ref };
};

// ----------------------------------------------------------------------
// 2. Isolated Wrapper Component
// ----------------------------------------------------------------------
interface AnimatedStatCardProps {
    title: string;
    description: string;
}

const AnimatedStatCard: React.FC<AnimatedStatCardProps> = ({ title, description }) => {
    // Dynamically extract the number and the symbol
    const match = title.match(/^(\d+)(.*)$/);
    const targetNumber = match ? parseInt(match[1], 10) : 0;
    const suffix = match ? match[2] : '';

    const { count, ref } = useCountUp(targetNumber);

    return (
        <div ref={ref}>
            <StatCard title={`${count}${suffix}`} description={description} />
        </div>
    );
};

// ----------------------------------------------------------------------
// 3. Features Component
// ----------------------------------------------------------------------
interface StatData {
    title: string;
    description: string;
}

export const Features: React.FC = () => {
    const stats: StatData[] = [
        { title: "12+", description: "Years of experience in the U.S. tax and accounting industry" },
        { title: "5000+", description: "US Tax returns prepared/Reviewed" },
        { title: "60%", description: "Cost reduction" },
        { title: "94%", description: "Client Retention Rate" }
    ];

    return (
        <section className="py-24 px-4 max-w-7xl mx-auto text-center border-t border-gray-100 overflow-hidden">

            {/* Unified Cinematic Reveal for the Header */}
            <CinematicReveal direction="up">
                <Text className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-6">
                    PROBLEM SECTION
                </Text>

                <Heading level={2} className="text-5xl lg:text-[64px] mb-20 max-w-3xl mx-auto text-brand-dark leading-tight font-normal">
                    Accuracy isn’t an <br /> aspiration—it’s our history.
                </Heading>
            </CinematicReveal>

            {/* Staggered Cinematic Reveal for the Grid Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                {stats.map((stat, index) => (
                    <CinematicReveal
                        key={index}
                        delay={index * 150}
                        direction="up"
                    >
                        <AnimatedStatCard
                            title={stat.title}
                            description={stat.description}
                        />
                    </CinematicReveal>
                ))}
            </div>
        </section>
    );
};