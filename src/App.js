import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/style/style.css'
import Home from './components/Home/Home';
import initFontAwesome from './components/Icons/initFontAwesome';
import {BrowserRouter, Route, Routes,Navigate} from "react-router-dom"
import Order from './components/Order/Order';
import LoginPage from './components/LoginPage/LoginPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ProductList from './components/ProductList/ProductList';
import Success from './components/Success/Success';
import { useSelector } from 'react-redux';


initFontAwesome();
const App = () => {
  const user = useSelector(state => state.user.currentUser);
  // const da = JSON.parse(localStorage.removeItem("persist:root"))['cart'];
  // console.log('hello data ', da)
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/order' element={<Order/>}/>
          <Route path='/login' element={user ? <Navigate to="/" replace/> : <LoginPage/>}/>
          <Route path='/signup' element={user ? <Navigate to="/" replace/> : <SignUpPage/>}/>
          <Route path='/productDetails/:id' element={<ProductDetails/>}/>
          <Route path='/productList/:categroy' element={<ProductList/>} />
          <Route path="/success" element={<Success/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
