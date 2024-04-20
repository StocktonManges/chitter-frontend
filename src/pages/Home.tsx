import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { usePost } from "../providers/context-hooks";

export default function Home() {
  const [searchInput, setSearchInput] = useState<string>("");
  const { allPosts } = usePost();

  const displayArr = allPosts.filter(
    (post) =>
      post.content.toLowerCase().includes(searchInput.toLowerCase()) ||
      post.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <section className="container">
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <h1>All Posts</h1>
      <ul>
        {displayArr.map((post, index) => (
          <li key={post + index.toString()}>
            <h4>
              Title (id: {post.id}): {post.title}
            </h4>
            <div>Content: {post.content}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
