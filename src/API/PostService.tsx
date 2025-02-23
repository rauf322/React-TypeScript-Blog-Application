import axios from "axios";
import { Post } from "../Interfaces";

export function PostService(setPost: React.Dispatch<React.SetStateAction<Post[]>>) {
    (async () => {
        try {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPost(data);
        } catch (e) {
            console.log(e);
    }
    })();
}