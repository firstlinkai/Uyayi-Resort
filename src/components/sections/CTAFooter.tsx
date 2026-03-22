import { HLSVideo } from '../ui/HLSVideo';

export const CTAFooter = () => {
  return (
    <footer className="relative bg-black pt-32 pb-12 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Background HLS Video */}
      <HLSVideo 
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
      />

       {/* Top Fade Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto mb-32">
        <h2 className="text-5xl md:text-6xl lg:text-8xl font-heading italic text-white tracking-[-4px] leading-[0.85] mb-8">
          Your next website starts here.
        </h2>
        
        <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl mb-12">
          Book a free strategy call. See what AI-powered design can do for your brand.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <button className="liquid-glass-strong px-10 py-4 rounded-full text-base font-medium text-white font-body border border-white/20 hover:bg-white/5 transition-all">
            Book a Call
          </button>
          <button className="bg-white text-black px-10 py-4 rounded-full text-base font-medium font-body hover:bg-white/90 transition-all">
            View Pricing
          </button>
        </div>
      </div>

      {/* Simple Footer Bottom */}
      <div className="relative z-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white/40 text-xs font-body font-light">
          © 2026 Studio. All rights reserved.
        </div>
        <div className="flex items-center gap-8">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-white/40 hover:text-white/80 transition-colors text-xs font-body font-light">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
