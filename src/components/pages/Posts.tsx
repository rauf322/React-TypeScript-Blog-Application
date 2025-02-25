import { PostService } from "../../API/PostService";
import { useFetching } from "../../hooks/useFetching";
import useObserver from "../../hooks/useObserver";
import { usePosts } from "../../hooks/usePosts";
import { Post } from "../../Interfaces";
import Form from "../Form";
import PostFilter from "../PostFilter";
import PostList from "../PostList";
import MyButton from "../UI/button/MyButton";
import Loader from "../UI/loader/Loader";
import MyModal from "../UI/myModal/MyModal";
import Pagination from "../UI/Pagination/Pagination";
import MySelect from "../UI/select/MySelect";
import { getPagesCount } from "../utils/pages";
import { useEffect, useRef, useState } from "react";


function Posts() {
  const [posts, setPost] = useState<Post[]>([]);
  const [visible, setVisible] = useState(true);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0); 

  const [fetchPosts, isLoading, postError] = useFetching( async() => {
    const response = await PostService.getAll(limit,page);
    setTotalCount(response.headers['x-total-count']);
    setPost([...posts , ...response.data]);
  })


  const pages_button = getPagesCount(limit, totalCount);
  const lastElement = useRef<HTMLDivElement>(null)

  useObserver(lastElement, page < limit, isLoading, () => {
    setPage(page + 1);
  })
  

  useEffect(() => {
    fetchPosts();
  }, [page,limit]);


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

  console.log(page)
  return (
    <div className="App">
      <MyButton onClick={() => setVisible(true)}>Add Post</MyButton>
      <MyModal visible={visible} setVisible={setVisible}>
        <Form create={addPost} posts={posts}/>
      </MyModal>
      <h1>Testing React</h1>
      <PostFilter 
          posts={posts}
          setFilter={setFilter}
          filter={filter}
      />
     <MySelect
        DefaultValue='Amount of Pages' 
        options={["2","10","15"]}
        onChange={(e: string) => setLimit(Number(e))}
      />

      {postError && 
        <h1>Error: ${postError}</h1>
      }
      {isLoading &&
        <div style={{display:"flex", justifyContent:"center", marginTop:"30px"}}><Loader/></div>
      }
      <PostList posts={filteredAndSortedPosts} remove={remove}/>
      <div ref={lastElement}/>
      <Pagination 
      page = {page} 
      pages_button = {pages_button} 
      setPage = {setPage}
      />

    </div>
  );
}

export default Posts;
