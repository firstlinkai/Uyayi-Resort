import { motion, AnimatePresence } from 'framer-motion';
  import { X } from 'lucide-react';

  const images = [
    "/Media/Images/LowRes/472717154_564156533282874_853350819358260274_n.png",
    "/Media/Images/LowRes/472808971_564152536616607_4050581145257793835_n.png",
    "/Media/Images/LowRes/473360018_568057196226141_3053201795909204510_n.png",
    "/Media/Images/LowRes/473585589_568056869559507_5110205703974906744_n.png",
    "/Media/Images/LowRes/473621135_568057202892807_3417743218481618774_n.png",
    "/Media/Images/LowRes/480587709_596410710057456_222406753551662904_n.png",
    "/Media/Images/LowRes/480857538_601757856189408_7908690617619398281_n.png",
    "/Media/Images/LowRes/481076515_604030732628787_2772829439943037666_n.png",
    "/Media/Images/LowRes/481770137_601766782855182_6724456286236815360_n.png",
    "/Media/Images/LowRes/483509246_613169438381583_6101226845347115281_n.png",
    "/Media/Images/LowRes/484791814_613169428381584_3068481334169499878_n.png",
    "/Media/Images/LowRes/486685890_624381043927089_1803417275540538257_n.png",
    "/Media/Images/LowRes/487118561_624380623927131_5793168734616217215_n.png",
    "/Media/Images/LowRes/488024177_629689153396278_1035810140508884648_n.png",
    "/Media/Images/LowRes/491980950_641402508891609_2970791921163454504_n.png"
  ];

  export const PhotoGalleryModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-midnight-slate flex flex-col pt-24"
          >
            {/* Header */}
            <div className="fixed top-0 left-0 right-0 p-6 md:p-12 flex items-center justify-between bg-midnight-slate/80 backdrop-blur-md z-[110]">
              <div className="flex flex-col">
                <span className="text-golden-sunset text-[10px] tracking-[0.3em] uppercase font-bold mb-1">Our Gallery</span>
                <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-white">Moments of Peace</h2>
              </div>
              <button 
                onClick={onClose}
                className="numbered-index group !w-12 !h-12 hover:bg-golden-sunset hover:text-midnight-slate transition-all cursor-pointer outline-none border-none bg-transparent"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Grid */}
            <div className="flex-1 overflow-y-auto px-6 md:px-12 pb-24 scrollbar-hide">
              <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {images.map((src, index) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="relative aspect-[4/3] overflow-hidden rounded-[8px] group bg-white/5"
                  >
                    <img 
                      src={src} 
                      alt={`Resort Photo ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-midnight-slate/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-24 text-center pb-12">
                <p className="text-soft-silver/40 font-montserrat text-[10px] tracking-[0.4em] uppercase">End of Gallery</p>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="mt-4 text-golden-sunset hover:text-white transition-colors text-xs font-bold font-montserrat uppercase tracking-widest cursor-pointer outline-none border-none bg-transparent"
                >
                  Back to Top
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };
