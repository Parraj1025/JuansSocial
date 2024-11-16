import { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'

function PostWall() {
  const [formData, setFormData] = useState({
    thoughts: ''
  })


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
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </Container>
  )
}

export default PostWall