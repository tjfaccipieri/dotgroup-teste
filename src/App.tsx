import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Carrinho } from './components/carrinho/Carrinho';
import { Checkout } from './components/checkout/Checkout';
import { Favoritos } from './components/favoritos/Favoritos';
import { Home } from "./components/home/Home"
import { Navbar } from "./components/navbar/Navbar"

function App() {

  const [isOpenFavs, setIsOpenFavs] = useState(false)
  const [isOpenChart, setIsOpenChart] = useState(false)

  const handleFavs = () =>{
    setIsOpenFavs(!isOpenFavs)
    setIsOpenChart(false)
  }

  const handleChart = () => {
    setIsOpenChart(!isOpenChart)
    setIsOpenFavs(false)
  }

  return (
    <>
      <Router>
      <Navbar handleFavs={handleFavs} handleChart={handleChart} />
      <Routes>
        <Route path='/' element={<Home  />}  />
        <Route path='/checkout' element={<Checkout />} />
        
      </Routes>
      <Favoritos isOpen={isOpenFavs} />
      <Carrinho isOpen={isOpenChart} />
      </Router>
    </>
  )
}

export default App
