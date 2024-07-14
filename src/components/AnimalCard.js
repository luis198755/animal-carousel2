// src/components/AnimalCard.js
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Info } from 'lucide-react';

const AnimalCard = ({ imageUrl, name, description, category, endangered }) => {
  return (
    <Card className="max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="relative">
        <img 
          className="w-full h-48 object-cover"
          src={imageUrl} 
          alt={name}
        />
        {endangered && (
          <Badge variant="destructive" className="absolute top-2 right-2">
            En peligro
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold text-gray-800">{name}</h2>
          <Badge variant="outline">{category}</Badge>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <Button variant="outline" size="sm" className="flex items-center">
            <Info className="w-4 h-4 mr-2" />
            Más info
          </Button>
          <span className="text-sm text-gray-500">ID: {Math.random().toString(36).substr(2, 9)}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnimalCard;
