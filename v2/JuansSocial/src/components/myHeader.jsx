import { faBeer, faUsersLine } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState , useContext} from 'react'
import { useUserData } from '../utils/protectedRoute'
import { Container,Row,Col } from 'react-bootstrap'

function Header() {
  const userData = useUserData()


 return(
  
  <Container fluid style={{width:'100%', height:'25%', margin:'0',padding:'3%', textAlign:'left', backgroundColor:'black'}}>
    <Col>
    {userData ? (<>heyy</>) : (<>byee</>)}
    <Row style={{color:'rgb(218, 223, 247)'}}>
    <FontAwesomeIcon icon={faUsersLine} style={{width:'10%', height:'90px'}}/>
      <h1 style={{marginLeft:'1%'}}>FMJ^2</h1>
    </Row>
    <Row style={{marginLeft:'1%',color:'rgb(255, 179, 15)', width:'100%'}}>
      <h5> a social network </h5>
    </Row>
    <Row style={{marginLeft:'6%',color:'rgb(255, 179, 15)'}}>
      <h5> for the boys </h5>
    </Row>
    </Col>
  </Container>

 )
}

export default Header
