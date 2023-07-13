import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CartContexto } from '../contexto/cartContexto';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';


const Cart = () => {

    const { cart, totalCompra, vaciarCarrito, eliminarProducto } = useContext(CartContexto)

    const tab = '\u00A0';

    if (cart.length === 0) {

        return (
            <div className='container my-5'>

                <h2>TU CESTA ESTÁ VACÍA.</h2>
                <br/>
                <br/>
                <Link className='btn' to='/'>VOLVER A LA TIENDA</Link>

            </div>
        )
    }

    return (

        <div className='container my-5'>
            <h2>CESTA</h2>

            <br />

            {
                cart.map((prod) => (

                    <div key={prod.id}>

                        <Row xs={1} md={3} className="g-4">
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={prod.img} />
                                    <Card.Body>
                                        <Card.Title> {prod.nombre} </Card.Title>
                                        <Card.Text>
                                            {prod.precio} ARS
                                            <br/>
                                            {prod.cantidad} {tab}
                                            <button className='btn_cont'
                                                    onClick={() => eliminarProducto(prod.id)}>
                                                <DeleteOutlineIcon/>
                                            </button>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <br />
                    </div>
                ))
            }
            <div>
                <h5>TOTAL {totalCompra()} ARS</h5>
            </div>

            <br />

            <Link className='btn' to='/checkout'>TERMINAR MI COMPRA</Link>
            <br/>
            <button onClick={vaciarCarrito} className='btn my-2'>VACIAR CARRITO</button>
        </div>
    );
}

export default Cart