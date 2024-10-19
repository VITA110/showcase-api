'use client';

import React, { useState } from 'react';

const NumberAPI = () => {
  const [numberFact, setNumberFact] = useState('');

  const generateNumberFact = async () => {
    try {
      const response = await fetch('http://numbersapi.com/random/math');
      const fact = await response.text();
      setNumberFact(fact);
    } catch (error) {
      console.error('Error ', error);
      setNumberFact('Error ');
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-xl font-bold mb-4">Number API</h2>
      <p className="mb-4">{numberFact || 'Haz clic para generar un dato numérico'}</p>
      <button  
        onClick={generateNumberFact}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Generar Dato Numérico
      </button>
    </div>
  );
};

export default NumberAPI;

