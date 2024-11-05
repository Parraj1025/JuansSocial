const logoutBtn = document.getElementById('logoutBtn');


async function logout() {
    try {
        const response = await fetch('/api/users/logout', {
            method: 'POST'
        })
        if (response.ok) {
            alert('youve been logged out')
            document.location.reload()
        }
        else {
            alert('youre not loggedin')
            document.location.replace('/login')
        }

    }
    catch(err){
        
    }}

logoutBtn.addEventListener('click', (event) => {
    event.preventDefault()
    logout()
})