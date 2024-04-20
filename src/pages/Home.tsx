import { usePost } from "../providers/context-hooks";

export default function Home() {
  const { allPosts } = usePost();

  return (
    <>
      <h1>All Posts</h1>
      <ul>
        {allPosts.map((post, index) => (
          <li key={post + index.toString()}>
            <h4>
              Title (id: {post.id}): {post.title}
            </h4>
            <div>Content: {post.content}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
