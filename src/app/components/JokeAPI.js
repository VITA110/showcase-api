'use client';

import React, { useState } from 'react';

const JokeAPI = () => {
  const [joke, setJoke] = useState('');

  const generateJoke = async () => {
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.error('Error fetching joke:', error);
      setJoke('Lo siento, no pude obtener un chiste. Por favor, intenta de nuevo.');
    }
  };

  return (
    <>
      <h2>Joke API</h2>
      <p>{joke || 'Haz clic para generar un chiste'}</p>
      <button onClick={generateJoke}>Generar Chiste</button>
    </>
  );
};

export default JokeAPI;
