import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetalle from './itemDetalle'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/configuracion'

const ItemDetalleContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const itemRef = doc(db, "productos", itemId)
        getDoc(itemRef)

            .then((doc) => {

                setItem({ ...doc.data(), id: doc.id })
            })

            .catch (e => console.log(e))
            .finally (() => setLoading(false))

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