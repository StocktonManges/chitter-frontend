import { ReactNode, useEffect, useState } from "react";
import { Post } from "../types";
import { getAllPosts } from "../utils";
import { PostContext, useAuth } from "./context-hooks";
import { postCalls } from "../api/posts";
import toast from "react-hot-toast";

export default function PostProvider({ children }: { children: ReactNode }) {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [newPostTitle, setNewPostTitle] = useState<string>("");
  const [newPostContent, setNewPostContent] = useState<string>("");
  const { activeUser } = useAuth();

  const refetchAllPosts = () => getAllPosts(setAllPosts);

  const publishPost = () =>
    activeUser &&
    postCalls
      .createPost(activeUser.id, newPostTitle, newPostContent)
      .then((newPost) => {
        refetchAllPosts();
        return newPost;
      })
      .catch((err) => {
        return toast.error(err.message, {
          id: "publish-error",
        });
      });

  useEffect(() => {
    refetchAllPosts();
  }, []);

  return (
    <PostContext.Provider
      value={{
        allPosts,
        refetchAllPosts,
        newPostTitle,
        setNewPostTitle,
        newPostContent,
        setNewPostContent,
        publishPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
