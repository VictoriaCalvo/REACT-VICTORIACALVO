import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Buttons from './button'

function ItemCard({nombre, imagen, descripcion}) {
    return (
        <Row xs={1} md={3} className="g-4">
            {Array.from ({length : 3 }).map ((_,index) => (
                <Col>
                    <Card>
                        <Card.Img variant="top" src={imagen} />
                        <Card.Body>
                            <Card.Title> {nombre} </Card.Title>
                            <Card.Text>
                                {descripcion}
                            </Card.Text>
                            <Buttons />
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default ItemCard