import { useState } from "react"
import LogOutBtn from "./logOutBtn"
import NavBtn from "./navBtn"
import { Container, Row } from "react-bootstrap"

const NavBar = () => {
    const [home, setHome] = useState()  
    return (
        <Container fluid style={{width:'100%', backgroundColor:'rgb(35, 44, 51)', textAlign:'end', padding:'2%'}}>
            <LogOutBtn/>
            <NavBtn />
        </Container>
    )
}

export default NavBar