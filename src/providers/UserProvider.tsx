import { ReactNode, useEffect, useState } from "react";
import { UserContext } from "./context-hooks";
import { User } from "../types";
import { getAllUsers } from "../utils";

export default function UserProvider({ children }: { children: ReactNode }) {
  const [allUsers, setAllUsers] = useState<User[]>([]);

  const refetchAllUsers = () => {
    getAllUsers(setAllUsers);
  };

  useEffect(() => {
    refetchAllUsers();
  }, []);

  return (
    <UserContext.Provider value={{ allUsers, refetchAllUsers }}>
      {children}
    </UserContext.Provider>
  );
}
