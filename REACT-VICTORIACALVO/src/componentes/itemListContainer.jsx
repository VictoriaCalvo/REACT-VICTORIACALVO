import '../estilos/itemListContainer.scss'
import ItemList from './itemList'
import { useState, useEffect } from 'react'
import { traerDatos } from '../ayudantes/traerDatos'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoriaId } = useParams()

    useEffect(() => {
        setLoading(true)

        traerDatos()
            .then((res) => {
                if (!categoriaId) {
                    setProductos(res)
                } else {
                    setProductos( res.filter((item) => item.categoria === categoriaId) )
                }
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [categoriaId])

    return (
        <div className="container my-5">
            {
                loading
                    ? <h2>CARGANDO...</h2>
                    : <ItemList items={productos}/>
            }
        </div>
    )
}

export default ItemListContainer