import { useState, useEffect } from "react";
import { createPosts } from "./api";

function App() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({ title: "", content: "" });
  const { title, content } = post;


  return (
    <div className="h-screen w-full flex justify-center">
      <div className="max-w-xl">
        <button onClick={createPost}>Create Post</button>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            value={title}
            className="bg-red-50"
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
          <input
            type="text"
            value={content}
            className="bg-red-50"
            onChange={(e) => setPost({ ...post, content: e.target.value })}
          />
        </div>

        <h1 className="font-bold my-8">Posts</h1>
        {posts.map((post) => (
          <div key={post.id} className="bg-red-50 p-3">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
