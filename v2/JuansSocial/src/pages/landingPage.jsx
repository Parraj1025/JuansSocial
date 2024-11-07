import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import SignUpModal from '../components/SignUpModal';
import SignInModal from '../components/SignInModal';

function LandingPage() {



    return (
        <Container>
            <Row>
                <SignUpModal show={showSignUpModal} onClose={() => handleModalSwitch} />
            </Row>
            <Row>
                <SignInModal />
            </Row>

        </Container>


    );
}

export default LandingPage;