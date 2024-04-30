import { postCalls } from "./api/posts";
import { userCalls } from "./api/users";
import { Post, User } from "./types";

// gcp-main-firebase serve URL
// export const fetchURL =
//   "http://127.0.0.1:5001/mini-social-media-1e822/us-central1/app/";

// Main local URL
export const fetchURL = "http://localhost:3000/";

// Production local URL
// export const fetchURL = "http://localhost:3001/";

export const getAllUsers = (setState: (value: User[]) => void) =>
  userCalls.getUsers().then((result) => setState(result));

export const getAllPosts = (setState: (value: Post[]) => void) =>
  postCalls.getPosts().then((result) => setState(result));

export const reseedData = () => {
  console.log("Seeding database...");
  return fetch(fetchURL + "reseed-data")
    .then((response) => {
      console.log("🌱 Seeding complete 🌱");
      response.json();
    })
    .catch((err) => console.error(err));
};
