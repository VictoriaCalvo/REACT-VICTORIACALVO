import '../estilos/header.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './cartwidge';
import { Link } from 'react-router-dom';


function header() {
    return (
            <Navbar bg="light" variant="light">
                <Container>
                    < Link className= "navbar_brand" to="/">LA ORDEN DEL<br />NUEVO MUNDO</Link>
                    <Nav className="me-auto">
                        <Link className= "nav_link" to="/nosotros">NOSOTROS</Link>
                        <Link className= "nav_link" to="/iniciarsesion">INICIAR SESIÓN</Link>
                        <Link className= "nav_link" to="/contacto">CONTACTO</Link>
                    </Nav>
                <CartWidget />
                </Container>
            </Navbar>
    );
}

export default header;

