import { useState } from 'react'

import { Container,Row,Col } from 'react-bootstrap'

function Header() {
 return(
  
  <Container fluid style={{width:'100vw', height:'25%', margin:'0',padding:'3%', textAlign:'center', backgroundColor:'rgb(72, 67, 73)'}}>
    <Col>
    <Row style={{color:'rgb(218, 223, 247)', marginTop:'4%'}}>
      <h1 >JustAnotherSocial</h1>
    </Row>
    <Row style={{color:'rgb(90, 125, 124)'}}>
      <h5> but better </h5>
    </Row>
    </Col>
  </Container>

 )
}

export default Header
