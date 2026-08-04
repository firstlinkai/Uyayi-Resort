import { Zap, Palette, BarChart3, Shield } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-5 h-5 text-white" />,
    title: "Days, Not Months",
    description: "Concept to launch at a pace that redefines fast."
  },
  {
    icon: <Palette className="w-5 h-5 text-white" />,
    title: "Obsessively Crafted",
    description: "Every detail considered. Every element refined."
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-white" />,
    title: "Built to Convert",
    description: "Layouts informed by data. Decisions backed by performance."
  },
  {
    icon: <Shield className="w-5 h-5 text-white" />,
    title: "Secure by Default",
    description: "Enterprise-grade protection comes standard."
  }
];

export const FeaturesGrid = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
            Why Us
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            The difference is everything.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="liquid-glass rounded-2xl p-8 hover:bg-white/[0.02] transition-colors group">
              <div className="liquid-glass-strong rounded-full w-12 h-12 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading italic text-white mb-3 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-white/50 font-body font-light text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
