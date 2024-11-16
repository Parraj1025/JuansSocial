import { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import newPost from '../utils/handlePosts'

function PostWall({username}) {
  const [formData, setFormData] = useState({
    thoughts: ''
  })



  const handleSubmit = async (event) => {
    event.preventDefault()
    newPost({
      post:formData.thoughts,
      username: username
    })
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
    <Container>
      <div>
        this is where the posts will be displayed
      </div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder='enter your thoughts'
            name='thoughts'
            value={formData.thoughts}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Send
        </Button>
      </Form>
    </Container>
  )
}

export default PostWall