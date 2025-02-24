import PostItem from "./PostItem";
import { PostListProps } from "../Interfaces";

export default function PostList({ posts, remove }: PostListProps) {
    return (
        <div>
            {posts.map((post) => (
                <PostItem
                    key={post.id} // Still need a unique key for React's reconciliation
                    post={post}
                    remove={remove}
                />
            ))}
        </div>
    );
}