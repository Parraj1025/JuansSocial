import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LogOutBtn() {
    const navigate = useNavigate()
    return(
        <div style={{width:'100%'}}>
            <Button onClick={() => {
                localStorage.clear('token')
                navigate('/')
            }}>Sign Out</Button>
        </div>
    )
}

export default LogOutBtn