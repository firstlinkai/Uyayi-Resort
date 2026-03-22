import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MapPin, Send, Facebook, Instagram } from 'lucide-react';

export const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = encodeURIComponent(`Reservation/Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:aifirstlink@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-midnight-slate/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-full max-w-5xl bg-midnight-slate border border-white/5 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/5 hover:bg-golden-sunset hover:text-midnight-slate flex items-center justify-center transition-all cursor-pointer outline-none border-none text-soft-silver"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Side: Contact Form */}
            <div className="flex-[1.2] p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-white/5">
              <div className="flex flex-col mb-10">
                <span className="text-golden-sunset text-[10px] tracking-[0.3em] uppercase font-bold mb-1">Get in Touch</span>
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white">Send us a Message.</h2>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-soft-silver/40 font-bold ml-1">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Juan Dela Cruz"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-soft-silver placeholder:text-soft-silver/20 focus:outline-none focus:border-golden-sunset/50 transition-colors font-open-sans"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-soft-silver/40 font-bold ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="juan@example.com"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-soft-silver placeholder:text-soft-silver/20 focus:outline-none focus:border-golden-sunset/50 transition-colors font-open-sans"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-soft-silver/40 font-bold ml-1">Message</label>
                  <textarea 
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you plan your stay?"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-soft-silver placeholder:text-soft-silver/20 focus:outline-none focus:border-golden-sunset/50 transition-colors font-open-sans resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-golden-sunset text-midnight-slate rounded-lg font-montserrat font-bold uppercase tracking-widest text-xs hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer border-none"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Side: Contact Details */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 bg-white/[0.02] flex flex-col justify-between">
              <div className="space-y-10">
                <div className="space-y-3">
                  <h3 className="text-xs tracking-[0.3em] uppercase font-bold text-golden-sunset">Visit Us</h3>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-golden-sunset/10 flex items-center justify-center text-golden-sunset shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-open-sans text-soft-silver leading-relaxed opacity-80 pt-1">
                      Apurawan, Aborlan,<br />Palawan, 5302
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs tracking-[0.3em] uppercase font-bold text-golden-sunset">Call Us</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-golden-sunset/10 flex items-center justify-center text-golden-sunset shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-sm font-open-sans text-soft-silver font-bold">+63 908 406 1680</p>
                        <p className="text-[10px] text-soft-silver/40 uppercase tracking-widest">Smart / WhatsApp</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-golden-sunset/10 flex items-center justify-center text-golden-sunset shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-sm font-open-sans text-soft-silver font-bold">+63 917 115 2666</p>
                        <p className="text-[10px] text-soft-silver/40 uppercase tracking-widest">Globe / GCash</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs tracking-[0.3em] uppercase font-bold text-golden-sunset">Socials</h3>
                  <div className="flex flex-wrap gap-4">
                    <a href="https://www.facebook.com/profile.php?id=100090655960861" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-montserrat font-bold text-soft-silver hover:bg-golden-sunset hover:text-midnight-slate transition-all group">
                      <Facebook className="w-4 h-4" />
                      Facebook
                    </a>
                    <a href="https://www.instagram.com/uyayisabaybay/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-montserrat font-bold text-soft-silver hover:bg-golden-sunset hover:text-midnight-slate transition-all group">
                      <Instagram className="w-4 h-4" />
                      Instagram
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="mt-10 lg:mt-0">
                <h3 className="text-[10px] tracking-[0.3em] uppercase font-bold text-golden-sunset/60 mb-3 ml-1">Our Location</h3>
                <div className="w-full aspect-[21/9] rounded-xl overflow-hidden border border-white/10 group grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.8864449088596!2d118.33699200000001!3d9.6050454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33cab9807a28afd5%3A0xe15bc20f9ae1c6f5!2sUyayi%20sa%20Baybay%20beach%20camp!5e0!3m2!1sen!2sph!4v1774128651386!5m2!1sen!2sph"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Uyayi sa Baybay Location"
                  ></iframe>
                </div>
                <a 
                  href="https://maps.app.goo.gl/AhK4ysAZNdY618sL9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-[10px] font-montserrat font-bold text-golden-sunset hover:text-white transition-colors uppercase tracking-widest ml-1"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
