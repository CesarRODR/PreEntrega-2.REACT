import  { useEffect, useState } from 'react'
import ItemDetail from "./ItemDetail"
import productos from "../productos/Productos.json"
import { useParams } from 'react-router-dom';


const getProd =()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 1000);
    
    })
    
}

export default function ItemDetailContainer (){
    const[prod,setProd] = useState();
    const{id} = useParams ();
console.log("prod",prod)
    useEffect(()=>{
        if(!id){
            getProd().then((data) => setProd(data));
        }else{
            getProd().then((data)=>{
                const productosEncontrados = data.find(item => item.id === Number (id))
                setProd(productosEncontrados)
                
            });
        }
    }, [id])

    return(
        <div className='itemcontainer'>
            <ItemDetail {...prod}/>
        </div>
    )
}

/* export const getProductById = (productId) => {
	return new Promise ((resolve) => {
		setTimeout(() => {
			resolve(productos.find(prod => prod.id === productId))
		}, 1000)
	})

}

 export default function ItemDetailContainer () {
    const[product, setProduct] = useState();
    const { itemId } = useParams();

     console.log("asasdas",product)

    useEffect(()  => {
		getProductById(itemId)
			.then(response  => {
				setProduct(response)
			})
			
	}, [itemId])

    return (
        <div className="item-detail-container">
              <ItemDetail {...product} /> 
        </div>
    );
}  */












