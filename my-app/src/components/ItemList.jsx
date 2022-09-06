import React from 'react';
import { Card } from './Card'


export const ItemList =({productList}) => {
  return (
    <div>
      {productList.map(item => <card key={item.id} productList={item} />)
      }
    </div>
  )
}