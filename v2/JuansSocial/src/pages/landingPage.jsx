import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
import { Container, Col, Row, Alert } from 'react-bootstrap';
import SignUpModal from '../components/SignUpModal';
import SignInModal from '../components/SignInModal';
import SignUpForm from '../components/signUpForm';
import { PrefilledDataProvider, PrefilledDataContext } from '../utils/googleContext';

function LandingPage() {   

const [justRegistered, setJustRegistered,] = useState(false)

    function registerSuccess(){
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

        

        <Container fluid style={{margin:'0', padding:'0', backgroundColor: 'rgb(35, 44, 51)', color:'rgb(160, 193, 209)', textAlign:'center', width:'100vw', height:'100vh' }}>
            <h1 style={{paddingTop:'5%'}}>WELCOME BACK </h1>
            {showSignUpform && (
                <PrefilledDataProvider initalEmail={prefilledEmail}>
                <SignUpForm/>
                </PrefilledDataProvider>
            )}
            {showButtons && (
                <Container style={{}}>
                <Row style={{}}>
                <SignUpModal/>
            </Row>
            <Row style={{}}>
                <SignInModal openSignUp={handleOpen} />
            </Row>
            </Container>
            )}
        </Container>
    );
}

export default LandingPage;