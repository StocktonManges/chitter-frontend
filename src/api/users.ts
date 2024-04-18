import { z } from "zod";
import { userSchema } from "../types";
import { fetchURL } from "../utils";

export const userCalls = {
  getUsers: () =>
    fetch(fetchURL + "users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users.");
        }
        return response.json();
      })
      .then((result) => z.array(userSchema).parse(result)),

  deleteUser: (email: string) =>
    fetch(fetchURL + "users/" + email, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete user.");
        }
        return response.json();
      })
      .then((result) => userSchema.parse(result)),

  createUser: (email: string, name: string, password: string) =>
    fetch(fetchURL + "users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        name,
        password,
      }),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Invalid user information");
      }
      return response.json();
    }),
};
