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

      {/* Introductory paragraph, stating what the website is all about */}
      <div className="container mx-auto mt-12 mb-24 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-200">
          Welcome to Tech Things HQ
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Tech Things HQ is your hub for the latest insights on technology,
          automation, and artificial intelligence. This site was created to make
          sense of the fast-changing tech landscape and provide practical
          knowledge that anyone can apply, whether you’re a developer,
          entrepreneur, or simply curious about the future of digital tools.
        </p>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-6">
          Here, you’ll find articles covering breakthroughs in AI, hands-on tips
          for software development, and guides to tools that make life and work
          more efficient. Every post is built on research and experimentation,
          with the goal of helping readers stay informed and ahead of the curve.
        </p>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-6">
          Thanks for visiting, dive into our latest posts below and join the
          journey as we explore the technologies shaping tomorrow.
        </p>
      </div>

      {/* The Blog title before all the blog posts are listed */}
      <div className="container mx-auto text-center flex flex-col items-center justify-center mt-36">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-200">
          Latest Articles:
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-36">
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

      {/* Footer text that talks about Tech Things HQ */}
      <div className="text-lg md:text-xl text-gray-300 leading-relaxed text-center mt-36">
        <p>
          Tech Things HQ is dedicated to sharing insights on AI, automation, and
          modern technology. Follow along as we explore tools, trends, and
          breakthroughs shaping the digital world.
        </p>
      </div>
    </>
  );
}

export default Home;
