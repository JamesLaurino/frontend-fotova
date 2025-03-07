import React, {FunctionComponent, useEffect, useState} from 'react';
import Post from "../model/Post";
import PostService from "../service/PostService";

const PostList:FunctionComponent = ()  => {

    const [post, setPost] = useState<Post[]>([]);

    useEffect(() => {
        PostService.getPosts().then(posts => setPost(posts));
    }, [])

    return (
        <>
            { post.map((post) => {
                return <div>
                    <p key={post.id}>Id : {post.id}</p>
                    <p key={post.id}>userId : {post.userId}</p>
                    <p key={post.id}>body : {post.body}</p>
                    <p key={post.id}>title : {post.title}</p>
                </div>
            })}
        </>
    )
}
export default PostList;