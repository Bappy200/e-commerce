import React from 'react'
import { Col } from 'react-bootstrap'
import {Link} from "react-router-dom"
import classes from './Card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function Card({_id,title, price, color, desc, img}) {

  console.log(_id);
  return (
    <Col sm={12} md={4}>
      <div className={classes.productCard}>
          <Link to={`/productDetails/${_id}`}>
            <div className={classes.cardImage}>
              <img src={img} alt="imag"/>
            </div>
          </Link>
          <div className={classes.cardBody}>
            <h4>{title}</h4>
            <div className={classes.buyContent}>
              <p>price : {price}$</p>
              <FontAwesomeIcon icon={faCartShopping}/>
            </div>
          </div>
      </div>
    </Col>
  )
}

export default Card