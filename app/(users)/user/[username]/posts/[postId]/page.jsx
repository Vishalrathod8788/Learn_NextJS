const SingleProfilePost = async (props) => {
    const post = await props.params;

    return <h1>Post ID = {post.postId}</h1>
    
}
export default SingleProfilePost;