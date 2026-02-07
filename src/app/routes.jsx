import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "../pages/home/Home";
import Buy from "../pages/buy/Buy";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/buy", element: <Buy /> },
    ],
  },
]);
