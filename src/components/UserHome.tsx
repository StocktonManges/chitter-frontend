import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { useAuth, usePost, useUser } from "../providers/context-hooks";
import PostsDisplay from "./PostsDisplay";

export default function UserHome() {
  const [searchInput, setSearchInput] = useState<string>("");
  const { allPosts } = usePost();
  const { activeUser } = useAuth();
  const { allUsers } = useUser();

  const matchingUserIds = allUsers
    .filter((user) =>
      user.name.toLowerCase().includes(searchInput.toLowerCase())
    )
    .map((user) => user.id);

  const userPosts = allPosts.filter((post) => post.authorId === activeUser?.id);
  const displayArr = userPosts.filter(
    (post) =>
      post.content.toLowerCase().includes(searchInput.toLowerCase()) ||
      post.title.toLowerCase().includes(searchInput.toLowerCase()) ||
      matchingUserIds.includes(post.authorId)
  );

  return (
    <section className="container-fluid d-flex flex-column align-items-center">
      <div className="d-flex flex-column align-items-center py-4">
        <h1>My Posts</h1>
        <SearchBar setSearchInput={setSearchInput} />
      </div>
      <PostsDisplay displayArr={displayArr} />
    </section>
  );
}
