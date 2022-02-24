import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/style/style.css'
import Home from './components/Home/Home';
import initFontAwesome from './components/Icons/initFontAwesome';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Order from './components/Order/Order';

initFontAwesome();
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/order' element={<Order/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
