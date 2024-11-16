import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import signIn from '../utils/handleSignIn'
import checkGoogle from '../utils/handleGoogle';
import SignUpModal from './SignUpModal';
import handleGoogleSignIn from '../utils/handleGoogle';





const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : "http://localhost:3000";

function SignInForm({finishRegister}) {
    
    const checkGoogle = async () => {

        try {
      
            const google = await handleGoogleSignIn();
      
            let googleEmail = await google
      
            const payload = {
                email: googleEmail
            }
      
            const getUserUrl = `${baseURL}/api/user/verify`
            const existingUser = await fetch(`${getUserUrl}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            })
            if (existingUser.ok) {
                const tokenData = await existingUser.json()
                localStorage.setItem('token', tokenData)
                console.log(tokenData)
               return true
            }
            else {
            finishRegister(payload.email)
              
        
            return
        
            }
        }
        catch (err) {
        console.log(err)
      }
      }





    const navigate = useNavigate()


const goGoogle = async (event) => {
    event.preventDefault()
    const googleSignIn = await checkGoogle()
    if(googleSignIn){
        navigate('/dashboard')
    }
    else{
      
    }
}

const [error, setError] = useState(null);
const [validated, setValidated] = useState(false);
const [formData, setFormData] = useState({
    username: '',
    password: '',
})

const [showErr, setShowErr] = useState({
    showErr: false
})

const handleChange = async (event) => {
    event.preventDefault()
    const { name, value } = event.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
};

const [errorList, setErrorList] = useState()


const handleSubmit = async (event) => {

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();

    }
    else {
        event.preventDefault()
        const signInResponse = await signIn(formData);
        if (signInResponse.ok) {
            console.log(signInResponse)
            const token = await signInResponse.json()
            localStorage.setItem('token', token)
            navigate('Dashboard')

        }
        else {
            const error = await signInResponse
            setErrorList(error)

        }
    }
};




return (
    
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {errorList && (
            <Row className="mt-3">
                <Col xs={12}>
                    <ul className="alert alert-danger" role="alert">
                        {errorList}
                    </ul>
                </Col>
            </Row>

        )}
        <Row className='justify-content-center' style={{ marginTop: '2%' }}>
            <Form.Group as={Col} md="5" controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        required
                        name='username'
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="5" controlId='validationPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Password'
                    required
                    aria-hidden='true'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                />
                <Form.Control.Feedback type='invalid'>
                    Please enter a password
                </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Row>
        </Row>

            <img style={{marginTop:'5%', marginInline:'3%'}} onClick={goGoogle} src='/src/assets/google.png'></img>

        {error && <p>{error}</p>}
        <Button style={{ marginTop: '5%' }} type="submit" onClick={
            handleSubmit
        }
        >SignIn</Button>
        
    </Form>
);
}

export default SignInForm;