import './estilos/main.scss'
import Header from "./componentes/header"
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from "./componentes/itemListContainer"
import { BrowserRouter } from 'react-router-dom'
import Nosotros from './componentes/nosotros'
import Contacto from './componentes/contacto'
import IniciarSesion from './componentes/iniciarSesion'

function App() {

  return (

    <BrowserRouter>

      <Header />
      <ItemListContainer />
      <Nosotros/>
      <IniciarSesion/>
      <Contacto/>

    </BrowserRouter>
  )
}

export default App
