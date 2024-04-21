import { createContext, useContext } from "react";
import {
  TPostContext,
  TNavContext,
  TUserContext,
  TAuthContext,
} from "../types";

export const PostContext = createContext<TPostContext>({} as TPostContext);
export const usePost = () => useContext(PostContext);

export const NavContext = createContext<TNavContext>({} as TNavContext);
export const useNav = () => useContext(NavContext);

export const UserContext = createContext<TUserContext>({} as TUserContext);
export const useUser = () => useContext(UserContext);

export const AuthContext = createContext<TAuthContext>({} as TAuthContext);
export const useAuth = () => useContext(AuthContext);
