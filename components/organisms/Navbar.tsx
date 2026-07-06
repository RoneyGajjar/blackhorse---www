"use client";

import React, { useState } from 'react';
import { Text } from '../atoms/Text';
import MyApp from '../atoms/Cal';
import { Logo } from '../atoms/Logo';
import Link from 'next/link';


export const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='sticky top-0 z-50 bg-white'>

            <nav className="flex items-center justify-between py-6 px-4 max-w-7xl mx-auto border-b border-gray-100">
                {/* Brand logo/name */}
                {/* <Text className="font-bold text-xl text-brand-dark tracking-tighter uppercase">
                Verano
            </Text> */}
                <Logo />

                <div className="hidden md:flex gap-8">
                    <a href="/" className="text-sm font-sans font-medium text-gray-600 hover:text-brand-dark transition-colors">Home</a>
                    <a href="aboutus" className="text-sm font-sans font-medium text-gray-600 hover:text-brand-dark transition-colors">About Us</a>
                    <div
                        className="relative"
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}
                    >
                        <a
                            className="text-sm font-medium text-gray-600 hover:text-black transition-colors flex items-center gap-2 cursor-pointer"
                        >
                            Services
                        </a>
                        {open && (
                            <div className="absolute left-0 w-50 bg-white rounded-2xl shadow-xl py-3 z-50">
                                <Link
                                    href="/services/Tax-Advisory"
                                    className="block px-5 py-3 hover:bg-gray-100 transition"
                                >
                                    Tax Advisory
                                </Link>
                                <hr className="border-gray-200 mx-3" />
                                <Link
                                    href="/services/Tax-Preparation"
                                    className="block px-5 py-3 hover:bg-gray-100 transition"
                                >
                                    Tax Preparation / Review
                                </Link  >
                                <hr className="border-gray-200 mx-3" />
                                <Link
                                    href="/services/Accounting-payroll"
                                    className="block px-5 py-3 hover:bg-gray-100 transition"
                                >
                                    Accounting / Payroll
                                </Link>
                            </div>
                        )}
                    </div>
                    <a href="/contactus" className="text-sm font-sans font-medium text-gray-600 hover:text-brand-dark transition-colors">Contact</a>
                </div>
                <div>
                    <MyApp />
                </div>
            </nav>
        </div>

    );
};