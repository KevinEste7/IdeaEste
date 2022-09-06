import React from 'react'

export const ItemDetail = ({item}) => {
  
  return (
    <article>
      <h1>{item.title}</h1>
      <div>
        <div>
          <img src={item.img} alt={item.title} />
        </div>
        <div>
          <p>{item.description}</p>
          <p>${item.price}</p>
          <p>Stock {item.stock}</p>
        </div>
      </div>
    </article>
  )
}