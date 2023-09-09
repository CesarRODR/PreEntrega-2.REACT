import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"


export default function ItemDetailContainer (){
    const[prod, setProd] = useState();

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/1")
        .then((res)=>res.json())
        .then((data)=>setProd(data))
    }, [])

    if(!prod) return null

    return(
        <div>
            <ItemDetail prod={prod} />
        </div>
    );
}