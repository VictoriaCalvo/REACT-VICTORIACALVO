// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function ItemListContainer() {
//     return (
//         <Card className='contenedorCards'>
//             <Card.Img variant="top" src="../../img/201(1).jpg" />
//             <Card.Body>
//                 <Card.Title>CONJUNTO SIRENA</Card.Title>
//                 <Button variant="primary">AGREGAR</Button>
//             </Card.Body>
//             <Card.Img variant="top" src="../../img/lao1 (1).jpg" />
//             <Card.Body>
//                 <Card.Title>CONJUNTO UNO</Card.Title>
//                 <Button variant="primary">AGREGAR</Button>
//             </Card.Body>
//         </Card>
//     );
// }

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
                    ? <h2>Cargando...</h2>
                    : <ItemList items={productos}/>
            }
        </div>
    )
}

export default ItemListContainer