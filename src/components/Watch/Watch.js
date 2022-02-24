import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Card from '../Card/Card'

function Watch() {
  return (
    <Container>
          <h2 style={{textTransform:"capitalize"}}>Top sell Watch</h2>
          <Row style={{gap: "20px 0px", marginTop:"30px"}}>
              <Card/>
              <Card/>
              <Card/>
          </Row>
    </Container>
  )
}

export default Watch