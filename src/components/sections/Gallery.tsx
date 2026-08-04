import { motion } from 'framer-motion';

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

export const Gallery = () => {
  return (
    <section className="py-24 bg-midnight-slate overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 rounded-full border border-golden-sunset/40 flex items-center justify-center text-golden-sunset text-sm font-montserrat font-semibold">
            05
          </div>
          <div className="h-[1px] w-8 bg-golden-sunset/20" />
          <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-golden-sunset font-montserrat font-bold">
            Ang Aming Gallery (Our Gallery)
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white leading-tight">
          Capturing the Calm.
        </h2>
      </div>

      <div className="relative flex overflow-hidden group">
        <motion.div 
          animate={{ x: [0, -1920] }}
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear"
            }
          }}
          className="flex gap-4 px-2"
        >
          {[...images, ...images].map((src, index) => (
            <div 
              key={index} 
              className="relative w-64 md:w-80 aspect-[4/3] flex-shrink-0 overflow-hidden rounded-[8px] bg-white/5"
            >
              <img 
                src={src} 
                alt="Resort Gallery" 
                className="w-full h-full object-cover grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
