import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: '1',
    title: 'The Future of Electric Sports Cars',
    subtitle: 'Exploring the cutting-edge technology behind the next generation',
    image: 'https://images.pexels.com/photos/3608542/pexels-photo-3608542.jpeg',
    link: '/blog/future-electric-sports-cars',
  },
  {
    id: '2',
    title: 'Classic Cars That Defined An Era',
    subtitle: 'Looking back at the iconic vehicles that shaped automotive history',
    image: 'https://images.pexels.com/photos/2127039/pexels-photo-2127039.jpeg',
    link: '/blog/classic-cars-defined-era',
  },
  {
    id: '3',
    title: 'Off-Road Adventures: The Ultimate Guide',
    subtitle: 'Everything you need to know before taking your vehicle off the beaten path',
    image: 'https://images.pexels.com/photos/2387871/pexels-photo-2387871.jpeg',
    link: '/blog/off-road-adventures-guide',
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 h-full flex items-center">
            <div className="container-custom mx-auto px-4">
              <div className="max-w-2xl slide-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                  {slide.title}
                </h1>
                <p className="text-xl text-text-secondary mb-8">
                  {slide.subtitle}
                </p>
                <Link
                  to={slide.link}
                  className="btn btn-primary inline-flex items-center"
                >
                  Read Article <ChevronRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-primary w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;