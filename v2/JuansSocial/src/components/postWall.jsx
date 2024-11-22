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
    <Container style={{textAlign:'center', marginTop: '5%',padding:'2%', width:'90vw'}}>
      <Form>
        <Row>
        <Form.Group style={{width:'70%'}}>
          <Form.Control
            type="text"
            placeholder='enter your thoughts'
            name='thoughts'
            value={formData.thoughts}
            onChange={handleChange}
          />
        </Form.Group>
        <Button style={{width:'30%'}} variant="primary" type="submit" onClick={handleSubmit}>
          Send
        </Button>
        </Row>
      </Form>
    </Container>
  )
}

export default PostWall