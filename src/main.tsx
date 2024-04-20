import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import { Toaster } from "react-hot-toast";
import PostProvider from "./providers/PostProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import { NavProvider } from "./providers/NavProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavProvider>
        <PostProvider>
          <Toaster />
          <App />
        </PostProvider>
      </NavProvider>
    </BrowserRouter>
  </React.StrictMode>
);
