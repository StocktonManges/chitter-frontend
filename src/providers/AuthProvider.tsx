import { ReactNode, useEffect, useState } from "react";
import { AuthContext, useNav } from "./context-hooks";
import { User } from "../types";
import { authCalls } from "../api/auth";
import toast from "react-hot-toast";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [activeUser, setActiveUser] = useState<User | null>(null);
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");

  const { navigate, navUrls } = useNav();

  const login = () => {
    authCalls
      .login(loginEmail.toLowerCase(), loginPassword)
      .then((result) => {
        setLoginEmail("");
        setLoginPassword("");
        toast.success(`Welcome ${result.user.name}!`);
        setActiveUser(result.user);
        navigate(navUrls.userHome);
        sessionStorage.setItem("activeUser", JSON.stringify(result.user));
      })
      .catch((err) => toast.error(err.message));
  };

  const logout = () => {
    setActiveUser(null);
    sessionStorage.removeItem("activeUser");
    navigate(navUrls.login);
  };

  useEffect(() => {
    const userLoggedIn = sessionStorage.getItem("activeUser");
    if (userLoggedIn) {
      setActiveUser(JSON.parse(userLoggedIn));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loginEmail,
        setLoginEmail,
        loginPassword,
        setLoginPassword,
        login,
        activeUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
