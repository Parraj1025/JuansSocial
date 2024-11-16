import LogOutBtn from "../components/logOutBtn"
import { useUserData } from "../utils/protectedRoute"
import PostWall from "../components/postWall"
import { Container } from "react-bootstrap"

function Dashboard(){
    const userData = useUserData()
    return(
        <Container fluid style={{margin:'0', padding:'0', backgroundColor: 'rgb(35, 44, 51)', color:'rgb(160, 193, 209)', textAlign:'center', width:'100vw', height:'100vh' }}>
        <div>welcome back {userData.firstName}</div>
        <LogOutBtn/>
        <div> <PostWall username={userData.username}/></div>
        </Container>
       
    )
}

export default Dashboard