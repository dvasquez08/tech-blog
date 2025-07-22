import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <Link
          to="/"
          className="text-3xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300"
        >
          Tech Things HQ
        </Link>
      </div>
    </header>
  );
}

export default Nav;
