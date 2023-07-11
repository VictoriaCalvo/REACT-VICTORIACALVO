import './estilos/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CartProveedor } from './contexto/cartContexto'
import { AuthContextoProveedor } from './contexto/authContexto'
import AppRouter from './router/appRouter'

function App() {


  return (

    <AuthContextoProveedor>
      <CartProveedor>
        <AppRouter/>
      </CartProveedor>
    </AuthContextoProveedor>


  )
}

export default App
