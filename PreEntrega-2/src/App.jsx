
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {NavBar}  from './components/NavBar'
import ItemListContainer  from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemCount from './components/itemCount';
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<ItemListContainer greeting="Todos los productos" /> }/>
      <Route exact path="/category/camaras" element={<ItemListContainer category="CAMARA" greeting="Camaras" /> }/>
      <Route exact path="/category/dvr" element={<ItemListContainer category="DVR" greeting="DVR" /> }/>
      <Route exact path="/category/conectores" element={<ItemListContainer category="CONECTORES" greeting="Conectores" /> }/>
      <Route exact path="/filtrados" element={<ItemDetailContainer/> }/>
    </Routes>
    </BrowserRouter>
      
  )
}

export default App
