import { User } from "../types";
import { fetchURL } from "../utils";

export const authCalls = {
  login: (
    email: string,
    password: string
  ): Promise<{ user: Omit<User, "passwordHash"> }> =>
    fetch(fetchURL + "auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Invalid credentials");
      }
      return response.json();
    }),

  signUp: (userInfo: {
    name: string;
    email: string;
    password: string;
  }): Promise<Omit<User, "passwordHash">> =>
    fetch(fetchURL + "auth/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    }).then(async (response) => {
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }
      return response.json();
    }),
};
