const signUpBtn = document.getElementById('signUpBtn')
const homeBtn = document.getElementById('homeBtn')

async function displaydata(){
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
        document.location.reload()
        
    }

    console.log(response)
}


signUpBtn.addEventListener('click',(event) =>{
    displaydata()
})

homeBtn.addEventListener('click', (event)=> {
    document.location.replace('/')
})
