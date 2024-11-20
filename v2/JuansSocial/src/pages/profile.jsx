import LogOutBtn from "../components/logOutBtn"
import { useUserData } from "../utils/protectedRoute"
import PostWall from "../components/postWall"
import { Container, Row } from "react-bootstrap"
import { useEffect, useState, } from "react"
import formatDate from "../utils/formatDate"


const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : "http://localhost:3000";


function ProfilePage() {
    const userData = useUserData()
    const [userPost, setUserPost] = useState([]);
    const postURL = `${baseURL}/api/post`




    const fetchPost = async () => {
        try {
            const response = await fetch(`${postURL}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            setUserPost(data); // Update the state with fetched data
        } catch (error) {
            console.error('Error fetching posts:', error);
            // Handle error, e.g., display an error message
        }
    };

    useEffect(() => {
        fetchPost();
    }, [])


    return (
        <Container fluid style={{backgroundColor: 'rgb(35, 44, 51)', color: 'rgb(160, 193, 209)', width: '100vw', height: '100vh' }}>
            <Row style={{marginInline:'2%'}}>
            <div style={{ width:'30%' , textAlign:'start', padding:'2%'}}>
                <h6>Signed in as: {userData.firstName}</h6>
            </div>
            </Row>
            <div style={{textAlign:'center'}}>
                Your Posts
                {userPost && (
                    <div style={{ overflowY: "auto", maxHeight: "400px" }}>
                        {userPost.map(post => (
                            <div key={post._id}>
                                <Container style={{ backgroundColor: 'rgb(160, 193, 209)', border: '5px, solid, rgb(218, 223, 247)', width: "75vw" }}>
                                    <Row style={{ color: 'rgb(35, 44, 51)' }}>
                                        @{post.username}
                                    </Row>
                                    <Row style={{ color: 'black' }}>{formatDate(post.createdAt)}</Row>
                                    <Row style={{ justifyContent: 'center', color: 'black' }}>
                                        {post.post}
                                    </Row>
                                </Container>
                            </div>
                        ))}
                    </div>
                )}
                <PostWall username={userData.username} fetchpost={fetchPost} /></div>
        </Container>

    )
}

export default ProfilePage