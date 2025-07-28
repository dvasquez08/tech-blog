import { useState, useEffect } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import BlogPostCard from "../components/BlogPostCard";
import Hero from "../components/Hero";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const postCollection = collection(db, "posts");
      const q = query(postCollection, orderBy("createdAt", "desc"));
      const postSnapshot = await getDocs(q);
      const postList = postSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postList);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <p className="text-center text-lg">Loading posts...</p>;
  }

  return (
    <>
      <Hero />
      <div className="container mx-auto text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-light mb-6 text-green-500">
          Blog:
        </h1>
        <p className="text-xl text-white max-w-3xl mx-auto mb-12">
          Checkout our daily blog posts:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default Home;
