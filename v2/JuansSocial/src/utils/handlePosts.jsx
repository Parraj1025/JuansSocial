const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : "http://localhost:3000";




async function getUserData(username){
    const userUrl =`${baseURL}/api/user/${username}`
    const userData = await fetch(`${userUrl}`, {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    })
    if (userData){
        return userData
    }
}

async function newPost(postBody){
    console.log(postBody)
    try{
        const getuserID = await getUserData(postBody.username)
        const userID = await getuserID.json()
        const postUrl = `${baseURL}/api/post`
        const newPost = await fetch(`${postUrl}`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                post: postBody.post,
                userId: userID
            })
        })

        if(newPost){
            console.log(newPost)
        }
    }
    catch(err){
        console.log(err)
    }
}

export default newPost