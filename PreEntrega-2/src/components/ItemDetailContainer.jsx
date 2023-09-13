import React, { useEffect, useState } from 'react'
import ItemDetail from "./ItemDetail"

export const productosId =(productId)=>{
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsJson.find(prod => prod.id === productId))
    }, 1000);
  })
}

const ItemDetailContainer = () => {

  const[objet, setObjet] = useState(null)

  useEffect(()=>{
      productosId("1")
      .then(response =>{
        setObjet(response)
      }) 
    }, [])
  return (

    <div>
      <ItemDetail {...Object} />

    </div>
  )
}

export default ItemDetailContainer

  /* new Promise((resolve, reject) => {
  if (!dato) {
      resolve(dato)
    } else {
      const detailFilter = dato.filter((valor) => {
        return valor.categoria === dato

      })
        resolve(da)

    }

  }) */








