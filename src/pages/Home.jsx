import { useState, useEffect } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import BlogPostCard from "../components/BlogPostCard";
import Hero from "../components/Hero";

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

  return (
    <>
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
