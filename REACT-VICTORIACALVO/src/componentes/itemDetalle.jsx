
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ItemContador from './itemContador';
import { useContext, useState } from 'react';
import { CartContexto } from '../../contexto/cartContexto';



function ItemDetalle({id,nombre, imagen, descripcion, precio, stock}) {

    const { agregarAlCarrito, estaEnCart } = useContext(CartContexto)
    console.log ( estaEnCart(id) )
    
    const [cantidad, setCantidad] = useState (1)

    const agregar = () => {

        const item = {
            id, nombre, imagen, descripcion, precio, stock, cantidad
        }

        agregarAlCarrito(item)
    }

    return (
        <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={imagen} />
                        <Card.Body>
                            <Card.Title> {nombre} </Card.Title>
                            <Card.Text>
                                {descripcion}
                                <br />
                                {precio} ARS 
                            </Card.Text>
                            <ItemContador
                                max = {stock}
                                cantidad = {cantidad}
                                setCantidad = {setCantidad}
                                agregar = {agregar}/>
                            <br/>
                        </Card.Body>
                    </Card>
                </Col>
        </Row>
    );
}

export default ItemDetalle