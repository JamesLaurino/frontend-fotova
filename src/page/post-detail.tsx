import React, {FunctionComponent, useEffect, useState} from 'react';
import Post from "../model/Post";
import PostService from "../service/PostService";
import {RouteComponentProps} from "react-router-dom";

type Params = { id: string };

const PostDetail:FunctionComponent<RouteComponentProps<Params>> = ({match})  => {

    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        PostService.getPostByid(+match.params.id).then(post => setPost(post));
    }, [match.params.id])

    return (
        <>
            { post && (
                <div>
                    <p>User id : {post.userId}</p>
                    <p>id : {post.id}</p>
                    <p>Title : {post.title}</p>
                    <p>Body : {post.body}</p>
                </div>
            )}
        </>
    )
}
export default PostDetail;