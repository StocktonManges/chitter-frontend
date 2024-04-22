import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { NavContext } from "./context-hooks";

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const navUrls = {
    domain: "http://localhost:5173/",
    home: "/",
    login: "/login",
    userHome: "/user/home",
    signUp: "/sign-up",
  };

  return (
    <NavContext.Provider
      value={{
        navigate,
        navUrls,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};
