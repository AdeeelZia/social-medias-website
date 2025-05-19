import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LOGO } from "../svg/Logo";
import { Button } from "../components/common/common";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { element: "Why Social Medias", path: "/" },
    { element: "What we do", path: "/services" },
    { element: "Pricing", path: "/pricing" },
    { element: "Faqs", path: "/faqs" },
    { element: "Login", path: "/login" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="sm-container">
      <nav className="flex justify-between items-center h-11">
        <Link>
          <LOGO className="w-40" />
        </Link>
        <Button onClick={toggleMenu} customStyleButton="!px-0 lg:hidden">
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000000"
                d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                fill="#000000"
                fillRule="evenodd"
                d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
              />
            </svg>
          )}
        </Button>

        <div className="hidden lg:flex lg:items-center lg:gap-7">
          {menuItems.map((items, index) => (
            <Link to={items.path} key={index.id}>
              <p
                className={`text-sm font-light uppercase tracking-[0.2em] text-[#C4C4C4] ${
                  location.pathname === items.path
                    ? "bg-gradient-to-r from-[#8933BA] to-[#D82370] text-transparent bg-clip-text"
                    : "text-[#C4C4C4] hover:bg-gradient-to-r hover:from-[#8933BA] hover:to-[#D82370] hover:text-transparent hover:bg-clip-text"
                }`}
              >
                {items.element}
              </p>
            </Link>
          ))}
          <Button
            text="Get Started"
            gradient={true}
            customStyleButton="hidden lg:flex hover:opacity-85 hover:scale-95"
          />
        </div>
      </nav>
      {isMenuOpen && (
        <div className="absolute scale- right-8 w-1/2 p-4 shadow-2xl bg-white">
          {menuItems.map((items, index) => (
            <Link to={items.path} key={index.id}>
              <p
                className={`text-sm font-medium my-2 text-[#C4C4C4] ${
                  location.pathname === items.path
                    ? "bg-gradient-to-r from-[#8933BA] to-[#D82370] text-transparent bg-clip-text"
                    : "text-[#C4C4C4] hover:bg-gradient-to-r hover:from-[#8933BA] hover:to-[#D82370] hover:text-transparent hover:bg-clip-text"
                }`}
              >
                {items.element}
              </p>
            </Link>
          ))}
          <Button
            text="Get Started"
            gradient={true}
            customStyleButton="hover:opacity-85 hover:scale-95"
          />
        </div>
      )}
    </header>
  );
}
