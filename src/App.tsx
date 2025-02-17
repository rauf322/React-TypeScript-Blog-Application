import "./styles/App.css";
import { useState } from "react";
import Form from "./components/Form";
import PostList from "./components/PostList";
import MySelect from "./components/UI/MySelect/MySelect";

function App() {
  const [posts, setPost] = useState([
    { id: 1, title: "JAVASCRIPT", description: "Description" },
    { id: 2, title: "REACT", description: "Description" },
  ]);

  const addPost = (post: { id:number; title: string; description: string }) => {
    setPost([...posts, post]);
  }


  const remove = (id: number) => {
    setPost(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="App">
      <h1>Testing React</h1>
      <Form create={addPost} posts={posts}/>
      <MySelect 
      posts={posts} 
      DefaultValue={"Sort By"}
      options={Object.keys(posts[0])}
      setPost={setPost}
      />
      {posts.length === 0 
      ? <h1 className="noPost">No posts</h1> 
      : <PostList posts={posts} remove={remove}/>
      }

    </div>
  );
}

export default App;
