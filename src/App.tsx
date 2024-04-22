import { useState } from "react";
import { User } from "./types";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { useAuth, useNav } from "./providers/context-hooks";
import GeneralHeader from "./components/GeneralHeader";
import LoginForm from "./components/LoginForm";
import UserHome from "./components/UserHome";
import UserHeader from "./components/UserHeader";
import "./css/styles.css";
import SignUpForm from "./components/SignUpForm";

function App() {
  const [allUsers, setAllUsers] = useState<User[]>([]);

  const { navUrls } = useNav();
  const { activeUser } = useAuth();

  return (
    <>
      <Routes>
        <Route
          path={navUrls.home}
          element={activeUser ? <UserHeader /> : <GeneralHeader />}
        >
          <Route index element={<Home />} />
          <Route path={navUrls.login} element={<LoginForm />} />
          <Route path={navUrls.signUp} element={<SignUpForm />} />
          <Route path={navUrls.userHome} element={<UserHome />} />
        </Route>
      </Routes>

      {/* <div>
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

        <form
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
        </form>
      </div> */}
    </>
  );
}

export default App;
