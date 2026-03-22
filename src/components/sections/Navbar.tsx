import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = ({ onPhotosClick, onContactClick, onAboutClick }: { onPhotosClick?: () => void; onContactClick?: () => void; onAboutClick?: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, type: string) => {
    e.preventDefault();
    if (type === 'Photos') {
      onPhotosClick?.();
    } else if (type === 'Contact') {
      onContactClick?.();
    } else if (type === 'About Us') {
      onAboutClick?.();
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-midnight-slate/95 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <button 
            onClick={() => setIsOpen(true)}
            className={`flex items-center gap-3 group outline-none ${isScrolled ? 'text-soft-silver' : 'text-white'}`}
          >
            <div className="flex flex-col gap-1.5">
              <span className={`h-[1px] w-6 transition-all group-hover:w-8 ${isScrolled ? 'bg-golden-sunset' : 'bg-white'}`} />
              <span className={`h-[1px] w-4 transition-all group-hover:w-8 ${isScrolled ? 'bg-golden-sunset' : 'bg-white'}`} />
            </div>
            <span className="text-[10px] tracking-[0.3em] font-montserrat font-bold uppercase">Menu</span>
          </button>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className={`text-xl md:text-2xl font-montserrat font-bold tracking-[0.2em] uppercase transition-colors duration-500 whitespace-nowrap ${isScrolled ? 'text-golden-sunset' : 'text-white'}`}>
            UYAYI <span className="font-light normal-case tracking-normal">sa Baybay</span>
          </h1>
        </div>

        <button 
          onClick={onContactClick}
          className={`hidden md:block btn-salterra-solid !px-6 !py-2 !text-[10px] cursor-pointer outline-none border-none ${isScrolled ? 'bg-golden-sunset text-midnight-slate' : 'bg-white/10 text-white border-white/20'}`}
        >
          Book Your Stay
        </button>

        <button className="md:hidden text-white outline-none" onClick={() => setIsOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 bg-midnight-slate z-[60] flex flex-col p-12"
          >
            <button onClick={() => setIsOpen(false)} className="self-end text-soft-silver hover:text-golden-sunset outline-none">
              <X className="w-8 h-8" />
            </button>
            <div className="mt-24 space-y-8">
              {['Home', 'Photos', 'About Us', 'Contact'].map((item, i) => (
                <motion.a 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href="#" 
                  onClick={(e) => handleLinkClick(e, item)}
                  className="block text-4xl md:text-6xl font-montserrat font-bold text-soft-silver hover:text-golden-sunset transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
