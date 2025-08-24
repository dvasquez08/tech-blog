import { useState, useEffect } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import BlogPostCard from "../components/BlogPostCard";
import Hero from "../components/Hero";
import { Helmet } from "react-helmet-async";

// ----- This component serves as the main landing page, fetching and displaying a list of all blog posts. -----

function Home() {
  // State for storing the list of posts and loading status.
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect hook to fetch posts from Firestore when the component mounts.
  useEffect(() => {
    // Create a query to get posts, ordered by creation date in descending order.
    const fetchPosts = async () => {
      const postCollection = collection(db, "posts");
      const q = query(postCollection, orderBy("createdAt", "desc"));
      const postSnapshot = await getDocs(q);

      // Map the documents to an array of post objects.
      const postList = postSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postList);
      setLoading(false);
    };
    fetchPosts();
  }, []); // The empty dependency array ensures this runs only once.

  // Display a loading message while fetching data.
  if (loading) {
    return (
      <p className="text-center text-lg text-gray-500">Loading posts...</p>
    );
  }

  // Structured data for homepage as a Blog
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    headline: "Tech Blog",
    description:
      "Stay sharp with our latest posts on AI, automation, and technology trends.",
    url: "https://techthingshq.com/",
    publisher: {
      "@type": "Davtek",
      name: "David Vasquez",
    },
  };

  return (
    <>
      <Helmet>
        <title>Tech Blog | Latest Posts</title>
        <meta
          name="description"
          content="Stay sharp with our latest posts on AI, automation, and technology trends."
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tech Blog | Latest Posts" />
        <meta
          property="og:description"
          content="Read the latest articles on AI, automation, and technology trends."
        />
        <meta
          property="og:image"
          content="https://techthingshq.com/og-default.jpg"
        />
        <meta property="og:url" content="https://techthingshq.com/" />
        <meta property="og:site_name" content="Tech Blog" />

        {/* Twitter/X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tech Blog | Latest Posts" />
        <meta
          name="twitter:description"
          content="Fresh insights on AI, automation, and modern tech."
        />
        <meta
          name="twitter:image"
          content="https://techthingshq.com/og-default.jpg"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://techthingshq.com/" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Hero />
      <div className="container mx-auto text-center flex flex-col items-center justify-center mt-36">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium mb-6 text-gray-300">
          Blog:
        </h1>
        <p className="text-xl text-white max-w-3xl mx-auto mb-36">
          Stay sharp with our latest posts on tech, tools, and trends.
        </p>
      </div>

      {/* Grid container to display the blog post cards. */}
      {/* Maps over the posts to render a BlogPostCard for each one. */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default Home;
