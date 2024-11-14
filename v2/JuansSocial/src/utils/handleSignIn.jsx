import cookieParser from "cookie-parser";

const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : "http://localhost:3000";


async function signIn(formData){
    try{
         const signInUrl = `${baseURL}/api/authenticate`;
         const authorization = await fetch(`${signInUrl}`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON. stringify(formData)
         });
         if (authorization.ok) {
            console.log('server successfully reached');
            return authorization
         }
         else{
            const errorMessage = await authorization.json();
            console.log(errorMessage);
            return errorMessage;
         }
    }
    catch(err){
        console.log(err)
    }
}

export default signIn