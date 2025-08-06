import { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo-1.png";
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const searchContainerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const postCollection = collection(db, "posts");
      const q = query(postCollection, orderBy("createdAt", "desc"));
      const postSnapshot = await getDocs(q);
      const postList = postSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAllPosts(postList);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredPosts([]);
      return;
    }
    const filtered = allPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchTerm, allPosts]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchContainerRef]);

  const handleResultClick = (postId) => {
    setSearchTerm("");
    setIsSearchFocused(false);
    setIsMenuOpen(false);
    navigate(`/post/${postId}`);
  };

  return (
    <nav
      className={`border-gray-200 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-800/80 backdrop-blur-md shadow-lg"
          : "bg-gray-800 shadow"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={Logo} className="h-8" alt="Tech Things HQ Logo" />
          <span className="self-center text-2xl md:text-3xl font-sans font-medium whitespace-nowrap text-gray-300">
            Tech Things HQ
          </span>
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-menu"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`w-5 h-5 ${isMenuOpen ? "hidden" : "block"}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
          <svg
            className={`w-5 h-5 ${isMenuOpen ? "block" : "hidden"}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>

        <div
          className={`w-full md:block md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-menu"
        >
          <div className="flex flex-col items-center p-4 md:p-0 mt-4 font-medium border border-gray-700 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <ul className="flex flex-col p-4 md:p-0 mt-4 md:mt-0 space-y-8 md:flex-row md:space-y-0 md:space-x-8">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 hover:text-blue-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 hover:text-blue-600"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 hover:text-blue-600"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div
              className="relative w-full md:w-64 mt-4 md:mt-0"
              ref={searchContainerRef}
            >
              <input
                type="text"
                placeholder="Search posts..."
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
              />
              {isSearchFocused && searchTerm && (
                <div className="absolute mt-2 w-full bg-slate-800 rounded-lg shadow-xl overflow-hidden max-h-80 overflow-y-auto">
                  {filteredPosts.length > 0 ? (
                    <ul>
                      {filteredPosts.map((post) => (
                        <li
                          key={post.id}
                          className="px-4 py-3 text-gray-300 hover:bg-slate-700 cursor-pointer transition-colors"
                          onClick={() => handleResultClick(post.id)}
                        >
                          {post.title}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="px-4 py-3 text-gray-400">
                      No results found.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
