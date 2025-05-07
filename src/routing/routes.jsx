import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../layout/Header";
import { Home, Services, Pricing, Faqs } from "../pages/pages";
import Footer from "../layout/Footer";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/services", element: <Services /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/faqs", element: <Faqs /> },
];

export default function Navigation() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
