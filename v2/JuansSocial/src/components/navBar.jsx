import { useState } from "react"
import LogOutBtn from "./logOutBtn"
import NavBtn from "./navBtn"
import { Container, Row } from "react-bootstrap"
import { useUserData } from "../utils/protectedRoute"
import SettingsBtn from "./settingsBtn"

const NavBar = () => {
    const userData = useUserData()
    const [home, setHome] = useState()  
    return (
        <Container fluid style={{width:'100%', backgroundColor:'black', textAlign:'end', padding:'2%', color:'grey',}}>
            <h4>Signed in as {userData.firstName}</h4>
            <LogOutBtn/>
            <NavBtn />
            <SettingsBtn/>
        </Container>
    )
}

export default NavBar