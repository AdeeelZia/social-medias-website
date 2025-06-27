import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LOGO } from "../svg/Logo";
import { Button } from "../components/common/common";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isAuthPage = location.pathname.startsWith("/auth");

  const menuItems = [
    { element: "Why Social Medias", path: "/" },
    { element: "What we do", path: "/services" },
    { element: "Pricing", path: "/pricing" },
    { element: "Faqs", path: "/faqs" },
    { element: "Login", path: "/auth/signin" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className="sm-container"
      style={{ backgroundColor: isAuthPage ? "#fff8fe" : "#fffff" }}
    >
      <nav className="flex justify-between items-center">
        <Link to={"/"}>
          <LOGO customClass="w-40 h-12 lg:w-auto lg:h-auto" />
        </Link>

        <Button onClick={toggleMenu} customClass="!px-0 lg:hidden">
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 50 50"
            >
              <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 30 30"
            >
              <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
            </svg>
          )}
        </Button>

        <div className="hidden lg:flex lg:items-center lg:gap-5 xl:gap-7">
          {menuItems.map((items, index) => (
            <Link to={items.path} key={index.id}>
              <p
                className={`text-sm uppercase tracking-[0.2em] ${
                  location.pathname === items.path
                    ? "font-semibold bg-gradient-to-r from-[#8933BA] to-[#D82370] text-transparent bg-clip-text"
                    : "text-[#C4C4C4] font-medium"
                }`}
              >
                {items.element}
              </p>
            </Link>
          ))}
          <Button
            text="Get Started"
            customClass={`!py-3.5 !font-xs !font-bold uppercase tracking-[0.2em] !text-white cursor-pointer`}
            gradient={true}
          />
        </div>
      </nav>
      {isMenuOpen && (
        <div className="absolute left-0 w-full p-4 shadow-2xl bg-white z-50">
          {menuItems.map((item, index) => (
            <Link to={item.path} key={item.id || index}>
              <p
                className={`block w-full text-sm font-medium my-2 px-2 py-1 rounded transition-all duration-200 ${
                  location.pathname === item.path
                    ? "bg-gradient-to-r from-[#8933BA] to-[#D82370] text-transparent bg-clip-text"
                    : "text-[#C4C4C4] font-medium"
                }`}
              >
                {item.element}
              </p>
            </Link>
          ))}
          <Button
            text="Get Started"
            customClass={`!py-3 !font-xs !font-bold uppercase tracking-[0.2em] !text-white cursor-pointer`}
            gradient={true}
          />
        </div>
      )}
    </header>
  );
}
