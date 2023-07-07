import './estilos/main.scss'
import Header from "./componentes/header"
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from "./componentes/itemListContainer"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Nosotros from './componentes/nosotros'
import Contacto from './componentes/contacto'
import ItemDetalleContainer from './componentes/itemDetalleContainer'
import { CartContexto } from '../contexto/cartContexto'
import { useState } from 'react'

function App() {

  const [cart, setCart] = useState([])
  console.log (cart)

  const agregarAlCarrito = (item) => {

    setCart ([...cart, item])
  }

  const estaEnCart = (id) => {

    return cart.some ((prod) => prod.id === id) 

  }

  return (

    <CartContexto.Provider value={{cart, agregarAlCarrito, estaEnCart}}>

      <BrowserRouter>

        <Header />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/productos/:categoriaId' element={<ItemListContainer />} />
          <Route path='/detalle/:itemId' element={<ItemDetalleContainer />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='*' element={<Navigate to={"/"} />} />
        </Routes>

      </BrowserRouter>

    // </CartContexto.Provider>

  )
}

export default App
