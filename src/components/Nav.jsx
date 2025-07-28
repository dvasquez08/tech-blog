import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`border-gray-200 sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-800/50 backdrop-blur-md shadow-md"
            : "bg-gray-800 shadow"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <Link
            to="/"
            className="text-3xl font-mono font-bold text-green-500 hover:text-white transition-colors duration-300"
          >
            Tech Things HQ
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
