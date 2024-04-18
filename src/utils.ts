import { postCalls } from "./api/posts";
import { userCalls } from "./api/users";
import { Post, User } from "./types";

export const fetchURL = "http://localhost:3000/";
// export const fetchURL = "https://fluted-quasar-419913.uw.r.appspot.com/";

export const getAllUsers = (setState: (value: User[]) => void) =>
  userCalls.getUsers().then((result) => setState(result));

export const getAllPosts = (setState: (value: Post[]) => void) =>
  postCalls.getPosts().then((result) => setState(result));

export const reseedData = () => {
  console.log("Seeding database...");
  return fetch(fetchURL + "reseed-data")
    .then((response) => {
      console.log("🌱 Database seeded 🌱");
      response.json();
    })
    .catch((err) => console.error(err));
};
