const signUpBtn = document.getElementById('signUpBtn')
signUpBtn.addEventListener('click',(event) =>{
    event.preventDefault()
    window.location.replace('/signup')
})