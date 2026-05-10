import 'material-symbols';
import './globals.css';

import { Navbar } from '../components/organisms/navbar';
import { Hero } from '../components/organisms/hero';
import { ImpactMetrics } from '../components/organisms/impactMetric';
import { PrecisionSection } from '../components/organisms/precisionSection';
import { Competencies } from '../components/organisms/competencies';
import { Testimonial } from '../components/organisms/testimonial';
import { Footer } from '../components/organisms/footer';

export default function LandingPage() {
  return (
    <div className="bg-background text-on-surface font-body-md antialiased min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-20 flex-grow">
        <Hero />
        <ImpactMetrics />
        <PrecisionSection />
        <Competencies />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}