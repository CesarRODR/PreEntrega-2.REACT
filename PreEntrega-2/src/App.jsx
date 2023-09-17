
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {NavBar}  from './components/NavBar'
import ItemListContainer  from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"

import './App.css'

function App() {

  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
     <Route exact path="/" element={<ItemListContainer greeting="Todos los productos" /> }/>
     <Route exact path="/categoria/:categoriaName" element={<ItemListContainer/>}/>
     <Route exact path="/detail/:id" element={<ItemDetailContainer/> }/> 
    </Routes>
    </BrowserRouter>
      
  )
}

export default App
