import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-emerald-950 text-white py-20 border-t border-white/10">
                <div className="max-w-8xl mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                        <div className="md:col-span-1">
                            <div className="text-2xl font-black tracking-tighter font-headline mb-8 flex items-center gap-2">
                                Black Horse Associates
                            </div>
                        </div>
                        <div>
                            <h5 className="font-headline font-extrabold text-xs uppercase tracking-widest mb-8 text-secondary-fixed">Quick Links</h5>
                            <ul className="space-y-4 text-sm text-primary-fixed/80 font-body">
                                <li><a className="hover:text-white transition-colors" href="./">Home</a></li>
                                <li><a className="hover:text-white transition-colors" href="./loan-programs">Services</a></li>
                                <li><a className="hover:text-white transition-colors" href="./how-it-works">About Us</a></li>
                                <li><a className="hover:text-white transition-colors" href="./contact">Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-headline font-extrabold text-xs uppercase tracking-widest mb-8 text-secondary-fixed">Legal</h5>
                            <ul className="space-y-4 text-sm text-primary-fixed/80 font-body">
                                <li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
                                <li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-[11px] text-primary-fixed/40 font-headline font-bold uppercase tracking-widest">
                            © 2026 BLACK HORSE ASSOCIATES. ALL RIGHTS RESERVED.
                        </p>
                        <p className="text-[11px] text-primary-fixed/40 font-headline font-bold uppercase tracking-widest">
                            Designed and Developed by <Link href="https://honeyhexa.com" className="text-secondary-fixed">Honey Hexa</Link>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer