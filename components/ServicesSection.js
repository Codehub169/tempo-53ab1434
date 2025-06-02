import React from 'react';
import { Palette, Package, ThumbsUp, PenTool, BookOpen, Sparkles, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Palette className="w-10 h-10 mb-4 text-hueneu-accent" strokeWidth={1.5} />,
    title: 'Branding',
    description: 'Crafting identities that tell your unique story, beautifully.',
  },
  {
    icon: <Package className="w-10 h-10 mb-4 text-hueneu-accent" strokeWidth={1.5} />,
    title: 'Packaging',
    description: 'Designs that make your product leap, not just sit.',
  },
  {
    icon: <ThumbsUp className="w-10 h-10 mb-4 text-hueneu-accent" strokeWidth={1.5} />,
    title: 'Social Media',
    description: 'Engaging visuals that speak volumes in every scroll.',
  },
  {
    icon: <PenTool className="w-10 h-10 mb-4 text-hueneu-accent" strokeWidth={1.5} />,
    title: 'Stationery',
    description: 'Tangible touches that leave a lasting, artful impression.',
  },
  {
    icon: <BookOpen className="w-10 h-10 mb-4 text-hueneu-accent" strokeWidth={1.5} />,
    title: 'Coffee Table Books',
    description: 'Curating pages that turn moments into timeless narratives.',
  },
  {
    icon: <Sparkles className="w-10 h-10 mb-4 text-hueneu-accent" strokeWidth={1.5} />,
    title: 'Creative Projects',
    description: 'Your vision, our canvas. Let’s make something magical.',
  },
];

const ServicesSection = () => {
  return (
    <section 
      id="services"
      className="py-20 md:py-32 bg-hueneu-neutral-light text-hueneu-primary section-padding"
    >
      <div className="container-custom mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-poppins font-semibold mb-6">
          What We Do
        </h2>
        <p className="font-inter text-lg md:text-xl text-hueneu-primary/80 mb-16 max-w-2xl mx-auto">
          We weave stories into tangible designs. Here’s a glimpse of how we can bring yours to life, with a touch of hueneu magic.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center group transform hover:-translate-y-1 duration-300 ease-out"
            >
              {service.icon}
              <h3 className="text-2xl font-poppins font-medium mb-3 text-hueneu-primary">
                {service.title}
              </h3>
              <p className="font-inter text-hueneu-primary/70 leading-relaxed mb-4 flex-grow">
                {service.description}
              </p>
              <a href="#contact" className="font-inter text-sm text-hueneu-accent font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Let's talk <ArrowRight className="w-4 h-4 ml-1.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
