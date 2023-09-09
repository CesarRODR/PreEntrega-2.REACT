
import { NavBar } from './components/NavBar'
import { ItemListContainer } from "./components/ItemListContainer"
import './App.css'
import ItemDetailContainer from "./components/ItemDetailContainer"


function App() {


  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Todos los productos" />
      <ItemDetailContainer />
    </>
  )
}

export default App
