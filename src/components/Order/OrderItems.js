import { faRemove } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col } from 'react-bootstrap'
import classes from "./OrderItems.module.css"
function OrderItems({img, title, price, size, color, quantity, handlerRemove, _id}) {
    console.log(title, price)
    return (
    <Col sm={12} md={6}>
        <div className={classes.orderCard}>
            <div className={classes.imageArea}>
                <img src={img} alt="productImage"/>
            </div>
            <div className={classes.infoArea}>
                <h4>{title}</h4>
                <div className={classes.flexStyle}>
                    <p><span>color: </span>{color}</p>
                    <p><span>size: </span>{size}</p>
                    <p><span>price: </span>{price}</p>
                </div>
                
                <div className={classes.buttomStyle}>
                    <p><span>quanitity: </span>{quantity}</p>
                    <FontAwesomeIcon icon={faRemove} onClick={()=>handlerRemove({_id, price, quantity})}/>
                </div>
            </div>
        </div>
    </Col>
  )
}

export default OrderItems        