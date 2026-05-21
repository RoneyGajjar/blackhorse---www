import React from 'react';
import { Navbar } from '../components/organisms/Navbar';
import { Hero } from '../components/organisms/Hero';
import { Features } from '../components/organisms/Features';
import { Services } from '../components/organisms/Services';
import { Process } from '../components/organisms/Process';
import { Statement } from '../components/organisms/Statement';
import { CTA } from '../components/organisms/CTA';
import { Footer } from '@/components/organisms/Footer';

export default function Home() {
  return (
    <main className="bg-white min-h-screen selection:bg-brand-dark selection:text-white">
      <Navbar />
      <Hero />
      <Statement />
      <Features />
      {/* <Situations /> */}
      <Services />
      <Process />
      {/* <FAQ /> */}
      <CTA />
      {/* Add remaining organisms here:
        <ComplexNeeds />
        <Testimonials />
        <Footer />
      */}
      <Footer />
    </main>
  );
}