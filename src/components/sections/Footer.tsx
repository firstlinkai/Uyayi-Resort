import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';

export const Footer = ({ onPhotosClick, onContactClick, onAboutClick }: { onPhotosClick?: () => void; onContactClick?: () => void; onAboutClick?: () => void }) => {
  return (
    <footer className="bg-midnight-slate text-soft-silver py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12 mb-24">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <h2 className="text-2xl font-montserrat font-bold text-white tracking-widest uppercase">
              UYAYI <span className="font-light normal-case tracking-normal">sa Baybay</span>
            </h2>
            <p className="text-sm font-open-sans leading-relaxed opacity-60 max-w-xs">
              Your quiet escape in Apurawan, Aborlan. Simple stays, lasting memories.
            </p>
          </div>

          {/* Explore Column */}
          <div className="space-y-8">
            <h3 className="text-[10px] tracking-[0.4em] uppercase font-bold text-golden-sunset">Explore</h3>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={onPhotosClick}
                  className="text-sm font-montserrat font-medium hover:text-golden-sunset transition-colors cursor-pointer outline-none border-none bg-transparent p-0"
                >
                  Photos
                </button>
              </li>
              <li>
                <button
                  onClick={onAboutClick}
                  className="text-sm font-montserrat font-medium hover:text-golden-sunset transition-colors cursor-pointer outline-none border-none bg-transparent p-0"
                >
                  About Us
                </button>
              </li>
              <li>
                <a 
                  href="https://maps.app.goo.gl/AhK4ysAZNdY618sL9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-montserrat font-medium hover:text-golden-sunset transition-colors"
                >
                  Location
                </a>
              </li>
              <li>
                <button 
                  onClick={onContactClick}
                  className="text-sm font-montserrat font-medium hover:text-golden-sunset transition-colors cursor-pointer outline-none border-none bg-transparent p-0"
                >
                  Check In
                </button>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-8">
            <h3 className="text-[10px] tracking-[0.4em] uppercase font-bold text-golden-sunset">Connect</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm opacity-80">
                <MapPin className="w-4 h-4 text-golden-sunset" />
                Apurawan, Aborlan, Palawan, 5302
              </li>
              <li className="flex items-center gap-3 text-sm opacity-80 text-left" title="Smart / WhatsApp">
                <Phone className="w-4 h-4 text-golden-sunset" />
                +63 908 406 1680
              </li>
              <li className="flex items-center gap-3 text-sm opacity-80 text-left" title="Globe / GCash">
                <Phone className="w-4 h-4 text-golden-sunset" />
                +63 917 115 2666
              </li>
              <li className="flex items-center gap-3 text-sm opacity-80">
                <Mail className="w-4 h-4 text-golden-sunset" />
                uyayibeach@gmail.com
              </li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div className="space-y-8">
            <h3 className="text-[10px] tracking-[0.4em] uppercase font-bold text-golden-sunset">Follow Us</h3>
            <div className="flex flex-col gap-4">
              <button 
                onClick={onContactClick}
                className="flex items-center gap-3 text-sm font-montserrat font-medium group hover:text-golden-sunset transition-colors cursor-pointer outline-none border-none bg-transparent p-0"
              >
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-golden-sunset transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
                Contact Us
              </button>
              <a href="https://www.facebook.com/profile.php?id=100090655960861" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-montserrat font-medium group hover:text-golden-sunset transition-colors">
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-golden-sunset transition-colors">
                  <Facebook className="w-4 h-4" />
                </div>
                Facebook
              </a>
              <a href="https://www.instagram.com/uyayisabaybay/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-montserrat font-medium group hover:text-golden-sunset transition-colors">
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-golden-sunset transition-colors">
                  <Instagram className="w-4 h-4" />
                </div>
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 text-[10px] tracking-widest uppercase font-bold">
          <p>© 2026 UYAYI SA BAYBAY RESORT</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-golden-sunset transition-colors">Privacy</a>
            <a href="#" className="hover:text-golden-sunset transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
