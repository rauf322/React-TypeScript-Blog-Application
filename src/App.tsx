import "./styles/App.css";
import { useMemo, useState } from "react";
import { Post } from "./Interfaces";
import Form from "./components/Form";
import PostList from "./components/PostList";
import MySelect from "./components/UI/MySelect/MySelect";
import  MyInput  from "./components/UI/Input/MyInput";

function App() {
  const [posts, setPost] = useState([
    { id: 1, title: "JAVASCRIPT", description: "Description" },
    { id: 2, title: "REACT", description: "Description" },
  ]);

  const addPost = (post: Post) => {
    setPost([...posts, post]);
  }

  const [searchQuery, setSearchQuery] = useState("");

  const searchPosts = useMemo(() => {
    return posts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, posts]);


  const remove = (id: number) => {
    setPost(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="App">
      <h1>Testing React</h1>
      <Form create={addPost} posts={posts}/>
      <MyInput value={searchQuery} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)} placeholder={"Search"}/>
      <MySelect 
      posts={posts} 
      DefaultValue={"Sort By"}
      options={posts.length > 0 ? Object.keys(posts[0]) : []}
      setPost={setPost}
      />
      {searchPosts.length === 0 
      ? <h1 className="noPost">No posts</h1> 
      : <PostList posts={searchPosts || []} remove={remove}/>
      }

    </div>
  );
}

export default App;
