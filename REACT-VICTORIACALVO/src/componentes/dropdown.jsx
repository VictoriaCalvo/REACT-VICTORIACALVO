import '../estilos/dropdown.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Dropdown() {
    return (
        <Navbar variant="light" bg="light" expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="navbar-light-example" />
                <Navbar.Collapse id="navbar-light-example">
                    <Nav>
                        <NavDropdown
                            id="nav-dropdown-light-example"
                            title="PRODUCTOS"
                            menuVariant="light"
                        >
                            <Link className='dropdown-item' to="/productos/conjuntos">CONJUNTOS</Link>
                            <Link className='dropdown-item' to="/productos/remerones">REMERONES</Link>
                            <Link className='dropdown-item' to="/productos/vestidos">VESTIDOS</Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Dropdown;