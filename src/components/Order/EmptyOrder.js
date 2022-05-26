import React from 'react'
import { Alert } from 'react-bootstrap'
import emptyImage from "../../assects/panda-commerce/orderEmpty.jpg"

function EmptyOrder() {
  return (
    <>
          <Alert variant="danger" style={{marginTop:"60px"}}>
              <Alert.Heading>You have no order products</Alert.Heading>
             <p>
                You should order now...............
             </p>
         </Alert>

         <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <img src={emptyImage} alt="emptyImage"/>
         </div>
     </>
  )
}

export default EmptyOrder