import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../page/HomePage";
import { Register } from "../page/Register";
import { Login } from "../page/Login";
import { ProtectecRouter } from "./ProtectecRouter";

export const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/home",
    element: (
      <ProtectecRouter>
        <HomePage></HomePage>
      </ProtectecRouter>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectecRouter>
        <HomePage></HomePage>
      </ProtectecRouter>
    ),
  },
  {
    path: "/*",
    element: <HomePage></HomePage>,
  },
]);
