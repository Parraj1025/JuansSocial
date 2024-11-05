const loginBtn = document.getElementById('loginBtn')
const signUpBtn = document.getElementById('signUpBtn');

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
    if(response.ok){ 
        document.location.replace('/')}
    
    else{
        alert('cant log in')
    }
}
signUpBtn.addEventListener('click', (event) => {
    event.preventDefault()
    document.location.replace('/signup')});
loginBtn.addEventListener('click',(event)=>{
    event.preventDefault()
    login()
})

