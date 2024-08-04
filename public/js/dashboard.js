const dashBtn = document.getElementById('dashboardBtn');
dashBtn.addEventListener('click',(event)=> {
    event.preventDefault()
    document.location.replace(`/dashboard`)
})