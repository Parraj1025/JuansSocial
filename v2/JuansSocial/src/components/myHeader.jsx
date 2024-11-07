import { useState } from 'react'

import { Container,Row,Col } from 'react-bootstrap'

function Header() {
 return(
  
  <Container style={{width:'100%', textAlign:'center'}}>
    <Col>
    <Row>
      <h1>JustAnotherSocial</h1>
    </Row>
    <Row>
      <h5> but better </h5>
    </Row>
    </Col>
  </Container>

 )
}

export default Header
