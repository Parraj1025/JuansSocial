const signUpBtn = document.getElementById('signUpBtn');
const logInBtn = document.getElementById('logInBtn');
logInBtn.addEventListener('click', () =>{document.location.replace('/login')});
signUpBtn.addEventListener('click', () => {document.location.replace('/signup')});
