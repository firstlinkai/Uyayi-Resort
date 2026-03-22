import { motion } from 'framer-motion';

interface StaggeredSectionProps {
  index: number;
  title: string;
  subtitle: string;
  description: string;
  imagePath: string;
  reverse?: boolean;
  isDark?: boolean;
  onButtonClick?: () => void;
}

export const StaggeredSection = ({ index, title, subtitle, description, imagePath, reverse, isDark, onButtonClick }: StaggeredSectionProps) => {
  return (
    <section className={`py-24 md:py-40 px-6 md:px-12 lg:px-24 overflow-hidden ${isDark ? 'bg-midnight-slate text-soft-silver' : 'bg-warm-shell text-dusk-slate'}`}>
      <div className={`max-w-7xl mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 md:gap-24`}>
        
        {/* Text Column */}
        <div className="flex-1 space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: reverse ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className={`w-10 h-10 rounded-full border ${isDark ? 'border-golden-sunset/40' : 'border-golden-sand/30'} flex items-center justify-center text-golden-sunset text-sm font-montserrat font-semibold`}>
              0{index}
            </div>
            {/* Shrunk accent line */}
            <div className={`h-[1px] w-8 ${isDark ? 'bg-golden-sunset/20' : 'bg-palm-green/40'}`} />
            <span className={`text-[10px] md:text-xs tracking-[0.3em] uppercase ${isDark ? 'text-golden-sunset' : 'text-palm-green'} font-montserrat font-bold`}>
              {subtitle}
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold ${isDark ? 'text-white' : 'text-midnight-slate'} leading-tight`}
          >
            {title}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`text-base md:text-lg font-open-sans leading-relaxed opacity-90 max-w-xl ${isDark ? 'text-soft-silver/80' : 'text-dusk-slate/90'}`}
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {onButtonClick && (
              <button 
                onClick={onButtonClick}
                className={`px-8 py-3 rounded-full border border-golden-sunset text-golden-sunset text-xs font-montserrat font-bold tracking-widest uppercase transition-all duration-300 hover:bg-golden-sunset hover:text-midnight-slate cursor-pointer outline-none`}
              >
                {index === 1 ? "See Our Photos" : index === 3 ? "Check Availability" : index === 4 ? "Contact Us" : "Learn More"}
              </button>
            )}
          </motion.div>
        </div>

        {/* Image Column */}
        <div className="flex-1 w-full relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-video md:aspect-[3/2] overflow-hidden rounded-[8px] shadow-2xl"
          >
            <img 
              src={imagePath} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
