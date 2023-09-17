/* import { useEffect, useState } from "react"
import productos from "../productos/Productos.json"
import { Link, useParams } from "react-router-dom"


function asyncMock(tipo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!tipo) {
                resolve(productos)
            } else {
                const resultado = productos.filter((valor) => {
                    return valor.categoria === tipo
                })
                resolve(resultado)
            }
        }, 2000)
    })
}

export default function categorias() {
    const [categoria, setCategoria] = useState();
    const [cargando, setCargando] = useState(true)
    const { tipo } = useParams();

    useEffect(() => {
        asyncMock(tipo).then(res => setCategoria(res))
    }, [tipo]);

    if (cargando) {
        return <h3>esta categoria no esta disonible</h3>
    }

    return (
        <main className="main">
            <h2>{categoria.productos.nombre}</h2>

            <section>
                {categoria.productos.map((item) => (
                    <Link to={`/categorias/${item.productos.nombre}`}>
                        <h2>{item.productos.nombre}</h2>
                    </Link>
                ))}
            </section>
        </main>
    )



} */