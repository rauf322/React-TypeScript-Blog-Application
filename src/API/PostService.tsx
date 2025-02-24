import axios from "axios";

export const PostService = async (limit:number, page:number) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    params: {
      _limit: limit,
      _page: page
    }
  });
  return response
};