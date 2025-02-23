
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

    setFilter: (filter: {sort: string, query: string}) => void;
    filter: {sort: string, query: string};
}

export type MySelect = {
    DefaultValue: string;
    options: string[];
    onChange: (e: string) => void;
}

export type MyModalWindow = {
    children: React.ReactNode;
    visible: boolean;
    setVisible: (visible: boolean) => void;
}

export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;