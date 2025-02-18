import Button from "./UI/Button/Button";
import { SinglePost } from "../Interfaces";


export default function PostItem({ post, remove }: SinglePost) {
    return<>
    <div className="post">
        <div className="post_content">
            <strong>{post.id}. {post.title}</strong>
            <div>
                {post.description}
            </div>
        </div>
        <div>
            <Button onClick={() => remove(post.id)}>Delete</Button>
        </div>
    </div>
    </>

}