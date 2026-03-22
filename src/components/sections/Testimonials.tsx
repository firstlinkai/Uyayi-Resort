const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, Luminary",
    quote: "A complete rebuild in five days. The AI-driven process didn't just save time—it delivered a more thoughtful, performant design than our previous agency did in five months."
  },
  {
    name: "Marcus Webb",
    role: "Head of Growth, Arcline",
    quote: "Conversions up 4x within the first two weeks of launch. The real-time optimization features are a game-changer for our paid acquisition strategy."
  },
  {
    name: "Elena Voss",
    role: "Brand Director, Helix",
    quote: "They didn't just design our site; they built a conversion engine. Every detail of the liquid-glass interface feels premium and reinforces our market position."
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
            What They Say
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-heading italic text-white tracking-tight leading-[0.9]">
            Don't take our word for it.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="liquid-glass rounded-2xl p-10 flex flex-col justify-between border border-white/5">
              <p className="text-white/80 font-body font-light text-sm md:text-base italic leading-relaxed mb-10">
                "{t.quote}"
              </p>
              <div>
                <div className="text-white font-body font-medium text-sm mb-1">{t.name}</div>
                <div className="text-white/40 font-body font-light text-xs tracking-wide">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
