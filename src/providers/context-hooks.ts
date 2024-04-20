import { createContext, useContext } from "react";
import { TPostContext, TNavProvider, TUserContext } from "../types";

export const PostContext = createContext<TPostContext>({} as TPostContext);
export const usePost = () => useContext(PostContext);

export const NavContext = createContext<TNavProvider>({} as TNavProvider);
export const UseNav = () => useContext(NavContext);

export const UserContext = createContext<TUserContext>({} as TUserContext);
export const useUser = () => useContext(UserContext);
