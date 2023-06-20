import './estilos/main.scss'
import Header from "./componentes/header"
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from "./componentes/itemListContainer"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Nosotros from './componentes/nosotros'
import Contacto from './componentes/contacto'
import IniciarSesion from './componentes/iniciarSesion'
import ItemDetalleContainer from './componentes/itemDetalleContainer'

function App() {

  return (

    <BrowserRouter>

      <Header />

      <Routes>
        <Route path='/' element= {<ItemListContainer />}/>
        <Route path='/productos/:categoriaId' element= {<ItemListContainer />}/>
        <Route path='/detalle/:itemId' element= {<ItemDetalleContainer/>}/>
        <Route path='/nosotros' element= {<Nosotros />}/>
        <Route path='/iniciarsesion' element= {<IniciarSesion />}/>
        <Route path='/contacto' element= {<Contacto />}/>
        <Route path='*' element= { <Navigate to= {"/"} /> } />
      </Routes>

    </BrowserRouter>
  )
}

export default App
