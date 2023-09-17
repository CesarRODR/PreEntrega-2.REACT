import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
    return (
        <div className="Item">
            <img src={product.imagen} width={150} />
            <h2>{product.nombre}</h2>
            <span>${product.precio}</span>
        </div>
    )
}


export default Item