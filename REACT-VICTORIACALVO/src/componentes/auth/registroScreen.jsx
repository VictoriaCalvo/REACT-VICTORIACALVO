import { useContext, useState } from 'react';
import '../../estilos/registroScreen.scss'
import '../../estilos/iniciarSesion.scss'
import Form from 'react-bootstrap/Form';
import { AuthContexto } from '../../contexto/authContexto';
import { Link } from 'react-router-dom'

function RegistroScrreen() {

    const { register } = useContext(AuthContexto)

    const [values, setValues] = useState ({
        email:'',
        password: ''
    })

    const handleInputChange = (e) => {
        setValues ({
            ...values, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        register(values)
    }

    const tab = '\u00A0';

    return (
        <div className='contenedor'>
            <div className='contenedor_form'>

                <h3>REGISTRATE</h3>

                <br />

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            value={values.email}
                            onChange={handleInputChange}
                            type="email"
                            placeholder="EMAIL"
                            name='email'
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control 
                        value={values.password}
                        onChange={handleInputChange}
                        type="password" 
                        placeholder="CONTRASEÑA" 
                        name='password'
                        />
                    </Form.Group>

                    <button className='btn' type='submit'>
                        CREAR CUENTA
                    </button> {tab}

                    <Link className='registro' to='/login'>INICIAR SESIÓN</Link>

                </Form>
            </div>
        </div>
    );
}

export default RegistroScrreen;