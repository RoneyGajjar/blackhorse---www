import { ServiceCard } from '../molecules/serviceCard';

export const Competencies = () => (
    <section className="py-24 max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-3xl font-semibold text-primary">Core Competencies</h2>
            <p className="font-body-md text-secondary max-w-2xl mx-auto">
                Comprehensive financial solutions designed for structural integrity and operational excellence.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
                icon="account_balance"
                title="Accounting"
                description="Meticulous bookkeeping, financial statement preparation, and ledger management ensuring perfect clarity and compliance."
            />
            <ServiceCard
                icon="percent"
                title="Taxation"
                description="Strategic tax planning, preparation, and advisory services to optimize liabilities and ensure strict regulatory adherence."
            />
            <ServiceCard
                icon="groups"
                title="Payroll Processing"
                description="Seamless payroll administration, tax withholdings, and compliance reporting for your entire workforce."
            />
        </div>
    </section>
);