import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-t from-gray-700 to-gray-800 text-gray-400 py-8 mt-16">
      <div className="container mx-auto px-6 text-center">
        <div>
          <Link to="/about" className="hover:text-white transition-colors pr-4">
            About
          </Link>
          <Link to="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link
            to="/contact"
            className="hover:text-white transition-colors pl-4"
          >
            Contact
          </Link>
        </div>
        <p>&copy; {currentYear} Tech Things HQ. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
