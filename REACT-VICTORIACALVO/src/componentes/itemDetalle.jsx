
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Buttons from './button'
// import { Link } from 'react-router-dom'; 



function ItemDetalle({id,nombre, imagen, descripcion, precio}) {
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
                            <Buttons />
                        </Card.Body>
                    </Card>
                </Col>
        </Row>
    );
}

export default ItemDetalle