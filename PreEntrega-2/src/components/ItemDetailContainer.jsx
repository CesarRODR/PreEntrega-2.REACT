import React, { useEffect, useState } from 'react'
import ItemDetail from "./ItemDetail"
import productos from "../productos/Productos.json"
import { useParams } from 'react-router-dom';


const mockAPI = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
}

export default function ItemDetailContainer () {
    const[productos, setProductos] = useState();
    const { id } = useParams();

    useEffect(() => {
        if(id !== undefined) {
            mockAPI(id).then((data) => setProductos(data));
        }else{
            mockAPI(id).then((data) => {
                const productoEncontrado = data.find(item => item.id === Number(id))
                setProductos(productoEncontrado)
            });  
        }
   
    }, [id]);

    return (
        <div className="item-detail-container">
              <ItemDetail productos={productos} /> 
        </div>
    );
}



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








