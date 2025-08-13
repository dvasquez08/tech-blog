import { Link } from "react-router-dom";
import Logo from "../assets/logo-1.png";

// ----- This is a reusable component that displays a summary of a blog post and links to the full article. -----

// Receives a 'post' object as a prop.
function BlogPostCard({ post }) {
  // Helper function to format the post's creation date.
  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    return new Date(timestamp.seconds * 1000).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    // Link component from React Router DOM to navigate to the specific post page.
    <Link to={`/post/${post.id}`} className="block group">
      <div className="bg-slate-700/70 rounded-lg shadow-lg overflow-hidden h-full transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_0_20px_#FFFFFF]">
        <img
          className="w-full h-56 object-cover"
          src={post.imageUrl || Logo}
          alt={post.title}
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-200 mb-2 truncate group-hover:text-blue-600 transition-colors duration-300">
            {post.title}
          </h2>
          <p className="text-gray-200 text-sm">
            Published on {formatDate(post.createdAt)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default BlogPostCard;
