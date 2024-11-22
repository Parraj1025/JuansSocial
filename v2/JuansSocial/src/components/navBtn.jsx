import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faHome } from '@fortawesome/free-solid-svg-icons'

function NavBtn() {

    const navigate = useNavigate()
    const profileNav = (event) => {
        event.preventDefault()
        if (location.pathname === '/dashboard') {
            navigate('/profile')
        } else {
            navigate('/dashboard')
        }
    }
    return (
        <Button onClick={profileNav}>
            {location.pathname === '/dashboard' ?
                (<FontAwesomeIcon icon={faUser} />)
                 : (<FontAwesomeIcon icon={faHome} />)}
        </Button>
    )
}

export default NavBtn