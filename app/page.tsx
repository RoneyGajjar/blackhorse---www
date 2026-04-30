export default function ComingSoonHero() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-32 text-center bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Overline / Company Name */}
        <h2 className="mb-6 text-sm font-medium tracking-[0.2em] uppercase text-neutral-900">
          Blackhorse Associates
        </h2>

        {/* Main Headline */}
        <h1 className="mb-6 text-3xl md:text-4xl font-normal text-neutral-900">
          Coming Soon
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg leading-relaxed text-neutral-800">
          Building a sophisticated infrastructure for CPAs and accounting firms. 
          We are redefining precision, legacy, and discretion in modern corporate 
          finance.
        </p>
      </div>
    </section>
  );
}