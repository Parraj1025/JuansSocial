const newPostBtn = document.getElementById('newPostBtn')

async function sendPost() {
    const postBody = await document.getElementById('postBody')
    const postBodyTxt = await postBody.value

    if(postBodyTxt){
    const newPost = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            body: postBodyTxt
        }),
        headers: { "Content-Type": 'application/json' }
    })
    if (newPost.ok) {
        window.location.reload()
        console.log('hi')
    }
    }
}




newPostBtn.addEventListener('click', (event) => {
    event.preventDefault()
    sendPost()
})