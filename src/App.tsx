import { useEffect, useState } from "react";
import "./App.css";
import { Post, User } from "./types";
import { userCalls } from "./api/users";
import { postCalls } from "./api/posts";
import { authCalls } from "./api/auth";
import toast from "react-hot-toast";
import { getAllPosts, getAllUsers, reseedData } from "./utils";
import Home from "./pages/Home";

function App() {
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const [newUserName, setNewUserName] = useState<string>("");
  const [newUserEmail, setNewUserEmail] = useState<string>("");
  const [newUserPassword, setNewUserPassword] = useState<string>("");
  const [deleteUserEmail, setDeleteUserEmail] = useState<string>("");

  const fetchAllData = () => {
    getAllUsers(setAllUsers);
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <>
      <header>
        <button
          type="button"
          onClick={async () => {
            await reseedData();
            console.log("Fetching updated data...");
            await fetchAllData();
            console.log("Data fetched! ✅");
          }}
        >
          Reseed Data
        </button>
      </header>

      <Home />

      <br />
      <br />
      <br />
      <br />

      <div>
        <h1>All Users</h1>
        <ul>
          {allUsers.map((user, index) => (
            <li key={user + index.toString()}>
              <div>Name: {user.name}</div>
              <div>Email: {user.email}</div>
              <br />
            </li>
          ))}
        </ul>

        <h3>Login User</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            authCalls
              .login(loginEmail.toLowerCase(), loginPassword)
              .then(() => {
                setLoginEmail("");
                setLoginPassword("");
                toast.success("You're logged in!");
              })
              .catch((err) => toast.error(err.message));
          }}
        >
          <div>
            <label htmlFor="login-email">Email:</label>
            <input
              id="login-email"
              type="email"
              value={loginEmail}
              onChange={(e) => {
                setLoginEmail(e.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="login-password">Password:</label>
            <input
              id="login-password"
              type="text"
              value={loginPassword}
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
            />
          </div>

          <button type="submit">Login</button>
        </form>

        <h3>Create User</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            userCalls
              .createUser(newUserEmail, newUserName, newUserPassword)
              .then(() => {
                getAllUsers(setAllUsers);
                toast.success("User created!");
                setNewUserEmail("");
                setNewUserName("");
                setNewUserPassword("");
              })
              .catch((err) => toast.error(err.message));
          }}
        >
          <div>
            <label htmlFor="new-user-email">New User Email:</label>
            <input
              id="new-user-email"
              type="email"
              value={newUserEmail}
              onChange={(e) => {
                setNewUserEmail(e.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="new-user-name">New User Name:</label>
            <input
              id="new-user-name"
              type="text"
              value={newUserName}
              onChange={(e) => {
                setNewUserName(e.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="new-user-password">New User Password:</label>
            <input
              id="new-user-password"
              type="text"
              value={newUserPassword}
              onChange={(e) => {
                setNewUserPassword(e.target.value);
              }}
            />
          </div>

          <button type="submit">Create User</button>
        </form>

        <h3>Delete User</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            userCalls.deleteUser(deleteUserEmail).then((user) => {
              fetchAllData();
              setDeleteUserEmail("");
              toast.success(`${user.email} deleted`);
            });
          }}
        >
          <label htmlFor="user-email">User Email:</label>
          <input
            id="user-email"
            type="email"
            value={deleteUserEmail}
            onChange={(e) => {
              setDeleteUserEmail(e.target.value);
            }}
          />

          <button type="submit">Delete User</button>
        </form>

        {/* <form
          onSubmit={(e) => {
            e.preventDefault();
            postCalls.deletePost(deletePostId);
          }}
        >
          <label htmlFor="post-id">Post Id:</label>
          <input
            id="post-id"
            type="number"
            value={deletePostId}
            onChange={(e) => {
              setDeletePostId(+e.target.value);
            }}
          />
          <button type="submit">Delete Post</button>
        </form>

        <br />
        <br />

        <h3>Create Post</h3>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            postCalls.createPost(authorId, postTitle, postContent);
          }}
        >
          <div>
            <label htmlFor="author-id">Author Id:</label>
            <input
              id="author-id"
              type="number"
              value={authorId}
              onChange={(e) => {
                setAuthorId(+e.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="post-title">Title:</label>
            <input
              id="post-title"
              type="text"
              value={postTitle}
              onChange={(e) => {
                setPostTitle(e.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="post-content">Content:</label>
            <textarea
              id="post-content"
              value={postContent}
              onChange={(e) => {
                setPostContent(e.target.value);
              }}
            />
          </div>

          <button type="submit">Create Post</button>
        </form> */}
      </div>
    </>
  );
}

export default App;
