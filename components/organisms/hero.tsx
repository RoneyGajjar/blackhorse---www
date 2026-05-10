'use client'
import { Button } from '../atoms/buttons';
import { Badge } from '../atoms/badge';
import MyApp from '../atoms/cal';

export const Hero = () => (

    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row items-center gap-16 overflow-hidden">
        <div className="flex-1 space-y-8">
            <Badge>Premium Financial Services</Badge>
            <h1 className="font-display-lg text-4xl md:text-5xl font-bold leading-tight tracking-tight text-primary">
                Outsourced Accounting <br />& Taxation Services
            </h1>
            <p className="font-body-lg text-lg leading-relaxed text-secondary max-w-xl">
                Meticulous financial management for high-net-worth individuals and corporate entities. Precision, compliance, and strategic foresight.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
                {/* <Button variant="primary"
                    data-cal-namespace="15min"
                    data-cal-link="black-horse-associates-yce8pc/15min"
                    data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'>Schedule a Consultation</Button> */}
                <MyApp />
                {/* <Button variant="outline">View Services</Button> */}
            </div>
        </div>
        <div className="flex-1 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                    className="w-full h-auto object-cover aspect-[4/5]"
                    alt="Elite financial professionals"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsWEJfPLspxbauva5q3SHKbczKG4-9rJNCA4DTNBlLNsUNoU49CZHu1iO6WcMfJf1WsAhAPhO3YahWbn_44jVNOWdGdCd5j2a6kD4R1dA76N4k8kpf99oYQ7-xGduVxOt41yP_Lomitn6TYKaVIjNKrpmuysUVJg_ScuIVfb0Nv8C2PgK2mz2odg_pTYUyr068a3kSGzmlEAffYDPs6WMgbuXHlufsBn9nKhWQ_e1gOkCDRo8IkFZZVXZrg5L9btygCY9S5ZcrKMiz"
                />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary-container/5 rounded-full blur-3xl -z-10"></div>
        </div>
    </section>
);