import { ReactNode, useEffect, useState } from "react";
import { UserContext } from "./context-hooks";
import { User } from "../types";
import { getAllUsers } from "../utils";

export default function UserProvider({ children }: { children: ReactNode }) {
  const [allUsers, setAllUsers] = useState<User[]>([]);

  useEffect(() => {
    getAllUsers(setAllUsers);
  }, []);

  return (
    <UserContext.Provider value={{ allUsers }}>{children}</UserContext.Provider>
  );
}
