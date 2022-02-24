import React from 'react'
import { Col } from 'react-bootstrap'
import image from '../../assects/categories/watch.png'
import classes from './Card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function Card() {
  return (
    <Col sm={12} md={4}>
      <div className={classes.productCard}>
          <div className={classes.cardImage}>
            <img src={image} alt="productImage"/>
          </div>
          <div className={classes.cardBody}>
            <h4>Product Name</h4>
            <div className={classes.buyContent}>
              <p>price : 30$</p>
              <FontAwesomeIcon icon={faCartShopping}/>
            </div>
          </div>
      </div>
    </Col>
  )
}

export default Card