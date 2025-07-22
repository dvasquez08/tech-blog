import React from "react";
import { Link } from "react-router-dom";

function BlogPostCard({ post }) {
  // A helper function to format the Firestore Timestamp
  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    return new Date(timestamp.seconds * 1000).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Link to={`/post/${post.id}`} className="block group">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full transform transition duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
        <img
          className="w-full h-56 object-cover"
          src={post.imageUrl || "https://via.placeholder.com/400x300"}
          alt={post.title}
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 truncate group-hover:text-blue-600 transition-colors duration-300">
            {post.title}
          </h2>
          <p className="text-gray-600 text-sm">
            Published on {formatDate(post.createdAt)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default BlogPostCard;
