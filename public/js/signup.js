const signUpReq = document.getElementById('signUpReq')
const homeBtn = document.getElementById('homeBtn')

async function signUp(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const  email = document.getElementById('email').value;
    const response = await fetch('/api/users',{
        method: 'POST',
        body: JSON.stringify({
           username: username,
            email: email,
            password: password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if(response.ok){
        document.location.replace('/')
    }
    else{
        const data = await response.json()
       return data
    }

    console.log(response)
}


signUpReq.addEventListener('click',(event) =>{
    event.preventDefault()
    signUp()
})

homeBtn.addEventListener('click', (event)=> {
    event.preventDefault()
    document.location.replace('/')
})
