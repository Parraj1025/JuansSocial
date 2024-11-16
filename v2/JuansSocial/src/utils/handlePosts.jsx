const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : "http://localhost:3000";

async function newPost(postBody){
    console.log(postBody)
    try{
        const postUrl = `${baseURL}/api/post`
        const newPost = await fetch(`${postUrl}`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({postBody})
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