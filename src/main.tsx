import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Toaster } from "react-hot-toast";
import PostProvider from "./providers/PostProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import { NavProvider } from "./providers/NavProvider.tsx";
import AuthProvider from "./providers/AuthProvider.tsx";
import UserProvider from "./providers/UserProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavProvider>
        <AuthProvider>
          <UserProvider>
            <PostProvider>
              <Toaster />
              <App />
            </PostProvider>
          </UserProvider>
        </AuthProvider>
      </NavProvider>
    </BrowserRouter>
  </React.StrictMode>
);
