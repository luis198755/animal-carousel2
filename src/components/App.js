// src/components/App.js
import React from 'react';
import AnimalCarousel from './AnimalCarousel';

const App = () => {
  const animalData = [
    {
      imageUrl: "/images/lion2.webp",
      name: "León",
      description: 'El león (Panthera El león (Panthera leo) es n se describen alguna El león (Panthera leo) es n se describen alguna El león (Panthera leo) es n se describen alguna leo) es n se describen alguna El león (Panthera leo) es n se describen alguna s de sus características principales: El león (Panthera leo) es un mamífero de la familia de los félidos y una de las cinco especies del género Panthera. Los leones son conocidos como "el rey de la selva" debido a su apariencia majestuosa y su papel como depredadores alfa en su hábitat. A continuación se describen algunas de sus características principales:',
      category: "Mamífero",
      endangered: true
    },
    {
      imageUrl: "/api/placeholder/400/300",
      name: "Elefante",
      description: "El elefante es el mamífero terrestre más grande y es conocido por su inteligencia. Tienen una memoria excelente y son capaces de mostrar una amplia gama de emociones. Los elefantes son animales sociales que viven en manadas lideradas por una matriarca.",
      category: "Mamífero",
      endangered: false
    },
    {
      imageUrl: "/api/placeholder/400/300",
      name: "Pingüino",
      description: "Los pingüinos son aves marinas no voladoras que viven principalmente en el hemisferio sur. Son excelentes nadadores y pueden bucear a grandes profundidades en busca de alimento. A pesar de su apariencia torpe en tierra, son ágiles y rápidos en el agua.",
      category: "Ave",
      endangered: false
    },
    {
      imageUrl: "/api/placeholder/400/300",
      name: "Tigre de Bengala",
      description: "El tigre Bengala es una cuentra principalmentEl tigre de Bengala es una subespecie de tigre que se encuentra principalmentEl tigre de Bengala es una subespecie de tigre que se encuentra principalmente en la India y Bangladesh. Es uno de los felinos más grandes del mundo y un depredador ápice en su ecosistema. Lamentablemente, está en peligro de extinción debido a la pérdida de hábitat y la caza furtiva aaaaaaaaaaaaaaaaade aaaaaaaaaaaaaaaaade.",
      category: "Mamífero",
      endangered: true 
    },
    {
      imageUrl: "/api/placeholder/400/300",
      name: "Tigre de Bengala",
      description: "El tigre Bengala es una cuentra principalmentEl tigre de Bengala es una subespecie de tigre que se encuentra principalmentEl tigre de Bengala es una subespecie de tigre que se encuentra principalmente en la India y Bangladesh. Es uno de los felinos más grandes del mundo y un depredador ápice en su ecosistema. Lamentablemente, está en peligro de extinción debido a la pérdida de hábitat y la caza furtiva aaaaaaaaaaaaaaaaade aaaaaaaaaaaaaaaaade.",
      category: "Mamífero",
      endangered: true 
    },
    {
      imageUrl: "/api/placeholder/400/300",
      name: "Tigre de Bengala",
      description: "El tigre Bengala es una cuentra principalmentEl tigre de Bengala es una subespecie de tigre que se encuentra principalmentEl tigre de Bengala es una subespecie de tigre que se encuentra principalmente en la India y Bangladesh. Es uno de los felinos más grandes del mundo y un depredador ápice en su ecosistema. Lamentablemente, está en peligro de extinción debido a la pérdida de hábitat y la caza furtiva aaaaaaaaaaaaaaaaade aaaaaaaaaaaaaaaaade.",
      category: "Mamífero",
      endangered: true 
    },
    {
      imageUrl: "/api/placeholder/400/300",
      name: "Tigre de Bengala",
      description: "El tigre Bengala es una cuentra principalmentEl tigre de Bengala es una subespecie de tigre que se encuentra principalmentEl tigre de Bengala es una subespecie de tigre que se encuentra principalmente en la India y Bangladesh. Es uno de los felinos más grandes del mundo y un depredador ápice en su ecosistema. Lamentablemente, está en peligro de extinción debido a la pérdida de hábitat y la caza furtiva aaaaaaaaaaaaaaaaade aaaaaaaaaaaaaaaaade.",
      category: "Mamífero",
      endangered: true 
    },
    {
      imageUrl: "/api/placeholder/400/300",
      name: "Tigre de Bengala",
      description: "El tigre Bengala es una cuentra principalmentEl tigre de Bengala es una subespecie de tigre que se encuentra principalmentEl tigre de Bengala es una subespecie de tigre que se encuentra principalmente en la India y Bangladesh. Es uno de los felinos más grandes del mundo y un depredador ápice en su ecosistema. Lamentablemente, está en peligro de extinción debido a la pérdida de hábitat y la caza furtiva aaaaaaaaaaaaaaaaade aaaaaaaaaaaaaaaaade.",
      category: "Mamífero",
      endangered: true 
    },
    {
      imageUrl: "/api/placeholder/400/300",
      name: "Tigre de Bengala",
      description: "El tigre Bengala es una cuentra principalmentEl tigre de Bengala es una subespecie de tigre que se encuentra principalmentEl tigre de Bengala es una subespecie de tigre que se encuentra principalmente en la India y Bangladesh. Es uno de los felinos más grandes del mundo y un depredador ápice en su ecosistema. Lamentablemente, está en peligro de extinción debido a la pérdida de hábitat y la caza furtiva aaaaaaaaaaaaaaaaade aaaaaaaaaaaaaaaaade.",
      category: "Mamífero",
      endangered: true 
    },
    {
      imageUrl: "/api/placeholder/400/300",
      name: "Tigre de Bengala",
      description: "El tigre Bengala es una cuentra principalmentEl tigre de Bengala es una subespecie de tigre que se encuentra principalmentEl tigre de Bengala es una subespecie de tigre que se encuentra principalmente en la India y Bangladesh. Es uno de los felinos más grandes del mundo y un depredador ápice en su ecosistema. Lamentablemente, está en peligro de extinción debido a la pérdida de hábitat y la caza furtiva aaaaaaaaaaaaaaaaade aaaaaaaaaaaaaaaaade.",
      category: "Mamífero",
      endangered: true 
    },
    {
      imageUrl: "/api/placeholder/400/300",
      name: "Tigre de Bengala",
      description: "El tigre Bengala es una cuentra principalmentEl tigre de Bengala es una subespecie de tigre que se encuentra principalmentEl tigre de Bengala es una subespecie de tigre que se encuentra principalmente en la India y Bangladesh. Es uno de los felinos más grandes del mundo y un depredador ápice en su ecosistema. Lamentablemente, está en peligro de extinción debido a la pérdida de hábitat y la caza furtiva aaaaaaaaaaaaaaaaade aaaaaaaaaaaaaaaaade.",
      category: "Mamífero",
      endangered: true 
    },
    {
      imageUrl: "/api/placeholder/400/300",
      name: "Tigre de Bengala",
      description: "El tigre Bengala es una cuentra principalmentEl tigre de Bengala es una subespecie de tigre que se encuentra principalmentEl tigre de Bengala es una subespecie de tigre que se encuentra principalmente en la India y Bangladesh. Es uno de los felinos más grandes del mundo y un depredador ápice en su ecosistema. Lamentablemente, está en peligro de extinción debido a la pérdida de hábitat y la caza furtiva aaaaaaaaaaaaaaaaade aaaaaaaaaaaaaaaaade.",
      category: "Mamífero",
      endangered: true 
    },
    {
      imageUrl: "/api/placeholder/400/300",
      name: "Tigre de Bengala",
      description: "El tigre Bengala es una cuentra principalmentEl tigre de Bengala es una subespecie de tigre que se encuentra principalmentEl tigre de Bengala es una subespecie de tigre que se encuentra principalmente en la India y Bangladesh. Es uno de los felinos más grandes del mundo y un depredador ápice en su ecosistema. Lamentablemente, está en peligro de extinción debido a la pérdida de hábitat y la caza furtiva aaaaaaaaaaaaaaaaade aaaaaaaaaaaaaaaaade.",
      category: "Mamífero",
      endangered: true 
    }, {
      imageUrl: "/api/placeholder/400/300",
      name: "Tigre de Bengala",
      description: "El tigre Bengala es una cuentra principalmentEl tigre de Bengala es una subespecie de tigre que se encuentra principalmentEl tigre de Bengala es una subespecie de tigre que se encuentra principalmente en la India y Bangladesh. Es uno de los felinos más grandes del mundo y un depredador ápice en su ecosistema. Lamentablemente, está en peligro de extinción debido a la pérdida de hábitat y la caza furtiva aaaaaaaaaaaaaaaaade aaaaaaaaaaaaaaaaade.",
      category: "Mamífero",
      endangered: true 
    }, {
      imageUrl: "/api/placeholder/400/300",
      name: "Tigre de Bengala",
      description: "El tigre Bengala es una cuentra principalmentEl tigre de Bengala es una subespecie de tigre que se encuentra principalmentEl tigre de Bengala es una subespecie de tigre que se encuentra principalmente en la India y Bangladesh. Es uno de los felinos más grandes del mundo y un depredador ápice en su ecosistema. Lamentablemente, está en peligro de extinción debido a la pérdida de hábitat y la caza furtiva aaaaaaaaaaaaaaaaade aaaaaaaaaaaaaaaaade.",
      category: "Mamífero",
      endangered: true 
    },
    {
      imageUrl: "/api/placeholder/400/300",
      name: "Tigre de Bengala",
      description: "El tigre Bengala es una cuentra principalmentEl tigre de Bengala es una subespecie de tigre que se encuentra principalmentEl tigre de Bengala es una subespecie de tigre que se encuentra principalmente en la India y Bangladesh. Es uno de los felinos más grandes del mundo y un depredador ápice en su ecosistema. Lamentablemente, está en peligro de extinción debido a la pérdida de hábitat y la caza furtiva aaaaaaaaaaaaaaaaade aaaaaaaaaaaaaaaaade.",
      category: "Mamífero",
      endangered: true 
    },
    {
      imageUrl: "/api/placeholder/400/300",
      name: "Tigre de Bengala",
      description: "El tigre Bengala es una cuentra principalmentEl tigre de Bengala es una subespecie de tigre que se encuentra principalmentEl tigre de Bengala es una subespecie de tigre que se encuentra principalmente en la India y Bangladesh. Es uno de los felinos más grandes del mundo y un depredador ápice en su ecosistema. Lamentablemente, está en peligro de extinción debido a la pérdida de hábitat y la caza furtiva aaaaaaaaaaaaaaaaade aaaaaaaaaaaaaaaaade.",
      category: "Mamífero",
      endangered: true 
    }
  ];

  return (
    <div className="app h-screen overflow-hidden">
      {/* <h1 className="text-3xl font-bold text-center py-4 bg-blue-500 text-white">Carrusel de Animales</h1> */}
      <AnimalCarousel animals={animalData} />
    </div>
  );
};

export default App;