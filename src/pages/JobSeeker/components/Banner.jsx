import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const bannerData = [
  {
    id: 1,
    image: "/api/placeholder/1920/600",
    title: "Find Your Dream Job",
    description: "Thousands of jobs in the computer, engineering and technology sectors are waiting for you.",
    gradient: "from-blue-600 to-purple-600"
  },
  {
    id: 2,
    image: "/api/placeholder/1920/600",
    title: "Connect With Top Companies",
    description: "Get hired by the most prestigious companies in the industry.",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    id: 3,
    image: "/api/placeholder/1920/600",
    title: "Advance Your Career",
    description: "Take the next step in your professional journey with us.",
    gradient: "from-pink-600 to-orange-600"
  }
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerData.length) % bannerData.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Slides */}
      {bannerData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out transform ${
            index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-90`} />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
              {slide.title}
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl leading-relaxed animate-fadeIn delay-100">
              {slide.description}
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 animate-fadeIn delay-200">
              Explore Opportunities
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm transition-all duration-300 flex items-center justify-center group"
      >
        <ChevronLeft className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm transition-all duration-300 flex items-center justify-center group"
      >
        <ChevronRight className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {bannerData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;