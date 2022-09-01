import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import pokedatos from '../pokedatos';

const ItemListContainer = () => {
  const [pokemones, setPokemones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    /*  

    fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
      .then((res) => res.json())
      .then((response) => console.log(response.results));

    
         const getPokes = async () => {
      const misDatos = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
      );

      const response = await misDatos.json();
      setPokemones(response.results);
    };

    getPokes(); */

    const getPokeData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(pokedatos);
      }, 2000);
    });

    getPokeData
      .then((response) => setPokemones(response))
      .finally(() => setIsLoading(false));
  }, []);

  return isLoading ? <h2>Cargando...</h2> : <ItemList list={pokemones} />;
};

export default ItemListContainer;
