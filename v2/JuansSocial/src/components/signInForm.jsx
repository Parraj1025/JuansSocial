import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import register from '../utils/handleRegister';

function SignInForm() {
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
            <Button style={{ marginTop: '5%' }} type="submit" onClick={handleSubmit}>SignIn</Button>
        </Form>
    );
}

export default SignInForm;