import PostItem from "./PostItem";
import { PostListProps } from "../Interfaces";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function PostList({ posts, remove }: PostListProps) {
    return (
        <div>
            <TransitionGroup>
                {posts.map((post) => (
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={remove} post={post} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
}