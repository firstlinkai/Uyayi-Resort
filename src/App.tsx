import { useState } from 'react';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { StaggeredSection } from './components/sections/StaggeredSection';
import { Gallery } from './components/sections/Gallery';
import { Footer } from './components/sections/Footer';
import { PhotoGalleryModal } from './components/sections/PhotoGalleryModal';
import { ContactModal } from './components/sections/ContactModal';
import { AboutModal } from './components/sections/AboutModal';

function App() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const toggleGallery = () => setIsGalleryOpen(!isGalleryOpen);
  const toggleContact = () => setIsContactOpen(!isContactOpen);
  const toggleAbout = () => setIsAboutOpen(!isAboutOpen);

  return (
    <div className="bg-midnight-slate min-h-screen selection:bg-golden-sunset/20 selection:text-soft-silver overflow-x-hidden">
      <Navbar onPhotosClick={toggleGallery} onContactClick={toggleContact} onAboutClick={toggleAbout} />
      
      <main>
        <Hero onContactClick={toggleContact} />
        
        {/* Section 01: The Vision */}
        <div className="-mt-[50px] relative z-20">
          <StaggeredSection 
            index={1}
            subtitle="Ang Aming Alok (Our Offering)"
            title="Simple, Peaceful, and True."
            description="We believe in the beauty of the basics. At Uyayi sa Baybay, every sunset is a gift and every guest is family. We’ve kept things simple so you can focus on what matters: the fresh air, the sea, and the feeling of finally belonging."
            imagePath="/Media/Images/Generated%20Image%20March%2022,%202026%20-%203_04AM.jpg"
            isDark={true}
            onButtonClick={toggleGallery}
          />
        </div>

        <StaggeredSection 
          index={2}
          subtitle="Ang Inyong Bakasyon (Your Vacation)"
          title="No Rush, No Noise."
          description="We strip away the stress of the city. Our resort is built on local hospitality and the quiet rhythm of the beach. Whether you’re here for a quick weekend 'takas' or a long stay, we make sure you have everything you need to just... breathe."
          imagePath="/Media/Images/Generated Image March 22, 2026 - 2_59AM.jpg"
          reverse
          isDark={true}
        />

        <StaggeredSection 
          index={3}
          subtitle="Ang Dalampasigan (The Shoreline)"
          title="Nature as it is."
          description="A trip to Aborlan is a chance to see the Palawan people love—untouched and honest. From the morning coffee by the waves to the late-night sound of the palms, we ensure your journey from the city to our shore is worth every kilometer."
          imagePath="/Media/Images/Generated Image March 22, 2026 - 3_01AM.jpg"
          isDark={true}
          onButtonClick={toggleContact}
        />

        <StaggeredSection 
          index={4}
          subtitle="Gawang Lokal (Locally Made)"
          title="Real Hospitality."
          description="We care about the small things. From our clean, cozy spaces to the warm smiles of our team, we offer a place that reflects the true character of our community. Join us for a stay that feels less like a hotel and more like home."
          imagePath="/Media/Images/Generated Image March 22, 2026 - 3_03AM.jpg"
          reverse
          isDark={true}
          onButtonClick={toggleContact}
        />

        {/* Scrolling Preview Gallery */}
        <Gallery />
      </main>

      <Footer onPhotosClick={toggleGallery} onContactClick={toggleContact} onAboutClick={toggleAbout} />

      {/* Full Photo Modal Gallery */}
      <PhotoGalleryModal 
        isOpen={isGalleryOpen} 
        onClose={() => setIsGalleryOpen(false)} 
      />

      {/* About Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onArrangeTransport={() => setIsContactOpen(true)}
      />

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}

export default App;
