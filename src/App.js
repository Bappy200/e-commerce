import React, { createContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/style/style.css'
import Home from './components/Home/Home';
import initFontAwesome from './components/Icons/initFontAwesome';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Order from './components/Order/Order';
import LoginPage from './components/LoginPage/LoginPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import ProductDetails from './components/ProductDetails/ProductDetails';

initFontAwesome();
export const MyContext = createContext();
const App = () => {
  const [orders, setOrders] = useState([]);
  
  return (
    <>
    <MyContext.Provider value={[orders, setOrders]}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/order' element={<Order/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
          <Route path='/productDetails' element={<ProductDetails/>}/>
        </Routes>
      </BrowserRouter>
      </MyContext.Provider>
    </>
  )
}

export default App
