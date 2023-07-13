import { useState } from 'react';
import { useCartContext } from '../contexto/cartContexto';
import { Navigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/configuracion'
import { Link } from 'react-router-dom';

const CheckOut = () => {

    const { cart, totalCompra, vaciarCarrito } = useCartContext()

    const [ordenId, setOrdenId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleInputChange = (e) => {
        console.log (e.target.name)
        
        setValues({
            ...values,
            [e.target.name]: e.target.value 
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.length === 0){
            alert('El nombre es obligatorio')
            return
        }
        if (values.direccion.length === 0){
            alert('La direccion es obligatorio')
            return
        }
        if (values.email.length === 0){
            alert('El email es obligatorio')
            return
        }
        
        const orden = {
            cliente: values,
            items: cart,
            total: totalCompra(),
            fecha: new Date()
        }
        
        const ordenesRef = collection (db, 'ordenes')

        addDoc (ordenesRef, orden)
            .then((doc) => {
                setOrdenId(doc.id)
                vaciarCarrito()
            })
            .catch (err => console.log(err))
    }

    if (ordenId) {

        return(
            <div className='container my-5'>
                <h3>MUCHAS GRACIAS POR TU COMPRA</h3>
                <br/>
                <p>TU NÚMERO DE COMPRA ES <strong>{ordenId}</strong></p>
                <Link to='/' className='btn'>VOLVER</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to='/'/>
    }

    return (
        <div className="container my-5">
            <h3>CHECKOUT</h3>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    value={values.nombre}
                    type="text"
                    placeholder='NOMBRE'
                    onChange={handleInputChange}
                    className='form-control my-2'
                    name='nombre'
                />

                <input
                    value={values.direccion}
                    type="text"
                    placeholder='DIRECCION'
                    onChange={handleInputChange}
                    className='form-control my-2'
                    name='direccion'
                />

                <input
                    value={values.email}
                    type="email"
                    placeholder='EMAIL'
                    onChange={handleInputChange}
                    className='form-control my-2'
                    name='email'
                />

                <button className='btn' type='submit'>ENVIAR</button>

            </form>

        </div>
    )
}

export default CheckOut