
const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : "https://juanssocial.onrender.com";

async function register (formData) {
    console.log(formData)
    try{    
        const userURL = `${baseURL}/api/user`
        const newUser = await fetch(`${userURL}`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        if (newUser.ok){
            return newUser
        }
        else{
             const errorMessages = {
                    11000: 'already exists'
                }
            const error = await newUser.json()
            const errorField = error.keyValue
            const errorList = Object.keys(errorField).map(key => (
                    <p key={key}> {key} {errorMessages[error.code]}</p>
                ))
            return (errorList)

    }}

    catch(err){
        console.log(err)
    }
}

export default register