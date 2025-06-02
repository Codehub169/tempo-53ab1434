import React from 'react';

const AnimatedLogo = () => {
  // This component renders the text "hueneu" with a reveal animation.
  // The animation 'animate-logo-reveal' is defined in tailwind.config.js
  // It makes the logo fade in and slide up slightly.
  return (
    <div className="overflow-hidden">
      <h1 className="font-poppins text-6xl md:text-8xl font-semibold text-hueneu-primary animate-logo-reveal">
        hueneu
      </h1>
    </div>
  );
};

export default AnimatedLogo;
