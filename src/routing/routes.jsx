import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "../layout/Header";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Pricing from "../pages/Pricing";
import Faqs from "../pages/Faqs";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import AddSocialAccount from "../pages/auth/AddSocialAccount";
import Index from "../pages/dashboard/Index";
import CreatePost from "../pages/dashboard/CreatePost";
import Footer from "../layout/Footer";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/services", element: <Services /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/faqs", element: <Faqs /> },
  { path: "/auth/signin", element: <SignIn /> },
  { path: "/auth/signup", element: <SignUp /> },
  { path: "/auth/socialaccount", element: <AddSocialAccount /> },
  { path: "/dashboard/index", element: <Index /> },
  { path: "/dashboard/createpost", element: <CreatePost /> },
];

const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <Header />}
      {children}
      {!isDashboard && <Footer />}
    </>
  );
};

export default function Navigation() {
  return (
    <BrowserRouter>
      <LayoutWrapper>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </LayoutWrapper>
    </BrowserRouter>
  );
}
