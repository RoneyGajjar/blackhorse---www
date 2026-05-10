import { Icon } from '../atoms/icons';

export const Testimonial = () => (
    <section className="bg-primary-container text-on-primary py-32 overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center relative z-10">
            <Icon name="format_quote" filled className="text-6xl text-on-primary/20 mb-8" />
            <p className="font-display-lg text-3xl max-w-4xl mx-auto mb-12 italic leading-snug">
                "Black Horse Associates transformed our financial operations. Their meticulous attention to detail and strategic foresight in taxation has been invaluable to our corporate growth."
            </p>
            <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-on-primary/20">
                    <img
                        className="w-full h-full object-cover"
                        alt="Jonathan Sterling"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMfaiN6HyffAjZx36LvehSn3Wg6--j0JBNUvdZzQC5Qla8mU1NYiTL-WYlRPpxH7Fq4Kf1j_XwDhhM5DfEvdvbcjbYL3IjeowivMBStU7e9y3O-P_kDCV8tEP3WIM3-PkXpPVpN292Y27LPwBpX41jiCNSp00de0RCn2jjcIZH-4iQgvVJUJ7uUKC_RNEDCansIxXRybNAoDZsl1QJBdSvdvlusxQwwUM3PqsYXzVIDyS7aXm8j92vEuhU1MKNCg1mvD6-gtcuQH0_"
                    />
                </div>
                <div className="text-left">
                    <p className="font-bold font-label-md tracking-widest uppercase">Jonathan Sterling</p>
                    <p className="text-surface-container-highest font-label-sm uppercase tracking-wider text-xs">CEO, Sterling Holdings</p>
                </div>
            </div>
        </div>
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
            <div className="w-[800px] h-[800px] border border-on-primary/10 rounded-full animate-pulse"></div>
        </div>
    </section>
);