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
    { element: "faqs", path: "/" },
    { element: "Login", path: "/" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="SMC">
      <nav className="flex justify-between items-center">
        <LOGO />

        <Button
          onClick={toggleMenu}
          customStyleButton="lg:hidden"
          aria-label="Toggle menu"
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <path d="M16 5H0V4h16v1zm0 8H0v-1h16v1zm0-4.008H0V8h16v.992z" />
          </svg>
        </Button>

        <div className="hidden lg:flex">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.path} className="pl-14">
              <p>{item.element}</p>
            </Link>
          ))}
          <Button text="GET STARTED" gradient={true} />
        </div>

        {isMenuOpen && (
          <div className="absolute top-0 left-0 right-0 bg-white lg:hidden">
            {menuItems.map((item, index) => (
              <Link key={index} to={item.path} className="pl-14 py-2">
                <p>{item.element}</p>
              </Link>
            ))}
            <Button text="GET STARTED" gradient={true} />
          </div>
        )}
      </nav>
    </header>
  );
}
