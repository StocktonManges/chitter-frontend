import { User } from "../types";
import { fetchURL } from "../utils";

export const authCalls = {
  login: (email: string, password: string): Promise<{ user: User }> =>
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
};
