import ItemCount from "./ItemCount";


export default function ItemDetail({ productos }) {
    return (
        <div className="item-detail">
            <h2>{productos.nombre}</h2>
            <img src={`${productos.imagen}`} width={125} alt="fotito"/>
            <p>{productos.categoria}</p>
            <span>$ {productos.precio}</span>
            <ItemCount />
        </div>
    );
}