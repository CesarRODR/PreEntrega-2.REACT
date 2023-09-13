import ItemCount from "./itemCount";


export default function ItemDetail({id,imagen,nombre,descripcion,precio}){
    return(
        <div className="item">
            <img src={imagen} width={140} alt="" />
            <h3>nombre:{nombre}</h3>
            <p>descripcion:{descripcion}</p>
            <span>precio $:{precio}</span>

            <div className="item-count"> 
            <ItemCount />
         
            </div>
        </div>
    );
}