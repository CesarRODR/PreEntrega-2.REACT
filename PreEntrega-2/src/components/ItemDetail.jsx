
export default function ItemDetail({prod}){
    return(
        <div className="item">
            <img src={prod.image} width={140} alt="" />
            <h3>{prod.tittle}</h3>
            <p>{prod.description}</p>
            <span>{prod.price}</span>
        </div>
    );
}