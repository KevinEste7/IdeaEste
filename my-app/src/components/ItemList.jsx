import React from 'react';
import Item from './Item';

const ItemList = ({ list }) => {
  return (
    <ul>
      {list.map((pokemon) => (
        <Item pokemon={pokemon} key={pokemon.id} />
      ))}
    </ul>
  );
};

export default ItemList;