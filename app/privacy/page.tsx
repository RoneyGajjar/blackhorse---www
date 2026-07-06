import React from 'react';
import Link from 'next/link';
import { Heading } from '@/components/atoms/heading';
import { Footer } from '@/components/organisms/footer';
import { Navbar } from '@/components/organisms/navbar';

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-background text-on-background font-body-md antialiased flex flex-col min-h-screen">
            {/* TopNavBar Component */}
            <Navbar />

            {/* Main Legal Content */}
            <main className="flex-grow px-margin-safe py-section-padding-mobile md:py-section-padding-desktop max-w-4xl mx-auto w-full">
                <header className="mb-stack-lg border-b border-slate-gray/10 pb-8">
                    <Heading level={1} className="font-display-lg text-display-lg text-deep-navy mb-4">
                        Privacy Policy                     </Heading>
                    <p className="font-label-caps text-label-caps text-slate-gray uppercase tracking-wider">
                        Blackhorse Associates LLC · Last Updated: June 2026 · Effective: June 1, 2026                     </p>
                </header>

                <div className="space-y-stack-md font-body-lg text-slate-gray">
                    <p>
                        At Blackhorse Associates LLC, we respect your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data when you use our website and services.                     </p>

                    <section className="pt-4">
                        <Heading level={2} className="font-headline-md text-headline-md text-deep-navy mb-4">
                            1. Information We Collect                         </Heading>
                        <ul className="list-none space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-muted-gold shrink-0">person</span>
                                <span><strong>Personal Data:</strong> Name, phone number, and email address when you contact us or request a consultation. </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-muted-gold shrink-0">description</span>
                                <span><strong>Business & Tax Information:</strong> Financial records and documents shared in the course of providing our services. </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-muted-gold shrink-0">devices</span>
                                <span><strong>Usage Data:</strong> IP address, browser type, pages visited, and time spent on our site. </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-muted-gold shrink-0">cookie</span>
                                <span><strong>Cookies & Tracking:</strong> We use cookies to improve your browsing experience and analyze website performance. </span>
                            </li>
                        </ul>
                    </section>

                    <section className="pt-4">
                        <Heading level={2} className="font-headline-md text-headline-md text-deep-navy mb-4">
                            2. How We Use Your Data
                        </Heading>
                        <p className="mb-2">We use your data to: </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide and maintain our tax, accounting, and bookkeeping services. </li>
                            <li>Communicate with you about updates, requests, or inquiries. </li>
                            <li>Improve our website, services, and user experience. </li>
                            <li>Comply with legal and IRS obligations. </li>
                        </ul>
                    </section>

                    <section className="pt-4">
                        <Heading level={2} className="font-headline-md text-headline-md text-deep-navy mb-4">
                            3. Data Sharing
                        </Heading>
                        <p className="mb-2">We may share your information with: </p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Service providers assisting in our operations, bound by confidentiality. </li>
                            <li>The IRS or relevant tax authorities, as required to complete your filings. </li>
                            <li>Legal authorities, when required by law. </li>
                        </ul>
                        <div className="bg-frost-blue p-4 rounded border border-slate-gray/10 text-deep-navy font-medium mt-4">
                            We do not sell, rent, or trade your personal or financial data to any third party.
                        </div>
                    </section>

                    <section className="pt-4">
                        <Heading level={2} className="font-headline-md text-headline-md text-deep-navy mb-4">
                            4. Data Retention & Security
                        </Heading>
                        <div className="space-y-4">
                            <p>
                                We retain personal data only as long as necessary to fulfill our services and comply with applicable legal and IRS record-keeping requirements.
                            </p>
                            <p>
                                We take reasonable technical and organizational steps to protect your information. However, no method of online transmission is 100% secure.
                            </p>
                        </div>
                    </section>

                    <section className="pt-4">
                        <Heading level={2} className="font-headline-md text-headline-md text-deep-navy mb-4">
                            5. Your Rights
                        </Heading>
                        <p>
                            You may contact us at any time to request access to, correction of, or deletion of your personal data, subject to applicable legal obligations.
                        </p>
                    </section>

                    <section className="pt-4">
                        <Heading level={2} className="font-headline-md text-headline-md text-deep-navy mb-4">
                            6. Children's Privacy
                        </Heading>
                        <p>
                            Our services are not directed to individuals under 13. We do not knowingly collect data from children.
                        </p>
                    </section>

                    <section className="pt-4">
                        <Heading level={2} className="font-headline-md text-headline-md text-deep-navy mb-4">
                            7. Third-Party Links
                        </Heading>
                        <p>
                            Our website may contain links to external sites. We are not responsible for their content or privacy practices.
                        </p>
                    </section>

                    <section className="pt-4 border-b border-slate-gray/10 pb-8">
                        <Heading level={2} className="font-headline-md text-headline-md text-deep-navy mb-4">
                            8. Updates to This Policy
                        </Heading>
                        <div className="space-y-4">
                            <p>
                                We may update this Privacy Policy occasionally and will post the revised version here with an updated date.
                            </p>
                            <p>
                                We encourage you to review it periodically.
                            </p>
                        </div>
                    </section>
                </div>
            </main>

            {/* Footer Component */}
            <Footer />
        </div>
    );
}