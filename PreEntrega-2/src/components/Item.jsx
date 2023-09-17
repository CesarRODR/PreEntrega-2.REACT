import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
    return (
        
        <div className="Item">
            <Link to="/detail/id" >
            <img src={product.imagen} width={150} />
            </Link>
            <h2>{product.nombre}</h2>
            <span>${product.precio}</span>
            
        </div>
        
    )
}


export default Item