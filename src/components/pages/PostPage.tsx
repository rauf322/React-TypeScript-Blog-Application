import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostService } from "../../API/PostService";
import { useFetching } from "../../hooks/useFetching";
import Loader from "../UI/Loader/Loader";
import { Comment, Post } from "../../Interfaces";

const PostPage = () => {
    const params = useParams<{ id: string }>(); 
    const [post, setPost] = useState<Post>({} as Post); 
    const [comments, setComments] = useState<Comment[]>([]); 
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        if (!params.id) return;
        const response = await PostService.getById(params.id);
        setPost(response.data); 
    });
    const [fetchCommentsById, isCommentsLoading, commentsError] = useFetching(async () => {
        if (!params.id) return;
        const response = await PostService.getByComments(params.id);
        setComments(response.data); 
    });

    useEffect(() => {
        fetchPostById();
        fetchCommentsById();
    }, []);

    return (
        <div style={{ marginTop: 30 , marginLeft: 30}}>
            <h1 >You opened post page {params.id}</h1>
            {error && <h1>Error: {error}</h1>}
            {isLoading ? (
                <Loader />
            ) : (
                <div>{post.id} {post.title}</div>
            )}
            <h1 style={{ marginTop: 30 }}>Comments</h1>
            {commentsError && <h1>Error: {commentsError}</h1>}
            {isCommentsLoading ? (
            <Loader />
            ) : (
                <div>
                    {comments.map(comment => (
                        <div key={comment.id}>
                            <h5>{comment.id}</h5>
                            <h5>{comment.name}</h5>
                            <h5>{comment.email}</h5>
                            <h5>{comment.body}</h5>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PostPage;