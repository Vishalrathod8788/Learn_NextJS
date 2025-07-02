"use client";

import { use } from "react";

const SingleProfilePost = (props) => {
    const post = use(props.params);

    return <h1>User Name : {post.username} <br></br> Post ID : {post.postId}</h1>
    
}
export default SingleProfilePost;