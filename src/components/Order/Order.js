import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import NavigationBar from '../NavigationBar/NavigationBar'
import StripeCheckout from 'react-stripe-checkout'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import OrderItems from './OrderItems'
import { deleteProduct } from '../../redux/apiCalls'
import EmptyOrder from './EmptyOrder'

function Order() {
  const cart = useSelector(state => state.cart)
  const [stripeTocken, setStripeTocken] = useState(null);
  const navigate = useNavigate(); 


  const dispatch = useDispatch();

  console.log("cart data",cart)

  const KEY = "pk_test_51IeBMjHc13JdSpdQJh3hM0o3sxg6qJVs1IlKksQLg3pFRjt437ygv3FYMPg03V8lhVwE6KAFndPa8B7uJDQPdpjR00NXv4Wmgj";
  
  const onTocken = (tocken)=>{
    setStripeTocken(tocken);
    console.log(tocken);
  }

  // HANDLER REMOVE CART
  const handlerRemove = (idPrice) => {
    deleteProduct(idPrice, dispatch);
  };
  useEffect(()=>{
    const createRequest = async()=>{
      try{
        const res = await axios.post("http://localhost:5000/api/checkout/payment",{
        tockenId: stripeTocken.id,
        amount: cart.total * 100,
      });
      console.log(res.data);
      
      // eslint-disable-next-line no-unused-expressions
      localStorage.removeItem("persist:root")['cart']
      
      navigate('/success',{state:{data: res.data}});
      }catch(error){
        console.log(error);
      }
    }
    stripeTocken && createRequest();
  },[stripeTocken, cart, navigate,dispatch])       
                
    return (
     <Container>
        <NavigationBar/>
        {/* <OrderItems key={cartItem._id} {...cartItem} handlerRemove={handlerRemove}/> */}

        {
          (cart.products.length > 0) ? (<>
              <h2 style={{marginTop:"50px"}}>Your order products </h2>
              <Row style= {{gap: "20px 0px", marginTop:"30px"}}>
                    {cart.products?.map((cartItem)=> <OrderItems key={cartItem._id} {...cartItem} handlerRemove={handlerRemove}/> )}
              </Row>  
              <h3>Total Cost : {cart.total}$</h3>

              <StripeCheckout
                name="Sajjadul E-Commerce"
                description={`Your total is ${cart.total}`}
                amount={cart.total * 100}
                token={onTocken}
                shippingAddress
                billingAddress
                stripeKey={KEY}

              >
                <button className="global-btn">Pay</button>
              </StripeCheckout>
          </>
          ):(
            <EmptyOrder/>
          )
        }
        
          

    </Container>
  )
}

export default Order     