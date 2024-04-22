import { z } from "zod";
import { Post, postSchema } from "../types";
import { fetchURL } from "../utils";

export const postCalls = {
  getPosts: () =>
    fetch(fetchURL + "posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts.");
        }
        return response.json();
      })
      .then((result) => z.array(postSchema).parse(result)),

  deletePost: (id: number) => {
    fetch(fetchURL + "posts/" + id.toString(), {
      method: "DELETE",
    })
      .then((result) => console.log(result.json()))
      .catch((err) => console.error(err));
  },

  createPost: (
    authorId: number,
    title: string,
    content: string
  ): Promise<Post> =>
    fetch(fetchURL + "posts/" + authorId, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        authorId,
        title,
        content,
      }),
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Invalid post details");
        }
        return response.json();
      })
      .then((result) => postSchema.parse(result)),
};
