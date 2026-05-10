import { Button } from '../atoms/buttons';
import { Icon } from '../atoms/icons';
import { Logo } from '../atoms/logo';

export const Navbar = () => (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-outline-variant h-20">
        <div className="flex justify-between items-center h-full max-w-[1200px] mx-auto px-6 md:px-12">
            <Logo className="text-primary text-lg md:text-xl" />

            <div className="hidden md:flex items-center gap-8">
                {/* Services Dropdown (CSS-Only) */}
                <div className="relative group">
                    <button className="flex items-center gap-1 text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 font-label-md py-6">
                        Services
                        <Icon name="expand_more" className="text-[18px] transition-transform duration-300 group-hover:rotate-180" />
                    </button>

                    {/* Dropdown Menu Panel */}
                    <div className="absolute left-0 top-[80%] pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                        <div className="bg-white border border-outline-variant rounded-xl shadow-xl overflow-hidden py-2">
                            <a
                                href="#"
                                className="block px-6 py-3 font-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors"
                            >
                                Accounting
                            </a>
                            <a
                                href="#"
                                className="block px-6 py-3 font-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors"
                            >
                                Taxation
                            </a>
                            <a
                                href="#"
                                className="block px-6 py-3 font-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors"
                            >
                                Payroll Processing
                            </a>
                        </div>
                    </div>
                </div>

                <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 font-label-md" href="#">About</a>
                <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 font-label-md" href="#">Testimonials</a>
                {/* <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 font-label-md" href="#">Contact</a> */}
            </div>

            <a href="https://wa.me/+918401165350" target="_blank">
                <Button variant="nav">Contact</Button>
            </a>
        </div>
    </nav>
);