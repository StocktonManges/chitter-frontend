import { NavigateFunction } from "react-router-dom";
import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  email: z.string(),
  name: z.string(),
});
export type User = z.infer<typeof userSchema>;

export const postSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
});
export type Post = z.infer<typeof postSchema>;

export type TPostContext = {
  allPosts: Post[];
};

type NavUrls = {
  home: string;
  login: string;
};

export type TNavProvider = {
  navigate: NavigateFunction;
  navUrls: NavUrls;
};

export type TUserContext = {
  allUsers: User[];
};
