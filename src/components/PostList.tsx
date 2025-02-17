import PostItem from "./PostItem";

interface PostListProps { 
    posts: { id: number; title: string; description: string }[]; 
    remove: (id: number) => void;
}


export default function PostList ({posts, remove}: PostListProps) {
    return (
        <>
            {posts.map((post) => (
                <PostItem remove={remove} key={post.id} post={post} />
            ))}
        </>
    )
}