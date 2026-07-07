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
import { FadeInReveal } from '@/components/atoms/fade-in-reveal';

export default function Home() {
  return (
    <main className="bg-white min-h-screen selection:bg-brand-dark selection:text-white">
      {/* Immediate render for above-the-fold content */}
      <Navbar />
      <Hero />

      {/* Scroll-triggered reveal for everything below the fold */}
      <FadeInReveal>
        <Statement />
      </FadeInReveal>

      <FadeInReveal>
        <Features />
      </FadeInReveal>

      <FadeInReveal>
        <IndustriesSpecialize />
      </FadeInReveal>

      {/* <FadeInReveal><Situations h /></FadeInReveal> */}

      <FadeInReveal>
        <Services />
      </FadeInReveal>

      <FadeInReveal>
        <Process />
      </FadeInReveal>

      {/* <FadeInReveal><FAQ /></FadeInReveal> */}

      <FadeInReveal>
        <CTA />
      </FadeInReveal>

      <FadeInReveal>
        <Footer />
      </FadeInReveal>
    </main>
  );
}