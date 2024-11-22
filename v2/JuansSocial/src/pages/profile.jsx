import LogOutBtn from "../components/logOutBtn"
import { useUserData } from "../utils/protectedRoute"
import PostWall from "../components/postWall"
import { Container, Row, Button, Col } from "react-bootstrap"
import { useEffect, useState, } from "react"
import formatDate from "../utils/formatDate"
import handleDelete from "../utils/handleDelete"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import handleLikes from "../utils/handleLikes"


const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : "http://localhost:3000";


function ProfilePage() {
    const userData = useUserData()
    const [userPost, setUserPost] = useState([]);
    const postURL = `${baseURL}/api/post`




    const fetchPost = async () => {
        try {
            const response = await fetch(`${postURL}/${userData.username}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            setUserPost(data); // Update the state with fetched data
            const storedPostId = localStorage.getItem('postId');
            if (storedPostId) {
                const postElement = document.getElementById(storedPostId)
                if (postElement) {
                    postElement.scrollIntoView({ behavior: 'smooth' })
                    localStorage.removeItem('postId')
                }
            }

        } catch (error) {
            console.error('Error fetching posts:', error);
            // Handle error, e.g., display an error message
        }
    };

    useEffect(() => {
        fetchPost();
    }, [])


    return (
        <Container fluid style={{ backgroundColor: 'rgb(35, 44, 51)', color: 'rgb(160, 193, 209)', width: '100vw', height: '100vh' }}>
            <Row style={{ marginInline: '2%' }}>
                <div style={{ width: '30%', textAlign: 'start', padding: '2%' }}>
                    <h6>Signed in as: {userData.firstName}</h6>
                </div>
            </Row>
            <div style={{ textAlign: 'center' }}>
                Your Posts
                {userPost && (
                    <div style={{ overflowY: "auto", maxHeight: "400px", marginTop:'2%' }}>
                        {userPost.map(post => (
                            <div id={post._id} key={post._id}>
                                <Container style={{ backgroundColor: 'rgb(160, 193, 209)', border: '5px, solid, rgb(218, 223, 247)', width: "75vw" }}>
                                    <Row style={{ justifyContent: 'end', marginTop: '1%' }}>
                                        {post.username === userData.username && (<FontAwesomeIcon style={{ width: '3%' }} color="grey" icon={faTrash} onClick={() => {
                                            handleDelete(post._id)
                                        }}></FontAwesomeIcon>)}
                                    </Row>
                                    <Row style={{ color: 'rgb(35, 44, 51)' }}>
                                        @{post.username}
                                    </Row>
                                    <Row style={{ color: 'black' }}>{formatDate(post.createdAt)}</Row>
                                    <Row style={{ justifyContent: 'center', color: 'black' }}>
                                        {post.post}
                                    </Row>
                                    <Row style={{ textAlign:'end' }}>
                                        <Col style={{ display: "inline-block", color: "black", marginBottom: '1%' }}>
                                        {post.meta.upvotes.length > 0 && (post.meta.upvotes.length)}
                                            <FontAwesomeIcon style={{ width: '4%', marginLeft:'5px' }} color="red" icon={faThumbsUp} onClick={() =>
                                                handleLikes({
                                                    userId: userData.userId,
                                                    postId: post._id
                                                }
                                                )
                                            }
                                            />
                        
                                        </Col>

                                    </Row>
                                </Container>
                            </div>
                        ))}
                    </div>
                )}

                <PostWall username={userData.username} fetchpost={fetchPost} />
   
                </div>
                
        </Container>

    )
}

export default ProfilePage