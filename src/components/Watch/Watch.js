import React from 'react'
import { Container } from 'react-bootstrap'
import Products from '../Products/Products'

function Watch() {
  return (
    <Container>
          <h2 style={{textTransform:"capitalize"}}>Top sell Watch</h2>
          <Products/>
    </Container>
  )
}

export default Watch