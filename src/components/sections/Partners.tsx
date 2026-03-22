export const Partners = () => {
  return (
    <section className="py-16 bg-black flex flex-col items-center gap-8 px-6">
      <div className="liquid-glass rounded-full px-4 py-1.5 text-xs font-medium text-white/60 font-body">
        Trusted by the teams behind
      </div>
      
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 max-w-5xl">
        {["Stripe", "Vercel", "Linear", "Notion", "Figma"].map((name) => (
          <span key={name} className="text-2xl md:text-3xl font-heading italic text-white/40 hover:text-white/90 transition-colors cursor-default">
            {name}
          </span>
        ))}
      </div>
    </section>
  );
};
