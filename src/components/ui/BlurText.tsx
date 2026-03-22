import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export const BlurText = ({ text, delay = 0, className = "" }: BlurTextProps) => {
  const words = text.split(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`flex flex-wrap gap-x-[0.2em] ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
          animate={isInView ? { filter: "blur(0px)", opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.35,
            delay: delay + i * 0.1,
            ease: [0.21, 0.47, 0.32, 0.98]
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};
