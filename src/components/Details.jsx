import React from 'react';
import "./detail.css"

const Details = ({ character,onBack }) => {
  return (
    <div className='container'>
      <h1>{character.name}</h1>
      <div className='dada'>Gender: {character.gender}</div>
      <div className='didi'>Mass: {character.mass}</div>
      <div className='vai'>Hair Color: {character.hair_color}</div>
      <div className='sanovai'>HomeWorld: {character.homeworld}</div>
      <button className=" btn"onClick={onBack}>Back</button>
    </div>
  );
};

export default Details;
