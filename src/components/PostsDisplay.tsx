import { useUser } from "../providers/context-hooks";
import { Post } from "../types";

export default function PostsDisplay({ displayArr }: { displayArr: Post[] }) {
  const { allUsers } = useUser();

  const findAuthor = (authorId: number) =>
    allUsers.find((user) => user.id === authorId);

  return (
    <ul className="list-group-flushed list-unstyled d-flex flex-column align-items-center">
      {displayArr.map((post, index) => (
        <li
          className="list-group-item p-3 w-75"
          key={post + index.toString()}
          style={{ minWidth: "350px" }}
        >
          <div className="card rounded-4 w-100">
            <h4 className="card-header bg-primary rounded-top-4">
              {post.title}
            </h4>
            <div className="card-body">
              <div className="card-title">
                <strong>{findAuthor(post.authorId)?.name}</strong>
              </div>
              <div className="card-text">{post.content}</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
