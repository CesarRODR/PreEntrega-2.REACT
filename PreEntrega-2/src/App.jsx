import { useState } from 'react'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from "./components/ItemListContainer"
import './App.css'
import { CartWidget } from './components/CartWidget'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Todos los productos" />

    </>
  )
}

export default App
