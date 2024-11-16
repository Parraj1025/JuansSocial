import react, { useState } from "react"
import { Container, Button, Modal, Row } from "react-bootstrap"
import SignUpForm from "./signUpForm";
import { PrefilledDataContext} from "../utils/googleContext";

function SignUpModal({nowSignIn, prefilledEmail}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);   

        

    function handleSuccess () {
        setShow(false)
        nowSignIn()
    }
    return(
        <Container style={{textAlign:'center'}}>
  <Button onClick={handleShow} style={{ marginTop: '2%', backgroundColor: "red", borderColor: "red"}}>
    Sign Up
  </Button>

  <Modal show={show} centered>
    <Modal.Header  style={{justifyContent:'center', textAlign:'center'}}>
      <Modal.Title>
        <Row> <h1>Register Here</h1> </Row>

      </Modal.Title>
        
    </Modal.Header>
    <Modal.Body className="text-center">
     
      <SignUpForm onCloseModal={handleClose} prefilledEmail={prefilledEmail}/>
      
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

export default SignUpModal