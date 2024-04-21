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
  authorId: z.number(),
});
export type Post = z.infer<typeof postSchema>;

export type TPostContext = {
  allPosts: Post[];
  refetchAllPosts: () => void;
};

export type TUserContext = {
  allUsers: User[];
  refetchAllUsers: () => void;
};

type NavUrls = {
  domain: string;
  home: string;
  login: string;
  userHome: string;
};

export type TNavContext = {
  navigate: NavigateFunction;
  navUrls: NavUrls;
};

export type TAuthContext = {
  loginEmail: string;
  setLoginEmail: (email: string) => void;
  loginPassword: string;
  setLoginPassword: (password: string) => void;
  login: () => void;
  activeUser: User | null;
  logout: () => void;
};
