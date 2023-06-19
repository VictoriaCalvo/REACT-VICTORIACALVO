import '../estilos/header.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './cartwidge';


function header() {
    return (
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#">LA ORDEN DEL<br />NUEVO MUNDO</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#">NOSOTROS</Nav.Link>
                        <Nav.Link href="#">INICIAR SESIÓN</Nav.Link>
                        <Nav.Link href="#">CONTACTO</Nav.Link>
                    </Nav>
                <CartWidget />
                </Container>
            </Navbar>
    );
}

export default header;

