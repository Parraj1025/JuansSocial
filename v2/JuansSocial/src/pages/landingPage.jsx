import React, { useState } from 'react'
import { Container, Col, Row, Alert } from 'react-bootstrap';
import SignUpModal from '../components/SignUpModal';
import SignInModal from '../components/SignInModal';
import SignUpForm from '../components/signUpForm';
import { PrefilledDataProvider, PrefilledDataContext } from '../utils/googleContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonThroughWindow } from '@fortawesome/free-solid-svg-icons';

function LandingPage() {

    const [justRegistered, setJustRegistered,] = useState(false)

    function registerSuccess() {
        setJustRegistered(true)
        const successMessage = (
            <>Ready To Sign In</>
        )
    }

    const [showSignUpform, setShowSignUpForm] = useState(false)
    const [prefilledEmail, setPrefilledEmail] = useState();
    const [showButtons, setShowButtons] = useState(true)

    const handleOpen = (email) => {
        setPrefilledEmail(email)
        setShowSignUpForm(true)
        setShowButtons(false)

        console.log("Opening Sign Up Modal");

    }
    return (



        <Container fluid style={{ margin: '0', padding: '0', backgroundColor: 'black', color: 'rgb(160, 193, 209)', width: '100vw', height: '100vh', justifyContent: 'center' }}>
            <Row style={{}}>
                <Col md={6} style={{textAlign:'center', marginTop:'5%'}}>
                    <div color='white' style={{marginTop:'6%',}}>
                        what would you like to do?
                    </div>
                    {showSignUpform && (
                        <PrefilledDataProvider initalEmail={prefilledEmail}>
                            <SignUpForm />
                        </PrefilledDataProvider>
                    )}
                    {showButtons && (
                        <Container style={{}}>
                            <Row style={{}}>
                                <SignUpModal />
                            </Row>
                            <Row style={{}}>
                                <SignInModal openSignUp={handleOpen} />

                            </Row>
                            <button> forgot password</button>
                        </Container>
                    )}
                </Col>
                <Col md={6} style={{padding:'2%', textAlign:'center'}}>
                    <h1 style={{margin:'4%', color:'rgb(255, 179, 15)'}}>Log in.... you wont</h1>
                   <FontAwesomeIcon icon={faPersonThroughWindow} style={{width:'50%', height:'auto', color:'white'}}/>
                </Col>
            </Row>
        </Container>
    );
}

export default LandingPage;