import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import NavigationBar from '../NavigationBar/NavigationBar'
import classes from './ProductDetails.module.css'
import Zoom from 'react-img-zoom';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import {useDispatch} from 'react-redux'
import { addProduct } from '../../redux/cartRedux'

function ProductDetails() {
    const [product, setProduct] = useState();
    const [cartProduct, setCartProduct] = useState({});
    const {id} = useParams();
    const dispatch = useDispatch();
     
 
    //GET PRODUCT DATA
    useEffect(()=>{
        const getData = async()=>{
            try{
                const res = await axios.get(`http://localhost:5000/api/product/find/${id}`);
                setProduct(res.data);
                setCartProduct({
                    quantity:1,
                    color: res.data['color'][0],
                    size: res.data['size'][0],
                })
            }catch(error){
                console.log(error)
            }
        }
        getData();
    }
    ,[id])


    console.log(product)
    console.log(cartProduct)

    //SIZE, Quanity AND COLOR HANDLER
    const handlerSelectData = (e) =>{
        const value = e.target.value;
        setCartProduct({
            ...cartProduct,
            [e.target.name]: value
        })
    }

    //PLUS MINUSE QUANITY HANDLER 
    const handlerQuanity = (event) =>{
        if(event === "plus"){
           setCartProduct({...cartProduct, quantity: cartProduct.quantity + 1})
        }else{
            cartProduct.quantity > 1 && setCartProduct({...cartProduct, quantity: cartProduct.quantity - 1})
        }
    }

    //HANDLER CARD PRODUCT
    const handlerCard = ()=>{
        const updateProduct = {...product, ...cartProduct}
        dispatch(addProduct(updateProduct))
    }

  return (
    <>
    <NavigationBar/>
    <Container>
            {
                product ? (<Row className={classes.productSection}>
                <Col sm={12} md={4} xl={4} xxl={4}>
                    <div className={classes.productImage}>
                        <Zoom
                            img={product.img}
                            zoomScale={4}
                            width={300}
                            height={200}
                            />                      
                    </div>
                </Col>
                <Col sm={12} md={8} xl={8} xxl={8}>
                    <div className={classes.productDetailsArea}>
                        <h3>{product.title}</h3>
                        <p className={classes.stock}>{product.stock? 'In Stock': 'Out of Stock'}</p>
                        <h6>Price : ${product.price}</h6>
                        <div className={classes.selectArea}>
                            <select onChange={handlerSelectData} name="color">
                                <option disabled>Color</option>
                                {
                                    product.color.map((c)=> <option key={c}>{c}</option>)
                                }
                            </select>
                            <select onChange={handlerSelectData} name="size">
                                <option disabled>Size</option>
                                {
                                    product.size.map((s)=> <option key={s}>{s}</option>)
                                }
                            </select>
                        </div>
                        <p>{product.desc}</p>
                        <div>
                            <div className={classes.quantity}>
                                <FontAwesomeIcon icon={faPlus}  onClick={()=> handlerQuanity("plus")}/>
                                <span>{cartProduct.quantity}</span>
                                <FontAwesomeIcon icon={faMinus} onClick={()=> handlerQuanity("minus")}/>
                            </div>
                            <button className='global-btn' onClick={handlerCard}>Add To Card</button>
                        </div>
                        
                    </div>
                </Col>
            </Row> )
            :(
                <h3>Loding....</h3>
            )
            }
              
        </Container>
        <Footer/> 
    </>
  )
}

export default ProductDetails          