import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Truck, Wifi, Utensils, Waves, Sun, Moon } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onArrangeTransport: () => void;
}

export const AboutModal = ({ isOpen, onClose, onArrangeTransport }: AboutModalProps) => {
  const handleArrangeTransport = () => {
    onClose();
    setTimeout(() => onArrangeTransport(), 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-midnight-slate/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12 overflow-y-auto"
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="w-full max-w-3xl bg-[#0D131A] border border-white/5 rounded-2xl overflow-hidden shadow-2xl relative my-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/5 hover:bg-golden-sunset hover:text-midnight-slate flex items-center justify-center transition-all cursor-pointer outline-none border-none text-soft-silver"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="px-8 md:px-12 pt-12 pb-8 border-b border-white/5">
              <span className="text-golden-sunset text-[10px] tracking-[0.4em] uppercase font-bold">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mt-2">
                Uyayi sa Baybay
              </h2>
              <p className="text-soft-silver/70 font-open-sans text-sm leading-relaxed mt-4 max-w-xl">
                Nestled along the quiet shores of Apurawan in Aborlan, Palawan, Uyayi sa Baybay is a family-run beach camp rooted in simplicity and genuine island hospitality. We created this space as a retreat — where you can arrive tired and leave renewed.
              </p>
              <p className="text-soft-silver/70 font-open-sans text-sm leading-relaxed mt-3 max-w-xl">
                "Uyayi" means <em>lullaby</em> in our local tongue. We named our camp after that feeling — the gentle sound of tides, the sway of palms, and the comfort of finally slowing down.
              </p>
            </div>

            {/* Your Stay */}
            <div className="px-8 md:px-12 py-8 border-b border-white/5">
              <h3 className="text-[10px] tracking-[0.4em] uppercase font-bold text-golden-sunset mb-6">Your Stay</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Waves className="w-5 h-5" />,
                    title: 'Beach Cottages',
                    desc: 'Native-style nipa huts steps away from the shore — breezy, private, and designed for restful sleep.',
                  },
                  {
                    icon: <Utensils className="w-5 h-5" />,
                    title: 'Home-Cooked Meals',
                    desc: 'We prepare simple, fresh Filipino meals made from local ingredients. Breakfast is included in most packages.',
                  },
                  {
                    icon: <Sun className="w-5 h-5" />,
                    title: 'Day Activities',
                    desc: 'Swimming, island hopping, beach volleyball, or simply lying in a hammock — it\'s your day, your pace.',
                  },
                  {
                    icon: <Moon className="w-5 h-5" />,
                    title: 'Quiet Evenings',
                    desc: 'Bonfires, stargazing, and the sound of the sea. No disco, no rush — just the kind of night you\'ll remember.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-golden-sunset/10 flex items-center justify-center text-golden-sunset shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white font-montserrat font-bold text-sm">{item.title}</p>
                      <p className="text-soft-silver/60 font-open-sans text-xs leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Essentials */}
            <div className="px-8 md:px-12 py-8 border-b border-white/5">
              <h3 className="text-[10px] tracking-[0.4em] uppercase font-bold text-golden-sunset mb-6">Essentials</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { icon: <Wifi className="w-4 h-4" />, label: 'Basic Wi-Fi' },
                  { icon: <Utensils className="w-4 h-4" />, label: 'Meals Available' },
                  { icon: <Waves className="w-4 h-4" />, label: 'Private Beachfront' },
                  { icon: <Sun className="w-4 h-4" />, label: 'Solar Lighting' },
                  { icon: <MapPin className="w-4 h-4" />, label: 'Aborlan, Palawan' },
                  { icon: <Truck className="w-4 h-4" />, label: 'Transport Assist' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 px-4 py-3 bg-white/[0.03] border border-white/5 rounded-xl">
                    <span className="text-golden-sunset">{item.icon}</span>
                    <span className="text-soft-silver/80 font-open-sans text-xs">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Travel */}
            <div className="px-8 md:px-12 py-8">
              <h3 className="text-[10px] tracking-[0.4em] uppercase font-bold text-golden-sunset mb-4">Location &amp; Travel</h3>
              <p className="text-soft-silver/70 font-open-sans text-sm leading-relaxed mb-6 max-w-xl">
                We're located in Barangay Apurawan, Aborlan, Palawan — roughly 2 hours south of Puerto Princesa City. We can assist you in arranging a van or tricycle from the Puerto Princesa airport to our camp, so you arrive without the stress.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://maps.app.goo.gl/AhK4ysAZNdY618sL9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-6 bg-white/5 border border-white/10 rounded-xl text-xs font-montserrat font-bold text-soft-silver hover:bg-white/10 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-golden-sunset" />
                  View on Google Maps
                </a>
                <button
                  onClick={handleArrangeTransport}
                  className="flex-1 py-3 px-6 bg-golden-sunset text-midnight-slate rounded-xl text-xs font-montserrat font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer border-none"
                >
                  <Truck className="w-4 h-4" />
                  Arrange My Transport
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
