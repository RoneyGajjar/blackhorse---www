import Link from 'next/link';
import { Footer } from '@/components/organisms/footer';
import { Navbar } from '@/components/organisms/navbar';
import { Heading } from '@/components/atoms/heading';
import { Text } from '@/components/atoms/text';
import { CTA } from '@/components/organisms/cta';

function TaxAdvisoryPage() {
    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="w-full pt-section-padding-desktop pb-section-padding-mobile md:py-section-padding-desktop px-margin-safe bg-paper-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                    <div className="lg:col-span-8 flex flex-col gap-stack-md">
                        <p className="font-label-caps text-label-caps text-muted-gold uppercase tracking-wider">
                            Tax Advisory Services
                        </p>
                        <Heading level={1} className="text-5xl lg:text-7xl mb-10 text-[#0A1435] leading-tighter">
                            Navigate Complex Tax Landscapes with Precision
                        </Heading>

                        <Text className="text-lg mb-10 max-w-md text-gray-500">
                            Navigate complex tax landscapes with a proactive, forward-looking strategy. We analyze your financial architecture to identify opportunities for minimizing liabilities and maximizing operational cash flow.
                        </Text>
                        {/* <div className="mt-stack-md flex flex-wrap gap-4">
                            <button className="inline-flex items-center justify-center px-8 py-4 bg-deep-navy text-paper-white font-label-caps text-label-caps rounded-sm hover:bg-opacity-90 transition-all">
                                Schedule a Strategy Session
                            </button>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* Our Approach (Bento Grid) */}
            <section className="w-full py-section-padding-mobile md:py-section-padding-desktop px-margin-safe bg-frost-blue">
                <div className="max-w-7xl mx-auto flex flex-col gap-stack-lg">
                    <div className="max-w-3xl">
                        <Heading level={2} className="text-5xl lg:text-[48px] mb-10 max-w-5xl mx-auto text-brand-dark leading-tight font-normal">
                            Strategic Financial Architecture
                        </Heading>
                        <Text className="font-body-lg text-body-lg text-slate-gray mt-stack-sm">
                            From local compliance to global reporting, we provide actionable insights designed to build resilient, long-term business wealth.
                        </Text>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[minmax(250px,auto)]">
                        {/* Card 1 */}
                        <div className="md:col-span-8 bg-paper-white p-8 rounded-lg border border-slate-gray/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all flex flex-col justify-between group">
                            <div className="w-12 h-12 bg-frost-blue rounded-full flex items-center justify-center mb-stack-md text-deep-navy group-hover:bg-muted-gold group-hover:text-paper-white transition-colors">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                                    search_insights
                                </span>
                            </div>
                            <div>
                                <h3 className="font-headline-md text-headline-md text-deep-navy mb-stack-sm">
                                    Proactive Planning
                                </h3>
                                <p className="font-body-md text-body-md text-slate-gray">
                                    We don't just react to tax season; we architect strategies year-round to minimize liabilities before they materialize.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="md:col-span-4 bg-deep-navy p-8 rounded-lg border border-slate-gray/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all flex flex-col justify-between">
                            <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center mb-stack-md text-muted-gold">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                                    account_balance
                                </span>
                            </div>
                            <div>
                                <h3 className="font-headline-md text-headline-md text-paper-white mb-stack-sm">
                                    Liability Minimization
                                </h3>
                                <p className="font-body-md text-body-md text-surface-variant/80">
                                    Identifying structural opportunities to legally and efficiently reduce your tax burden.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="md:col-span-5 bg-paper-white p-8 rounded-lg border border-slate-gray/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all flex flex-col justify-between group">
                            <div className="w-12 h-12 bg-frost-blue rounded-full flex items-center justify-center mb-stack-md text-deep-navy group-hover:bg-muted-gold group-hover:text-paper-white transition-colors">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                                    payments
                                </span>
                            </div>
                            <div>
                                <h3 className="font-headline-md text-headline-md text-deep-navy mb-stack-sm">
                                    Cash Flow Optimization
                                </h3>
                                <p className="font-body-md text-body-md text-slate-gray">
                                    Maximizing operational liquidity through strategic tax positioning and timing.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="md:col-span-7 bg-paper-white p-8 rounded-lg border border-slate-gray/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all flex flex-col justify-between group">
                            <div className="w-12 h-12 bg-frost-blue rounded-full flex items-center justify-center mb-stack-md text-deep-navy group-hover:bg-muted-gold group-hover:text-paper-white transition-colors">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                                    public
                                </span>
                            </div>
                            <div>
                                <h3 className="font-headline-md text-headline-md text-deep-navy mb-stack-sm">
                                    Global Compliance
                                </h3>
                                <p className="font-body-md text-body-md text-slate-gray">
                                    Ensuring flawless reporting and compliance across local, state, federal, and international jurisdictions, tailored for US CPA firms and global entities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who It's For */}
            <section className="w-full py-section-padding-mobile md:py-section-padding-desktop px-margin-safe bg-paper-white">
                <div className="max-w-7xl mx-auto flex flex-col gap-stack-lg">
                    <div className="text-center max-w-3xl mx-auto">
                        <Heading level={2} className="text-5xl lg:text-[48px] mb-10 max-w-5xl mx-auto text-brand-dark leading-tight font-normal">
                            Who Benefits from Strategic Advisory?
                        </Heading>
                        <Text className="font-body-lg text-body-lg text-slate-gray mt-stack-sm">
                            Tailored insights designed to build resilient, long-term business wealth across different operational scales.
                        </Text>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                        <div className="flex flex-col gap-stack-sm p-6 border border-slate-gray/10 rounded-lg hover:border-muted-gold transition-colors">
                            <span className="font-stat-num text-stat-num text-muted-gold opacity-50">01</span>
                            <h3 className="font-headline-md text-headline-md text-deep-navy">Business Owners</h3>
                            <p className="font-body-md text-body-md text-slate-gray">
                                Founders and executives looking to optimize their corporate structure, manage multi-state compliance, and plan for succession or exit events efficiently.
                            </p>
                        </div>
                        <div className="flex flex-col gap-stack-sm p-6 border border-slate-gray/10 rounded-lg hover:border-muted-gold transition-colors">
                            <span className="font-stat-num text-stat-num text-muted-gold opacity-50">02</span>
                            <h3 className="font-headline-md text-headline-md text-deep-navy">Investors</h3>
                            <p className="font-body-md text-body-md text-slate-gray">
                                Individuals and funds managing diverse portfolios, real estate holdings, or complex assets requiring strategic tax-loss harvesting and capital gains planning.
                            </p>
                        </div>
                        <div className="flex flex-col gap-stack-sm p-6 border border-slate-gray/10 rounded-lg hover:border-muted-gold transition-colors">
                            <span className="font-stat-num text-stat-num text-muted-gold opacity-50">03</span>
                            <h3 className="font-headline-md text-headline-md text-deep-navy">US CPA Firms</h3>
                            <p className="font-body-md text-body-md text-slate-gray">
                                Growing firms needing to scale their advisory capacity without increasing overhead, leveraging our expertise to serve high-net-worth clients better.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            {/* <section className="w-full py-section-padding-mobile md:py-section-padding-desktop px-margin-safe bg-deep-navy text-center">
                <div className="max-w-4xl mx-auto flex flex-col items-center gap-stack-md">
                    <Heading level={2} className="text-5xl lg:text-[48px] mb-10 max-w-5xl mx-auto text-white leading-tight font-normal">
                        Now let's make it work for you.
                    </Heading>
                    <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl">
                        Book a free 30-minute call. No pressure, no pitch — just an honest conversation about where you are and where you want to go.
                    </p>
                    <button className="mt-stack-sm inline-flex items-center justify-center px-8 py-4 bg-paper-white text-deep-navy font-label-caps text-label-caps rounded-sm hover:bg-muted-gold hover:text-paper-white transition-all">
                        Book a Consultation Call
                    </button>
                </div>
            </section> */}
            <CTA />
            <Footer />
        </>
    );
}


export default TaxAdvisoryPage;