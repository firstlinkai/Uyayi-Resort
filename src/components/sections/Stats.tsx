import { HLSVideo } from '../ui/HLSVideo';

const stats = [
  { value: "200+", label: "Sites launched" },
  { value: "98%", label: "Client satisfaction" },
  { value: "3.2x", label: "More conversions" },
  { value: "5 days", label: "Average delivery" }
];

export const Stats = () => {
  return (
    <section className="relative py-32 px-6 md:px-16 lg:px-24 bg-black overflow-hidden flex items-center justify-center">
      {/* Background HLS Video */}
      <HLSVideo 
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
        style={{ filter: 'saturate(0)' }}
      />

       {/* Fade Gradients */}
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-10" />

      <div className="relative z-20 w-full max-w-7xl">
        <div className="liquid-glass rounded-3xl p-12 md:p-20 overflow-hidden border border-white/5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-4">
                <div className="text-4xl md:text-5xl lg:text-7xl font-heading italic text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-white/40 font-body font-light text-xs md:text-sm uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
