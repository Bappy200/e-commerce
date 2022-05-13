import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import NavigationBar from '../NavigationBar/NavigationBar'
import classes from './ProductDetails.module.css'
import productImage from "../../assects/bags/bag-1.png"
function ProductDetails() {
  return (
    <>
    <NavigationBar/>
        <Container>
            
            <Row className={classes.productSection}>
                <Col sm={12} md={4} xl={4} xxl={4}>
                    <div className={classes.productImage}>
                        <img src={productImage} alt="productImage"/>
                    </div>
                </Col>
                <Col sm={12} md={8} xl={8} xxl={8}>
                    <div className={classes.ProductDetailsArea}>
                        <h3>product name</h3>
                        <h5>sub header</h5>
                        <p>drecption text</p>
                        <button className='global-btn'>buy now</button>
                    </div>
                </Col>
            </Row>    
        </Container>
        <Footer/> 
    </>
  )
}

export default ProductDetails