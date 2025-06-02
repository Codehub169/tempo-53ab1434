import React from 'react';
import AnimatedLogo from './AnimatedLogo';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  // This section serves as the initial view, taking up the full viewport height.
  // It features the AnimatedLogo, tagline, subtext, and a scroll-down indicator.
  return (
    <section 
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-hueneu-neutral-bg relative section-padding"
    >
      {/* Animated Logo Component */}
      <AnimatedLogo />

      {/* Tagline */}
      <p className="mt-6 text-2xl md:text-3xl font-poppins text-hueneu-primary">
        Where stories find their aesthetic.
      </p>

      {/* Subtext */}
      <p className="mt-3 text-lg md:text-xl font-inter text-hueneu-primary/80 max-w-md">
        Designs that whisper loud stories.
      </p>

      {/* Smooth Scroll-Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <a href="#story" aria-label="Scroll to next section">
          <ArrowDown 
            className="text-hueneu-primary h-8 w-8 animate-scroll-down stroke-1"
          />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
