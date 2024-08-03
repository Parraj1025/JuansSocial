const loginBtn = document.getElementById('loginBtn')

async function login(){
    const username = document.getElementById('username');
    const password = document.getElementById('password')
    const response = await fetch('/api/users/login' ,{
        method: 'POST',
        body: JSON.stringify({
            username: username.value,
            password: password.value
        }),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    if(response.ok){ document.location.replace('/')}
    else{
        const data = await response.json()
        console.log(data)
    }
}

loginBtn.addEventListener('click',(event)=>{
    event.preventDefault()
    login()
})