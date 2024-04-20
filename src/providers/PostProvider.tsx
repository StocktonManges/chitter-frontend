import { ReactNode, useEffect, useState } from "react";
import { Post } from "../types";
import { getAllPosts } from "../utils";
import { PostContext } from "./context-hooks";

export default function PostProvider({ children }: { children: ReactNode }) {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [deletePostId, setDeletePostId] = useState<number>(0);
  const [authorId, setAuthorId] = useState<number>(0);
  const [postTitle, setPostTitle] = useState<string>("");
  const [postContent, setPostContent] = useState<string>("");

  useEffect(() => {
    getAllPosts(setAllPosts);
  }, []);

  return (
    <PostContext.Provider
      value={{
        allPosts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
