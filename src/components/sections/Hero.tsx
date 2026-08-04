import { motion } from 'framer-motion';

export const Hero = ({ onContactClick }: { onContactClick?: () => void }) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-midnight-slate">
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-[1.01]"
        >
          <source src="/Media/Videos/Cropped%20Hero.mp4" type="video/mp4" />
        </video>
        {/* Deep Midnight Overlay mask for seamless blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-midnight-slate/20 to-midnight-slate z-10" />
        <div className="absolute inset-0 mask-fade-midnight z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.span 
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 0.8, letterSpacing: "0.5em" }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="text-[10px] md:text-xs text-white uppercase font-montserrat font-bold block"
            >
              Experience the True Palawan
            </motion.span>
            <h1 className="text-5xl md:text-8xl font-montserrat font-bold text-white tracking-tight leading-[1.1] text-shadow-hero">
              Lika na! <br />
              <span className="text-soft-silver font-light italic font-cormorant lowercase tracking-normal">Takas tayo sa Uyayi.</span>
            </h1>
          </div>
          
          <p className="text-soft-silver font-open-sans text-sm md:text-lg max-w-2xl mx-auto opacity-80 leading-relaxed font-medium">
            Simple shores, calm waves, and the peace of Aborlan.<br className="hidden md:block" /> Your home away from the city.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
            <button 
              onClick={onContactClick}
              className="btn-salterra-solid w-full md:w-auto min-w-[200px] border-none bg-golden-sunset text-midnight-slate"
            >
              Book Your Stay
            </button>
            {/* Removed "Check Availability" from Hero as per user request */}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-golden-sunset animate-pulse" />
      </motion.div>
    </section>
  );
};
