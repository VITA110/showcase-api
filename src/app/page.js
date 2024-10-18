'use client';

import React from 'react';
import JokeAPI from './components/JokeAPI';
import LoremPicsum from './components/LoremPicsum';
import NumberAPI from './components/NumberAPI';
import './globals.css'; 

const Page = () => {
  return (
    <div className='mainContainer'>
      <h1 className="title">Generador Aleatorio</h1>
      <div className="container">
      <div className="card"><JokeAPI /></div>
      <div className="card"><LoremPicsum /></div>
      <div className="card"><NumberAPI /></div>
      </div>
      
    </div>
  );
};

export default Page;
