import "./styles/App.css";
import { useEffect, useState } from "react";
import { Post } from "./Interfaces";
import Form from "./components/Form";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/myModal/MyModal";
import MyButton from "./components/UI/button/Button";
import { usePosts } from "./hooks/usePosts";
import { PostService } from "./API/PostService";
import Loader from "./components/UI/loader/Loader";
import { useFetching } from "./hooks/useFetching";

function App() {
  const [posts, setPost] = useState<Post[]>([]);

  const [fetchPosts, isLoading, postError] = useFetching( async() => {
    const posts = await PostService();
    setPost(posts);
  })

  const [filter, setFilter] = useState({sort: "", query: ""});
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);



  const addPost = (post: Post) => {
    setPost([...posts, post]);
    setVisible(false);
  }

  const remove = (id: number) => {
    const updatedPosts = posts
        .filter((post) => post.id !== id) 
        .map((post, index) => ({ ...post, id: index + 1 })); 
    setPost(updatedPosts);
  };


  const filteredAndSortedPosts = usePosts(posts, filter);


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
      {postError && 
        <h1>Error: ${postError}</h1>
      }

      {isLoading 
      ? <div style={{display:"flex", justifyContent:"center", marginTop:"30px"}}><Loader/></div>
      : <PostList posts={filteredAndSortedPosts} remove={remove}/>
      }
    </div>
  );
}

export default App;
