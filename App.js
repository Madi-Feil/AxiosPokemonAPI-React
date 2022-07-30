import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  
  const [pokemonApiData, setPokemonApiData] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then(response => {
      console.log(response.data.results);
      setPokemonApiData(response.data.results)
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <h1 className='title'>Fetch Pokemon</h1>
    <div className='App'>
      <li>
        {
          pokemonApiData.map((pokemonObj, index) => {
            return (<li key={index}>{pokemonObj.name}</li>)
          })
        }
      </li>
    </div>
    </>
  );
};

export default App;