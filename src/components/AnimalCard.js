// src/components/AnimalCard.js
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Info } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const AnimalCard = ({ imageUrl, name, description, category, endangered }) => {
  const { theme } = useTheme();

  return (
    <Card className={`w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105 flex flex-col h-full my-8 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}>
      <div className="relative h-1/3 min-h-[150px]">
        <img 
          className="w-full h-full object-cover"
          src={imageUrl} 
          alt={name}
        />
        {endangered && (
          <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full shadow-md border-2 border-white">
            <span className="font-bold text-sm">En peligro</span>
          </div>
        )}
      </div>
      <CardContent className={`p-4 flex-grow flex flex-col overflow-auto ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>
        <div className="flex justify-between items-center mb-2">
          <h2 className={`text-xl font-bold truncate ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{name}</h2>
          <Badge variant={theme === 'dark' ? 'secondary' : 'outline'}>{category}</Badge>
        </div>
        <p className="mb-4 overflow-y-auto flex-grow">{description}</p>
        <div className="flex justify-between items-center mt-auto pt-2">
          <Button variant={theme === 'dark' ? 'secondary' : 'outline'} size="sm" className="flex items-center">
            <Info className="w-4 h-4 mr-2" />
            Más info
          </Button>
          <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            ID: {Math.random().toString(36).substr(2, 9)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnimalCard;