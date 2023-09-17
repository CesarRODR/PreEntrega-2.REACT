import ItemCount from "./ItemCount";

export default function ItemDetail ({id, imagen, nombre, descripcion, precio, categoria}){
    
return(
    <div>
        <img src={imagen} alt="imagen" />
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <span>${precio}</span>
        <h4>{categoria}</h4>
        <ItemCount />
    </div>
    
)
}

/* export default function ItemDetail({nombre,imagen,categoria,stock,precio }) {
    return (
        <div className="item-detail">
             
            <h2>{nombre}</h2>
            <img src={imagen} width={125} alt="Imagen"/>
            <p>{categoria}</p>
            <p>stock{stock}</p>
            <span>$ {precio}</span>
            
            <ItemCount />
        </div>
    
    );
} */