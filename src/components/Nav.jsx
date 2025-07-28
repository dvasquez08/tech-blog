import { useState, useEffect } from "react";
import Logo from "../assets/logo-1.png";
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
        <div className="container mx-auto px-6 py-4 flex flex-wrap">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-8" />
          </a>
          <Link
            to="/"
            className="text-3xl font-sans font-medium text-gray-300 hover:text-white transition-colors duration-300"
          >
            Tech Things HQ
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
