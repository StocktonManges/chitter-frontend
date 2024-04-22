import { NavigateFunction } from "react-router-dom";
import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  email: z.string(),
  name: z.string(),
  passwordHash: z.string(),
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
  refetchAllPosts: () => Promise<void>;
  newPostTitle: string;
  setNewPostTitle: (title: string) => void;
  newPostContent: string;
  setNewPostContent: (content: string) => void;
  publishPost: () => Promise<string | Post> | null;
};

export type TUserContext = {
  allUsers: User[];
  refetchAllUsers: () => Promise<void>;
};

type NavUrls = {
  domain: string;
  home: string;
  login: string;
  userHome: string;
  signUp: string;
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
  activeUser: Omit<User, "passwordHash"> | null;
  setActiveUser: (value: Omit<User, "passwordHash"> | null) => void;
  logout: () => void;
  newUserFirstName: string;
  setNewUserFirstName: (name: string) => void;
  newUserLastName: string;
  setNewUserLastName: (name: string) => void;
  newUserEmail: string;
  setNewUserEmail: (email: string) => void;
  newUserPassword: string;
  setNewUserPassword: (password: string) => void;
  newUserVerifyPassword: string;
  setNewUserVerifyPassword: (password: string) => void;
  handleValidSignUpSubmit: () => void;
};
