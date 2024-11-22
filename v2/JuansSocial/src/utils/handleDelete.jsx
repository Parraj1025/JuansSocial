
const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : "http://localhost:3000";

async function handleDelete(postId) {
try{
    console.log(`${postId}`)
    const deletePost = await fetch(`${baseURL}/api/post/${postId}`, {
        method:'DELETE'
    })

    if(deletePost.ok){
        console.log('Post Deleted')

        const scrollPosition = window.scrollY;
        localStorage.setItem('scrollPosition', scrollPosition)

        history.go(0)

    } else {
        console.log('Error Deleting Post')
    }
}
catch(err){
console.log(err)
}
}


export default handleDelete