import LogOutBtn from "../components/logOutBtn"
import { useUserData } from "../utils/protectedRoute"
import PostWall from "../components/postWall"

function Dashboard(){
    const userData = useUserData()
    return(
        <>
        <div>welcome back {userData.firstName}</div>
        <LogOutBtn/>
        <div> <PostWall username={userData.username}/></div>
       
        </>
       
    )
}

export default Dashboard