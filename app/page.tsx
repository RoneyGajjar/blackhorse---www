import { Navbar } from '@/components/organisms/navbar';
import { Hero } from '@/components/organisms/hero';
import { Features } from '@/components/organisms/features';
import { Statement } from '@/components/organisms/statement';
import { Situations } from '@/components/molecules/situtations';
import { Services } from '@/components/organisms/services';
import { Process } from '@/components/organisms/process';
import { FAQ } from '@/components/organisms/faq';
import { CTA } from '@/components/organisms/cta';
import { Footer } from '@/components/organisms/footer';
import IndustriesSpecialize from '@/components/organisms/industreis-specialization';

export default function Home() {
  return (
    <main className="bg-white min-h-screen selection:bg-brand-dark selection:text-white">
      <Navbar />
      <Hero />
      <Statement />
      <Features />
      <IndustriesSpecialize />
      {/* <Situations h /> */}
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