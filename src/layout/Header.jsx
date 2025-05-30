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
      style={{ backgroundColor: isAuthPage ? "#fff8fe" : "white" }}
    >
      <nav className="flex justify-between items-center">
        <Link>
          <LOGO customClass="w-44 sm:w-48" />
        </Link>
        <Button onClick={toggleMenu} customClass="!px-0 lg:hidden">
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

        <div className="hidden lg:flex lg:items-center lg:gap-5 xl:gap-7">
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
            customClass={`!py-3 !font-xs !font-bold uppercase tracking-[0.2em] !text-white cursor-pointer`}
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
                    : "text-[#C4C4C4] hover:bg-gradient-to-r hover:from-[#8933BA] hover:to-[#D82370] hover:text-transparent hover:bg-clip-text"
                }`}
              >
                {item.element}
              </p>
            </Link>
          ))}
          <Button
            text="Get Started"
            gradient={true}
            customClass={`!py-3 !font-xs !font-bold uppercase tracking-[0.2em] !text-white cursor-pointer`}
          />
        </div>
      )}
    </header>
  );
}
