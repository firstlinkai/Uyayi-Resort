export const FeaturesChess = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
            Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            Pro features. Zero complexity.
          </h2>
        </div>

        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-32">
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-tight">
              Designed to convert. Built to perform.
            </h3>
            <p className="text-white/60 font-body font-light text-sm md:text-base leading-relaxed">
              Every pixel is intentional. Our AI studies what works across thousands 
              of top sites—then builds yours to outperform them all.
            </p>
            <button className="liquid-glass-strong px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white/5 transition-all text-white font-body border border-white/10">
              Learn more
            </button>
          </div>
          <div className="flex-1 w-full aspect-video liquid-glass rounded-2xl overflow-hidden">
             <img src="/Media/Images/Generated Image March 22, 2026 - 2_59AM.jpg" alt="Feature 1" className="w-full h-full object-cover opacity-80" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-tight">
              It gets smarter. Automatically.
            </h3>
            <p className="text-white/60 font-body font-light text-sm md:text-base leading-relaxed">
              Your site evolves on its own. AI monitors every click, scroll, and 
              conversion—then optimizes in real time. No manual updates. Ever.
            </p>
            <button className="liquid-glass-strong px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white/5 transition-all text-white font-body border border-white/10">
              See how it works
            </button>
          </div>
          <div className="flex-1 w-full aspect-video liquid-glass rounded-2xl overflow-hidden">
             <img src="/Media/Images/Generated Image March 22, 2026 - 3_01AM.jpg" alt="Feature 2" className="w-full h-full object-cover opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
};
