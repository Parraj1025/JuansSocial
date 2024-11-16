import react, { useState } from "react"
import { Container, Button, Modal, Row } from "react-bootstrap"
import SignInForm from "./signInForm";

function SignInModal({openSignUp}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);   

    const handleSwitch = (email) => {
      handleClose()
      openSignUp(email)
    }
        
    return(
        <Container style={{textAlign:'center'}}>
  <Button onClick={handleShow} style={{ marginTop: '2%', backgroundColor: "red", borderColor: "red"}}>
    Sign In
  </Button>
  <Modal show={show} centered>
    <Modal.Header  style={{justifyContent:'center', textAlign:'center'}}>
      <Modal.Title>
        <Row> <h1>Sign In</h1> </Row>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className="text-center">
      <SignInForm finishRegister={handleSwitch} />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
</Container>
    )
}

export default SignInModal