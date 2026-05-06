import Link from 'next/link'


// Upgrade to an async Server Component
export default async function Navbar() {
    return (
        <>
            <header className="bg-emerald-950 border-b border-primary-container sticky top-0 z-50">
                <div className="flex justify-between items-center w-full px-6 py-4 max-w-9xl mx-auto h-24">
                    <Link href="/">
                        <div className="text-2xl font-black text-white tracking-tighter font-headline flex items-center gap-2 px-0 py-0">
                            {/* <img
                                src="/logo.png"
                                alt="Black Horse Associates"
                                className="w-56 object-contain"
                            /> */}
                            <span>Black Horse Associates</span>
                        </div>
                    </Link>

                    <nav className="hidden md:flex gap-4 items-center">
                        <div className="hidden lg:flex items-center gap-8">
                            <Link className="text-slate-300/80 hover:text-white transition-colors font-headline font-bold tracking-tight text-sm uppercase" href="./">Home</Link>
                            <Link className="text-slate-300/80 hover:text-white transition-colors font-headline font-bold tracking-tight text-sm uppercase" href="./">About Us</Link>
                            <Link className="text-slate-300/80 hover:text-white transition-colors font-headline font-bold tracking-tight text-sm uppercase" href="./">Services</Link>
                        </div>
                    </nav>
                    <a
                        href="https://wa.me/8401165350?text=Hello!%20I%20would%20like%20to%20know%20more."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-primary px-7 py-3 font-headline font-bold text-[13px] uppercase tracking-widest rounded-md hover:bg-opacity-90 transition-all shadow-md text-center"
                    >
                        Contact Us
                    </a>
                </div>
            </header>
        </>
    )
}