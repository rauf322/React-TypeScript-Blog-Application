
export type Post = {
    id: number;
    title: string;
    description: string;
}

export type CreatePost = {
    posts: Post[];
    create: (posts: Post) => void;
}

export type PostListProps = {
    posts: Post [];
    remove: (id: number) => void;
}

export type SinglePost = {
    post: Post;
    remove: (id: number) => void;
}

export type SortingList = { 
    posts: Post[];
    DefaultValue: string;
    options: string[];
    setPost: (posts: Post[]) => void;
}

export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;