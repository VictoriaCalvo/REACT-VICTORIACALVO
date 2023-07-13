import Header from "../componentes/header"
import ItemListContainer from "../componentes/itemListContainer"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Nosotros from '../componentes/nosotros'
import Contacto from '../componentes/contacto'
import IniciarSesion from '../componentes/auth/iniciarSesion'
import ItemDetalleContainer from '../componentes/itemDetalleContainer'
import Cart from '../componentes/cart'
import { useContext } from 'react'
import { AuthContexto } from "../contexto/authContexto"
import RegistroScreen from "../componentes/auth/registroScreen"
import CheckOut from "../componentes/checkOut"


const AppRouter = () => {

    const { user } = useContext(AuthContexto)

    return (

        <BrowserRouter>

            {
                user.logged
                    ? <>
                        <Header />

                        <Routes>
                            <Route path='/' element={<ItemListContainer />} />
                            <Route path='/productos/:categoriaId' element={<ItemListContainer />} />
                            <Route path='/detalle/:itemId' element={<ItemDetalleContainer />} />
                            <Route path='/nosotros' element={<Nosotros />} />
                            <Route path='/contacto' element={<Contacto />} />
                            <Route path='/checkout' element={<CheckOut />} />
                            <Route path='/cart' element={<Cart />} />
                            <Route path='*' element={<Navigate to={"/"} />} />
                        </Routes>
                    </>
                    : <Routes>
                        <Route path='/login' element={<IniciarSesion />} />
                        <Route path='/register' element={<RegistroScreen />} />
                        <Route path='*' element={<Navigate to='/login'/> } />
                    </Routes>
            }

        </BrowserRouter>
    )
}

export default AppRouter 