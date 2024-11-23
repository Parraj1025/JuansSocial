import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, createContext, useContext } from "react";

const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : "https://juanssocial.onrender.com" 

const UserDataContext = createContext()

const ProtectedRoute = ({children}) => {
    const [userData, setUserData] = useState()
    const [auth, setAuth] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const checkAuth = async () => {
            try{
                const token = localStorage.getItem('token');
                const authUrl = `${baseURL}/api/authenticate/check`;
                const response = await fetch(`${authUrl}`, {
                    method: 'POST',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({token})
                })

                if (response.ok){
                    const data = await response.json()
                    setUserData(data)
                    setAuth(true)
                }
                else{
                    setAuth(false)
                    navigate('/')
                }
            }
            catch(err){
                console.log(err)
                navigate('/')
            }
        };

        checkAuth();}
        ,[]);

        if(!auth){
            return null
        }
        return(
            <UserDataContext.Provider value={userData}>
                {[children]}
            </UserDataContext.Provider>
        )
}

export const useUserData = () => useContext(UserDataContext)

export default ProtectedRoute