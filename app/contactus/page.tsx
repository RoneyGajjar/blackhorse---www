import React from 'react';
import Link from 'next/link';
import { Heading } from '@/components/atoms/Heading';
import { Navbar } from '@/components/organisms/Navbar';
import { Footer } from '@/components/organisms/Footer';
import Script from 'next/script';

export default function ContactPage() {
    return (
        <div className="bg-background text-on-background font-body-md antialiased  flex flex-col min-h-screen">
            {/* TopNavBar Component */}
            <Navbar />

            {/* Hero Section */}
            <header className="pt-section-padding-desktop pb-section-padding-mobile px-margin-safe max-w-7xl mx-auto text-center">
                <Heading level={1} className="font-display-lg text-display-lg text-deep-navy mb-stack-md">
                    Contact Our Experts
                </Heading>
                <p className="font-body-lg text-body-lg text-slate-gray max-w-2xl mx-auto">
                    Get in touch for professional guidance on US compliance, tax preparation, and operational efficiency. Let's discuss how we can build a smarter system for your firm.
                </p>
            </header>

            {/* Main Content: Bento Grid Layout */}
            <main className="flex-grow px-margin-safe pb-section-padding-desktop max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-gutter">
                {/* Left Column: Contact Form (Spans 7 cols) */}
                <div className="md:col-span-7 bg-paper-white border border-slate-gray/10 p-8 rounded shadow-sm relative overflow-hidden group">
                    <div className="absolute inset-0 bg-frost-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    <Heading level={2} className="font-headline-md text-headline-md text-deep-navy mb-stack-lg relative z-10">
                        Send us a message
                    </Heading>

                    <div className="relative z-10 w-full mt-4">
                        <iframe
                            data-tally-src="https://tally.so/embed/Y5q1r0?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                            loading="lazy"
                            width="100%"
                            height="350"
                            frameBorder="0"
                            marginHeight={0}
                            marginWidth={0}
                            title="Contact Form"
                        ></iframe>

                        {/* Tally embed widget handles dynamic height resizing */}
                        <Script
                            src="https://tally.so/widgets/embed.js"
                            strategy="lazyOnload"
                        />
                    </div>
                </div>

                {/* Right Column: Contact Details (Spans 5 cols) */}
                <div className="md:col-span-5 space-y-stack-md">
                    {/* Global Offices Card */}
                    <div className="bg-frost-blue p-8 rounded border border-slate-gray/10">
                        <Heading level={3} className="font-headline-md text-headline-md text-deep-navy mb-stack-md flex items-center gap-3">
                            <span className="material-symbols-outlined text-muted-gold">location_on</span>
                            Global Offices
                        </Heading>
                        <div className="space-y-stack-md">
                            <div>
                                <Heading level={4} className="font-label-caps text-label-caps text-slate-gray mb-1 uppercase tracking-wider">
                                    U.S. Address
                                </Heading>
                                <p className="font-body-md text-body-md text-deep-navy">Sheridan, Wyoming</p>
                            </div>
                            <div className="h-px bg-slate-gray/10 w-full"></div>
                            <div>
                                <Heading level={4} className="font-label-caps text-label-caps text-slate-gray mb-1 uppercase tracking-wider">
                                    India Address
                                </Heading>
                                <p className="font-body-md text-body-md text-deep-navy">Ahmedabad, Gujarat</p>
                            </div>
                        </div>
                    </div>

                    {/* Direct Contact Card */}
                    <div className="bg-paper-white p-8 rounded border border-slate-gray/10 relative overflow-hidden group">
                        <div className="absolute right-0 bottom-0 w-24 h-24 bg-frost-blue rounded-tl-full opacity-50 -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                        <Heading level={3} className="font-headline-md text-headline-md text-deep-navy mb-stack-md flex items-center gap-3">
                            <span className="material-symbols-outlined text-muted-gold">contact_support</span>
                            Direct Reach
                        </Heading>
                        <ul className="space-y-stack-sm">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-slate-gray mt-1 text-lg">mail</span>
                                <div>
                                    <span className="block font-label-caps text-label-caps text-slate-gray mb-1 uppercase tracking-wider">Email</span>
                                    <a href="mailto:kamal@blackhorseassociates.com" className="font-body-md text-body-md text-deep-navy hover:text-muted-gold transition-colors break-all">
                                        kamal@blackhorseassociates.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 pt-2">
                                <span className="material-symbols-outlined text-slate-gray mt-1 text-lg">call</span>
                                <div>
                                    <span className="block font-label-caps text-label-caps text-slate-gray mb-1 uppercase tracking-wider">US Phone</span>
                                    <a href="tel:+19084765882" className="font-body-md text-body-md text-deep-navy hover:text-muted-gold transition-colors">
                                        +1 (908) 476 5882
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 pt-2">
                                <span className="material-symbols-outlined text-slate-gray mt-1 text-lg">call</span>
                                <div>
                                    <span className="block font-label-caps text-label-caps text-slate-gray mb-1 uppercase tracking-wider">India Phone</span>
                                    <a href="tel:+918401165350" className="font-body-md text-body-md text-deep-navy hover:text-muted-gold transition-colors">
                                        +91 84011 65350
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 pt-4 border-t border-slate-gray/10 mt-4">
                                <span className="material-symbols-outlined text-slate-gray mt-1 text-lg">schedule</span>
                                <div>
                                    <span className="block font-label-caps text-label-caps text-slate-gray mb-1 uppercase tracking-wider">Office Hours</span>
                                    <span className="font-body-md text-body-md text-deep-navy">Mon-Fri: 9am - 6pm (EST)</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>

            {/* Footer Component */}
            <Footer />
        </div>
    );
}