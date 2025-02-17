import Button from "./UI/Button/Button";

interface PostProps extends React.HTMLAttributes<HTMLDivElement> {
    post: { id: number; title: string; description: string };
    remove: (id: number) => void;
  }

export default function PostItem({ post, remove }: PostProps) {
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