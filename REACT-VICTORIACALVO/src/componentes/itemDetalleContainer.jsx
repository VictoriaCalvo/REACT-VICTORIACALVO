import { useState, useEffect } from 'react'
import { traerDatos } from '../ayudantes/traerDatos'
import { useParams } from 'react-router-dom'
import ItemDetalle from './itemDetalle'

const ItemDetalleContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        traerDatos()
            .then((res) => {
                setItem (res.find ((prod) => prod.id === Number(itemId)))
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [itemId])

    return (
        <div className="container my-5">
            {
                loading 
                ? <h2>CARGANDO...</h2>
                : < ItemDetalle {...item} />
            }
        </div>
    )
}

export default ItemDetalleContainer