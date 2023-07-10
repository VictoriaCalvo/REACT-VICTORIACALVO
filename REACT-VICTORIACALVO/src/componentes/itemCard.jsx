import '../estilos/btn.scss'
import '../estilos/itemCard.scss'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Buttons from './button'
import { Link } from 'react-router-dom';

function ItemCard({id, nombre, imagen, stock}) {
    return (
        <Row xs={1} md={3} className="g-4">
            {Array.from ({length : 3 }).map ((_,index) => (
                <Col>
                    <Card>
                        <Card.Img variant="top" src={imagen} />
                        <Card.Body>
                            <Card.Title> {nombre} </Card.Title>
                            <br/>
                            {stock <= 10 && <p className='warning'>QUEDAN SÓLO {stock} UNIDADES</p>}
                            {/* <Buttons /> */}
                            <Link variant="dark" className= "btn" to= {`/detalle/${id}`}>VER MÁS</Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default ItemCard