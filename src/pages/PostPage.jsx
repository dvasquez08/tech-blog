import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Showdown from "showdown";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import Logo from "../assets/logo-2.png";

// ----- This component displays the full content of a single blog post, identified by its ID -----

function PostPage() {
  const { postID } = useParams(); // Get the postID from the parameters.
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const converter = new Showdown.Converter(); // Initialize Showdown converter to parse Markdown to HTML.

  // useEffect hook to fetch a single post based on the postID from the URL.
  useEffect(() => {
    const fetchPost = async () => {
      if (!postID) return;
      setLoading(true);

      // Create a reference to a specific document in the 'posts' collection.
      const docRef = doc(db, "posts", postID);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPost({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("No such document!");
        setPost(null); // Set post to null if not found.
      }
      setLoading(false);
    };

    fetchPost();
  }, [postID]); // Reruns the effect if postID changes.

  // Helper function to format the Firestore timestamp.
  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    return new Date(timestamp.seconds * 1000).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <p className="text-center text-lg mt-8 text-gray-400">Loading post...</p>
    );
  }

  if (!post) {
    return (
      <p className="text-center text-lg mt-8 text-gray-400">Post not found.</p>
    );
  }

  // Convert Markdown content to HTML.
  const contentHtml = converter.makeHtml(post.content);

  return (
    <>
      <article className="bg-gray-600 rounded-lg shadow-xl max-w-4xl mx-auto overflow-hidden">
        <img
          className="w-full h-96 object-cover"
          src={post.imageUrl || Logo}
          alt={post.title}
        />
        <div className="p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-sans font-medium text-gray-200 mb-4">
            {post.title}
          </h1>
          <p className="text-gray-300 text-md mb-8">
            Published on {formatDate(post.createdAt)}
          </p>
          <div className="my-8"></div>

          {/* Render the HTML content from Markdown. dangerouslySetInnerHTML is used to render HTML string. */}
          <div
            className="prose prose-lg max-w-none text-gray-200"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </article>
    </>
  );
}

export default PostPage;
