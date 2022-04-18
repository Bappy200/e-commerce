import React, { useContext } from 'react'
import { Col } from 'react-bootstrap'
import image from '../../assects/categories/watch.png'
import classes from './Card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faXmark } from '@fortawesome/free-solid-svg-icons'
import { MyContext } from '../../App'

function Card({isDeleteId}) {
  const [orders, setOrders] = useContext(MyContext);
  console.log(orders)

  const filterItem = orders.filter(item => item !== isDeleteId);
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
              {isDeleteId ? <FontAwesomeIcon onClick={()=> setOrders(filterItem)} icon={faXmark}/> :  <FontAwesomeIcon onClick={()=> setOrders((order)=>[...order, Math.random() * (3000 - 0) + 0])} icon={faCartShopping}/>}
            </div>
          </div>
      </div>
    </Col>
  )
}

export default Card