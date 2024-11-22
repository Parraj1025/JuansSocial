import handlePostRefresh from "./handlePostRefresh";
const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : "http://localhost:3000";


async function handleLikes (postInfo) {
    const userId = postInfo.userId
    const postId = postInfo.postId
    console.log(userId)
    try {
        const upvoteUrl = `${baseURL}/api/post/${postId}/upvote`
        const upvotes = await fetch(`${upvoteUrl}`, {
            method: 'POST',
            headers:{
                'Content-type': "application/json"
            },
            body: JSON.stringify({userId: userId})
        })
        if(upvotes.ok){
            localStorage.setItem('postId', postId)
            await handlePostRefresh(postId)
        }else {
        }
    }
    catch(err){
    console.log(err)
    }
}

export default handleLikes