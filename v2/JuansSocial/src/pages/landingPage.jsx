import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
import { Container, Col, Row, Alert } from 'react-bootstrap';
import SignUpModal from '../components/SignUpModal';
import SignInModal from '../components/SignInModal';

function LandingPage() {   

const [justRegistered, setJustRegistered,] = useState(false)

    function registerSuccess(){
        setJustRegistered(true)
        const successMessage = (
            <>Ready To Sign In</>
        )
    }
    return (
        <Container>
            {justRegistered && (
                <Alert style={{textAlign:'center'}} key='success' variant='success'>
              !!  Now Sign In !!
              </Alert>
            )}
            <Row>
                <SignUpModal nowSignIn={registerSuccess}/>
            </Row>
            <Row>
                <SignInModal />
            </Row>

        </Container>


    );
}

export default LandingPage;