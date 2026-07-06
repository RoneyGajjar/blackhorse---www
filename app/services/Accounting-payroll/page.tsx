import React from 'react';
import Link from 'next/link';
import { Heading } from '@/components/atoms/Heading'; // Adjust the import path based on your folder structure
import { Navbar } from '@/components/organisms/Navbar';
import { Footer } from '@/components/organisms/Footer';
import { CTA } from '@/components/organisms/CTA';

export default function AccountingPayrollPage() {
    return (
        <div className="bg-paper-white text-on-background font-body-md antialiased selection:bg-muted-gold/20 selection:text-deep-navy">
            {/* Navigation */}
            <Navbar />
            <main>
                {/* Hero Section */}
                <section className="py-section-padding-mobile md:py-section-padding-desktop px-margin-safe max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
                    <div className="md:col-span-7 flex flex-col gap-stack-md">
                        <span className="font-label-caps text-label-caps text-muted-gold tracking-widest uppercase">
                            Accounting & Payroll
                        </span>
                        <Heading level={1} className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-deep-navy text-balance">
                            Transform Bookkeeping into a Strategic Asset
                        </Heading>
                        <p className="font-body-lg text-body-lg text-slate-gray max-w-2xl">
                            We handle the complete lifecycle of your accounting and payroll operations with seamless, transparent tracking. Get the exact numbers you need to scale confidently and focus purely on growth.
                        </p>
                        {/* <div className="pt-stack-sm flex flex-col sm:flex-row gap-4">
                            <button className="inline-flex items-center justify-center px-8 py-4 bg-deep-navy text-paper-white font-label-caps text-label-caps rounded hover:opacity-90 transition-opacity w-full sm:w-auto">
                                Request a Proposal
                            </button>
                            <button className="inline-flex items-center justify-center px-8 py-4 border border-muted-gold text-deep-navy font-label-caps text-label-caps rounded hover:bg-frost-blue transition-colors w-full sm:w-auto">
                                Learn More
                            </button>
                        </div> */}
                    </div>

                    <div className="md:col-span-5 relative h-64 md:h-full min-h-[400px] rounded-xl overflow-hidden bg-frost-blue flex items-center justify-center border border-slate-gray/10 mt-stack-lg md:mt-0">
                        {/* Aesthetic Graphic / Abstract Representation */}
                        <div className="absolute inset-0 bg-gradient-to-br from-frost-blue to-surface-variant opacity-50"></div>
                        <div className="relative z-10 w-32 h-32 rounded-full border border-muted-gold/30 flex items-center justify-center">
                            <div className="w-24 h-24 rounded-full border border-muted-gold/60 flex items-center justify-center">
                                <span className="material-symbols-outlined text-muted-gold" style={{ fontSize: '48px' }}>
                                    finance
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Full Lifecycle Management (Bento Grid) */}
                <section className="bg-deep-navy py-section-padding-mobile md:py-section-padding-desktop px-margin-safe text-paper-white">
                    <div className="max-w-7xl mx-auto flex flex-col gap-stack-lg">
                        <div className="max-w-3xl">
                            <Heading level={2} className="font-headline-xl text-headline-xl text-balance mb-stack-sm text-paper-white">
                                Full Lifecycle Management
                            </Heading>
                            <p className="font-body-lg text-body-lg text-surface-variant/80">
                                From daily reconciliations to complex payroll processing, we ensure every detail is meticulously managed, compliant, and clearly documented.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Feature Card 1 */}
                            <div className="bg-primary-container border border-surface-tint/20 rounded-xl p-8 flex flex-col gap-4 hover:border-muted-gold/50 transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-surface-tint/20 flex items-center justify-center text-muted-gold group-hover:bg-muted-gold group-hover:text-deep-navy transition-colors">
                                    <span className="material-symbols-outlined">receipt_long</span>
                                </div>
                                <Heading level={3} className="font-headline-md text-headline-md text-surface-bright text-xl">
                                    Daily Bookkeeping
                                </Heading>
                                <p className="font-body-md text-body-md text-surface-variant/70">
                                    Accurate classification, reconciliation, and ledger maintenance to keep your books current and audit-ready.
                                </p>
                            </div>

                            {/* Feature Card 2 */}
                            <div className="bg-primary-container border border-surface-tint/20 rounded-xl p-8 flex flex-col gap-4 hover:border-muted-gold/50 transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-surface-tint/20 flex items-center justify-center text-muted-gold group-hover:bg-muted-gold group-hover:text-deep-navy transition-colors">
                                    <span className="material-symbols-outlined">payments</span>
                                </div>
                                <Heading level={3} className="font-headline-md text-headline-md text-surface-bright text-xl">
                                    Payroll Operations
                                </Heading>
                                <p className="font-body-md text-body-md text-surface-variant/70">
                                    Seamless payroll processing, tax withholdings, and reporting, ensuring your team is paid accurately and on time.
                                </p>
                            </div>

                            {/* Feature Card 3 */}
                            <div className="bg-primary-container border border-surface-tint/20 rounded-xl p-8 flex flex-col gap-4 hover:border-muted-gold/50 transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-surface-tint/20 flex items-center justify-center text-muted-gold group-hover:bg-muted-gold group-hover:text-deep-navy transition-colors">
                                    <span className="material-symbols-outlined">account_balance</span>
                                </div>
                                <Heading level={3} className="font-headline-md text-headline-md text-surface-bright text-xl">
                                    Month-End Close
                                </Heading>
                                <p className="font-body-md text-body-md text-surface-variant/70">
                                    Rigorous end-of-period review processes to lock down financials and provide a clear picture of performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Real-Time Insights Section */}
                <section className="py-section-padding-mobile md:py-section-padding-desktop px-margin-safe max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
                        <div className="md:col-span-5 order-2 md:order-1 mt-stack-lg md:mt-0">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-frost-blue p-6 rounded-xl border border-slate-gray/5 flex flex-col gap-2">
                                    <span className="material-symbols-outlined text-deep-navy">insights</span>
                                    <span className="font-stat-num text-stat-num text-deep-navy text-3xl">100%</span>
                                    <span className="font-label-caps text-label-caps text-slate-gray">Visibility</span>
                                </div>
                                <div className="bg-frost-blue p-6 rounded-xl border border-slate-gray/5 flex flex-col gap-2 mt-8">
                                    <span className="material-symbols-outlined text-deep-navy">speed</span>
                                    <span className="font-stat-num text-stat-num text-deep-navy text-3xl">24/7</span>
                                    <span className="font-label-caps text-label-caps text-slate-gray">Access</span>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-6 md:col-start-7 order-1 md:order-2 flex flex-col gap-stack-md">
                            <Heading level={2} className="font-headline-xl text-headline-xl text-deep-navy text-balance">
                                Real-Time Insights for Better Decisions
                            </Heading>
                            <p className="font-body-lg text-body-lg text-slate-gray">
                                Stop waiting for the month-end close to understand your financial position. We implement systems that provide real-time reporting, custom dashboards, and actionable insights.
                            </p>
                            <ul className="flex flex-col gap-4 mt-4">
                                <li className="flex items-start gap-4 border-b border-slate-gray/10 pb-4">
                                    <span className="font-label-caps text-label-caps text-muted-gold pt-1">01</span>
                                    <div>
                                        <Heading level={4} className="font-headline-md text-headline-md text-lg text-deep-navy mb-1">
                                            Custom Dashboards
                                        </Heading>
                                        <p className="font-body-md text-body-md text-slate-gray text-sm">
                                            Tailored views of the KPIs that matter most to your firm's growth.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 border-b border-slate-gray/10 pb-4">
                                    <span className="font-label-caps text-label-caps text-muted-gold pt-1">02</span>
                                    <div>
                                        <Heading level={4} className="font-headline-md text-headline-md text-lg text-deep-navy mb-1">
                                            Cash Flow Analysis
                                        </Heading>
                                        <p className="font-body-md text-body-md text-slate-gray text-sm">
                                            Proactive forecasting to identify opportunities and mitigate risks early.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                {/* <section className="bg-frost-blue py-section-padding-mobile md:py-section-padding-desktop px-margin-safe border-t border-slate-gray/10">
                    <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-stack-md">
                        <Heading level={2} className="font-headline-xl text-headline-xl text-deep-navy text-balance">
                            Ready to scale your accounting capacity?
                        </Heading>
                        <p className="font-body-lg text-body-lg text-slate-gray">
                            Let's discuss how our dedicated team can streamline your workflow and reduce overhead.
                        </p>
                        <button className="mt-stack-sm inline-flex items-center justify-center px-8 py-4 bg-deep-navy text-paper-white font-label-caps text-label-caps rounded hover:opacity-90 transition-opacity">
                            Request an Accounting Proposal
                        </button>
                    </div>
                </section> */}
                <CTA />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}