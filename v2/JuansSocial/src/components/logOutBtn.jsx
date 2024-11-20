import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LogOutBtn() {
    const navigate = useNavigate()
    return(
            <Button style={{backgroundColor:'red', borderColor:'red', marginInline:'2%'}} onClick={() => {
                localStorage.clear('token')
                navigate('/')
            }}>Sign Out</Button>
    )
}

export default LogOutBtn