import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostService } from "../../API/PostService";
import { useFetching } from "../../hooks/useFetching";
import Loader from "../UI/loader/Loader";
import { Comment, Post } from "../../Interfaces";

const PostPage = () => {
    const params = useParams<{ id: string }>(); // Type params explicitly
    const [post, setPost] = useState<Post>({} as Post); // Type post with default empty object
    const [comments, setComments] = useState<Comment[]>([]); // Type comments as array
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        if (!params.id) return;
        const response = await PostService.getById(params.id);
        setPost(response.data); // Type inference handles response.data as Post
    });
    const [fetchCommentsById, isCommentsLoading, commentsError] = useFetching(async () => {
        if (!params.id) return;
        const response = await PostService.getByComments(params.id);
        setComments(response.data); // Type inference handles response.data as Comment[]
    });

    useEffect(() => {
        fetchPostById();
        fetchCommentsById();
    }, []);

    return (
        <div>
            <h1>You opened post page {params.id}</h1>
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
                        <div key={comment.id} style={{ marginTop: 30 }}>
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