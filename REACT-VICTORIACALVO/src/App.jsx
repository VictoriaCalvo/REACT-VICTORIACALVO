import './estilos/main.scss'
import Header from "./componentes/header"
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from "./componentes/itemListContainer"

function App() {

  return (
      <div>
        <Header />
          <ItemListContainer/>
      </div>
  )
}

export default App
