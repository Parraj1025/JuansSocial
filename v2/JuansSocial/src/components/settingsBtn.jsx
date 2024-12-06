import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useUserData } from '../utils/protectedRoute';

function SettingsBtn() {
  const [show, setShow] = useState(false);
  const userData = useUserData()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{marginLeft:'1%'}}>
        <FontAwesomeIcon icon={faBars}/>
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton style={{backgroundColor:'rgb(255, 179, 15)', color:''}}>
          <Offcanvas.Title>{userData.firstName}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{backgroundColor:'rgb(59,59,59)', color:'white'}}>
         This is where user and profile settings will go
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SettingsBtn;