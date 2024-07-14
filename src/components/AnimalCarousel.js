import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';
import AnimalCard from './AnimalCard';
import { useTheme } from './ThemeProvider'; // Asumimos que has implementado un ThemeProvider

const AnimalCarousel = ({ animals }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % animals.length);
    }
  }, [isTransitioning, animals.length]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + animals.length) % animals.length);
    }
  }, [isTransitioning, animals.length]);

  useEffect(() => {
    const transitionTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(transitionTimer);
  }, [currentIndex]);

  useEffect(() => {
    let intervalId;
    if (isAutoPlaying) {
      intervalId = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(intervalId);
  }, [isAutoPlaying, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const getOrderedAnimals = () => {
    return [
      animals[(currentIndex - 1 + animals.length) % animals.length],
      animals[currentIndex],
      animals[(currentIndex + 1) % animals.length]
    ];
  };

  return (
    <div className={`relative w-full h-screen overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} transition-colors duration-300`}>
      <div 
        className="flex transition-transform duration-300 ease-in-out h-full py-16"
        style={{ transform: `translateX(-${100}%)` }}
      >
        {getOrderedAnimals().map((animal, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 flex items-center justify-center px-4">
            <AnimalCard {...animal} />
          </div>
        ))}
      </div>
      
      <Button 
        variant="outline" 
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
        onClick={prevSlide}
        aria-label="Anterior animal"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button 
        variant="outline" 
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
        onClick={nextSlide}
        aria-label="Siguiente animal"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
      
      <div className="absolute top-1 left-4 flex space-x-2">
        <Button
          variant="outline"
          className="bg-white bg-opacity-50 hover:bg-opacity-75"
          onClick={toggleAutoPlay}
          aria-label={isAutoPlaying ? "Pausar reproducción automática" : "Iniciar reproducción automática"}
        >
          {isAutoPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
        </Button>
        <Button
          variant="outline"
          className="bg-white bg-opacity-50 hover:bg-opacity-75"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
        >
          {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
        </Button>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {animals.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-4 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir al animal ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="absolute top-2 right-4 bg-white bg-opacity-50 px-2 py-1 rounded-full">
        <span className="text-sm font-semibold">{`${currentIndex + 1} de ${animals.length}`}</span>
      </div>
    </div>
  );
};

export default AnimalCarousel;