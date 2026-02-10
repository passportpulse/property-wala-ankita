import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "../pages/home/Home";
import Buy from "../pages/buy/Buy";
import Sell from "../pages/sell/Sell";
import Rent from "../pages/rent/Rent";
import ContactPage from "../pages/contact/Contact";
import JoinUs from "../pages/joinus/JoinUs";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/buy", element: <Buy /> },
      { path: "/sell", element: <Sell /> },
      { path: "/rent", element: <Rent /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/property-wala-bhaiya", element: <JoinUs /> },
    ],
  },
]);
