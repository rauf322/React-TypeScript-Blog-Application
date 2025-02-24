import Button from "./UI/button/Button";
import { SinglePost } from "../Interfaces";
import { useNavigate } from "react-router-dom";

export default function PostItem({ post, remove }: SinglePost) {
    const navigate = useNavigate()

    return (
        <div className="post">
            <div className="post_content">
                <strong>{post.id}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post_btns">
                <div>
                    <Button onClick={() => remove(post.id)}>Delete</Button>
                </div>
                <div>
                    <Button onClick={() => navigate(`/posts/${post.id}`)}>Open</Button>
                </div>
            </div>
        </div>
    );
}