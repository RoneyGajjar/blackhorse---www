import React from 'react';
import { Heading } from '../atoms/heading';
// import { Text } from '../atoms/text'; // Commented out as it's not used in this specific block
import { ServiceCard } from '../molecules/service-card';
import { CinematicReveal } from '../atoms/cinematic-reveal';

interface ServiceData {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export const Services: React.FC = () => {
    // Shared icon wrapper classes to match the image's sizing and dark navy color
    const iconClass = "w-20 h-20 text-[#243354] mb-4";
    const strokeW = "2.5";

    const services: ServiceData[] = [
        {
            title: "US Compliance Expertise",
            description: "Deep proficiency in IRS regulations, US GAAP, and state-specific requirements, ensuring every deliverable meets the highest standards.",
            icon: (
                <svg className={iconClass} viewBox="0 0 100 100" fill="none" stroke="currentColor">
                    {/* Outer & Inner Rings */}
                    <circle cx="50" cy="50" r="42" strokeWidth="3" />
                    <circle cx="50" cy="50" r="34" strokeWidth="1.5" />
                    {/* Shield */}
                    <path d="M50 28 L68 36 V56 C68 72 50 82 50 82 C50 82 32 72 32 56 V36 Z" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round" />
                    {/* Checkmark */}
                    <path d="M42 56 L48 62 L60 48" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "Significant Cost Savings",
            description: "Reduce operational overhead by up to 60% without compromising on talent, quality, or turnaround.",
            icon: (
                <svg className={iconClass} viewBox="0 0 100 100" fill="none" stroke="currentColor">
                    <circle cx="50" cy="50" r="42" strokeWidth="3" />
                    <circle cx="50" cy="50" r="34" strokeWidth="1.5" />
                    {/* Coin */}
                    <circle cx="55" cy="35" r="14" strokeWidth={strokeW} />
                    <path d="M55 27 V43 M51 31 C51 31 57 29 57 33 C57 37 49 36 49 40 C49 44 57 43 57 43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    {/* Hand */}
                    <path d="M26 58 H32 L40 66 H65 C69 66 72 61 68 57 L55 48" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M26 58 V68 H32" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "Secure & Confidential",
            description: "Enterprise-grade data security, encrypted workflows, and strict confidentiality protocols protect your client information at every step.",
            icon: (
                <svg className={iconClass} viewBox="0 0 100 100" fill="none" stroke="currentColor">
                    <circle cx="50" cy="50" r="42" strokeWidth="3" />
                    <circle cx="50" cy="50" r="34" strokeWidth="1.5" />
                    {/* Shield with Lock */}
                    <path d="M50 20 L60 25 V35 C60 43 50 48 50 48 C50 48 40 43 40 35 V25 Z" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="46" y="34" width="8" height="6" rx="1" strokeWidth="1.5" />
                    <path d="M47 34 V31 C47 29 53 29 53 31 V34" strokeWidth="1.5" />
                    {/* Handshake abstraction */}
                    <path d="M25 65 L40 50 L50 60 L65 45 L75 55" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M35 75 L50 60" strokeWidth={strokeW} strokeLinecap="round" />
                    <path d="M55 75 L70 60" strokeWidth={strokeW} strokeLinecap="round" />
                    <path d="M30 60 L35 55 M60 70 L65 65" strokeWidth={strokeW} strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: "Quality You Can Trust",
            description: "Rigorous multi-tier review, CPA oversight, and zero-tolerance accuracy standards on every engagement.",
            icon: (
                <svg className={iconClass} viewBox="0 0 100 100" fill="none" stroke="currentColor">
                    <circle cx="50" cy="50" r="42" strokeWidth="3" />
                    <circle cx="50" cy="50" r="34" strokeWidth="1.5" />
                    {/* Quality Badge Scalloped Edge */}
                    <path d="M50 25 l4 4 h6 v6 l4 4 l-4 4 v6 h-6 l-4 4 l-4 -4 h-6 v-6 l-4 -4 l4 -4 v-6 h6 z" strokeWidth={strokeW} strokeLinejoin="round" />
                    {/* Inner Badge Details */}
                    <circle cx="50" cy="40" r="10" strokeWidth="1.5" strokeDasharray="2 3" />
                    <path d="M45 40 L48 43 L55 36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    {/* Ribbon */}
                    <path d="M42 53 L35 75 L45 70 L50 75 L55 70 L65 75 L58 53" strokeWidth={strokeW} strokeLinejoin="round" />
                    <path d="M46 60 H54 M46 65 H54" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-24 px-4 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Heading level={2} className="text-5xl lg:text-[56px] font-normal text-brand-dark leading-tight">
                        Why BlackHorse ?
                    </Heading>
                </div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    {services.map((service, index) => (
                        <CinematicReveal
                            key={index}
                            delay={index * 150}
                            direction="up"
                        >
                            {/* Make sure your ServiceCard component applies an off-white background (#F6F5F2) and border radius as seen in the image */}
                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                            />
                        </CinematicReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};