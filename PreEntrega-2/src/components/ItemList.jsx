import { useEffect, useState } from "react";
import productsJson from "../productos/Productos.json"
import Item from "./Item";


function getProductos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsJson);
        }, 2000)
    });
}

export default function ItemList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductos().then((dato) => {
            setProducts(dato);
            setLoading(false)
        })
    }, []);
 
    if (loading === true) return <h3>Cargando....</h3>

    return (
        <div className="item-list">
            {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </div>

    )
}