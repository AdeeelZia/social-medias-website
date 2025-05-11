import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO } from "../svg/Logo";
import { Button } from "../components/common/common";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { element: "WHY SOCIAL MEDIAS", path: "/" },
    { element: "What we do", path: "/" },
    { element: "PRICING", path: "/" },
    { element: "FAQs", path: "/" },
    { element: "Login", path: "/" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="sm-container">
      <nav className="flex justify-between items-center">
        {/* Logo (with width control) */}
        <div className="w-50">
          <LOGO />
        </div>

        {/* Toggle Button (Hamburger / Close Icon) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            // Close Icon (X)
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.path} className="pl-14">
              <p>{item.element}</p>
            </Link>
          ))}
          <Button text="GET STARTED" gradient={true} />
        </div>

        {/* Full-Screen Mobile Menu */}
        <div
          className={`absolute top-16 p-5 transition-all duration-300 ease-in-out transform ${
            isMenuOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          } lg:hidden`}
        >
          <div className="mt-20">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
              >
                <p className="text-sm font-semibold leading-10">
                  {item.element}
                </p>
              </Link>
            ))}
            <Button
              text="GET STARTED"
              gradient={true}
              customStyleButton="mt-6"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
