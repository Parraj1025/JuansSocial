import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import register from '../utils/handleRegister';

function SignUpForm({onCloseModal}) {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        email: ''
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
            setValidated(true)
            if(formData.username === '' || formData.email === '' || formData.password === '' || formData.firstName === ''|| formData.lastName === ''){
                setShowErr(true)
            }
            const newUser = await register(formData)
            if(newUser.ok){
                console.log('user added')
                onCloseModal()
                alert('Ready to sign in')
            }
            if(newUser.length > 0){
                setErrorList(newUser)
                setShowErr(false)
            }
        }
    };




    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                {errorList && (
                    <Row className="mt-3">
                        <Col xs={12}>
                            <ul className="alert alert-danger" role="alert">
                                {errorList.map((error) => (
                                    <p key={error}>{error}</p>
                                ))}
                            </ul>
                        </Col>
                    </Row>
    
                )}
                {showErr === true && (
                    <Row className="alert alert-danger" role="alert">
                        <p>!! ALL fields must be completed !! </p>
                    </Row>
                )}
            <Row className='mx-auto justify-content-center'>
                <Form.Group as={Col} md="7" controlId="validationEmail">
                    <Form.Label>Email</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">
                            <img src="/src/assets/email.png" style={{ width: '20px' }} />
                        </InputGroup.Text>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Email"
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type='invalid'>Valid email is required</Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Row className="mx-auto justify-content-center" style={{ marginTop: '2%' }}>
                <Form.Group as={Col} md="5" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type='invalid'>First name required</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="5" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type='invalid'>Last name required!</Form.Control.Feedback>
                </Form.Group>
            </Row>
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
            <Button style={{ marginTop: '5%' }} type="submit" onClick={handleSubmit}>SignUp</Button>
        </Form>
    );
}

export default SignUpForm;