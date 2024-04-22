import { ReactNode, useEffect, useState } from "react";
import { AuthContext, useNav } from "./context-hooks";
import { User } from "../types";
import { authCalls } from "../api/auth";
import toast from "react-hot-toast";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [activeUser, setActiveUser] = useState<Omit<
    User,
    "passwordHash"
  > | null>(null);
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const [newUserFirstName, setNewUserFirstName] = useState<string>("");
  const [newUserLastName, setNewUserLastName] = useState<string>("");
  const [newUserEmail, setNewUserEmail] = useState<string>("");
  const [newUserPassword, setNewUserPassword] = useState<string>("");
  const [newUserVerifyPassword, setNewUserVerifyPassword] =
    useState<string>("");

  const { navigate, navUrls } = useNav();

  const login = () => {
    authCalls
      .login(loginEmail.toLowerCase(), loginPassword)
      .then((result) => {
        setLoginEmail("");
        setLoginPassword("");
        toast.success(`Welcome ${result.user.name}!`, {
          id: "welcome-user",
        });
        setActiveUser(result.user);
        navigate(navUrls.userHome);
        sessionStorage.setItem("activeUser", JSON.stringify(result.user));
      })
      .catch((err) =>
        toast.error(err.message, {
          id: "invalid-credentials",
        })
      );
  };

  const logout = () => {
    setActiveUser(null);
    sessionStorage.removeItem("activeUser");
    navigate(navUrls.login);
  };

  const signUp = (): Promise<Omit<User, "passwordHash"> | void> =>
    authCalls
      .signUp({
        name: newUserFirstName + " " + newUserLastName,
        email: newUserEmail,
        password: newUserPassword,
      })
      .then((result) => result)
      .catch((err) => {
        console.error(err.message);
        toast.error("Error creating account", {
          id: "invalid-user-details",
        });
      });

  const handleValidSignUpSubmit = () => {
    signUp().then(() => {
      toast.success("Account created!", {
        id: "account-created",
      });
      navigate(navUrls.login);
      setNewUserFirstName("");
      setNewUserLastName("");
      setNewUserEmail("");
      setNewUserPassword("");
      setNewUserVerifyPassword("");
    });
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
        setActiveUser,
        logout,
        newUserFirstName,
        setNewUserFirstName,
        newUserLastName,
        setNewUserLastName,
        newUserEmail,
        setNewUserEmail,
        newUserPassword,
        setNewUserPassword,
        newUserVerifyPassword,
        setNewUserVerifyPassword,
        handleValidSignUpSubmit,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
