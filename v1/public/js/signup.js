const signUpReq = document.getElementById('signUpReq')
const homeBtn = document.getElementById('homeBtn')
const logIn = document.getElementById('logInReq')


async function signUp() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    if (username && password && email) {
        const response = await fetch('/api/users/signup', {
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
        if (response.ok) {
            console.log(response)
            document.location.replace('/')
        }
        else {
            document.location.reload('/signup')
            const data = await response.json()
            return data
        }
    }
    else{
        alert('fill out all fields')
    }
}


signUpReq.addEventListener('click', (event) => {
    event.preventDefault()
    signUp()
})


logIn.addEventListener('click', (event) => {event.preventDefault()
    document.location.replace('/login')
})