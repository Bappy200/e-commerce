
import React from 'react'
import { Alert, Container } from 'react-bootstrap';
import NavigationBar from '../NavigationBar/NavigationBar';


function Success() {  
  return (
    <Container>
      <NavigationBar/>
      <div style={{marginTop:"50px" }}>
      <Alert variant="success">
        <Alert.Heading>Congratulation!</Alert.Heading>
        <p>
          Your order is successfuly done..
        </p>
      </Alert>
      </div>
    </Container>
  )
}

export default Success