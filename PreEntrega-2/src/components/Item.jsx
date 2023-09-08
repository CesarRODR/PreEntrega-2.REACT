import React from 'react'

const Item= ({ product }) => {
    return (
        <div className='item'>
            <img src= {product.imagen} width={150}/>
            <h2>{product.nombre}</h2>
            <span>{product.precio}</span>
        </div>
    )
}

export default Item