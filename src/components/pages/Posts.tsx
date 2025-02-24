import { PostService } from "../../API/PostService";
import { useFetching } from "../../hooks/useFetching";
import { usePosts } from "../../hooks/usePosts";
import { Post } from "../../Interfaces";
import Form from "../Form";
import PostFilter from "../PostFilter";
import PostList from "../PostList";
import Button from "../UI/button/Button";
import Loader from "../UI/loader/Loader";
import MyModal from "../UI/myModal/MyModal";
import Pagination from "../UI/Pagination/Pagination";
import { getPagesCount } from "../utils/pages";
import { useEffect, useState } from "react";

function Posts() {
  const [posts, setPost] = useState<Post[]>([]);
  const [visible, setVisible] = useState(true);
  const limit = 10;
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0); 

  const [fetchPosts, isLoading, postError] = useFetching( async() => {
    const response = await PostService.getAll(limit,page);
    setTotalCount(response.headers['x-total-count']);
    setPost(response.data);
  })


  const pages_button = getPagesCount(limit, totalCount);




  useEffect(() => {
    fetchPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);


  const addPost = (post: Post) => {
    setPost([...posts, post]);
    setVisible(false);
  }


  const [filter, setFilter] = useState({sort: "", query: ""});

  const remove = (id: number) => {
    const updatedPosts = posts
        .filter((post) => post.id !== id) 
        .map((post, index) => ({ ...post, id: index + 1 })); 
    setPost(updatedPosts);
  };
  const filteredAndSortedPosts = usePosts(posts, filter);


  return (
    <div className="App">
      <Button onClick={() => setVisible(true)}>Add Post</Button>
      <MyModal visible={visible} setVisible={setVisible}>
        <Form create={addPost} posts={posts}/>
      </MyModal>
      <h1>Testing React</h1>
      <PostFilter 
          posts={posts}
          setFilter={setFilter}
          filter={filter}
      />
      {postError && 
        <h1>Error: ${postError}</h1>
      }
      {isLoading 
      ? <div style={{display:"flex", justifyContent:"center", marginTop:"30px"}}><Loader/></div>
      : <PostList posts={filteredAndSortedPosts} remove={remove}/>
      }
      <Pagination 
      page = {page} 
      pages_button = {pages_button} 
      setPage = {setPage}
      />

    </div>
  );
}

export default Posts;
