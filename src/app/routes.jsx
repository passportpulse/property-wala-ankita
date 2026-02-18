import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import Buy from "../pages/buy/Buy";
import Sell from "../pages/sell/Sell";
import Rent from "../pages/rent/Rent";
import ContactPage from "../pages/contact/Contact";
import JoinUs from "../pages/joinus/JoinUs";
import Login from "../pages/login/Login";
import Register from "../pages/signup/Register";
import ScrollToTop from "../components/ScrollToTop"; 

export const router = createBrowserRouter([
  {
    element: (
        <>
          <ScrollToTop /> 
          <MainLayout />
        </>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/buy", element: <Buy /> },
      { path: "/sell", element: <Sell /> },
      { path: "/rent", element: <Rent /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/join-us", element: <JoinUs /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);