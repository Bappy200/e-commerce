import React, { useContext } from 'react'
import { Alert, Container, Row } from 'react-bootstrap'
import { MyContext } from '../../App'
import Card from '../Card/Card'
import Event from '../Event/Event'
import Layout from '../Layout/Layout'
import NavigationBar from '../NavigationBar/NavigationBar'
import UserForm from '../UserForm/UserForm'
import emptyImage from "../../assects/panda-commerce/orderEmpty.jpg"

function Order() {
  const [orders] = useContext(MyContext);
  return (
    <Container>
        <NavigationBar/>
        {
          orders.length > 0 ? <>
              <h2 style={{marginTop:"50px"}}>Your order products </h2>
        <Row style={{gap:"20px 0px", margin:"20px 0px"}}>
          {
            orders.map(itemId => <Card key = {itemId} isDeleteId={itemId}/>
            )
          }
        </Row>
        <h3>Total Cost : {orders.length * 30}$</h3>

        <UserForm/>
          </>: <>
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
        }

    </Container>
  )
}

export default Order