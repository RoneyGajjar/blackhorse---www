import React from 'react';
import Link from 'next/link';
import { Heading } from '@/components/atoms/heading'; // Adjust the import path based on your folder structure
import { Footer } from '@/components/organisms/footer';
import { Navbar } from '@/components/organisms/navbar';
import { CTA } from '@/components/organisms/cta';

export default function TaxPreparationPage() {
    return (
        <div className="bg-background text-on-background font-body-md antialiased selection:bg-muted-gold selection:text-paper-white flex flex-col min-h-screen">
            {/* TopNavBar */}
            <Navbar />

            {/* Main Content Canvas */}
            <main className="flex-grow flex flex-col relative z-0">
                {/* Hero Section */}
                <section className="relative w-full py-section-padding-mobile md:py-section-padding-desktop bg-paper-white overflow-hidden flex items-center min-h-[70vh]">
                    {/* Subtle Background Element */}
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-50 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-frost-blue via-transparent to-transparent"></div>

                    <div className="max-w-7xl mx-auto px-margin-safe w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                        <div className="lg:col-span-7 flex flex-col gap-stack-md">
                            <div className="inline-flex items-center gap-2 text-muted-gold font-label-caps text-label-caps uppercase tracking-wider mb-2">
                                <span className="w-8 h-px bg-muted-gold"></span>
                                Tax Preparation & Review
                            </div>

                            <Heading level={1} className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-deep-navy">
                                Tax Preparation with <br className="hidden md:block" />
                                <span className="text-muted-gold">Zero-Tolerance</span> for Error
                            </Heading>

                            <p className="font-body-lg text-body-lg text-slate-gray max-w-2xl mt-4">
                                Precision is non-negotiable. We execute and review your tax filings through a rigorous, multi-level quality control process to guarantee absolute accuracy and eliminate audit risks. Stop leaving money on the table.
                            </p>

                            {/* <div className="mt-stack-md flex flex-wrap items-center gap-4">
                                <a
                                    href="#consultation"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-deep-navy text-paper-white font-label-caps text-label-caps uppercase tracking-wider rounded-sm hover:bg-opacity-90 transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-navy"
                                >
                                    Book a Review
                                </a>
                                <div className="flex items-center gap-2 text-slate-gray font-label-caps text-label-caps uppercase tracking-wider">
                                    <span
                                        className="material-symbols-outlined text-muted-gold"
                                        data-icon="verified_user"
                                        style={{ fontVariationSettings: "'FILL' 1" }}
                                    >
                                        verified_user
                                    </span>
                                    CPA Oversight Guaranteed
                                </div>
                            </div> */}
                        </div>

                        <div className="lg:col-span-5 mt-stack-lg lg:mt-0 relative">
                            {/* Image Placeholder for Hero Context */}
                            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(10,22,49,0.1)] border border-slate-gray/10 group">
                                <img
                                    alt="Professional tax consultants working on financial documents in a modern office setting"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCf6M8ekuhbfyqvAqMpz1o6cdFe7OqFm3UHblusogqTkcY2g0KjYEF4oE9T3IZ1uwRbiMBM0ao_s2-MXlpdYgmvem11LEoVKwoWgZHOHJoLCnm8iqceE-E7YREYl30YUR_n-Xtaz5LZpdhkNbKIPNzLuVntOUkrQFI_DQjx70-WDuNsmuzMIKI6945DB1zZcaZPEmKn-XrWb-wIDBFYVJD9xhdcMi1oVu3SpvgaPR2Jk3XkkOu5KEp-ukOL_AtMW3Vo_KyExKm8qg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/40 to-transparent pointer-events-none"></div>
                            </div>

                            {/* Floating Stat Badge */}
                            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-paper-white p-6 rounded-lg shadow-[0_10px_30px_rgba(10,22,49,0.08)] border border-slate-gray/10 max-w-[200px] flex flex-col gap-2 z-20">
                                <span className="font-stat-num text-stat-num text-deep-navy">5000+</span>
                                <span className="font-label-caps text-label-caps text-slate-gray uppercase tracking-wider">
                                    US Tax Returns Prepared/Reviewed
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Multi-Tier Review Section (Process) */}
                <section className="w-full py-section-padding-mobile md:py-section-padding-desktop bg-frost-blue border-y border-slate-gray/5">
                    <div className="max-w-7xl mx-auto px-margin-safe w-full">
                        <div className="text-center max-w-3xl mx-auto mb-stack-lg flex flex-col gap-stack-sm">
                            <span className="text-muted-gold font-label-caps text-label-caps uppercase tracking-wider">
                                Quality Control
                            </span>
                            <Heading level={2} className="font-headline-xl text-headline-xl text-deep-navy">
                                Rigorous Multi-Tier Review
                            </Heading>
                            <p className="font-body-md text-body-md text-slate-gray mt-2">
                                Our streamlined approach ensures compliant, flawless, and timely deliverables every single time. We don't just prepare; we scrutinize at every level.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-slate-gray/20 z-0"></div>

                            {/* Step 1 */}
                            <div className="relative z-10 flex flex-col items-start bg-paper-white p-8 rounded-xl border border-slate-gray/10 shadow-sm hover:shadow-[0_10px_30px_rgba(10,22,49,0.05)] transition-all duration-300 group">
                                <div className="w-16 h-16 rounded-full bg-frost-blue flex items-center justify-center border-2 border-paper-white shadow-sm mb-stack-sm text-deep-navy group-hover:bg-deep-navy group-hover:text-paper-white transition-colors duration-300">
                                    <span className="font-stat-num text-[24px] font-semibold">01</span>
                                </div>
                                <Heading level={3} className="font-headline-md text-[24px] text-deep-navy mb-2">
                                    First-Pass Prep
                                </Heading>
                                <p className="font-body-md text-body-md text-slate-gray">
                                    Skilled professionals handle initial data entry, categorizations, and basic tax formulations with precision and daily updates.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="relative z-10 flex flex-col items-start bg-paper-white p-8 rounded-xl border border-slate-gray/10 shadow-sm hover:shadow-[0_10px_30px_rgba(10,22,49,0.05)] transition-all duration-300 group">
                                <div className="w-16 h-16 rounded-full bg-frost-blue flex items-center justify-center border-2 border-paper-white shadow-sm mb-stack-sm text-deep-navy group-hover:bg-deep-navy group-hover:text-paper-white transition-colors duration-300">
                                    <span className="font-stat-num text-[24px] font-semibold">02</span>
                                </div>
                                <Heading level={3} className="font-headline-md text-[24px] text-deep-navy mb-2">
                                    Technical Review
                                </Heading>
                                <p className="font-body-md text-body-md text-slate-gray">
                                    Senior analysts scrutinize the preparation against complex tax landscapes and regulatory updates to identify discrepancies.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="relative z-10 flex flex-col items-start bg-paper-white p-8 rounded-xl border border-slate-gray/10 shadow-sm hover:shadow-[0_10px_30px_rgba(10,22,49,0.05)] transition-all duration-300 group">
                                <div className="w-16 h-16 rounded-full bg-frost-blue flex items-center justify-center border-2 border-paper-white shadow-sm mb-stack-sm text-deep-navy group-hover:bg-deep-navy group-hover:text-paper-white transition-colors duration-300">
                                    <span className="font-stat-num text-[24px] font-semibold">03</span>
                                </div>
                                <Heading level={3} className="font-headline-md text-[24px] text-deep-navy mb-2">
                                    CPA Oversight
                                </Heading>
                                <p className="font-body-md text-body-md text-slate-gray">
                                    Final multi-level quality checks and rigorous CPA oversight ensure accurate, compliant, and timely deliverables before submission.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Compliance First Section (Bento Grid) */}
                <section className="w-full py-section-padding-mobile md:py-section-padding-desktop bg-paper-white">
                    <div className="max-w-7xl mx-auto px-margin-safe w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                            {/* Title Area */}
                            <div className="lg:col-span-4 flex flex-col gap-stack-md justify-center">
                                <span className="text-muted-gold font-label-caps text-label-caps uppercase tracking-wider">
                                    Standards & Security
                                </span>
                                <Heading level={2} className="font-headline-xl text-headline-xl text-deep-navy">
                                    Compliance First. Always.
                                </Heading>
                                <p className="font-body-md text-body-md text-slate-gray">
                                    Deep proficiency in IRS regulations, US GAAP, and state-specific requirements, ensuring every deliverable meets the highest institutional standards.
                                </p>
                            </div>

                            {/* Bento Grid Area */}
                            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Card 1: Expertise */}
                                <div className="bg-deep-navy text-paper-white p-8 rounded-xl shadow-sm flex flex-col justify-between min-h-[240px] group border border-deep-navy/50">
                                    <div className="w-12 h-12 rounded-full bg-surface-tint/30 flex items-center justify-center mb-6 text-muted-gold">
                                        <span className="material-symbols-outlined" data-icon="gavel" style={{ fontVariationSettings: "'FILL' 1" }}>
                                            gavel
                                        </span>
                                    </div>
                                    <div>
                                        <Heading level={3} className="font-headline-md text-[24px] mb-2">
                                            US Compliance Expertise
                                        </Heading>
                                        <p className="font-body-md text-surface-variant text-sm">
                                            Deep proficiency in IRS regulations, US GAAP, and state-specific requirements.
                                        </p>
                                    </div>
                                </div>

                                {/* Card 2: Security */}
                                <div className="bg-frost-blue p-8 rounded-xl border border-slate-gray/10 shadow-sm flex flex-col justify-between min-h-[240px]">
                                    <div className="w-12 h-12 rounded-full bg-paper-white flex items-center justify-center mb-6 text-deep-navy border border-slate-gray/5 shadow-sm">
                                        <span className="material-symbols-outlined" data-icon="lock" style={{ fontVariationSettings: "'FILL' 1" }}>
                                            lock
                                        </span>
                                    </div>
                                    <div>
                                        <Heading level={3} className="font-headline-md text-[24px] text-deep-navy mb-2">
                                            Secure & Confidential
                                        </Heading>
                                        <p className="font-body-md text-slate-gray text-sm">
                                            Enterprise-grade data security, encrypted workflows, and strict confidentiality protocols.
                                        </p>
                                    </div>
                                </div>

                                {/* Card 3: Trust */}
                                <div className="md:col-span-2 bg-paper-white p-8 rounded-xl border border-slate-gray/10 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6 justify-between group hover:border-muted-gold/50 transition-colors duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-frost-blue flex items-center justify-center text-deep-navy shrink-0">
                                            <span className="material-symbols-outlined" data-icon="workspace_premium" style={{ fontVariationSettings: "'FILL' 1" }}>
                                                workspace_premium
                                            </span>
                                        </div>
                                        <div>
                                            <Heading level={3} className="font-headline-md text-[24px] text-deep-navy mb-2">
                                                Quality You Can Trust
                                            </Heading>
                                            <p className="font-body-md text-slate-gray text-sm max-w-lg">
                                                Rigorous multi-tier review, CPA oversight, and zero-tolerance accuracy standards on every single engagement. Eliminate audit risks completely.
                                            </p>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-muted-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block" data-icon="arrow_forward">
                                        arrow_forward
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                {/* <section id="consultation" className="w-full py-section-padding-mobile md:py-section-padding-desktop bg-deep-navy text-paper-white relative overflow-hidden">
                    <div className="max-w-4xl mx-auto px-margin-safe w-full text-center relative z-10 flex flex-col items-center gap-stack-md">
                        <Heading level={2} className="font-headline-xl text-headline-xl text-paper-white">
                            Now let's make it work for you.
                        </Heading>
                        <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl">
                            Book a free 30-minute call. No pressure, no pitch — just an honest conversation about where you are and where you want to go with your tax preparation workflow.
                        </p>
                        <div className="mt-stack-sm flex flex-col sm:flex-row items-center gap-6">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-muted-gold text-deep-navy font-bold font-label-caps text-label-caps uppercase tracking-wider rounded-sm hover:bg-opacity-90 transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-deep-navy focus:ring-muted-gold"
                            >
                                Book a Consultation Call
                            </Link>
                            <div className="flex items-center gap-3 text-left">
                                <div className="flex -space-x-3">
                                    <div className="w-10 h-10 rounded-full border-2 border-deep-navy bg-surface-tint overflow-hidden flex items-center justify-center">
                                        <span className="material-symbols-outlined text-sm text-paper-white" data-icon="person">person</span>
                                    </div>
                                    <div className="w-10 h-10 rounded-full border-2 border-deep-navy bg-surface-tint overflow-hidden flex items-center justify-center">
                                        <span className="material-symbols-outlined text-sm text-paper-white" data-icon="person">person</span>
                                    </div>
                                    <div className="w-10 h-10 rounded-full border-2 border-deep-navy bg-surface-tint overflow-hidden flex items-center justify-center">
                                        <span className="material-symbols-outlined text-sm text-paper-white" data-icon="person">person</span>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-sm text-paper-white">400+</span>
                                    <span className="font-label-caps text-[10px] text-surface-variant uppercase tracking-wide">
                                        Professionals Guided
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <CTA />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}