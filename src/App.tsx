import PostItem from "./components/PostItem";
import "./styles/App.css";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [posts, setPost] = useState([
    { id: 1, title: "JAVASCRIPT", description: "Description" },
    { id: 2, title: "REACT", description: "Description" },
  ]);


  const addPost = (post: { id:number; title: string; description: string }) => {
    setPost([...posts, post]);
  }


  const deletePost = (id: number) => {
    setPost(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="App">
      <h1>Testing React</h1>
      <Form create={addPost} posts={posts}/>
      {posts.map((post) => (
        <PostItem deletePost={deletePost} key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;
