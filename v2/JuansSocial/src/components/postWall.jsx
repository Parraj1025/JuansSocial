import { useState } from 'react'
import { Form, Button, Container, Row } from 'react-bootstrap'
import newPost from '../utils/handlePosts'
import { reload } from 'firebase/auth'

function PostWall({username, fetchpost}) {
  const [formData, setFormData] = useState({
    thoughts: ''
  })



  const handleSubmit = async (event) => {
    event.preventDefault()
    const posting = await newPost({
      post:formData.thoughts,
      username: username
    })
    if(posting){
      fetchpost()
      setFormData({thoughts: ''})
    }
  }


  const handleChange = async (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  return (
    <Container style={{ margin: '3%',padding:'5%', width:'100vw'}}>
      <Form>
        <Row>
        <Form.Group style={{width:'65%'}}>
          <Form.Control
            type="text"
            placeholder='enter your thoughts'
            name='thoughts'
            value={formData.thoughts}
            onChange={handleChange}
          />
        </Form.Group>
        <Button style={{width:'20%'}} variant="primary" type="submit" onClick={handleSubmit}>
          Send
        </Button>
        </Row>
      </Form>
    </Container>
  )
}

export default PostWall