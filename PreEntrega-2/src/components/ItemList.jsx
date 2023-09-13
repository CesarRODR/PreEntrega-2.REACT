import { useEffect, useState } from "react";
import productsJson from "../productos/Productos.json"
import Item from "./Item";
import { useLocation } from "react-router-dom";

function getProductos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsJson);
        }, 2000)
    });
} 


export default function ItemList(category) {
    const location = useLocation();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductos().then((dato) => {
            console.log(dato)
            if(category.category) {
            const filterProducts = dato.filter(product => product.categoria === category.category)
                setProducts(filterProducts);
            } else {
                setProducts(dato);
            } 
            setLoading(false)
        })
    }, [location.pathname]);
 
    if (loading === true) return <h3>Cargando....</h3>

    return (
        <div className="item-list">
            {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </div>

    )
}
