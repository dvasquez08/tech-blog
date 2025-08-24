import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Showdown from "showdown";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import Logo from "../assets/logo-1.png";
import { Helmet } from "react-helmet-async";

// ----- This component displays the full content of a single blog post, identified by its ID -----

function PostPage() {
  const { postID } = useParams(); // Get the postID from the parameters.
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const converter = new Showdown.Converter(); // Markdown → HTML converter

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
        setPost(null);
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

  // Convert Markdown content to HTML
  const contentHtml = converter.makeHtml(post.content);

  // Short description for SEO
  const description =
    post.content?.replace(/[#_*>\-\n]/g, "").slice(0, 160) ||
    "Read the latest post on Tech Blog.";

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: description,
    image: post.imageUrl || Logo,
    datePublished: post.createdAt?.seconds
      ? new Date(post.createdAt.seconds * 1000).toISOString()
      : new Date().toISOString(),
    author: {
      "@type": "Person",
      name: "David Vasquez",
    },
    publisher: {
      "@type": "Organization",
      name: "Davtek",
      logo: {
        "@type": "ImageObject",
        url: Logo,
      },
    },
  };

  return (
    <>
      <Helmet>
        {/* SEO basics */}
        <title>{post.title} | Tech Blog</title>
        <meta name="description" content={description} />

        {/* Open Graph (Facebook, LinkedIn, X fallback) */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={post.imageUrl || Logo} />
        <meta
          property="og:url"
          content={`https://techthingshq.com/post/${post.id}`}
        />
        <meta property="og:site_name" content="Tech Blog" />

        {/* Twitter/X — still supported */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={post.imageUrl || Logo} />

        {/* Optional: tell crawlers the canonical URL */}
        <link
          rel="canonical"
          href={`https://techthingshq.com/post/${post.id}`}
        />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

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
