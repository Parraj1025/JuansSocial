async function handlePostRefresh(postId) {
    try{
    window.location.reload()
}
catch(err){
    console.log(err)
}
}

export default handlePostRefresh