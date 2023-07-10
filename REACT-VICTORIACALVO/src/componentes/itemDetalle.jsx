
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ItemContador from './itemContador';
import { useContext, useState } from 'react';
import { CartContexto } from '../contexto/cartContexto';
import { Link, useNavigate } from 'react-router-dom';



function ItemDetalle({ id, nombre, imagen, descripcion, precio, stock }) {

    const { agregarAlCarrito, estaEnCart } = useContext(CartContexto)
    

    const [cantidad, setCantidad] = useState(1)
    const navigate = useNavigate()

    const agregar = () => {

        const item = {
            id, nombre, imagen, descripcion, precio, stock, cantidad
        }

        agregarAlCarrito(item)
    }

    const volver = () => {
        navigate(-1)
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
                        {
                            estaEnCart(id)
                                ? <Link className='btn' to="/cart">TERMINAR COMPRA</Link>
                                :
                                <ItemContador
                                    max={stock}
                                    cantidad={cantidad}
                                    setCantidad={setCantidad}
                                    agregar={agregar} />
                        }
                    </Card.Body>
                </Card>
                <br />
                <button onClick={volver} className='btn'>VOLVER</button>
            </Col>
        </Row>
    );
}

export default ItemDetalle