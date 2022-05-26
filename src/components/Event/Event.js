import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import Products from '../Products/Products'
import classes from './Event.module.css'
import MainEvent from './MainEvent'

function Event() {


  return (
    <Container>
        <div className={classes.eventSection}>
            <Row style={{gap:"20px 0px"}}>
                <MainEvent/>
                <Col sm={12} md={12} xl={7}>
                    <Products/>
                </Col>
            </Row>
        </div>
    </Container>
  )
}

export default Event