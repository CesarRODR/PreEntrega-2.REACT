import ItemList from "./ItemList";
import productos from "../productos/Productos.json"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function getProductos(categoriaName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (categoriaName !== undefined) {
        const productosFiltrados = productos.filter(
          (item) => item.categoria === categoriaName);
        
        resolve(productosFiltrados)

      } else {
        resolve(productos);
      }
    }, 2000)
  });
}
export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoriaName} = useParams();

  useEffect(()=>{
    getProductos(categoriaName).then((data)=> setProducts (data));

  },[categoriaName])

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );



  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;

