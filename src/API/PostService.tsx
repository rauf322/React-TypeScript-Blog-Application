import axios from "axios";

export const PostService = {
    // Fetch posts with pagination (not used in PostPage, but kept for completeness)
    getAll: async (limit: number, page: number) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return response; // Return just the data
    },

    // Fetch a single post by ID
    getById: async (id:string) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
        return response; // Return just the post object
    },

    getByComments: async (id:string) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id + '/comments');
        return response; // Return just the post object
    }
};