import React from 'react';
import { MessageCircleHeart } from 'lucide-react'; // Example icon, can be changed or removed

const WhyHueneuSection = () => {
  return (
    <section id="why-hueneu" className="bg-hueneu-primary text-neutral-bg section-padding">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 font-poppins">
          Why hueneu?
        </h2>
        {/* Poetic Brand Pitch */}
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-xl md:text-2xl leading-relaxed font-inter">
            We don’t just design—<span className="text-hueneu-accent font-semibold">we decode stories.</span>
          </p>
          <p className="text-lg md:text-xl leading-relaxed font-inter opacity-90">
            In a world that often shouts, we believe in the power of quiet resonance. Our designs aren't just pixels and palettes; they are carefully woven narratives, born from understanding your unique essence. We seek the subtle, the meaningful, the moments that make your story unforgettable.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed font-inter">
            Designs that speak quietly but <span className="italic">stay with you.</span>
          </p>
          <div className="pt-8 flex justify-center">
            <MessageCircleHeart size={48} className="text-hueneu-accent opacity-75" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHueneuSection;
