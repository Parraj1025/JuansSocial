
const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : "http://localhost:3000";

async function register (formData) {
    console.log(formData)
    try{    
        const postURL = `${baseURL}/api/user`
        const newUser = await fetch(`${postURL}`, {
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