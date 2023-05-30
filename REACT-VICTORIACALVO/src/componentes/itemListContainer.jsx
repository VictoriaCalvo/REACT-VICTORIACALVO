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


import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Buttons from './button'

function ItemListContainer() {
    return (
        <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                    <Card>
                        <Card.Img variant="top" src="../../img/s11.jpg" />
                        <Card.Body>
                            <Card.Title>CONJUNTO SIRENA</Card.Title>
                            <Card.Text>
                                ESTE CONJUNTO ES ÚNICO E IRREPETIBLE, ESTÁ CONFENCCIONADO A MANO JUSTO PARA VOS!
                            </Card.Text>
                            <Buttons />
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}



export default ItemListContainer;