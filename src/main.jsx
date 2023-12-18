import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { AuthProvider } from "./context/AuthContext";
import { router } from "./routers/router";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  </AuthProvider>
);
