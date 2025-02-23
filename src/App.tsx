import "./styles/App.css";
import { useMemo, useState } from "react";
import { Post } from "./Interfaces";
import Form from "./components/Form";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/myModal/MyModal";
import MyButton from "./components/UI/button/Button";

function App() {
  const [posts, setPost] = useState([
    { id: 1, title: "JAVASCRIPT", description: "Description" },
    { id: 2, title: "REACT", description: "Description" },
  ]);



  const [filter, setFilter] = useState({sort: "", query: ""});
  const [visible, setVisible] = useState(true);

  const addPost = (post: Post) => {
    setPost([...posts, post]);
    setVisible(false);
  }

  const filteredAndSortedPosts = useMemo(() => {
    const filtered = posts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
  
    switch (filter.sort) {
      case "title":
        return filtered.sort((a, b) => a.title.localeCompare(b.title));
      case "description":
        return filtered.sort((a, b) => a.description.localeCompare(b.description));
      case "id":
        return filtered.sort((a, b) => a.id - b.id);
      default:
        return filtered;
    }
  }, [filter, posts]);
  


  const remove = (id: number) => {
    const updatedPosts = posts
        .filter((post) => post.id !== id) 
        .map((post, index) => ({ ...post, id: index + 1 })); 
    setPost(updatedPosts);
};

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
      {filteredAndSortedPosts.length === 0 
      ? <h1 className="noPost">No posts</h1> 
      : <PostList posts={filteredAndSortedPosts} remove={remove}/>
      }
    </div>
  );
}

export default App;
