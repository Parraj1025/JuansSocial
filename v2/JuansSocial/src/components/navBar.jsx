import { useState } from "react"
import LogOutBtn from "./logOutBtn"
import HomeBtn from "./homeBtn"
import { Container, Row } from "react-bootstrap"

const NavBar = () => {
    const [home, setHome] = useState()
    return (
        <Container fluid style={{width:'100%', backgroundColor:'rgb(35, 44, 51)', textAlign:'end', padding:'2%'}}>
            <LogOutBtn/>
            <HomeBtn />
        </Container>
    )
}

export default NavBar