import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Carrinho } from './components/carrinho/Carrinho';
import { Checkout } from './components/checkout/Checkout';
import { Favoritos } from './components/favoritos/Favoritos';
import { Home } from "./components/home/Home"
import { Navbar } from "./components/navbar/Navbar"
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [isOpenFavs, setIsOpenFavs] = useState(false)
  const [isOpenChart, setIsOpenChart] = useState(false)
  const [inputText, setInputText] = useState("");

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
    <ToastContainer />
      <Router>
      <Navbar handleFavs={handleFavs} handleChart={handleChart} setInputText={setInputText} />
      <Routes>
        <Route path='/' element={<Home inputText={inputText} />}  />
        <Route path='/checkout' element={<Checkout />} /> 
      </Routes>
      <Favoritos isOpen={isOpenFavs} />
      <Carrinho isOpen={isOpenChart} />
      </Router>
    </>
  )
}

export default App
