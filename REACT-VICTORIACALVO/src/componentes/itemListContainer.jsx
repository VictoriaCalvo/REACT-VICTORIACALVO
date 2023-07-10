import '../estilos/itemListContainer.scss'
import ItemList from './itemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/configuracion'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    console.log (productos)

    const { categoriaId } = useParams()

    useEffect(() => {
        setLoading(true)

        const prodRef = collection(db, "productos")
        const q = query(prodRef, where("categoria", "==", categoriaId))
        getDocs(q)
            .then((resp) => {
                const items = resp.docs.map((doc) => ({...doc.data(), id: doc.id}))
                setProductos (items)
            })

            .catch (e => console.log(e))
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