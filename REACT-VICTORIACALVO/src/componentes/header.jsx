import '../estilos/header.scss'
import '../estilos/cartWidget.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './cartWidget';
import { Link } from 'react-router-dom';
import Dropdown from './dropdown';
import { useContext } from 'react';
import { AuthContexto } from '../contexto/authContexto';



function header() {

    const { user, logout } = useContext(AuthContexto)

    return (
        <Navbar bg="light" variant="light">
            <Container>
                <div className='header'>
                    < Link className="navbar_brand" to="/">LA ORDEN DEL<br />NUEVO MUNDO</Link>
                    <div>
                        <Nav className="me-auto">
                            <Link className="nav_link" to="/nosotros">NOSOTROS</Link>
                            <Link className="nav_link" to="/contacto">CONTACTO</Link>
                            <Dropdown />
                            <CartWidget className='cartWidget' />
                        </Nav>
                    </div>
                </div>
                <div className='logout'>
                    <div className='parrafo'>BIENVENIDX: {user.email}
                        <div>
                            <button className='btn' onClick={logout}>LOGOUT</button>
                        </div>
                    </div>
                </div>
            </Container>
        </Navbar>
    );
}

export default header;

