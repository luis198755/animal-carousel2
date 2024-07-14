// src/components/AnimalCarousel.js
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Button } from './ui/button';
import AnimalCard from './AnimalCard';

const AnimalCarousel = ({ animals }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % animals.length);
    }
  }, [isTransitioning, animals.length]);

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + animals.length) % animals.length);
    }
  };

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
    <div className="relative w-full h-screen overflow-hidden bg-gray-100 flex flex-col">
      <div className="flex-grow overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out h-full"
          style={{ transform: `translateX(-${100}%)` }}
        >
          {getOrderedAnimals().map((animal, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 flex items-center justify-center p-4">
              <AnimalCard {...animal} />
            </div>
          ))}
        </div>
      </div>
      
      <Button 
        variant="outline" 
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button 
        variant="outline" 
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
      
      <Button
        variant="outline"
        className="absolute bottom-16 left-4 bg-white bg-opacity-50 hover:bg-opacity-75"
        onClick={toggleAutoPlay}
      >
        {isAutoPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
      </Button>
      
      {/* <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {animals.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default AnimalCarousel;