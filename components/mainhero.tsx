"use client"
import React from 'react'
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const MainHero = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "15min" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return (
        <>
            <section className="relative w-full bg-stone-50 py-24 md:py-32 lg:py-40 flex items-center min-h-[80vh]">
                <div className="flex flex-col md:flex-row w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="w-full md:w-1/2">
                        {/* Pill / Badge */}
                        <div className="inline-flex items-center rounded-full border border-stone-300 px-4 py-1.5 text-xs sm:text-sm font-semibold text-stone-600 tracking-widest uppercase mb-8">
                            Premium Financial Services
                        </div>

                        {/* Main Heading */}
                        {/* Using font-serif to match the elegant typography in the screenshot */}
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-stone-900 tracking-tight mb-6 leading-[1.1]">
                            Outsourced Accounting <br className="hidden sm:block" />
                            & Taxation Services
                        </h1>

                        {/* Subtitle / Paragraph */}
                        <p className="text-lg sm:text-xl text-stone-600 mb-10 max-w-2xl leading-relaxed">
                            Meticulous financial management for high-net-worth individuals and corporate entities. Precision, compliance, and strategic foresight.
                        </p>

                        {/* Call to Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                            <button data-cal-namespace="15min"
                                data-cal-link="black-horse-associates-yce8pc/15min"

                                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                                className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-sm sm:text-base font-semibold tracking-wide text-stone-900 bg-[#B5C1A9] hover:bg-[#A3AF97] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B5C1A9] transition-colors">
                                Schedule a Consultation
                            </button>

                        </div>

                    </div>
                    <div className="flex justify-center items-center hidden md:block md:w-1/2">
                        <img
                            src="/hero-img.webp"
                            alt=""
                            className="w-full h-150 object-cover opacity-80"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainHero




