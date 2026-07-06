import Link from 'next/link';
import { Heading } from '@/components/atoms/Heading';
import { Navbar } from '@/components/organisms/Navbar';
import { Footer } from '@/components/organisms/Footer';

export default function TermsConditionsPage() {
    return (
        <div className="bg-background text-on-background font-body-md antialiased flex flex-col min-h-screen">
            {/* TopNavBar Component */}
            <Navbar />

            {/* Main Legal Content */}
            <main className="flex-grow px-margin-safe py-section-padding-mobile md:py-section-padding-desktop max-w-4xl mx-auto w-full">
                <header className="mb-stack-lg border-b border-slate-gray/10 pb-8">
                    <Heading level={1} className="font-display-lg text-display-lg text-deep-navy mb-4">
                        Terms & Conditions
                    </Heading>
                    <p className="font-label-caps text-label-caps text-slate-gray uppercase tracking-wider">
                        Blackhorse Associates LLC · Last Updated: June 2026 · Effective: June 1, 2026
                    </p>
                </header>

                <div className="space-y-stack-md font-body-lg text-slate-gray">
                    <p>
                        Welcome to Blackhorse Associates LLC. These Terms and Conditions outline the rules for using our website and services.  By accessing our website or engaging our services, you agree to be bound by these terms.  If you do not agree, please do not use our services.
                    </p>

                    <section className="pt-4">
                        <Heading level={2} className="font-headline-md text-headline-md text-deep-navy mb-4">
                            1. Use of Our Services
                        </Heading>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>You agree to use our website and services only for lawful purposes. </li>
                            <li>You must not use our services in any way that may damage, disable, or impair the website or harm other users. </li>
                            <li>All services are provided by or under the supervision of federally licensed Enrolled Agents. </li>
                        </ul>
                    </section>

                    <section className="pt-4">
                        <Heading level={2} className="font-headline-md text-headline-md text-deep-navy mb-4">
                            2. Client Responsibilities
                        </Heading>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>You are responsible for providing accurate and complete information for service delivery. </li>
                            <li>You must review and approve all prepared returns or reports before submission. </li>
                            <li>Any misuse, fraudulent activity, or unauthorized use of our services may result in termination of access. </li>
                            <li>The accuracy of information provided to us is the client's responsibility. </li>
                            <li>We are not liable for errors arising from incomplete or inaccurate data. </li>
                        </ul>
                    </section>

                    <section className="pt-4">
                        <Heading level={2} className="font-headline-md text-headline-md text-deep-navy mb-4">
                            3. Fees & Payment
                        </Heading>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Fees are outlined in individual engagement letters or service agreements. </li>
                            <li>Fixed monthly staffing engagements require a minimum term of six (6) months. </li>
                            <li>Additional forms or services beyond the agreed scope will be billed at the applicable rate. </li>
                            <li>We reserve the right to suspend services for outstanding unpaid balances. </li>
                        </ul>
                    </section>

                    <section className="pt-4">
                        <Heading level={2} className="font-headline-md text-headline-md text-deep-navy mb-4">
                            4. Intellectual Property
                        </Heading>
                        <div className="space-y-4">
                            <p>
                                All content on this website — including text, graphics, and logos — is the property of Blackhorse Associates LLC and protected by applicable copyright laws.  You may not reproduce, distribute, or use any content without our prior written permission.
                            </p>
                            <div className="bg-frost-blue p-4 rounded border border-slate-gray/10 text-deep-navy font-medium mt-4">
                                Client data and documents you provide remain your property at all times.
                            </div>
                        </div>
                    </section>

                    <section className="pt-4">
                        <Heading level={2} className="font-headline-md text-headline-md text-deep-navy mb-4">
                            5. Confidentiality
                        </Heading>
                        <p className="mb-2">
                            All client information — including tax records and financial data — is treated as strictly confidential.  As licensed Enrolled Agents, we are bound by professional obligations under IRS Circular 230. Our confidentiality obligations survive the termination of any engagement.
                        </p>
                    </section>

                    <section className="pt-4">
                        <Heading level={2} className="font-headline-md text-headline-md text-deep-navy mb-4">
                            6. IRS Representation
                        </Heading>
                        <p>
                            As Enrolled Agents, we are authorized to represent clients before the IRS, including for audits, correspondence, appeals, and penalty abatement.  Representation is subject to a separate engagement agreement and does not guarantee a specific outcome.
                        </p>
                    </section>

                    <section className="pt-4">
                        <Heading level={2} className="font-headline-md text-headline-md text-deep-navy mb-4">
                            7. Limitation of Liability
                        </Heading>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>We are not liable for penalties or losses arising from inaccurate information provided by the client. </li>
                            <li>Our total liability for any claim shall not exceed the fees paid for that specific engagement. </li>
                            <li>We do not guarantee specific tax outcomes or refund amounts. </li>
                        </ul>
                    </section>

                    <section className="pt-4">
                        <Heading level={2} className="font-headline-md text-headline-md text-deep-navy mb-4">
                            8. Third-Party Links
                        </Heading>
                        <p>
                            Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of those websites.
                        </p>
                    </section>

                    <section className="pt-4">
                        <Heading level={2} className="font-headline-md text-headline-md text-deep-navy mb-4">
                            9. Privacy
                        </Heading>
                        <p>
                            Your use of our website is also governed by our Privacy Policy, which is incorporated into these Terms by reference.
                        </p>
                    </section>

                    <section className="pt-4">
                        <Heading level={2} className="font-headline-md text-headline-md text-deep-navy mb-4">
                            10. Changes to Terms
                        </Heading>
                        <p className="mb-2">
                            We may update these Terms and Conditions at any time.  Updates will be posted on this page with a revised 'Last Updated' date.  Continued use of our services after changes constitutes your acceptance.
                        </p>
                    </section>

                    <section className="pt-4 border-b border-slate-gray/10 pb-8">
                        <Heading level={2} className="font-headline-md text-headline-md text-deep-navy mb-4">
                            11. Governing Law
                        </Heading>
                        <p>
                            These Terms are governed by the laws of the State of Wyoming, United States of America.
                        </p>
                    </section>
                </div>
            </main>

            {/* Footer Component */}
            <Footer />
        </div>
    );
}