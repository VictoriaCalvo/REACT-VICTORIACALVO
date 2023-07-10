import './estilos/main.scss'
import Header from "./componentes/header"
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from "./componentes/itemListContainer"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Nosotros from './componentes/nosotros'
import Contacto from './componentes/contacto'
import ItemDetalleContainer from './componentes/itemDetalleContainer'
import { CartProveedor } from './contexto/cartContexto'
import Cart from './componentes/cart'

function App() {


  return (

    <CartProveedor>


      <BrowserRouter>

        <Header />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/productos/:categoriaId' element={<ItemListContainer />} />
          <Route path='/detalle/:itemId' element={<ItemDetalleContainer />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='*' element={<Navigate to={"/"} />} />
        </Routes>

      </BrowserRouter>


    </CartProveedor>


  )
}

export default App
