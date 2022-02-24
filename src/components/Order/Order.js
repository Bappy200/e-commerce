import React from 'react'
import { Container } from 'react-bootstrap'
import Event from '../Event/Event'
import Layout from '../Layout/Layout'
import NavigationBar from '../NavigationBar/NavigationBar'

function Order() {
  return (
    <Container>
        <NavigationBar/>
        <Event/>
    </Container>
  )
}

export default Order