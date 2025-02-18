import PostItem from "./PostItem";
import { PostListProps } from "../Interfaces";


export default function PostList ({posts, remove}: PostListProps) {
    return (
        <>
            {posts.map((post) => (
                <PostItem remove={remove} key={post.id} post={post} />
            ))}
        </>
    )
}