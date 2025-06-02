import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react'; // Icon for the "Who Knew?" moment

const StorySection = () => {
  // State to trigger the "Who Knew?" animation
  // In a real app, this would ideally be tied to scroll position (e.g., using Intersection Observer or Framer Motion's useInView)
  const [showWhoKnew, setShowWhoKnew] = useState(false);

  useEffect(() => {
    // Simulate triggering the animation after a delay for demonstration
    const timer = setTimeout(() => {
      setShowWhoKnew(true);
    }, 1500); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="story"
      className="min-h-screen bg-hueneu-secondary text-hueneu-primary flex flex-col justify-center items-center section-padding text-center"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-poppins font-semibold mb-8">
          The <span className="text-hueneu-accent">hue</span> in hueneu.
        </h2>
        
        {/* Story Content */}
        <p className="font-inter text-lg md:text-xl mb-6 leading-relaxed">
          Hueneu is born from a dance between <strong className="font-semibold">‘Hue’</strong> – the vibrant burst of creative color, the unexpected spark – and <strong className="font-semibold">‘Neu’</strong> – the calm, grounding neutrality that provides clarity and focus. We believe powerful stories emerge from this very balance.
        </p>
        <p className="font-inter text-lg md:text-xl mb-12 leading-relaxed">
          It's where quiet contemplation meets bold expression, crafting designs that are not just seen, but felt. Designs that whisper, yet resonate deeply.
        </p>

        {/* "Who Knew?" Moment */}
        <div className={`relative p-6 md:p-8 bg-hueneu-neutral-light rounded-lg shadow-xl transition-all duration-500 ease-out transform ${showWhoKnew ? 'animate-pop-out opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <Zap className="absolute -top-4 -left-4 h-10 w-10 text-hueneu-accent bg-hueneu-neutral-light p-1 rounded-full shadow-lg" />
          <h3 className="text-3xl md:text-4xl font-poppins font-semibold text-hueneu-primary mb-3">
            Who Knew?
          </h3>
          <p className="font-inter text-md md:text-lg text-hueneu-primary/90">
            That such quiet beginnings could lead to designs that truly <span className="text-hueneu-accent font-semibold">pop</span>? It’s the surprise in the subtlety, the story in the stillness. That's the hueneu touch.
          </p>
        </div>

      </div>
    </section>
  );
};

export default StorySection;
