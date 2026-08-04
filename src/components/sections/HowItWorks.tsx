import { ArrowUpRight } from 'lucide-react';
import { HLSVideo } from '../ui/HLSVideo';

export const HowItWorks = () => {
  return (
    <section className="relative min-h-[700px] w-full overflow-hidden bg-black flex flex-col items-center justify-center py-32 px-6 md:px-16 lg:px-24">
      {/* Background HLS Video */}
      <HLSVideo 
        src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
      />

      {/* Fade Gradients */}
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-3xl">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
          How It Works
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-heading italic text-white tracking-tight leading-[0.9] mb-6">
          You dream it. We ship it.
        </h2>
        
        <p className="text-white/60 font-body font-light text-sm md:text-base mb-10 leading-relaxed max-w-xl">
          Share your vision. Our AI handles the rest—wireframes, design, code, launch. 
          All in days, not quarters.
        </p>

        <button className="liquid-glass-strong px-8 py-3.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-white/5 transition-all text-white font-body border border-white/10">
          Get Started
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
