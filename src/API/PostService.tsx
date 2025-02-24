import axios from "axios";
import { Post } from "../Interfaces";

export const PostService = async (): Promise<Post[]> => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data
};