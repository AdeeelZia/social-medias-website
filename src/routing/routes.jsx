import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "../layout/Header";
import {
  Home,
  Services,
  Pricing,
  Faqs,
  SignIn,
  SignUp,
  AddSocialAccount,
  Index,
} from "../pages/pages";
import Footer from "../layout/Footer";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/services", element: <Services /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/faqs", element: <Faqs /> },
  { path: "/auth/signin", element: <SignIn /> },
  { path: "/auth/signup", element: <SignUp /> },
  { path: "/auth/socialaccount", element: <AddSocialAccount /> },
  { path: "/dashboard", element: <Index /> },
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
