'use client';

import React, { useState } from 'react';

const LoremPicsum = () => {
  const [imageUrl, setImageUrl] = useState(null);   

  const generateRandomImage = () => {
    setImageUrl(`https://picsum.photos/720/?random=${Math.random()}`);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Lorem Picsum</h2>

      {imageUrl ? ( 
        <img src={imageUrl} alt="Random" className="w-full h-auto mb-4" />
      ) : (
        <p className="mb-4">Haz clic en el botón para generar una imagen</p>
      )}

      <button 
        onClick={generateRandomImage}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Generar Nueva Imagen
      </button>
    </div>
  );
};

export default LoremPicsum;
