import "./styles/App.css";
import { useMemo, useState } from "react";
import { Post } from "./Interfaces";
import Form from "./components/Form";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/myModal/myModal";

function App() {
  const [posts, setPost] = useState([
    { id: 1, title: "JAVASCRIPT", description: "Description" },
    { id: 2, title: "REACT", description: "Description" },
  ]);

  const addPost = (post: Post) => {
    setPost([...posts, post]);
  }

  const [filter, setFilter] = useState({sort: "", query: ""});

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
    setPost(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="App">
      <MyModal>
        
      </MyModal>
      <h1>Testing React</h1>
      <Form create={addPost} posts={posts}/>
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
